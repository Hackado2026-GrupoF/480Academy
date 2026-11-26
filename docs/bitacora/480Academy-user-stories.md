# 480Academy — Historias de usuario

**Hackado 2026 · Cuatroochenta / Universitat Jaume I · Grupo F**  
**Fecha:** 26 de noviembre de 2026  
**Entrega:** lunes 30 de noviembre de 2026

## 1. Propósito

Este documento traduce las decisiones de `480Academy-memoria-decisiones.md` a historias de usuario con criterios de aceptación y prioridad. Sirve para repartir el trabajo y para comprobar cuándo cada funcionalidad está terminada.

Formato de cada historia:

> **Como** [rol], **quiero** [acción] **para** [beneficio].

Prioridades:

| Prioridad | Significado |
| --- | --- |
| **Imprescindible** | Necesaria para alguno de los flujos prioritarios de demostración (sección 12 de la memoria). Sin ella no hay demo. |
| **Deseable** | Aporta valor claro, pero la demo funciona sin ella. Se hace cuando lo imprescindible está terminado. |
| **Opcional** | Mejora que solo se aborda si sobra tiempo. |

La columna «Ref.» indica la sección de la memoria de la que procede cada historia.

## 2. Resumen

| ID | Historia | Rol | Prioridad | Ref. |
| --- | --- | --- | --- | --- |
| HU-01 | Registrarse con correo electrónico | Visitante | Imprescindible | §2 |
| HU-02 | Iniciar sesión y acceder según el rol | Usuario | Imprescindible | §2 |
| HU-03 | Cuentas de demostración preconfiguradas | Equipo | Imprescindible | §2, §11 |
| HU-04 | Registro e inicio de sesión con Google | Visitante | Opcional | §2 |
| HU-05 | Crear y publicar un curso con vídeos | Docente | Imprescindible | §3 |
| HU-06 | Explorar cursos y ver su contenido | Alumno | Imprescindible | §3, §12 |
| HU-07 | Reproducir un vídeo dentro de la plataforma | Alumno | Imprescindible | §3 |
| HU-08 | Curso de bienvenida | Alumno | Opcional | §3 |
| HU-09 | Responder preguntas emergentes durante el vídeo | Alumno | Imprescindible | §4.2 |
| HU-10 | Gestionar bancos de preguntas de los vídeos | Docente | Imprescindible | §4.2 |
| HU-11 | Generar preguntas con IA y revisarlas | Docente | Deseable | §4.2 |
| HU-12 | Crear el test inicial y el test final del curso | Docente | Imprescindible | §4.1 |
| HU-13 | Realizar el test final | Alumno | Imprescindible | §4.1 |
| HU-14 | Realizar el test inicial voluntario | Alumno | Deseable | §4.1 |
| HU-15 | Autoevaluar mi confianza | Alumno | Deseable | §4.1 |
| HU-16 | Publicar una consulta en el foro del curso | Alumno | Imprescindible | §5 |
| HU-17 | Responder a compañeros y ganar reputación | Alumno | Imprescindible | §5, §6 |
| HU-18 | Respuesta de la IA a consultas sin resolver | Alumno | Imprescindible | §5 |
| HU-19 | Valoración de respuestas con asistencia de IA | Docente | Deseable | §5 |
| HU-20 | Supervisar y moderar los foros | Docente | Deseable | §2, §5 |
| HU-21 | Consultar reputación, nivel e insignias | Alumno | Imprescindible | §6 |
| HU-22 | Insignias asociadas a cursos | Alumno | Opcional | §6 |
| HU-23 | Recibir recomendaciones de cursos | Alumno | Imprescindible | §7 |
| HU-24 | Indicar mis intereses | Alumno | Deseable | §7 |
| HU-25 | Gestionar correos comerciales de recomendación | Administrador | Opcional | §7 |
| HU-26 | Consultar mi progreso y desempeño | Alumno | Imprescindible | §8.3, §12 |
| HU-27 | Registro de la telemetría de visualización | Docente | Imprescindible | §8.1 |
| HU-28 | Consultar el informe predictivo de cada alumno | Docente | Imprescindible | §8.2, §8.3 |
| HU-29 | Recalibrar manualmente el modelo predictivo | Administrador | Imprescindible | §8.2 |
| HU-30 | Configurar la periodicidad de los informes | Docente | Deseable | §8.3 |
| HU-31 | Avisos por correo a alumnos rezagados | Docente | Opcional | §8.3 |
| HU-32 | Obtener un certificado al superar el curso | Alumno | Imprescindible | §9 |
| HU-33 | Verificar un certificado mediante su URL | Tercero | Imprescindible | §9 |
| HU-34 | Acuñar certificados en blockchain | Alumno | Opcional | §9 |
| HU-35 | Generar datos sintéticos de demostración | Equipo | Imprescindible | §11 |

Total: 35 historias (22 imprescindibles, 7 deseables, 6 opcionales).

## 3. Historias de usuario

### Épica 1 · Acceso y roles

#### HU-01 · Registrarse con correo electrónico — Imprescindible

**Como** visitante, **quiero** registrarme con mi correo electrónico **para** acceder a los cursos como alumno.

- [ ] El formulario pide correo y contraseña y funciona en pantallas de móvil.
- [ ] Toda cuenta nueva recibe el rol de alumno; el usuario no puede elegir otro rol.
- [ ] No se puede registrar dos veces el mismo correo.
- [ ] Solo se piden los datos necesarios para usar la plataforma (minimización de datos).

#### HU-02 · Iniciar sesión y acceder según el rol — Imprescindible

**Como** usuario registrado, **quiero** iniciar sesión **para** acceder a las funciones de mi rol.

- [ ] Tras iniciar sesión, cada rol llega a su pantalla principal (alumno, docente o administrador).
- [ ] Los permisos se comprueban en el servidor, no solo ocultando botones en la interfaz.
- [ ] Un alumno que llama directamente a una ruta o API de docente o administrador recibe un error de acceso.
- [ ] Un docente solo puede gestionar sus propios cursos y ver datos de sus propios alumnos.

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

**Como** docente, **quiero** crear un curso organizado en temas y enlazar vídeos de YouTube **para** ofrecer formación a mis alumnos.

- [ ] Puedo crear un curso con título, descripción, competencias asociadas y dificultad.
- [ ] Puedo añadir temas al curso y vídeos a cada tema, con título, descripción y enlace de YouTube.
- [ ] Puedo editar el curso y publicarlo o despublicarlo; los alumnos solo ven los cursos publicados.
- [ ] La plataforma guarda solo metadatos y enlaces, nunca los archivos de vídeo.

#### HU-06 · Explorar cursos y ver su contenido — Imprescindible

**Como** alumno, **quiero** explorar los cursos disponibles y ver sus temas **para** elegir qué aprender.

- [ ] El panel principal (dashboard) muestra los cursos disponibles y los que he empezado.
- [ ] La pantalla de un curso muestra su título, sus temas y un acceso para continuar donde lo dejé.
- [ ] La navegación es libre: ningún curso queda bloqueado por prerrequisitos.
- [ ] Todas las pantallas se usan cómodamente desde el móvil.

#### HU-07 · Reproducir un vídeo dentro de la plataforma — Imprescindible

**Como** alumno, **quiero** ver los vídeos del curso dentro de 480Academy **para** aprender sin salir de la plataforma.

- [ ] El vídeo se reproduce con la integración autorizada de YouTube (reproductor embebido).
- [ ] La pantalla del vídeo muestra su título y descripción.
- [ ] El código del reproductor está desacoplado del proveedor, de modo que se pueda añadir otro servicio sin cambiar el resto de la aplicación.
- [ ] Solo los usuarios con acceso al curso pueden abrir sus vídeos desde la plataforma.

#### HU-08 · Curso de bienvenida — Opcional

**Como** alumno nuevo, **quiero** tener disponible un curso de bienvenida desde el primer acceso **para** entender cómo funciona 480Academy.

- [ ] El curso aparece en el panel de cualquier alumno nuevo.
- [ ] Si no hay vídeos propios, puede componerse con texto o con vídeos existentes; su ausencia no bloquea la entrega.

### Épica 3 · Evaluación formativa

#### HU-09 · Responder preguntas emergentes durante el vídeo — Imprescindible

**Como** alumno, **quiero** responder preguntas breves mientras veo un vídeo **para** comprobar si estoy entendiendo el contenido.

- [ ] La pregunta aparece como ventana emergente en los puntos configurados del vídeo.
- [ ] La pregunta no detiene ni bloquea el vídeo; puedo cerrarla o ignorarla y seguir aprendiendo.
- [ ] En cada aparición se elige al azar una pregunta del banco correspondiente.
- [ ] Al responder veo si he acertado.
- [ ] Un acierto suma reputación; un error o una omisión no restan nada.
- [ ] Cada vídeo tiene un máximo de reputación obtenible. Si repito el vídeo, solo puedo ganar los puntos que me falten hasta ese máximo.

#### HU-10 · Gestionar bancos de preguntas de los vídeos — Imprescindible

**Como** docente, **quiero** gestionar bancos de preguntas asociados a vídeos, segmentos o temas **para** controlar qué se pregunta a los alumnos.

- [ ] Puedo crear, editar y borrar preguntas de opción múltiple indicando la respuesta correcta.
- [ ] Puedo asociar cada banco a un vídeo, a un segmento del vídeo o a un tema, y reutilizarlo en varios vídeos.
- [ ] Puedo configurar los momentos del vídeo en los que aparecen las preguntas.
- [ ] Puedo ampliar un banco sin perder las preguntas existentes.

#### HU-11 · Generar preguntas con IA y revisarlas — Deseable

**Como** docente, **quiero** que la IA me proponga preguntas para un vídeo **para** ahorrar tiempo al preparar los bancos.

- [ ] Puedo pedir a la IA un conjunto de preguntas a partir del tema o la descripción del vídeo.
- [ ] Las preguntas se generan de antemano y se guardan en el banco; no se generan en cada reproducción.
- [ ] Las preguntas generadas quedan pendientes de revisión hasta que las apruebo o las corrijo.

#### HU-12 · Crear el test inicial y el test final del curso — Imprescindible

**Como** docente, **quiero** preparar el test inicial y el test final de mi curso **para** medir el nivel de partida y el aprendizaje de mis alumnos.

- [ ] Puedo crear, editar y borrar las preguntas de cada test.
- [ ] Puedo fijar la nota mínima del test final que habilita el certificado.

#### HU-13 · Realizar el test final — Imprescindible

**Como** alumno, **quiero** realizar el test final del curso **para** demostrar lo aprendido y obtener el certificado.

- [ ] El test final es voluntario.
- [ ] Puedo hacer como máximo dos intentos.
- [ ] Se conserva la calificación más alta de los intentos.
- [ ] Al terminar veo mi nota y si he superado el umbral del certificado.

#### HU-14 · Realizar el test inicial voluntario — Deseable

**Como** alumno, **quiero** hacer un test inicial voluntario **para** conocer mi nivel de partida y ver después cuánto he mejorado.

- [ ] El test inicial es opcional y no influye en la nota del certificado.
- [ ] Si no lo hago, mi nivel inicial figura como «desconocido», nunca como un cero.
- [ ] Si lo hago, mi progreso muestra la mejora entre el test inicial y el final.

#### HU-15 · Autoevaluar mi confianza — Deseable

**Como** alumno, **quiero** indicar lo seguro que me siento sobre un tema **para** reflexionar sobre mi aprendizaje.

- [ ] Puedo indicar mi nivel de confianza (por ejemplo, de 1 a 5) al hacer los tests.
- [ ] La autoevaluación se guarda y se muestra separada de las notas objetivas de los tests.

### Épica 4 · Foros y aprendizaje colaborativo

#### HU-16 · Publicar una consulta en el foro del curso — Imprescindible

**Como** alumno, **quiero** publicar dudas en el foro del curso **para** que me ayuden mis compañeros, el docente o la IA.

- [ ] Cada curso tiene su propio foro con hilos.
- [ ] Puedo crear un hilo con título y texto, y responder en hilos existentes.
- [ ] Veo cuándo un hilo tiene respuestas nuevas.

#### HU-17 · Responder a compañeros y ganar reputación — Imprescindible

**Como** alumno, **quiero** ganar reputación al responder bien a mis compañeros **para** sentir que mi ayuda se reconoce.

- [ ] Una respuesta útil a la consulta de otra persona suma reputación según su valoración.
- [ ] La primera respuesta correcta y las respuestas útiles rápidas reciben una bonificación.
- [ ] Responder a una consulta propia no da puntos.

#### HU-18 · Respuesta de la IA a consultas sin resolver — Imprescindible

**Como** alumno, **quiero** que la IA responda mi consulta si nadie lo hace en un tiempo **para** no quedarme bloqueado esperando.

- [ ] Si una consulta sigue sin resolver tras un intervalo configurable, la IA publica una respuesta en el hilo.
- [ ] La respuesta de la IA aparece claramente identificada como generada por IA.
- [ ] La IA consume la bonificación de primera respuesta, pero no cierra el hilo.
- [ ] Las respuestas humanas posteriores pueden seguir ganando reputación según su calidad.
- [ ] La IA no acumula reputación.
- [ ] El texto enviado al proveedor de IA no incluye nombres, correos ni otros identificadores del alumno (anonimizador).

#### HU-19 · Valoración de respuestas con asistencia de IA — Deseable

**Como** docente, **quiero** que la IA proponga una valoración de cada respuesta del foro **para** reconocer las buenas aportaciones sin revisarlas todas a mano.

- [ ] Cada respuesta recibe una puntuación de 0 a 10, mostrada como estrellas.
- [ ] La IA propone la puntuación y yo puedo corregirla.
- [ ] La reputación del autor se recalcula si cambio la puntuación.

#### HU-20 · Supervisar y moderar los foros — Deseable

**Como** docente, **quiero** supervisar y moderar los foros de mis cursos, con ayuda de la IA, **para** mantener un espacio útil y respetuoso.

- [ ] Puedo participar en cualquier hilo de mis cursos con mi rol identificado.
- [ ] Puedo ocultar o eliminar mensajes inadecuados.
- [ ] La IA puede marcar mensajes potencialmente inadecuados para que yo los revise.

### Épica 5 · Gamificación y reputación

#### HU-21 · Consultar reputación, nivel e insignias — Imprescindible

**Como** alumno, **quiero** ver mi reputación, mi nivel y mis insignias **para** seguir mi evolución y sentirme motivado.

- [ ] Mi perfil muestra mi reputación global, mi nivel y mis insignias.
- [ ] Puedo ver de dónde proceden mis puntos (preguntas de vídeo, foros).
- [ ] La reputación es simbólica: no es una nota, no se canjea y no da acceso a contenidos ni a certificados.

#### HU-22 · Insignias asociadas a cursos — Opcional

**Como** alumno, **quiero** obtener insignias específicas de cada curso **para** mostrar mis logros en temas concretos.

- [ ] Existen insignias ligadas a un curso además de las globales.
- [ ] Las insignias son persistentes: no se pierden una vez obtenidas.

### Épica 6 · Recomendaciones

#### HU-23 · Recibir recomendaciones de cursos — Imprescindible

**Como** alumno, **quiero** recibir recomendaciones de cursos adecuados a mi perfil **para** saber qué estudiar a continuación.

- [ ] El recomendador es determinista: con los mismos datos da siempre las mismas recomendaciones.
- [ ] Tiene en cuenta las competencias y la dificultad de los cursos, mis conocimientos previos y mis intereses.
- [ ] Es independiente del modelo predictivo de aprendizaje.
- [ ] Las recomendaciones son orientativas: no bloquean ningún curso.

#### HU-24 · Indicar mis intereses — Deseable

**Como** alumno, **quiero** indicar mis intereses y objetivos **para** que las recomendaciones se ajusten a lo que busco.

- [ ] Puedo elegir intereses de una lista de competencias o temas.
- [ ] Puedo cambiarlos en cualquier momento y las recomendaciones se actualizan.

#### HU-25 · Gestionar correos comerciales de recomendación — Opcional

**Como** administrador, **quiero** gestionar los correos que recomiendan cursos a los alumnos **para** promocionar contenidos relevantes.

- [ ] Puedo activar o desactivar los envíos y editar su contenido.
- [ ] Los alumnos pueden darse de baja de estos correos.

### Épica 7 · Progreso, telemetría y modelo predictivo

#### HU-26 · Consultar mi progreso y desempeño — Imprescindible

**Como** alumno, **quiero** ver mi progreso en cada curso y mis resultados **para** saber cómo voy.

- [ ] Veo qué vídeos y temas he completado y mis notas de los tests.
- [ ] Solo veo mis propios datos.
- [ ] No veo predicciones sobre mí ni la telemetría detallada.

#### HU-27 · Registro de la telemetría de visualización — Imprescindible

**Como** docente, **quiero** que la plataforma registre cómo interactúan los alumnos con los vídeos **para** tener información más útil que «vídeo completado».

- [ ] Se registran, según lo que permita el reproductor: progreso, segmentos reproducidos, finalización, pausas, saltos, repeticiones y velocidad.
- [ ] Se registran tiempo de permanencia, inactividad y visibilidad de la página.
- [ ] Se guardan también las respuestas a preguntas, las notas de los tests, la autoevaluación, la actividad en foros y la recurrencia en cursos.
- [ ] No se usan cámaras, micrófonos, grabaciones ni sensores físicos.
- [ ] Los datos de analítica se guardan con identificadores seudónimos, separados de la identidad del usuario cuando sea posible.

#### HU-28 · Consultar el informe predictivo de cada alumno — Imprescindible

**Como** docente, **quiero** ver una predicción individual de engagement y éxito formativo de cada alumno **para** detectar a quién debo ayudar.

- [ ] Para cada uno de mis alumnos veo su desempeño, su progreso y una estimación numérica de engagement y de éxito formativo.
- [ ] Cada estimación muestra su nivel de confianza.
- [ ] Si no hay datos suficientes, se indica «datos insuficientes» en lugar de una puntuación.
- [ ] Los datos ausentes (por ejemplo, no haber hecho el test inicial) no cuentan como evidencia negativa.
- [ ] Los hechos observados y las predicciones se muestran claramente diferenciados.
- [ ] Los informes son solo individuales; no hay informes agregados del curso ni de la plataforma.
- [ ] Las predicciones no cambian automáticamente notas, certificados ni accesos.

#### HU-29 · Recalibrar manualmente el modelo predictivo — Imprescindible

**Como** administrador, **quiero** lanzar a mano la recalibración del modelo **para** que use los datos más recientes.

- [ ] Un botón en el panel de administración inicia la recalibración.
- [ ] La recalibración está separada de la generación habitual de predicciones.
- [ ] Se puede ejecutar varias veces durante la demo y se muestra cuándo se hizo la última.
- [ ] No hay recalibraciones automáticas periódicas.

#### HU-30 · Configurar la periodicidad de los informes — Deseable

**Como** docente, **quiero** configurar cada cuánto se calculan los patrones y se generan mis informes **para** adaptarlos a mi forma de trabajar.

- [ ] La periodicidad por defecto es semanal.
- [ ] Puedo cambiarla desde la configuración de mis cursos.

#### HU-31 · Avisos por correo a alumnos rezagados — Opcional

**Como** docente, **quiero** enviar avisos educativos por correo a los alumnos que van rezagados **para** animarles a continuar.

- [ ] Puedo definir el umbral de éxito formativo por debajo del cual se considera que un alumno va rezagado.
- [ ] Puedo activar, desactivar y redactar los avisos.
- [ ] Los avisos tienen tono educativo y no revelan la predicción numérica al alumno.

### Épica 8 · Certificación

#### HU-32 · Obtener un certificado al superar el curso — Imprescindible

**Como** alumno, **quiero** recibir un certificado al superar el test final **para** acreditar lo que he aprendido.

- [ ] El certificado se emite automáticamente al superar la nota mínima del test final.
- [ ] No hace falta haber hecho el test inicial ni tener reputación.
- [ ] El certificado indica que es un certificado propio de la academia, no reglado.
- [ ] Cada certificado tiene una URL única que puedo copiar y compartir.

#### HU-33 · Verificar un certificado mediante su URL — Imprescindible

**Como** tercero (por ejemplo, una empresa), **quiero** abrir la URL de un certificado **para** comprobar que es auténtico.

- [ ] La URL es pública y no exige iniciar sesión.
- [ ] Muestra el curso, la fecha de emisión y el titular, sin datos personales innecesarios.
- [ ] Una URL inexistente o manipulada muestra que el certificado no es válido.

#### HU-34 · Acuñar certificados en blockchain — Opcional

**Como** alumno, **quiero** que mi certificado quede registrado en blockchain **para** que su integridad se pueda verificar de forma independiente.

- [ ] Complementa la certificación por URL; no la sustituye.
- [ ] En la cadena no se publican datos personales: solo identificadores o compromisos criptográficos (por ejemplo, un *hash*).
- [ ] La página del certificado enlaza con su registro en la cadena.

> Pendiente de consenso: es una propuesta individual de Miguel Campins que el Grupo F todavía no ha acordado.

### Épica 9 · Datos de demostración

#### HU-35 · Generar datos sintéticos de demostración — Imprescindible

**Como** miembro del equipo, **quiero** un proceso de *seeding* que genere datos sintéticos **para** demostrar los flujos de analítica sin datos reales.

- [ ] Crea cursos de ejemplo con vídeos de YouTube, bancos de preguntas, tests y hilos de foro.
- [ ] Crea alumnos ficticios con patrones de comportamiento variados, incluidos casos contrastantes y ambiguos (por ejemplo, vídeo completo con inactividad, o reproducción parcial con repeticiones).
- [ ] Los datos están identificados como sintéticos y no se atribuyen a personas reales.
- [ ] Con estos datos se puede recalibrar el modelo y ver informes predictivos.

## 4. Requisitos no funcionales

Se aplican a todas las historias.

| ID | Requisito | Ref. |
| --- | --- | --- |
| RNF-01 | La interfaz está diseñada primero para móvil. | Enunciado §5 |
| RNF-02 | Los permisos se comprueban en el servidor en todas las operaciones. | §2 |
| RNF-03 | Privacidad desde el diseño: los usuarios pueden ser menores; se minimizan los datos y no hay vigilancia intrusiva. | §10 |
| RNF-04 | La telemetría detallada no se muestra ni a alumnos ni a docentes. | §8.3 |
| RNF-05 | Los datos enviados al proveedor de IA pasan por una capa que elimina identificadores, con identificadores efímeros cuando proceda. | §10 |
| RNF-06 | Infraestructura ligera y de bajo coste, para menos de 100 usuarios. | §11 |
| RNF-07 | Ninguna credencial privilegiada trivial en un despliegue público; secretos en variables de entorno. | §2 |
| RNF-08 | Los vídeos permanecen en el proveedor externo; la plataforma no los aloja. | §3, §11 |

## 5. Cuestiones pendientes de aclarar

Puntos en los que la hoja de acuerdos del 23/11 y la memoria de decisiones no coinciden. Las historias anteriores siguen la memoria.

1. **Test por vídeo o test por curso.** El boceto de pantallas incluye un «test del vídeo» al final de cada vídeo. La memoria define preguntas emergentes durante el vídeo y un test final por curso.
2. **Reportes de seguimiento al alumno.** El diagrama de arquitectura envía «reportes de seguimiento» de la IA al alumno. La memoria establece que el alumno no ve las predicciones (HU-26).
3. **Base de las recomendaciones.** La hoja habla de «recomendaciones basadas en métricas de uso». La memoria define un recomendador determinista basado en competencias, dificultad e intereses, independiente del modelo predictivo (HU-23).
4. **Fecha de despliegue.** La memoria pide la maqueta desplegada «antes de la segunda jornada»; el enunciado fija la entrega el lunes 30 de noviembre.
5. **Blockchain.** HU-34 depende de que el grupo acepte la propuesta.
