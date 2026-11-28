# Verificación y ensayo del lunes

Las filas V son **pruebas planificadas de la aplicación**. El [registro de actualizaciones](UPDATES.md) distingue estas pruebas del control de documentos que el bootstrap puede ejecutar hoy. Registrar SHA, entorno, dispositivo, comando o pasos, resultado, restos pendientes y revisión humana. [PRD](PRD.md) · [Backlog](BACKLOG.md).

| Caso | Evidencia esperada | Alcance |
| --- | --- | --- |
| V-01 · Alta/seed | Registrar correo único, impedir alta duplicada, entrar a Mis cursos y abrir bienvenida textual con foro. Seed dos veces, mismas cuentas y bienvenida, sin exponer contraseñas | REQ-01/06 |
| V-02 · Roles | Conceder y revocar lectura. Dos asignaciones docentes en un curso, retirar una y mantener la otra. Cambiar rol y reevaluar permiso vigente. Comprobar también por ruta/API usando cuentas de prueba que alumno/docente no puedan escalar, que un admin sin asignación no puede editar ni ver informes y que el admin asignado sí edita bienvenida | REQ-02/08 |
| V-03 · Orden | Cinco grupos, transición de bienvenida visitada, concesión y revocación, ID único, empate, modo fijo vs adaptativo por lista. Bloqueado muestra aviso sin visita ni contenido. Docente edita orden canónico. Registrar prueba pura y comparación en UI | REQ-03 |
| V-04 · Medio | Atribución, carga, progreso, pausa/reanudar, seek, fin, marcado y desmarcado independientes del historial. Comprobar MIME, rango efectivo, códec, redirección y tiempo hasta primer fotograma en dispositivo. Comparar clip horizontal/vertical y repetir con suplente | REQ-04, RNF-08/11 |
| V-05 · Interacción | Una sola pendiente. Mostrar/ocultar/recuperar/responder/desactivar con dimensiones y nodo de vídeo estables en el mismo viewport. Tiempo avanza si estaba reproduciendo y se conserva si estaba pausado. Cambiar orientación conservando contexto. Comprobar salida de pantalla completa, teclado, tacto, controles visibles, contraste y movimiento reducido | REQ-04, RNF-09/11/12 |
| V-06 · Evaluación | Omitir inicial y dejarlo desconocido. Hacer dos intentos finales, conservar el mejor, rechazar tercero y duplicados de reintento. Probar sin requisito previo de reproducción. Diferenciar nota, avance y emisión | REQ-05/08 |
| V-07 · Certificado y perfil | Aprobado emite una vez. Copiar enlace y verificar fuera de sesión con titular sintético. Token inválido y vista sin correo. Perfil consulta intereses, progreso y reputación propia | REQ-05/07 |
| V-08 · Foro | Respuesta a respuesta eleva rama y raíz. Valoración autorizada editable e idempotente. Autores propio e IA sin puntos. Si se habilita IA, comprobar no resuelto, intervalo, deduplicación, minimización y etiquetado. Si se usa texto sintético ilustrativo, registrar como simulación | REQ-06 |
| V-09 · Modelo | Datos finitos y faltantes, corte temporal sin fuga del desenlace, inferencia versionada y cambio exitoso de versión. Fallo preserva el modelo activo. Docente asignado ve informe individual. Alumno y admin sin asignación carecen de acceso. Usar observaciones sintéticas contrastantes y verificar que las estimaciones salen del modelo | REQ-07/09 |
| V-10 · Entrega | Repetir el P0 en el destino HTTPS autorizado, con sesión nueva y dispositivo del público. Verificar que persiste una concesión tras reiniciar, URL alcanzable, roles correctos, media y alternativa local. A partir del alcance aceptado, repetir P1/P2 presentado. Registrar evidencia y SHA de release | REQ-01 a REQ-09 según alcance |

## Matriz de reproducción

Probar áreas reducidas y reflujo a 320/390 px, teclado en escritorio y un móvil real de la demo. Objetivo de comprobación en Chrome/Chromium de escritorio, Chrome Android y Safari iOS si disponibles. Registrar versión, modo inline, completo del contenedor, nativo y si el giro es manual. Las maquetas WebP no validan compatibilidad.

| Combinación | Resultado de V-05 |
| --- | --- |
| Horizontal con área horizontal | Superposición a la derecha con controles operables. Ocultar y recuperar desde el borde y por botón |
| Horizontal con área vertical | Tarjeta debajo del área del vídeo. Sin recorte |
| Vertical con área vertical | Superposición inferior encima de controles. Ocultar y recuperar desde abajo y por botón |
| Vertical con área horizontal | Tarjeta exterior lateral si cabe. Si el espacio es insuficiente, se suspende la pregunta |
| Contenedor completo y modo nativo exclusivo | Priorizar contenedor. Nativo suspende UI propia, salir recupera estado sin ráfagas. Giro manual disponible como alternativa |

Para V-04, ensayar C02-V03 como clip horizontal corto y C03-V03 como vertical candidato. C01 y C03 dan material para el seed, con C02 como prueba rápida. Elegir otra fuente del anexo atendiendo a licencia, dimensiones reales, descarga y disponibilidad. Revisar localización del punto de pregunta y dejarlo antes del final. No introducir vídeo sin atribución ni descargar medios en Git. [Candidatos y verificación del anexo](bitacora/480Academy-anexo-videos-demostrativos.md#4-selección-mínima-para-el-seeding-y-la-demo).

## Guion de ensayo y decisión de entrega

1. **Antes del lunes.** Identificar la persona responsable de desplegar y el destino. Seleccionar clip y suplente que se reproduzcan en la red y dispositivos. Sembrar datos sintéticos y preparar dos sesiones, alumno y admin, y una cuenta docente. Ensayar restauración de la BD y conservar SHA y notas. Fijar el alcance de demo al cierre del ensayo del domingo 29 si el Grupo F adopta este plan.
2. **Recorrido principal.** Alumno registra cuenta y visita bienvenida. Abrir la tarjeta bloqueada y leer aviso. En sesión admin conceder lectura. En alumno, refrescar y abrir. Reproducir, ocultar/contestar pregunta y marcar o retomar para mostrar la diferencia de orden. Como docente asignado, cambiar el modo de una lista y comprobar que un admin sin su asignación no puede modificarla.
3. **Si están verificadas.** Abrir evaluación final, mostrar emisión, verificar URL sin sesión. Publicar o responder en foro y mostrar el cambio de actividad. Mostrar seguimiento solo con docente autorizado. Si hay inferencia real, mostrar el caso con confianza y el de datos insuficientes.
4. **Go/no-go.** Con P0 ensayado localmente y destino evaluado, el Grupo F decide alcance, commit y autorización. Validar V-10 en la URL de la versión aprobada antes de anunciar la entrega. Con problemas de red, presentar la aplicación local ensayada y declarar qué parte del despliegue quedó pendiente. Si fallan los medios externos, usar otro clip autorizado. Si fallan todos, explicar el estado con referencias estáticas y registrar reproducción como no comprobada. Las vistas simuladas se etiquetan como tales.

El responsable del repositorio registra el resultado y las excepciones en [UPDATES.md](UPDATES.md). Las pruebas locales focalizadas pueden ejecutarse antes de la aprobación de release. El ensayo de aceptación registra el destino real y el estado de la promoción humana.
