# 480Academy — Historias de usuario

**Hackado 2026 · Cuatroochenta / Universitat Jaume I · Grupo F**  
**Fecha:** 26 de noviembre de 2026  
**Última revisión:** 27 de noviembre de 2026 — coherencia funcional, prioridades y dependencias tras las convenciones UI/UX  
**Entrega:** lunes 30 de noviembre de 2026

## 1. Propósito

Este documento traduce las decisiones de [480Academy-memoria-decisiones.md](480Academy-memoria-decisiones.md) y [480Academy-design-conventions.md](480Academy-design-conventions.md) a historias de usuario con criterios de aceptación y prioridad. Sirve para repartir el trabajo y para comprobar cuándo cada funcionalidad está terminada.

La revisión del 27/11 conserva los identificadores HU-01 a HU-35 y añade historias para modelar los bucles del alumno, docente y administrador. Las convenciones UI/UX son la propuesta de diseño para el piloto, pendiente de revisión del grupo y refinamiento en Stitch. Los detalles exploratorios no se convierten en requisitos obligatorios. Las prioridades atienden a los flujos de demostración y al plazo. La revisión de dependencias conserva HU-01 a HU-47 y añade HU-48 para hacer explícita la capacidad de cálculo predictivo ya acordada. Las prioridades pueden refinarse antes del bootstrap sin eliminar las dependencias mínimas.

Formato de cada historia:

> **Como** [rol], **quiero** [acción] **para** [beneficio].

Prioridades:

| Prioridad | Significado |
| --- | --- |
| **Imprescindible** | Necesaria para alguno de los flujos prioritarios de demostración (sección 12 de la memoria). Sin ella no hay demo. |
| **Deseable** | Aporta valor claro, pero la demo funciona sin ella. Se hace cuando lo imprescindible está terminado. |
| **Opcional** | Mejora que solo se aborda si sobra tiempo. |

La columna «Ref.» indica la sección de origen de cada historia: las referencias § sin prefijo corresponden a la memoria de decisiones; DC § corresponde a las convenciones de diseño. La prioridad de implementación no obliga al alumno a utilizar una funcionalidad voluntaria. El alcance del enunciado y las prioridades de las mejoras opcionales se mantienen.

## 2. Resumen

| ID | Historia | Rol | Prioridad | Ref. |
| --- | --- | --- | --- | --- |
| HU-01 | Registrarse con correo electrónico | Visitante | Imprescindible | §2 |
| HU-02 | Iniciar sesión y acceder según el rol | Usuario | Imprescindible | §2; DC §3, §9–10 |
| HU-03 | Cuentas de demostración preconfiguradas | Equipo | Imprescindible | §2, §11 |
| HU-04 | Registro e inicio de sesión con Google | Visitante | Opcional | §2 |
| HU-05 | Crear y publicar un curso con vídeos | Docente | Imprescindible | §3; DC §5.1, §9 |
| HU-06 | Explorar cursos y ver su contenido | Alumno | Imprescindible | §3, §12; DC §5.1 |
| HU-07 | Reproducir un vídeo dentro de la plataforma | Alumno | Imprescindible | §3; DC §6.1 |
| HU-08 | Curso de bienvenida | Alumno | Opcional | §3; DC §5.1 |
| HU-09 | Responder preguntas emergentes durante el vídeo | Alumno | Imprescindible | §4.2; DC §6.2 |
| HU-10 | Gestionar bancos de preguntas de los vídeos | Docente | Imprescindible | §4.2; DC §9 |
| HU-11 | Generar preguntas con IA y revisarlas | Docente | Deseable | §4.2; DC §9, §11 |
| HU-12 | Crear el test inicial y el test final del curso | Docente | Imprescindible | §4.1 |
| HU-13 | Realizar el test final | Alumno | Imprescindible | §4.1; DC §4, §7 |
| HU-14 | Realizar el test inicial voluntario | Alumno | Imprescindible | §4.1; DC §4, §7 |
| HU-15 | Autoevaluar mi confianza | Alumno | Deseable | §4.1; DC §7 |
| HU-16 | Publicar una consulta en el foro del curso | Alumno | Imprescindible | §5; DC §4, §8 |
| HU-17 | Responder a compañeros y ganar reputación | Alumno | Imprescindible | §5, §6; DC §8 |
| HU-18 | Respuesta de la IA a consultas sin resolver | Alumno | Imprescindible | §5; DC §8 |
| HU-19 | Valoración de respuestas con asistencia de IA | Docente | Deseable | §5 |
| HU-20 | Supervisar y moderar los foros | Docente | Deseable | §2, §5; DC §8–9 |
| HU-21 | Consultar reputación, nivel e insignias | Alumno | Imprescindible | §6; DC §5, §7 |
| HU-22 | Insignias asociadas a cursos | Alumno | Opcional | §6 |
| HU-23 | Recibir recomendaciones de cursos | Alumno | Imprescindible | §7; DC §11 |
| HU-24 | Indicar mis intereses | Alumno | Imprescindible | §7; DC §7, §11 |
| HU-25 | Gestionar correos comerciales de recomendación | Administrador | Opcional | §7 |
| HU-26 | Consultar mi progreso y desempeño | Alumno | Imprescindible | §8.3, §12; DC §5.3, §7 |
| HU-27 | Registro de la telemetría de visualización | Docente | Imprescindible | §8.1; DC §5.3, §11 |
| HU-28 | Consultar el informe predictivo de cada alumno | Docente | Imprescindible | §8.2, §8.3; DC §9, §11 |
| HU-29 | Recalibrar manualmente el modelo predictivo | Administrador | Imprescindible | §8.2; DC §10–11 |
| HU-30 | Configurar la periodicidad de los informes | Docente | Deseable | §8.3 |
| HU-31 | Avisos por correo a alumnos rezagados | Docente | Opcional | §8.3 |
| HU-32 | Obtener un certificado al superar el curso | Alumno | Imprescindible | §9; DC §7 |
| HU-33 | Verificar un certificado mediante su URL | Tercero | Imprescindible | §9; DC §7 |
| HU-34 | Acuñar certificados en blockchain | Alumno | Opcional | §9; DC §7 |
| HU-35 | Generar datos sintéticos de demostración | Equipo | Imprescindible | §11; DC §5.1, §12 |
| HU-36 | Navegar mediante el menú contextual | Usuario | Imprescindible | DC §3–4, §12 |
| HU-37 | Retomar y marcar contenidos como vistos | Alumno | Imprescindible | DC §5.2–5.3, §6.1 |
| HU-38 | Activar o desactivar las preguntas de atención | Alumno | Imprescindible | DC §4, §6.2 |
| HU-39 | Encontrar el siguiente contenido mediante ordenación adaptativa | Alumno | Imprescindible | §7; DC §5.2, §11 |
| HU-40 | Encontrar las conversaciones activas del foro | Usuario del curso | Imprescindible | DC §8 |
| HU-41 | Gestionar mis datos personales y preferencias | Alumno | Deseable | DC §4, §7 |
| HU-42 | Gestionar mis cursos desde la experiencia común | Docente | Imprescindible | DC §3–4, §9 |
| HU-43 | Configurar la intervención de IA en el foro | Docente | Imprescindible | §5; DC §8–9 |
| HU-44 | Acceder al panel de administración de plataforma | Administrador | Imprescindible | DC §3, §10 |
| HU-45 | Configurar las integraciones de IA de la plataforma | Administrador | Deseable | DC §10–11 |
| HU-46 | Investigar patrones de aprendizaje de forma puntual | Administrador | Deseable | §8.2; DC §10–11 |
| HU-47 | Consultar el historial técnico del modelo predictivo | Administrador | Deseable | DC §10–11 |
| HU-48 | Generar estimaciones individuales con el modelo almacenado | Docente | Imprescindible | §8.1–8.3, §11; DC §9–11 |

Total: 48 historias (33 imprescindibles, 9 deseables, 6 opcionales).

## 3. Historias de usuario

### Épica 1 · Acceso y roles

#### HU-01 · Registrarse con correo electrónico — Imprescindible

**Como** visitante, **quiero** registrarme con mi correo electrónico **para** acceder a los cursos como alumno.

- [ ] El formulario pide correo y contraseña y funciona en pantallas de móvil.
- [ ] Toda cuenta nueva recibe el rol de alumno; el usuario no puede elegir otro rol.
- [ ] No se puede registrar dos veces el mismo correo.
- [ ] Solo se piden los datos necesarios para usar la plataforma (minimización de datos).
- [ ] En el entorno de demostración, una cuenta nueva puede acceder al menos a un curso demostrativo mediante la provisión mínima de acceso definida en HU-06 y HU-35; no se exige realizar un pago.

#### HU-02 · Iniciar sesión y acceder según el rol — Imprescindible

**Como** usuario registrado, **quiero** iniciar sesión **para** acceder a las funciones de mi rol.

- [ ] Tras iniciar sesión, el alumno llega directamente a «Mis cursos», el docente accede a su experiencia común enriquecida y el administrador tiene acceso a su panel adicional (HU-44).
- [ ] Los permisos se comprueban en el servidor, no solo ocultando botones en la interfaz.
- [ ] Un alumno que llama directamente a una ruta o API de docente o administrador recibe un error de acceso.
- [ ] Un docente solo puede gestionar cursos de los que sea propietario o gestor autorizado y consultar los alumnos asociados a esos cursos.
- [ ] Un administrador propietario o gestor autorizado de un curso dispone en él de las mismas capacidades docentes; el acceso al panel de plataforma no sustituye la comprobación de permisos sobre cada recurso.

#### HU-03 · Cuentas de demostración preconfiguradas — Imprescindible

**Como** miembro del equipo, **quiero** que existan cuentas de administrador y docente creadas automáticamente **para** poder hacer la demostración sin configuración manual.

- [ ] El proceso de *seeding* crea las cuentas `admin` y `docente`.
- [ ] Las contraseñas se leen de variables de entorno; no se publican credenciales triviales (`admin/admin`) en un despliegue público.
- [ ] Ejecutar el *seeding* dos veces no duplica las cuentas.

#### HU-04 · Registro e inicio de sesión con Google — Opcional

**Como** visitante, **quiero** registrarme con mi cuenta de Google **para** no tener que crear otra contraseña.

- [ ] El botón «Continuar con Google» crea o recupera una cuenta de alumno.
- [ ] Solo se solicitan a Google los permisos mínimos (identidad y correo).

### Épica 2 · Cursos y contenidos

#### HU-05 · Crear y publicar un curso con vídeos — Imprescindible

**Como** docente, **quiero** crear un curso organizado en temas o en una lista directa de vídeos de YouTube **para** ofrecer formación a mis alumnos.

- [ ] Puedo crear un curso con título, descripción, competencias asociadas y dificultad.
- [ ] Puedo añadir temas y vídeos a cada tema o crear un curso plano con vídeos directamente en el curso, con título, descripción y enlace de YouTube.
- [ ] Puedo establecer y modificar el orden original de los temas y vídeos, editar sus metadatos y sustituir un enlace de vídeo. El orden adaptativo de un alumno nunca modifica ese orden original.
- [ ] Puedo editar el curso y publicarlo o despublicarlo; los alumnos solo ven los cursos publicados.
- [ ] La plataforma guarda solo metadatos y enlaces, nunca los archivos de vídeo.

#### HU-06 · Explorar cursos y ver su contenido — Imprescindible

**Como** alumno, **quiero** explorar los cursos disponibles y ver sus temas **para** elegir qué aprender.

- [ ] «Mis cursos» muestra los cursos a los que tengo acceso, mediante tarjetas verticales ordenadas por último acceso descendente; al volver tras abrir otro curso, este aparece primero. Los cursos sin acceso previo tienen un desempate estable.
- [ ] Puedo consultar el catálogo y las recomendaciones desde la navegación global; no se mezclan los cursos sin acceso con «Mis cursos» ni se exige implementar pagos en el piloto.
- [ ] El acceso se comprueba por curso en servidor. Para la demo se habilita al menos un curso publicado de ejemplo para las cuentas de alumno nuevas y se preparan accesos para los alumnos sintéticos; no se requiere un sistema comercial de matriculación.
- [ ] La pantalla de un curso muestra sus temas o, si es plano, sus vídeos directamente, sin un nivel artificial para cada vídeo. Dentro de un tema se muestran sus vídeos.
- [ ] Las tarjetas presentan título y estado/progreso útil sin numeración pedagógica visible al alumno. El acceso a continuar se integra en la navegación del contenido (HU-37 y HU-39).
- [ ] La navegación es libre: ningún curso queda bloqueado por prerrequisitos.
- [ ] Todas las pantallas se usan cómodamente desde el móvil.

#### HU-07 · Reproducir un vídeo dentro de la plataforma — Imprescindible

**Como** alumno, **quiero** ver los vídeos del curso dentro de 480Academy **para** aprender sin salir de la plataforma.

- [ ] El vídeo se reproduce con la integración autorizada de YouTube (reproductor embebido).
- [ ] La pantalla del vídeo muestra su título y descripción.
- [ ] El código del reproductor está desacoplado del proveedor, de modo que se pueda añadir otro servicio sin cambiar el resto de la aplicación.
- [ ] Solo los usuarios con acceso al curso pueden abrir sus vídeos desde la plataforma.
- [ ] Puedo reproducir vídeos horizontales y verticales sin deformar ni recortar involuntariamente su imagen; en móvil vertical un vídeo horizontal utiliza el ancho disponible y se coloca encima de la interfaz restante.
- [ ] Al cambiar la orientación o el tamaño de pantalla, el reproductor se adapta conservando el instante, el estado de pausa/reproducción y, cuando proceda, la pregunta pendiente, sin reinicializarse innecesariamente.
- [ ] La aparición, cierre o desactivación de una pregunta no cambia las dimensiones del reproductor. Los controles de 480Academy no cubren el reproductor de YouTube ni sus controles.
- [ ] Puedo utilizar la pantalla completa nativa cuando el navegador/proveedor la permita; la navegación y las preguntas de la plataforma se suspenden durante ese modo y la navegación reaparece al salir.

#### HU-08 · Curso de bienvenida — Opcional

**Como** alumno nuevo, **quiero** tener disponible un curso de bienvenida desde el primer acceso **para** entender cómo funciona 480Academy.

- [ ] El curso aparece en el panel de cualquier alumno nuevo.
- [ ] Si no hay vídeos propios, puede componerse con texto o con vídeos existentes; su ausencia no bloquea la entrega.

### Épica 3 · Evaluación formativa

#### HU-09 · Responder preguntas emergentes durante el vídeo — Imprescindible

**Como** alumno, **quiero** responder preguntas breves mientras veo un vídeo **para** comprobar si estoy entendiendo el contenido.

- [ ] La pregunta aparece como tarjeta exterior al reproductor en los puntos configurados del vídeo: debajo en móvil vertical y en una zona lateral o inferior previamente disponible en apaisado. No se superpone a YouTube ni provoca un redimensionamiento.
- [ ] En pantalla completa nativa o cuando no exista espacio exterior compatible, las preguntas se suspenden sin penalización; no se acumula una ráfaga de preguntas al regresar. Se utiliza un único componente de tarjeta para ambas orientaciones.
- [ ] La pregunta no detiene ni bloquea el vídeo; puedo cerrarla o ignorarla y seguir aprendiendo.
- [ ] En cada aparición se elige al azar una pregunta del banco correspondiente.
- [ ] Al responder veo si he acertado.
- [ ] Un acierto suma reputación; un error o una omisión no restan nada.
- [ ] Cada vídeo tiene un máximo de reputación obtenible. Si repito el vídeo, solo puedo ganar los puntos que me falten hasta ese máximo.

#### HU-10 · Gestionar bancos de preguntas de los vídeos — Imprescindible

**Como** docente, **quiero** gestionar bancos de preguntas asociados a vídeos, segmentos o temas **para** controlar qué se pregunta a los alumnos.

- [ ] Puedo crear, editar y borrar preguntas de opción múltiple indicando la respuesta correcta.
- [ ] Puedo asociar cada banco a un vídeo, a un segmento del vídeo o a un tema, y reutilizarlo en varios vídeos.
- [ ] Puedo configurar los segmentos del vídeo (intervalos) y los instantes o frecuencia de aparición de preguntas, asociando cada punto a su banco correspondiente.
- [ ] Accedo a la gestión del banco desde el vídeo o su contexto de edición, únicamente cuando tengo permiso de gestión sobre el curso.
- [ ] Puedo ampliar un banco sin perder las preguntas existentes.

#### HU-11 · Generar preguntas con IA y revisarlas — Deseable

**Como** docente, **quiero** que la IA me proponga preguntas para un vídeo **para** ahorrar tiempo al preparar los bancos.

- [ ] Puedo pedir a la IA un conjunto de preguntas para uno o varios segmentos a partir del tema, descripción, transcripción autorizada o material facilitado por el docente; si falta material, se comunica la limitación sin inventar contenido del vídeo.
- [ ] Las preguntas se generan de antemano y se guardan en el banco; no se generan en cada reproducción.
- [ ] Las preguntas generadas quedan pendientes de revisión hasta que las apruebo o las corrijo.

#### HU-12 · Crear el test inicial y el test final del curso — Imprescindible

**Como** docente, **quiero** preparar el test inicial y el test final de mi curso **para** medir el nivel de partida y el aprendizaje de mis alumnos.

- [ ] Puedo crear, editar y borrar las preguntas de cada test.
- [ ] Puedo fijar la nota mínima del test final que habilita el certificado.

#### HU-13 · Realizar el test final — Imprescindible

**Como** alumno, **quiero** realizar el test final del curso **para** demostrar lo aprendido y obtener el certificado.

- [ ] El test final es voluntario y se abre desde el menú contextual del curso; no se intercala en la lista de contenidos ni exige ver todos los vídeos.
- [ ] Puedo hacer como máximo dos intentos.
- [ ] Se conserva la calificación más alta de los intentos.
- [ ] Al terminar veo mi nota y si he superado el umbral del certificado.

#### HU-14 · Realizar el test inicial voluntario — Imprescindible

**Como** alumno, **quiero** hacer un test inicial voluntario **para** conocer mi nivel de partida y ver después cuánto he mejorado.

- [ ] El test inicial es opcional, se abre desde el menú contextual del curso y no influye en la nota del certificado ni bloquea el acceso a vídeos.
- [ ] Si lo realizo, su resultado puede aportar información al recomendador de unidades (HU-39).
- [ ] Si no lo hago, mi nivel inicial figura como «desconocido», nunca como un cero.
- [ ] Si lo hago, mi progreso muestra la mejora entre el test inicial y el final cuando ambos resultados sean comparables. Los resultados del test inicial y de los intentos finales se conservan diferenciados para el seguimiento y el modelo (HU-27, HU-48); la ausencia de cualquiera de ellos no bloquea la navegación.

#### HU-15 · Autoevaluar mi confianza — Deseable

**Como** alumno, **quiero** indicar lo seguro que me siento sobre un tema **para** reflexionar sobre mi aprendizaje.

- [ ] Puedo indicar mi nivel de confianza (por ejemplo, de 1 a 5) al hacer los tests.
- [ ] La autoevaluación se guarda y se muestra separada de las notas objetivas de los tests. Si no se recoge, el modelo y el recomendador funcionan con las demás señales disponibles; no se imputa una confianza nula.

### Épica 4 · Foros y aprendizaje colaborativo

#### HU-16 · Publicar una consulta en el foro del curso — Imprescindible

**Como** alumno, **quiero** publicar dudas en el foro del curso **para** que me ayuden mis compañeros, el docente o la IA.

- [ ] Cada curso tiene su propio foro con hilos, accesible desde el menú contextual del curso y desde el contexto de un vídeo.
- [ ] Puedo crear un hilo con título y texto, responder al hilo o a una respuesta existente; las respuestas se presentan anidadas.
- [ ] Veo cuándo un hilo tiene respuestas nuevas.

#### HU-17 · Responder a compañeros y ganar reputación — Imprescindible

**Como** alumno, **quiero** ganar reputación al responder bien a mis compañeros **para** sentir que mi ayuda se reconoce.

- [ ] Una respuesta útil a la consulta de otra persona suma reputación según su valoración.
- [ ] Existe una vía mínima de valoración manual por el docente autorizado, accesible desde la respuesta, con puntuación de 0 a 10, corrección de la valoración y ajuste de reputación. Funciona sin HU-19 ni el resto de herramientas de moderación de HU-20. Una respuesta sin valorar no se presenta como correcta ni puntúa por defecto.
- [ ] La primera respuesta correcta y las respuestas útiles rápidas reciben una bonificación según reglas configuradas y comprobables. La bonificación de primera respuesta solo se asigna una vez por consulta y respeta HU-18; las correcciones y reintentos de una operación no duplican puntos.
- [ ] Responder a una consulta propia no da puntos; la IA tampoco acumula reputación.

#### HU-18 · Respuesta de la IA a consultas sin resolver — Imprescindible

**Como** alumno, **quiero** que la IA responda mi consulta si nadie lo hace en un tiempo **para** no quedarme bloqueado esperando.

- [ ] Si una consulta sigue sin resolver tras el intervalo configurado para su curso por el docente (HU-43), la IA publica una respuesta en el hilo; se comprueba que la consulta sigue pendiente antes de publicar. Una respuesta útil confirmada mediante la valoración mínima de HU-17 puede satisfacer la condición de resolución; la respuesta de IA no cierra el hilo. Se evita publicar repetidamente la misma intervención automática al reevaluar una consulta.
- [ ] La respuesta de IA cuenta como actividad del foro y actualiza la ordenación como una respuesta humana (HU-40).
- [ ] La respuesta de la IA aparece claramente identificada como generada por IA.
- [ ] La IA consume la bonificación de primera respuesta, pero no cierra el hilo.
- [ ] Las respuestas humanas posteriores pueden seguir ganando reputación según su calidad.
- [ ] La IA no acumula reputación.
- [ ] El texto y los metadatos enviados al proveedor pasan por la minimización y el filtrado de identificadores descritos en RNF-05, incluidos los que puedan aparecer en texto libre; si no se puede preparar una solicitud adecuada, no se envía el contenido sin filtrar.

#### HU-19 · Valoración de respuestas con asistencia de IA — Deseable

**Como** docente, **quiero** que la IA proponga una valoración de cada respuesta del foro **para** reconocer las buenas aportaciones sin revisarlas todas a mano.

- [ ] La valoración asistida reutiliza la escala, el registro y las reglas de puntuación de HU-17; las respuestas valoradas muestran la puntuación de 0 a 10 mediante estrellas.
- [ ] La IA propone la puntuación y yo puedo corregirla mediante la misma vía de valoración; si la IA no está disponible, sigue funcionando la valoración manual.
- [ ] La reputación del autor se recalcula si cambio la puntuación, sin duplicar aportaciones.

#### HU-20 · Supervisar y moderar los foros — Deseable

**Como** docente, **quiero** supervisar y moderar los foros de mis cursos, con ayuda de la IA, **para** mantener un espacio útil y respetuoso.

- [ ] Puedo participar en cualquier hilo de mis cursos con mi rol identificado.
- [ ] Puedo ocultar o eliminar mensajes inadecuados.
- [ ] La IA puede marcar mensajes potencialmente inadecuados para que yo los revise.

### Épica 5 · Gamificación y reputación

#### HU-21 · Consultar reputación, nivel e insignias — Imprescindible

**Como** alumno, **quiero** ver mi reputación, mi nivel y mis insignias **para** seguir mi evolución y sentirme motivado.

- [ ] Mi perfil muestra mi reputación global, mi nivel y mis insignias, sin ocupar de forma permanente la lista principal de cursos.
- [ ] Puedo ver de dónde proceden mis puntos (preguntas de vídeo, foros).
- [ ] Las insignias globales obtenidas persisten. El acceso básico a reputación y logros desde la navegación global no depende de la edición completa del perfil (HU-41) ni de las insignias por curso (HU-22).
- [ ] La reputación es simbólica: no es una nota, no se canjea y no da acceso a contenidos ni a certificados.

#### HU-22 · Insignias asociadas a cursos — Opcional

**Como** alumno, **quiero** obtener insignias específicas de cada curso **para** mostrar mis logros en temas concretos.

- [ ] Existen insignias ligadas a un curso además de las globales.
- [ ] Las insignias son persistentes: no se pierden una vez obtenidas.

### Épica 6 · Recomendaciones

#### HU-23 · Recibir recomendaciones de cursos — Imprescindible

**Como** alumno, **quiero** recibir recomendaciones de cursos adecuados a mi perfil **para** saber qué estudiar a continuación.

- [ ] El recomendador es determinista: con los mismos datos y configuración da siempre las mismas recomendaciones, sin llamadas a IA generativa por cada acceso.
- [ ] Las recomendaciones de cursos son accesibles desde la navegación global y no modifican el orden por último acceso de «Mis cursos». La recomendación dentro de un curso se desarrolla en HU-39.
- [ ] Tiene en cuenta las competencias y la dificultad de los cursos, mis conocimientos previos y mis intereses (HU-24), cuando estén disponibles. Si faltan intereses o evaluación inicial, emplea las señales conocidas y un orden de respaldo estable; no los sustituye por puntuaciones negativas.
- [ ] Es independiente del modelo predictivo de aprendizaje.
- [ ] Las recomendaciones son orientativas: no bloquean ningún curso.

#### HU-24 · Indicar mis intereses — Imprescindible

**Como** alumno, **quiero** indicar mis intereses y objetivos **para** que las recomendaciones se ajusten a lo que busco.

- [ ] Puedo elegir voluntariamente intereses de una lista de competencias o temas y cambiarlos o dejarlos sin definir; no es un requisito de registro ni de acceso a cursos.
- [ ] La selección mínima y su persistencia son accesibles desde la navegación global/perfil básico, sin exigir la edición completa del perfil de HU-41. Al guardar se actualizan las recomendaciones de cursos y la ordenación adaptativa pertinente (HU-23, HU-39).

#### HU-25 · Gestionar correos comerciales de recomendación — Opcional

**Como** administrador, **quiero** gestionar los correos que recomiendan cursos a los alumnos **para** promocionar contenidos relevantes.

- [ ] Puedo activar o desactivar los envíos y editar su contenido.
- [ ] Los alumnos pueden darse de baja de estos correos. La funcionalidad utiliza HU-23 y respeta las preferencias y las garantías aplicables a comunicaciones comerciales y menores; no se envían correos promocionales reales como requisito de demostración.

### Épica 7 · Progreso, telemetría y modelo predictivo

#### HU-26 · Consultar mi progreso y desempeño — Imprescindible

**Como** alumno, **quiero** ver mi progreso en cada curso y mis resultados **para** saber cómo voy.

- [ ] Veo qué vídeos y temas he completado y mis notas de los tests, y puedo acceder a mi progreso desde el curso o la navegación correspondiente.
- [ ] Se distinguen el progreso de contenidos, la superación del test final y la emisión del certificado; no se presentan como estados equivalentes.
- [ ] Si se muestra tiempo de visualización, procede de reproducción registrada y no se presenta como tiempo de atención ni incluye tiempo inventado por marcado manual.
- [ ] Solo veo mis propios datos.
- [ ] No veo predicciones sobre mí, puntuaciones internas de ordenación ni la telemetría detallada.

#### HU-27 · Registro de la telemetría de visualización — Imprescindible

**Como** docente, **quiero** que la plataforma registre cómo interactúan los alumnos con los vídeos **para** tener información más útil que «vídeo completado».

- [ ] Se registran, según lo que permita el reproductor: progreso, segmentos reproducidos, finalización, pausas, saltos, repeticiones y velocidad.
- [ ] Se registran tiempo de permanencia, inactividad y visibilidad de la página.
- [ ] Se guardan también las respuestas a preguntas, las notas de los tests, la actividad en foros y la recurrencia en cursos, y la autoevaluación cuando se implemente. Se distinguen los datos no recogidos, las omisiones voluntarias y los resultados observados; no se inventan señales faltantes.
- [ ] El marcado manual de un vídeo como visto se registra de forma diferenciada de la reproducción observada y no crea eventos ficticios de reproducción, atención o comprensión.
- [ ] No se usan cámaras, micrófonos, grabaciones ni sensores físicos.
- [ ] Los datos de analítica se guardan con identificadores seudónimos, separados de la identidad del usuario cuando sea posible.

#### HU-28 · Consultar el informe predictivo de cada alumno — Imprescindible

**Como** docente, **quiero** ver una predicción individual de engagement y éxito formativo de cada alumno **para** detectar a quién debo ayudar.

- [ ] Desde la vista de gestión de un curso puedo consultar su lista de alumnos autorizados y abrir un informe individual.
- [ ] Para cada uno de mis alumnos veo su desempeño, su progreso y una estimación numérica de engagement y de éxito formativo producida por HU-48; las estimaciones no se inventan en la interfaz ni requieren llamadas a IA generativa por informe.
- [ ] Los informes se generan con periodicidad semanal por defecto aunque no exista la configuración avanzada de HU-30; para la demo se pueden consultar los informes calculados con los datos iniciales o tras una ejecución explícita, sin esperar una semana.
- [ ] Cada estimación muestra su nivel de confianza.
- [ ] Si no hay datos suficientes, se indica «datos insuficientes» en lugar de una puntuación.
- [ ] Los datos ausentes (por ejemplo, no haber hecho el test inicial) no cuentan como evidencia negativa.
- [ ] Los hechos observados y las predicciones se muestran claramente diferenciados.
- [ ] Los informes son solo individuales; no hay informes agregados del curso ni de la plataforma.
- [ ] Las predicciones no cambian automáticamente notas, certificados ni accesos.

#### HU-29 · Recalibrar manualmente el modelo predictivo — Imprescindible

**Como** administrador, **quiero** lanzar a mano la recalibración del modelo **para** que use los datos más recientes.

- [ ] Un botón en el panel de administración (HU-44) inicia la recalibración; solo un administrador autorizado puede ejecutarla.
- [ ] La recalibración está separada de la generación habitual de predicciones.
- [ ] Se puede ejecutar varias veces durante la demo y se muestra cuándo se hizo la última, el estado de la ejecución y la versión del modelo activo.
- [ ] La recalibración utiliza el proceso de cálculo de HU-48 y guarda una versión del modelo utilizable por la inferencia ordinaria; entrenar o recalibrar no es un requisito por cada predicción. Si falla, no sustituye un modelo activo válido por una ejecución incompleta. Los resultados de la demo se identifican como experimentales y los datos sintéticos no se presentan como validación real.
- [ ] No hay recalibraciones automáticas periódicas.

#### HU-30 · Configurar la periodicidad de los informes — Deseable

**Como** docente, **quiero** configurar cada cuánto se calculan los patrones y se generan mis informes **para** adaptarlos a mi forma de trabajar.

- [ ] La periodicidad por defecto es semanal.
- [ ] Puedo cambiarla desde la configuración de mis cursos.

#### HU-31 · Avisos por correo a alumnos rezagados — Opcional

**Como** docente, **quiero** enviar avisos educativos por correo a los alumnos que van rezagados **para** animarles a continuar.

- [ ] Puedo definir el umbral de éxito formativo por debajo del cual se considera que un alumno va rezagado.
- [ ] Puedo activar, desactivar y redactar los avisos.
- [ ] Los avisos tienen tono educativo y no revelan la predicción numérica al alumno. Se basan en informes disponibles de HU-28/HU-48; un caso de «datos insuficientes» no se clasifica automáticamente como rezagado.

### Épica 8 · Certificación

#### HU-32 · Obtener un certificado al superar el curso — Imprescindible

**Como** alumno, **quiero** recibir un certificado al superar el test final **para** acreditar lo que he aprendido.

- [ ] El certificado se emite automáticamente al superar la nota mínima del test final.
- [ ] No hace falta haber hecho el test inicial, tener reputación ni haber visualizado todos los contenidos.
- [ ] Puedo localizar el certificado convencional en mi gestión documental y copiar su URL; el acceso documental básico funciona sin la edición completa del perfil de HU-41. El estado del certificado no se confunde con el progreso del temario ni depende de la acuñación blockchain.
- [ ] Repetir un intento superado o reintentar la emisión no duplica el certificado del mismo alumno y curso. Los datos mínimos del titular necesarios para emitirlo se gestionan mediante el flujo convencional, sin exigir HU-34 ni HU-41.
- [ ] El certificado indica que es un certificado propio de la academia, no reglado.
- [ ] Cada certificado tiene una URL única que puedo copiar y compartir.

#### HU-33 · Verificar un certificado mediante su URL — Imprescindible

**Como** tercero (por ejemplo, una empresa), **quiero** abrir la URL de un certificado **para** comprobar que es auténtico.

- [ ] La URL es pública y no exige iniciar sesión.
- [ ] Muestra el curso, la fecha de emisión y la identificación mínima del titular que corresponda a la finalidad de verificación, sin datos personales innecesarios. La URL utiliza un identificador no predecible y no contiene correo ni identificadores personales directos; no se publica un directorio de certificados. Antes de usar datos reales de menores se deberá definir la exposición autorizada del titular; la demo puede utilizar titulares sintéticos.
- [ ] Una URL con identificador inexistente o inválido muestra que no se ha podido verificar el certificado; la información se obtiene del registro de emisión de la plataforma, no de parámetros aportados por el visitante.

#### HU-34 · Acuñar certificados en blockchain — Opcional

**Como** alumno, **quiero** que mi certificado quede registrado en blockchain **para** que su integridad se pueda verificar de forma independiente.

- [ ] Complementa la certificación por URL; no la sustituye.
- [ ] Desde mi gestión documental puedo solicitar la acuñación de un certificado elegible; no se acuña automáticamente al aprobar el test.
- [ ] Antes de solicitarla puedo revisar los datos que identifican el certificado, corregirlos mediante el flujo autorizado y confirmar expresamente que son correctos. Si no confirmo, no se envía la operación.
- [ ] La interfaz distingue el certificado convencional de su registro en blockchain e informa del resultado de la solicitud; los errores no se presentan como una acuñación correcta.
- [ ] En la cadena no se publican datos personales: solo identificadores o compromisos criptográficos (por ejemplo, un *hash*).
- [ ] La página del certificado enlaza con su registro en la cadena.

> Pendiente de consenso: es una propuesta individual de Miguel Campins que el Grupo F todavía no ha acordado.

### Épica 9 · Datos de demostración

#### HU-35 · Generar datos sintéticos de demostración — Imprescindible

**Como** miembro del equipo, **quiero** un proceso de *seeding* que genere datos sintéticos **para** demostrar los flujos de analítica sin datos reales.

- [ ] Crea cursos de ejemplo con vídeos de YouTube, bancos de preguntas, tests y hilos de foro; incluye un curso plano y uno con temas para probar ambos recorridos y respuestas anidadas para probar la actividad jerárquica.
- [ ] Genera estados de contenido pendiente, iniciado y visto (incluido marcado manual) y alumnos con información suficiente e insuficiente para mostrar la ordenación adaptativa y el respaldo en el orden docente. Se procuran ejemplos de vídeo horizontal y vertical según disponibilidad.
- [ ] Crea alumnos ficticios con patrones de comportamiento variados, incluidos casos contrastantes y ambiguos (por ejemplo, vídeo completo con inactividad, o reproducción parcial con repeticiones). Incluye permisos de acceso a cursos, intereses conocidos y ausentes, evaluaciones iniciales/finales con resultados comparables y casos sin evaluación inicial, respuestas valorables en el foro y señales suficientes para ejercitar HU-48 sin utilizar datos reales.
- [ ] El entorno permite que una cuenta nueva real de demostración acceda a un curso de ejemplo; los datos sintéticos permanecen diferenciados de su actividad real.
- [ ] Los datos están identificados como sintéticos y no se atribuyen a personas reales.
- [ ] Con estos datos se puede recalibrar el modelo y ver informes predictivos, incluido el caso de datos insuficientes; permiten comprobar el funcionamiento, no demostrar precisión predictiva ni mejora educativa real.

### Épica 10 · Navegación y bucles de aprendizaje

#### HU-36 · Navegar mediante el menú contextual — Imprescindible

**Como** usuario, **quiero** acceder a las acciones generales y contextuales desde un menú discreto **para** aprovechar el espacio de pantalla y encontrar las funciones cuando las necesito.

- [ ] Un control visible de apertura mediante pulsación normal permite desplegar y cerrar el menú; su interacción es coherente en móvil y escritorio. La dirección visual preferida es un abanico radial; la geometría se refina en Stitch.
- [ ] En «Mis cursos» puedo acceder a catálogo, perfil y demás funciones globales disponibles; en un curso puedo abrir evaluaciones, foro y progreso; en un vídeo aparecen las acciones de ese contexto.
- [ ] Solo aparecen acciones permitidas para mi rol y recurso; elegir una opción recoge el menú. El botón Atrás o un mecanismo equivalente permite volver al contexto anterior.
- [ ] Abrir un contenido, reproducirlo, reanudarlo y marcarlo como visto son acciones directas. Las listas de contenidos no muestran de forma permanente tarjetas de evaluación ni foro.
- [ ] El menú no tapa el reproductor ni sus controles y no depende exclusivamente de pulsación prolongada; se puede accionar con teclado y cerrar sin seleccionar una opción.

#### HU-37 · Retomar y marcar contenidos como vistos — Imprescindible

**Como** alumno, **quiero** retomar un vídeo y gestionar qué contenidos tengo vistos **para** continuar aprendiendo sin repetir material que ya conozco.

- [ ] Se conserva el último instante de reproducción disponible y puedo continuar un vídeo iniciado y no terminado al volver a él.
- [ ] Puedo marcar un vídeo como visto aunque no lo haya reproducido por completo en la plataforma. Los vídeos que alcanzan el criterio de finalización automática también aparecen como vistos; el criterio técnico se definirá antes de implementar los tests.
- [ ] Los vistos pasan al final de su lista, conservan un estado identificable y siguen siendo accesibles. Se distingue internamente el marcado manual del progreso de reproducción (HU-27).
- [ ] Si el curso tiene temas, la tarjeta del tema muestra el progreso de sus vídeos y permite identificar los temas completados. Como criterio operativo propuesto, un tema está completo cuando todos sus vídeos están vistos.
- [ ] Puedo abrir cualquier contenido permitido, incluso uno visto o fuera del orden sugerido, sin penalización.

#### HU-38 · Activar o desactivar las preguntas de atención — Imprescindible

**Como** alumno, **quiero** activar o desactivar las preguntas de atención **para** elegir si deseo participar sin interrumpir mi aprendizaje.

- [ ] Desde el menú contextual del vídeo puedo consultar y cambiar el estado de las preguntas con un control comprensible.
- [ ] La preferencia queda guardada para mis siguientes accesos; desactivarlas oculta la tarjeta y evita nuevas apariciones mientras permanezcan desactivadas.
- [ ] Cambiar la preferencia no pausa, reinicia ni redimensiona el vídeo, no resta reputación y no condiciona las evaluaciones ni la certificación.
- [ ] Al reactivarlas se aplican los puntos de aparición correspondientes a la reproducción posterior, sin mostrar de golpe las preguntas omitidas.

#### HU-39 · Encontrar el siguiente contenido mediante ordenación adaptativa — Imprescindible

**Como** alumno, **quiero** encontrar primero el contenido pendiente que más me conviene estudiar **para** avanzar sin tener que gestionar un itinerario manualmente.

- [ ] En un curso plano, los vídeos independientes pendientes se ordenan adaptativamente; en un curso con temas, se ordenan adaptativamente las tarjetas de tema, no los vídeos dentro de cada tema.
- [ ] En las listas adaptativas, el último contenido iniciado y aún pendiente encabeza la lista (o su tema correspondiente). Tras completarlo, el siguiente pendiente se determina con los datos actuales.
- [ ] Entre los pendientes de un mismo tema se conserva el orden del docente; si abrí un vídeo fuera de secuencia, puedo reanudarlo sin reordenar algorítmicamente la lista interna. Los vistos o completados permanecen al final.
- [ ] El recomendador utiliza las señales disponibles pertinentes (competencias, dificultad, intereses, conocimientos previos, progreso y evaluaciones; señales relevantes de interacción cuando proceda). Cuando no hay información suficiente, se utiliza el orden docente entre los pendientes.
- [ ] Se recalcula al acceder a la lista y al completar o marcar como visto; con iguales entradas y configuración produce el mismo orden y conserva el orden canónico del docente. No modifica el orden de «Mis cursos».
- [ ] La ordenación es automática y silenciosa: no solicita confirmar sugerencias, no muestra números de orden, puntuaciones ni etiquetas algorítmicas y no impide abrir cualquier contenido permitido.
- [ ] El cálculo es independiente de la validez del modelo predictivo y no realiza llamadas a IA generativa por acceso. La prueba incluye dos perfiles con distinta prioridad y un caso sin información suficiente.

#### HU-40 · Encontrar las conversaciones activas del foro — Imprescindible

**Como** participante del foro de un curso, **quiero** encontrar las conversaciones con actividad reciente **para** seguir las dudas y aportaciones relevantes sin buscar en todo el historial.

- [ ] Los hilos se ordenan por fecha de última actividad descendente, manteniendo su fecha original de creación.
- [ ] Las respuestas anidadas se ordenan por última actividad entre sus hermanas del mismo nivel; cada nueva respuesta actualiza la actividad de su padre y de todos sus ancestros hasta el hilo raíz.
- [ ] Una respuesta a una respuesta de un hilo antiguo eleva su rama y el hilo completo por encima de otros con actividad anterior al volver a consultar el foro.
- [ ] Una respuesta publicada por IA aplica las mismas reglas de actividad y conserva su identificación como IA; ordenar no requiere IA generativa.
- [ ] El sistema conserva el contexto de lectura y composición al actualizar la lista; se propone aplicar el nuevo orden al entrar/refrescar, sin desplazar inesperadamente una respuesta que se está redactando.

#### HU-41 · Gestionar mis datos personales y preferencias — Deseable

**Como** alumno, **quiero** consultar y editar mis datos personales y preferencias **para** adaptar la plataforma a mis necesidades y mantener correcta mi información documental.

- [ ] Puedo acceder a mi perfil desde el menú global y consultar los datos que la plataforma conserva de mí, editar los campos permitidos y guardar los cambios.
- [ ] El perfil reúne acceso a mis intereses (HU-24), preferencias de aprendizaje (HU-38), reputación y logros (HU-21) y gestión de mis certificados (HU-32), sin exponer telemetría ni predicciones. La edición completa de datos de perfil es deseable; la navegación y los accesos básicos a esas funciones imprescindibles se resuelven sin ella.
- [ ] Solo se solicitan datos necesarios; los cambios se validan, se confirman al guardar y no alteran las cuentas de otros usuarios ni permiten cambiar el rol.
- [ ] La modificación de datos de perfil no reescribe de manera silenciosa certificados ya emitidos; su rectificación sigue el procedimiento que se acuerde. No se exige desplegar la gestión completa de perfil para emitir el certificado convencional imprescindible.

### Épica 11 · Experiencia y gestión contextual del docente

#### HU-42 · Gestionar mis cursos desde la experiencia común — Imprescindible

**Como** docente, **quiero** utilizar las vistas comunes de cursos, temas y vídeos con opciones de edición adicionales **para** preparar y mantener mi material sin aprender una interfaz distinta.

- [ ] Puedo acceder a mis cursos gestionados y a sus contenidos con los componentes comunes y las acciones adicionales correspondientes a mi permiso.
- [ ] En la vista de edición se conserva el orden pedagógico original (HU-05); puedo entrar a la gestión de vídeos, preguntas, evaluaciones, foro y seguimiento individual desde el contexto apropiado.
- [ ] Las opciones de edición y gestión solo están habilitadas para los cursos que poseo o gestiono; un usuario sin permiso no puede realizar la operación ni mediante acceso directo.
- [ ] Un administrador que posee o gestiona un curso utiliza las mismas vistas y acciones docentes sin un editor duplicado. Se reutilizan las capacidades funcionales de HU-05, HU-10, HU-12 y HU-28; esta historia verifica su integración, no una segunda implementación.

#### HU-43 · Configurar la intervención de IA en el foro — Imprescindible

**Como** docente, **quiero** configurar cuánto tiempo puede permanecer sin resolver una consulta de mi curso **para** decidir cuándo debe intervenir la IA y dar a los alumnos ocasión de ayudarse primero.

- [ ] Desde la gestión del curso puedo consultar y modificar un intervalo de espera válido para la respuesta de IA, con un valor predeterminado si no se ha personalizado.
- [ ] La configuración se guarda por curso y se utiliza para evaluar cuándo corresponde intervenir (HU-18). Una respuesta de IA solo se publica si se mantiene la condición de consulta sin resolver y se identifica como tal.
- [ ] No puedo modificar el intervalo de un curso ajeno sin permiso. Cambiarlo no cierra hilos ni altera retroactivamente la reputación.

### Épica 12 · Administración de plataforma y ciclo del modelo

#### HU-44 · Acceder al panel de administración de plataforma — Imprescindible

**Como** administrador, **quiero** disponer de un panel adicional con navegación estable **para** gestionar las funciones de plataforma sin depender del recorrido del alumno.

- [ ] Puedo abrir una página de administración exclusiva de mi rol y volver a la experiencia común; otros roles no tienen acceso por interfaz ni por ruta/API directa.
- [ ] El panel presenta controles estables para la recalibración manual (HU-29) y las funciones de plataforma implementadas; no aplica el orden adaptativo de contenidos a las herramientas administrativas.
- [ ] La interfaz se optimiza para escritorio, conserva identidad visual común y mantiene legibles y accesibles sus operaciones principales en pantallas pequeñas.
- [ ] El administrador que gestiona un curso puede entrar a sus vistas docentes (HU-42), sin duplicar la edición dentro del panel.

#### HU-45 · Configurar las integraciones de IA de la plataforma — Deseable

**Como** administrador, **quiero** gestionar las integraciones y modelos de IA utilizados por la plataforma **para** controlar qué proveedor presta cada función y limitar costes.

- [ ] Puedo consultar los proveedores/modelos configurados y asignar, entre los compatibles, los que se utilizarán en las funciones asistidas de IA implementadas (p. ej., preguntas, foros o investigación puntual).
- [ ] La configuración se valida y se guarda en servidor; los errores de configuración o indisponibilidad se comunican sin exponer secretos.
- [ ] Las credenciales se gestionan de forma segura en servidor. No se devuelven claves en claro al navegador, ni se incluyen en el repositorio, mockups o registros de ejecución.
- [ ] Cambiar proveedor no introduce llamadas generativas en la ordenación ni en la inferencia ordinaria. La demo imprescindible puede funcionar con una integración preconfigurada si no se implementa este panel de configuración.

#### HU-46 · Investigar patrones de aprendizaje de forma puntual — Deseable

**Como** administrador, **quiero** iniciar una investigación asistida de patrones en las señales de aprendizaje **para** evaluar posibles mejoras del modelo predictivo sin recurrir a IA generativa en cada interacción.

- [ ] Puedo iniciar expresamente una operación de análisis de los datos disponibles, separada de la inferencia y de la recalibración manual (HU-29).
- [ ] Se utiliza únicamente la información necesaria, con separación de identificadores y medidas de privacidad; si se usa IA generativa, su intervención es puntual.
- [ ] Puedo consultar el estado y resultado de la investigación, identificados como experimentales; las correlaciones no se presentan como causalidad ni evidencia validada sobre alumnos reales.
- [ ] La investigación no cambia automáticamente notas, certificados, accesos, ordenación del recomendador ni el modelo activo; su eventual incorporación se decide mediante el proceso de recalibración. No genera informes educativos agregados para el docente.

#### HU-47 · Consultar el historial técnico del modelo predictivo — Deseable

**Como** administrador, **quiero** consultar el estado y el historial de ejecuciones del modelo **para** conocer qué versión está activa y comprobar las operaciones realizadas.

- [ ] Puedo consultar las ejecuciones de recalibración registradas con fecha, estado y versión cuando corresponda, además de la última ejecución disponible en HU-29.
- [ ] Los resultados técnicos y gráficas, si están disponibles, se identifican como experimentales y distinguen los datos sintéticos; no se fabrican valores para llenar estados sin datos.
- [ ] Un error o ejecución incompleta se distingue de una ejecución correcta; el panel no confunde una operación iniciada con una versión activa.
- [ ] No se muestran credenciales ni datos personales innecesarios, ni se introducen informes agregados de desempeño educativo fuera del alcance del piloto.

#### HU-48 · Generar estimaciones individuales con el modelo almacenado — Imprescindible

**Como** docente, **quiero** que el sistema calcule estimaciones individuales a partir de las señales y resultados educativos disponibles **para** que mis informes se basen en un modelo ejecutable y no en valores inventados.

- [ ] Existe un proceso reproducible que transforma la telemetría de HU-27, los resultados de evaluaciones y las demás señales disponibles en entradas del modelo, diferenciando observaciones, marcado manual y datos ausentes.
- [ ] La recalibración manual de HU-29 ajusta un modelo estadístico o de aprendizaje automático a partir de asociaciones entre señales y resultados observados; considera el nivel de partida y la evolución cuando haya evaluaciones comparables. El algoritmo, las variables, los objetivos de estimación, el cálculo de confianza y la suficiencia de datos se concretan en la especificación técnica.
- [ ] Al construir ejemplos para entrenamiento y predicción se respeta el instante de corte: no se usan como entradas datos posteriores al instante de predicción ni el propio resultado que se pretende predecir. No se interpreta la correlación como causalidad.
- [ ] La inferencia utiliza la versión almacenada del modelo, sin IA generativa por acceso ni recalibración por alumno. Genera estimaciones numéricas de engagement y éxito formativo, su nivel de confianza y la referencia temporal y de versión, o «datos insuficientes» cuando corresponda.
- [ ] El resultado se incorpora al informe individual de HU-28. Existe una generación ordinaria con periodicidad semanal por defecto, independiente de HU-30; la consulta de informes y la recalibración manual no dependen de la investigación experimental de HU-46 ni del historial ampliado de HU-47.
- [ ] La demo verifica que la pipeline se ejecuta con distintos patrones sintéticos, que no depende de una puntuación precargada por alumno y que trata correctamente los datos insuficientes. Las estimaciones y su confianza se identifican como experimentales, no como probabilidades calibradas en población real.

## 4. Requisitos no funcionales

Se aplican a todas las historias.

| ID | Requisito | Ref. |
| --- | --- | --- |
| RNF-01 | Web app única, responsiva y mobile-first, priorizando la experiencia del alumno, después docente y después administrador; el panel administrativo puede optimizarse para PC. | Enunciado §5; DC §3 |
| RNF-02 | Los permisos se comprueban en el servidor en todas las operaciones. | §2 |
| RNF-03 | Privacidad desde el diseño: los usuarios pueden ser menores; se minimizan los datos y no hay vigilancia intrusiva. | §10 |
| RNF-04 | La telemetría detallada no se muestra ni a alumnos ni a docentes. | §8.3 |
| RNF-05 | Los datos enviados al proveedor de IA pasan por una capa de minimización y filtrado de identificadores, incluido texto libre, con identificadores efímeros cuando proceda. No enviar identificadores innecesarios; la seudonimización o intermediación no garantiza anonimato ni cumplimiento del RGPD. | §10 |
| RNF-06 | Infraestructura ligera y de bajo coste, para menos de 100 usuarios. | §11 |
| RNF-07 | Ninguna credencial privilegiada trivial en un despliegue público; secretos en variables de entorno. | §2 |
| RNF-08 | Los vídeos permanecen en el proveedor externo; la plataforma no los aloja. | §3, §11 |
| RNF-09 | Identidad visual y componentes coherentes: wordmark 480Academy en Figtree 700, 480 blanco y Academy rojo #FF4950 sobre negro #141414; tarjetas discretas y reutilizables. Contraste, foco visible, teclado y etiquetas accesibles; WCAG 2.2 AA como objetivo de diseño, no como certificación ya obtenida. | DC §2–4 |
| RNF-10 | La ordenación y la inferencia ordinaria se ejecutan sin llamadas a IA generativa por acceso; se separan el recomendador determinista y el modelo predictivo experimental. | DC §5.2, §11 |
| RNF-11 | No se superponen elementos ajenos al reproductor de YouTube ni se redimensiona por preguntas temporales; se preserva el estado al adaptar la orientación. | DC §6 |
| RNF-12 | Los estados de carga, error, ausencia de datos y permisos deben ser comprensibles; no presentar resultados ficticios como reales. Evitar desplazamientos inesperados y respetar las preferencias de movimiento reducido cuando existan animaciones. | DC §2, §5, §8, §12 |
| RNF-13 | Los datos sintéticos y resultados experimentales se identifican como tales en las vistas, informes y demostraciones pertinentes. La ejecución del piloto no acredita eficacia educativa, precisión predictiva ni validez de la confianza ante alumnos reales. | Enunciado §6; §8.2, §11–12; DC §11 |

## 5. Decisiones resueltas y cuestiones de refinamiento

Las historias siguen la memoria de decisiones y las convenciones de diseño del 27/11. Se conservan las decisiones resueltas para trazabilidad; las cuestiones técnicas y visuales abiertas se concretarán antes de su implementación. Los bocetos iniciales en papel no son fuente normativa.

1. **Test por vídeo o test por curso.** Resuelto en la propuesta de diseño: preguntas voluntarias durante el vídeo y tests por curso, accesibles desde el menú contextual; no se añade un test obligatorio por vídeo.
2. **Reportes de seguimiento al alumno.** Resuelto en la propuesta: progreso y resultados propios, sin predicciones ni telemetría detallada (HU-26, HU-28).
3. **Base de las recomendaciones.** El diseño amplía el recomendador determinista a unidades dentro de un curso (HU-39), que puede utilizar señales relevantes de interacción sin depender del modelo predictivo; los pesos y el criterio de suficiencia de datos quedan por definir.
4. **Fecha de despliegue.** Resuelto: la maqueta debe estar operativa antes de la presentación de la segunda jornada del lunes 30 de noviembre.
5. **Blockchain.** HU-34 depende de que el grupo acepte la propuesta; requiere solicitud y confirmación de datos antes de acuñar. La emisión convencional automática de HU-32 se conserva. Pendiente acordar cómo resolver datos del titular incompletos y rectificaciones de certificados ya emitidos, sin condicionar el certificado convencional a blockchain.
6. **Finalización y reanudación.** Definir el criterio de visto automático, el tratamiento de varios vídeos iniciados, la reversión de marcado (propuesta deseable) y los desempates estables de listas. El marcado manual no inventa telemetría. En un tema se respeta el orden docente; la reanudación fuera de secuencia no fuerza una reordenación interna.
7. **Menú, tarjetas y pantalla completa.** Refinar geometría del abanico, áreas de interacción y estados en Stitch; validar las capacidades de YouTube/navegadores. La pulsación prolongada configurable y las tarjetas superpuestas/arrastrables para otros proveedores quedan fuera de las exigencias del piloto.
8. **Foro.** HU-17 incluye valoración manual mínima y HU-18 la utiliza para decidir si procede intervenir, sin depender de HU-19 ni HU-20. Quedan por concretar el umbral de respuesta útil/correcta, las bonificaciones y los valores/intervalos de intervención. HU-19 conserva su prioridad deseable.
9. **Panel administrativo.** La configuración visual de integraciones, investigación puntual y detalles del historial son deseables; la integración preconfigurada y la recalibración manual deben poder demostrar los flujos imprescindibles sin ellas. Queda por precisar el alcance de otras funciones de gestión de plataforma/usuarios; no se introduce un CRUD completo de usuarios como requisito nuevo.
10. **Acceso a cursos.** «Mis cursos» representa los cursos a los que el alumno tiene acceso. El piloto habilita un curso de ejemplo para cuentas nuevas y prepara accesos para los perfiles sintéticos (HU-01, HU-06, HU-35); no incorpora adquisición comercial ni pago.
11. **Modelo predictivo.** HU-48 explicita el cálculo mínimo necesario para HU-28 y HU-29; se mantiene abierta la elección del algoritmo, las señales, el criterio de suficiencia y el método de cálculo de confianza. La investigación avanzada sigue siendo deseable.


## 6. Bucles de usuario y trazabilidad para el bootstrap

Los flujos siguientes comprueban que las historias funcionan conjuntamente. No sustituyen sus criterios de aceptación ni convierten lo deseable u opcional en bloqueante. Las flechas expresan recorridos de usuario, no una secuencia obligatoria de implementación.

| Rol / bucle | Recorrido de demostración | Historias |
| --- | --- | --- |
| Alumno · principal | Iniciar sesión → Mis cursos por último acceso → curso plano o tema → retomar vídeo → pregunta voluntaria → visto → lista actualizada → siguiente contenido | HU-02, HU-06, HU-07, HU-09, HU-36 a HU-39 |
| Alumno · social (apoyo al aprendizaje) | Abrir foro del curso/vídeo → publicar o responder → actividad actualizada en ancestros → respuesta de compañero o IA → reputación | HU-16 a HU-18, HU-21, HU-36, HU-40, HU-43; HU-19 y HU-20 si se implementan |
| Alumno · evaluación y progresión | Abrir evaluación desde el menú → test inicial voluntario si existe → test final voluntario → resultado/progreso → certificado por URL → recomendaciones | HU-13, HU-14, HU-23, HU-24, HU-26, HU-32, HU-33, HU-36; HU-15 si se implementa |
| Alumno · auxiliar | Consultar perfil → preferencias/logros → gestión de certificados → revisión y solicitud de acuñación si se aprueba | HU-21, HU-24, HU-32, HU-36, HU-38; HU-41 deseable y HU-34 opcional |
| Docente | Acceder a cursos gestionados → editar estructura original y vídeos → configurar bancos/tests → consultar alumnos e informes individuales → ajustar gestión/participar en foro | HU-02, HU-05, HU-10, HU-12, HU-17, HU-28, HU-36, HU-42, HU-43, HU-48; HU-11, HU-19, HU-20, HU-30, HU-31 según prioridad |
| Administrador | Abrir panel exclusivo → lanzar recalibración manual → comprobar estado, versión y última ejecución → volver a experiencia común o gestionar curso propio | HU-02, HU-29, HU-35, HU-42, HU-44, HU-48; HU-45 a HU-47 deseables |

### 6.1. Dependencias funcionales de integración

Relaciones mínimas para que los recorridos no queden incompletos. No son un DAG exhaustivo ni obligan a implementar una historia completa antes de comenzar otra; se pueden desarrollar en paralelo con contratos acordados. HU-03 y HU-35 habilitan datos/cuentas de la demo, no una dependencia de producción de cada funcionalidad.

| Historia o capacidad | Necesita / integra |
| --- | --- |
| HU-01, HU-06, HU-35 | Provisión mínima de acceso a cursos demostrativos para cuentas nuevas y sintéticas; HU-02 aplica los permisos. No requiere compras ni gestión completa de usuarios |
| HU-36, HU-42, HU-44 | HU-02 y comprobación de permisos; HU-42 reutiliza las operaciones de HU-05, HU-10, HU-12, HU-17 y HU-28, y HU-44 da acceso a HU-29 |
| HU-06, HU-07, HU-37, HU-39 | Modelo común de cursos y contenidos de HU-05, acceso autorizado de HU-02, estado de aprendizaje; HU-39 necesita el marcado/reanudación de HU-37 y reglas deterministas de HU-23, no el modelo predictivo |
| HU-09, HU-38 | Reproductor HU-07 y banco/puntos de aparición HU-10; HU-11 es una mejora de generación, no requisito para preguntas manuales |
| HU-13, HU-14, HU-15 | Evaluaciones configuradas en HU-12; HU-14 es imprescindible como capacidad, voluntaria como acción del alumno. No realizar el test inicial u omitir HU-15 no bloquea HU-13, HU-23, HU-39 ni HU-48 |
| HU-23, HU-24, HU-39 | Datos de cursos HU-05, captura/persistencia mínima de intereses HU-24, progreso y evaluaciones disponibles (HU-26, HU-27, HU-14). No dependen de HU-41, HU-15 ni HU-48; orden de respaldo sin datos suficientes |
| HU-18, HU-40, HU-43 | Foro HU-16, configuración de intervalo HU-43 para HU-18 y eventos de respuesta humana/IA para HU-40. La ordenación funciona sin IA; HU-40 no necesita esperar a que HU-18 esté implementada para ordenar respuestas humanas |
| HU-17, HU-18, HU-19, HU-21 | HU-16 y valoración manual mínima de HU-17; HU-18 respeta la condición de resolución y la bonificación única. HU-19 amplía la valoración con IA y HU-20 la moderación, sin bloquear HU-17. HU-21 integra reputación de HU-09 y HU-17; acceso básico sin HU-41 |
| HU-28, HU-29, HU-48 | HU-48 transforma señales HU-27 y evaluaciones HU-13/HU-14 disponibles, ajusta el modelo a través de HU-29 y genera estimaciones para HU-28. HU-44 da acceso a la recalibración; HU-35 habilita datos para la demo. HU-30 modifica la periodicidad semanal básica y HU-45 a HU-47 amplían el sistema sin bloquearlo |
| HU-32, HU-33 | Superación de HU-13, datos mínimos del titular y emisión/verificación convencional; el acceso documental básico no depende de HU-41. HU-34 depende de HU-32 y de la revisión de datos (HU-41 o el flujo mínimo equivalente de la propia HU-34), nunca al revés |
| HU-41 | Integra HU-21, HU-24, HU-32 y HU-38 en una experiencia de perfil ampliada; no es requisito para que sus funciones básicas estén disponibles |
| HU-25, HU-31 | HU-25 utiliza las recomendaciones de HU-23; HU-31 utiliza informes de HU-28/HU-48 y su umbral propio, sin depender de personalización de periodicidad HU-30. Ambas requieren un canal de correo configurado y siguen siendo opcionales |
| HU-45, HU-46, HU-47 | Permisos y panel HU-44; configuración segura de integración, datos y/o registros del modelo según la función. No condicionan las operaciones básicas preconfiguradas |

### 6.2. Refinamiento posterior a Stitch

Tras revisar el tablero y DESIGN.md, comprobar los flujos anteriores con sus estados alternativos y ajustar criterios, prioridades y dependencias antes de generar el bootstrap. Las convenciones de diseño mantienen el detalle visual; este documento especifica el comportamiento comprobable. No se exige desplegar las simulaciones de la memoria de presentación. La revisión de dependencias ya incorporada no presupone que el tablero ni DESIGN.md estén validados.
