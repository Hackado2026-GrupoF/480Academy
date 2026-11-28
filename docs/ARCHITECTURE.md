# Arquitectura del piloto

**Estado** · Diseño de bootstrap. Los módulos y el destino se validarán durante implementación. Los contratos de catálogo y autorización son independientes del framework. [PRD](PRD.md) · [Backlog](BACKLOG.md).

## Estructura y fronteras

Un proceso web con UI responsiva, servicios de dominio y BD relacional. El navegador recibe vistas o proyecciones limitadas al usuario. El servidor decide permisos en cada lectura y escritura. El navegador solicita los vídeos a los orígenes autorizados mediante HTML5. Un proveedor generativo sería una integración distinta, invocada bajo demanda desde el servidor cuando se apruebe. Stitch solo interviene, opcionalmente, como fuente de ingeniería.

| Módulo | Responsabilidad y frontera |
| --- | --- |
| Identidad y acceso | Registro, sesión, rol global y permisos por recurso. Asegurar unicidad de correo y bienvenida en la transacción de alta. Validar sesión y permisos vigentes cada vez. Usar hashes de contraseña, cookies de sesión seguras, protección de escrituras y limitación de intentos |
| Cursos y aprendizaje | Cursos, temas, vídeos y listas canónicas. Catálogo proyectado con la política de acceso. Progreso y observaciones pseudonimizadas. Orden determinista sin red. [Contrato](specs/catalogo.md) |
| Actividades | Banco y puntos de aparición, evaluaciones, foro y reputación. Validar pertenencia al curso y corregir reputación sin duplicar. Emitir certificados y servir una vista pública mínima |
| Seguimiento | Separar hechos y resultados derivados. Infiere sobre una versión activa. Recalibración manual persistente y transaccional. Alcance individual por curso y docente |
| Presentación | Rutas compartidas para alumno y docente y un panel admin. Consumir solo vistas autorizadas y usar estados del [diseño](../DESIGN.md) |

### Identidad y permisos

Modelo recomendado para los servicios. Los nombres ilustran entidades, y la primera migración concreta el esquema.

| Datos | Invariante |
| --- | --- |
| Usuario, sesión | Rol `student`, `teacher` o `admin`. Cuenta nueva `student`. Sesión revocable. Correo normalizado único |
| Curso, tema, vídeo, orden | Un padre válido por unidad. Curso plano o temático, borrador o publicado. El registro inicial lo crea el admin y la publicación exige docencia válida |
| Concesión de lectura y asignación docente | Relaciones distintas por par usuario–curso, con unicidad. Registrar fecha de concesión para catálogo. La asignación vigente solo habilita docencia para rol `teacher` o `admin`. Una concesión perdida conserva la actividad histórica |
| Avance y observación | `userId/courseId/videoId` en el dominio. Persistir instante, visto y origen de estado. Guardar señales con ID de analítica separado de identidad y clave de deduplicación |
| Evaluación e intento, certificado | Persistir inicial y finales separados. Contar intentos finales válidos en transacción, conservar mejor nota y emitir una vez por alumno–curso. El certificado tiene ID público opaco y datos mínimos de emisión |
| Hilo, respuesta y valoración | Árbol con padre en el mismo curso. Actualizar última actividad en ancestros y raíz. Registrar valoración y puntos por origen, con actualización idempotente |
| Sesión de recalibración, modelo e informe | Datos de entrada con fecha de corte, versión y estado. Activar solo después de persistir un modelo válido. Informe parametrizado por alumno y curso |

| Acción | Regla en servidor |
| --- | --- |
| Leer metadatos de tarjeta | Usuario autenticado y curso publicado, o edición autorizada en borrador |
| Leer contenidos y acceder al foro | Curso publicado con lectura, incluida bienvenida automática, o asignación docente válida. Las rutas hijas comprueban el curso real del recurso |
| Editar contenidos, publicar, valorar como docente o ver informe individual | Rol docente o admin y asignación al curso. El alumno del informe pertenece al curso. La interfaz usa la misma decisión para mostrar acciones |
| Crear registro de curso, gestionar roles, conceder lectura, asignar docentes o recalibrar | Rol administrativo. Revisar la pérdida del último admin dentro de la transacción. Revocar una asignación solo afecta a ese usuario. La lectura concedida permanece accesible tras perder edición |
| Verificar un certificado | Lookup por token opaco público, sin correo en URL, sin directorio. Mostrar una ficha con datos mínimos sintéticos. ID inválido ofrece estado de no verificación |

En una operación denegada usar una respuesta consistente que preserve la privacidad de cursos y alumnos. La autorización es efectiva aunque el cliente solicite directamente el recurso. En cambios concurrentes de roles o permisos, validar integridad en la misma transacción. Hacer seeding repetible sin borrar datos ajenos. Mantener credenciales de demo privilegiadas en configuración del operador, con nombres de referencia como `DEMO_ADMIN_PASSWORD` y `DEMO_TEACHER_PASSWORD`.

### Progreso y preguntas

Conservar `resumeSeconds` acotado a la duración conocida y actualizar de forma moderada cuando hay avance, al pausar y al salir. Añadir `seen` y origen manual/automático independientes de la última posición y de intervalos observados. **Propuesta operativa para TASK-04** · finalización automática cuando una reproducción llega a fin con el 90 % o más de la duración cubierta por intervalos observados acumulados. Un salto solo actualiza la posición. Probar reanudar, repetición, pérdida de conexión y desmarcado. Desmarcar cambia el estado mostrado y conserva observaciones. Los eventos anteriores al desmarcado no restauran el visto al repetirse. Validar el criterio con el equipo antes de cerrar las pruebas del reproductor. [Evento ended de HTML5](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended_event).

Los puntos de pregunta se enlazan a un banco y se activan al avanzar por reproducción. Para el piloto, un salto o salida de pantalla completa nativa evita acumulación de puntos anteriores. Seleccionar del banco y mantener como máximo un ID pendiente, visible u oculto. Contestar se califica en servidor, idempotente por aparición, con tope de reputación acumulado por alumno/vídeo. La preferencia de preguntas persiste y la reproducción continúa. Usar control de contenido y tarjeta separados de la fuente audiovisual. [Matriz de diseño](../DESIGN.md#reproductor-y-preguntas-de-atención).

Metadatos administrativos del vídeo incluyen `mediaUrl`, `sourceUrl`, `creator`, `titleOriginal`, `licenseUrl` y, cuando se confirme, duración, tipo y dimensiones. Servir la atribución junto al reproductor. Permitir URLs HTTPS de proveedores del anexo aprobados para el seed, sin proxy audiovisual ni solicitudes de servidor a URLs arbitrarias. La aplicación controla su ruta y el archivo externo conserva sus propias condiciones de acceso. Capturar errores de media con opción de reintento o cambio de clip revisado. [Anexo audiovisual](bitacora/480Academy-anexo-videos-demostrativos.md#5-integración-y-verificación-antes-de-desplegar).

### Foro, telemetría y modelo

- Registrar `createdAt` y `lastActivityAt` por nodo y ordenar cada conjunto de hermanos por última actividad, con ID estable. La valoración manual determina calidad según parámetros del curso. Serializar la bonificación de primera respuesta por hilo. Antes de una publicación programada, comprobar en servidor intervalo, resolución y que la intervención aún no se publicó.
- Mantener recomendación determinista separada. Generar predicciones a partir de observaciones anteriores al corte y desenlaces de entrenamiento posteriores al corte. Tratar señales ausentes como desconocidas. Una candidata reversible es una regresión regularizada para cada desenlace definido, con prueba por alumno, suficiencia y confianza pendientes de concretar con el equipo. Guardar la versión activa junto al informe. Distinguir fiabilidad de una mera disponibilidad de señales. La demo usa observaciones sintéticas reproducibles.
- Proteger informes por docente–curso y evitar exponer la telemetría granular. Datos de analítica separados de la identidad cuando proceda. Para una integración generativa, minimizar y filtrar identificadores y texto libre, y omitir el envío cuando no se pueda depurar. Mostrar a la IA como tal en el foro. Registrar una intervención programada solo cuando se observe su publicación. Etiquetar las vistas ilustrativas.
- Para diagnóstico de demo, registrar errores de servicios, acción y correlación con un ID de petición. Evitar contraseñas, texto privado y datos identificativos en los logs. Antes de abrir a alumnos reales, Grupo F debe acordar exposición de certificados, retención, tratamiento y operación, especialmente para menores.

## ADR-01 · Runtime y persistencia para el lunes

**Propuesta reversible** · Node, SvelteKit con `adapter-node` y SQLite sobre un volumen persistente, en una sola instancia. Un proceso reduce integración y usa la misma ruta en portátil y en un host previamente autorizado. El equipo fija versión soportada, dependencias, lockfile, librería de sesión y migraciones al confirmar la vía de despliegue. El catálogo puro puede comenzar desde ahora. [Adaptador Node](https://svelte.dev/docs/kit/adapter-node).

| Vía | Viabilidad y condicionantes |
| --- | --- |
| Node + disco persistente en host del equipo | Primera opción si existe un host autorizado con HTTPS, presupuesto o cuota aclarados y capacidad de backup. Verificar sesión, escritura, reinicio y reproducción. No se ha identificado ese host todavía |
| Vercel Hobby + BD relacional externa | El plan limita el uso gratuito al personal no comercial. Confirmar elegibilidad para este repo del Grupo F, permisos, integración Git y cuota total de funciones y BD. El runtime de funciones tiene disco de solo lectura y espacio temporal, insuficiente como almacenamiento SQLite durable. Solo considerar con servicio de datos autorizado y un ensayo completo. [Plan Hobby](https://vercel.com/docs/plans/hobby) · [Runtimes](https://vercel.com/docs/functions/runtimes) |
| Render Free + PostgreSQL autorizado | La instancia gratuita entra en reposo tras 15 min y su disco local es efímero. El PostgreSQL gratuito caduca a los 30 días. Evaluar arranque en frío, comportamiento de cuotas, condiciones de cuenta y consumo antes de elegir. El disco persistente integrado requiere plan de pago. [Plan gratuito](https://render.com/docs/free) · [Discos persistentes](https://render.com/docs/disks) |
| Portátil + almacenamiento local | Respaldo de ensayo y presentación. Conserva el flujo y la BD sintética. El vídeo externo sigue dependiendo de conectividad y el respaldo local no satisface la entrega remota |

Las condiciones documentales se revisaron el 28/11/2026. La cuenta, plan exacto, región, CPU, memoria, tiempo, almacenamiento persistente, conexiones de BD, cuotas de salida y respuesta al agotarlas quedan pendientes de comprobar en SPIKE-01. Minimizar gasto y validar cualquier tarjeta, cobro u opción de pago con el responsable. Probar conjuntamente build, sesión, persistencia tras reinicio, URL HTTPS y clip en la red de ensayo. Posponer comercialización y escalado. A mayor concurrencia o réplicas, reconsiderar la BD persistente y la estrategia de despliegue.

## ADR-02 · Dependencias externas

**Derivada de las decisiones del 28/11** · Alojamiento de archivos audiovisual externo y HTML5 propio. Para la demo conservar el catálogo de clips revisados y aplicar el [plan de pruebas](TEST_PLAN.md). El [contrato Stitch](MCP.md) fija copia local y uso remoto opcional. Las funciones de IA del producto son otro proveedor y otro permiso. Si un proveedor real no está autorizado o no responde, el foro humano sigue operativo y la demo describe el alcance verificado.

## Recuperación de la demo

Reservar una exportación del seed, una copia consistente de la BD sintética y el SHA ensayado. Restaurar sobre una copia de prueba antes del evento. El responsable publica desde `main` autorizado, realiza prueba crítica con otra sesión y conserva medio alternativo revisado y portátil de ensayo. Anotar incidentes de red, datos o despliegue y el resultado real en [UPDATES.md](UPDATES.md).
