# 480Academy · Requisitos del piloto

**Objetivo de entrega** · Maqueta web funcional desplegada antes de la presentación del lunes 30 de noviembre de 2026. Primero debe permitir aprender desde móvil y enseñar qué observaciones puede usar un docente para ayudar. Se demostrará con datos sintéticos y un público previsto de menos de 100 usuarios. Grupo F decide alcance y aceptación. El equipo y el jurado de Hackado prueban la maqueta. [Enunciado](bitacora/480Academy-enunciado.md) · [Memoria de decisiones](bitacora/480Academy-memoria-decisiones.md).

## Fuentes y alcance

El enunciado fija objetivos y restricciones. La memoria y las historias del 28/11 concretan comportamiento y conservan su priorización original. [DESIGN.md](../DESIGN.md) aplica los acuerdos de UI/UX y resuelve sus diferencias con Stitch. El anexo audiovisual aporta candidatos sujetos a validación. La hoja manuscrita es contexto histórico de organización e hipótesis. [Historias de usuario](bitacora/480Academy-user-stories.md) · [Convenciones de diseño](bitacora/480Academy-design-conventions.md) · [Anexo audiovisual](bitacora/480Academy-anexo-videos-demostrativos.md) · [Hoja de acuerdos](bitacora/Hoja%20de%20acuerdos.pdf).

- **Alumno.** Navega sin prerrequisitos, retoma vídeos, recibe feedback voluntario, participa en el foro y consulta sus propios resultados. Al aprobar el test final obtiene un certificado propio.
- **Docente asignado.** Aprende desde la misma cuenta. Edita, publica, modera y consulta informes individuales en los cursos que tiene asignados.
- **Administrador.** Gestiona cuentas, roles, alta de registros de curso, permisos y ejecución del modelo. La asignación docente se aplica por curso también al administrador.
- **Tercero.** Comprueba un certificado desde su URL pública.
- **Límites del piloto.** Una web responsiva, medios alojados externamente, coste reducido, sin pagos ni datos reales. La reputación es simbólica. El piloto demuestra flujos, con validación de impacto educativo aplazada a una fase con datos adecuados.

## Requisitos trazables

Los identificadores REQ agrupan las historias de la bitácora. Los criterios completos de las HU siguen siendo aplicables. La última columna expresa el orden de entrega propuesto para el lunes, no una reclasificación de las HU.

| ID | Capacidad y evidencia de aceptación | Historias | Orden |
| --- | --- | --- | --- |
| REQ-01 | Registro por correo crea alumno y concede bienvenida de forma atómica. Login llega a Mis cursos. Seeding repetible crea cuentas de demo y asigna bienvenida explícitamente al admin inicial | HU-01/02/03/08/35 | P0 |
| REQ-02 | El admin crea registro de curso, cambia roles y concede o revoca lectura y edición independientes. Dos docentes pueden editar el mismo curso. Un admin sin asignación recibe denegación de acciones pedagógicas e informes. El panel y la API aplican la misma política | HU-02/05/42/44/50/51/52 | P0 |
| REQ-03 | Catálogo único deduplicado, cinco grupos en orden y bloqueados con aviso sin visita ni concesión. Curso plano y temático. Modo fijo canónico con ordinales y modo adaptativo sin ordinales, configurable por lista. Interés determinista con respaldo. Véase [contrato](specs/catalogo.md) | HU-06/08/23/36/37/39/42/49/52 | P0. Intereses editables en P1 |
| REQ-04 | HTML5 reproduce clips externos autorizados, conserva proporción y progreso. Pregunta voluntaria desde banco, sin pausa ni cambio de tamaño. Conservar última pendiente, mostrar feedback y respetar preferencia. Marcar visto sin crear telemetría. La adaptación por orientación se prueba en dispositivos | HU-07/09/10/26/27/36/37/38 | P0. Ampliación de señales y edición de bancos en P1 |
| REQ-05 | Test inicial voluntario y desconocido si se omite. Final voluntario hasta dos intentos, se conserva el mejor. Al aprobar se emite un certificado por alumno y curso, con URL verificable sin sesión. Mostrar progreso, nota y emisión por separado | HU-12/13/14/26/32/33 | P1 |
| REQ-06 | Foro por curso y general de bienvenida. Publicar, responder y propagar última actividad hasta la raíz. Valoración docente manual 0–10 con reputación idempotente. Intervención de IA identificable tras intervalo configurable y comprobación de resolución. El acceso y la ordenación funcionan también con respuestas humanas | HU-08/16/17/18/21/36/40/43 | P0 acceso al foro. P1 hilo, actividad y reputación. P2 IA real |
| REQ-07 | Perfil básico muestra reputación y origen de puntos, nivel y logros persistentes, progreso e intereses editables. Emisión y verificación operan con datos mínimos. Mostrar informes de cada alumno únicamente a docentes asignados | HU-21/23/24/26/28/32/33/36 | P1. Predicción en P2 |
| REQ-08 | Docente asignado puede cambiar orden y modo, editar/publicar, mantener tests y banco por vídeo, segmento o tema. Los permisos y la edición canónica siguen vigentes con cualquier orden aplicado al alumno | HU-05/10/12/42/49 | P0 publicación y configuración mínima. P1 edición de bancos y tests |
| REQ-09 | Extraer señales observadas con corte temporal. Recalibración manual autorizada genera una versión reutilizable y mantiene la anterior si falla. Inferencia ordinaria separada. Informe individual diferencia hechos, estimación de engagement y éxito y confianza, o «Datos insuficientes». Periodicidad semanal base | HU-27/28/29/35/44/48 | P2 |
| REQ-10 | Mejoras y opcionales según su prioridad original. IA asistida revisable, confianza declarada, moderación ampliada, periodicidad editable, perfil ampliado, integraciones e historial. Google, insignias por curso, correos y blockchain se consideran después del recorrido principal | HU-04/11/15/19/20/22/25/30/31/34/41/45/46/47 | Posterior a P0. Blockchain pendiente de consenso |

Los [RNF-01 a RNF-13](bitacora/480Academy-user-stories.md#4-requisitos-no-funcionales) cubren mobile-first, permisos en servidor, privacidad, telemetría, costes, alojamiento externo, accesibilidad y separación entre recomendación, predicción e IA generativa. La maqueta usa HTTPS en el destino de evaluación, credenciales privilegiadas fuera de Git y datos ficticios identificados. Queda fuera del piloto el uso de cámaras, micrófonos, sensores físicos y analítica educativa agregada. El contenido externo conserva atribución y licencia.

## Recorrido del lunes y criterio de paso

| Tramo | Demostración y evidencia | Si falta |
| --- | --- | --- |
| **P0 · Recorrido principal** | En el destino acordado, registrar alumno, abrir bienvenida/foro general, mostrar un curso bloqueado, conceder lectura como admin y reabrirlo como alumno. Reproducir un clip HTML5 autorizado, responder u ocultar la pregunta sin interrumpir el vídeo, retomar o marcar y observar el orden de la lista. Mostrar al menos una acción real de docente asignado y la denegación de esa acción a un admin sin asignación | Resolver antes de ampliar. Si no hay URL, el ensayo local es contingencia de presentación y el requisito de entrega desplegada queda incumplido |
| **P1 · Cierre pedagógico y foro** | Superar el final, abrir el certificado por URL en ventana anónima. Publicar y responder en foro, verificar actividad y reputación. Mostrar progreso observado y edición docente mínima de las actividades | Mostrar solo flujos comprobados y anotar las historias pendientes en el acta de entrega |
| **P2 · Seguimiento experimental e IA** | Si el Grupo F confirma el alcance, ejecutar inferencia y recalibración con datos sintéticos e intervención de foro. Mostrar explícitamente resultado experimental, confianza y «Datos insuficientes» | Mostrar hechos observados. Cualquier estado ilustrativo se etiqueta demo simulada. Una respuesta preparada o un número de maqueta no satisfacen HU-18 o HU-48 |

P0 es el mínimo propuesto para conservar una demostración funcional, no una reducción aprobada de las 38 historias imprescindibles. La prioridad es completar P0 antes de sumar P1 y P2. El Grupo F decide y registra el alcance que presenta, el destino y la aceptación. La [prueba de entrega](TEST_PLAN.md) cubre el recorrido y la contingencia.

## Decisiones y dependencias abiertas

| Tema | Propuesta de bootstrap | Quién y cuándo |
| --- | --- | --- |
| Despliegue y coste | Un proceso con persistencia durable. Validar plan, cuenta y URL antes de comprometer el entorno externo | Responsable de repo/despliegue designado por Grupo F · SPIKE-01 |
| Estado visto | Propuesta de piloto en [Arquitectura](ARCHITECTURE.md#progreso-y-preguntas). Persistir evidencia observada y estado de interfaz separados | Responsable de aprendizaje · antes de cerrar TASK-04 |
| Interés | Respaldo determinista desde TASK-01. Pesos, señales suficientes y criterios de producto antes de activar el orden por interés real | Grupo F · TASK-05 |
| Foro y predicción | Umbral de utilidad, intervalo, bonificaciones, resultados objetivo, variables, suficiencia y significado de confianza pendientes. Usar casos sintéticos e informar limitaciones | Docencia/datos · TASK-09/10 |
| Certificado | Verificación convencional con titular ficticio. Acordar gestión de datos ausentes y rectificaciones antes de usar datos reales | Grupo F · TASK-08 |
| Diseño | Referencia local suficiente para implementar. Validar opacidad, geometría del menú, gestos y estados en dispositivos de demo | Diseño/QA · TASK-04/11. Revisión remota independiente · TASK-12 |
