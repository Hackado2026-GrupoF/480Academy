# 480Academy — Memoria de decisiones del piloto

**Hackado 2026 · Cuatroochenta / Universitat Jaume I · Grupo F**  
**Fecha:** 26 de noviembre de 2026  
**Entrega:** lunes 30 de noviembre de 2026

## 1. Propósito y alcance

Este documento recoge las decisiones de diseño que orientan la implementación de 480Academy. Complementa `480Academy-enunciado.md`, que recoge el problema y las restricciones del reto.

Se desarrollará una maqueta funcional desplegable antes de la segunda jornada de la hackathon, con prioridad absoluta a la demostración de los flujos de valor. No se exige un MVP comercial ni infraestructura preparada para producción a gran escala. Se favorecerá la reutilización posterior cuando no comprometa la entrega.

La solución combina evaluación, aprendizaje social, gamificación, recomendaciones y analítica predictiva para mejorar el aprovechamiento educativo y la capacidad de actuación del docente.

## 2. Roles, autenticación y acceso

Se establecen tres roles:

| Rol | Responsabilidad principal |
| --- | --- |
| Administrador | Gestión de la plataforma y ejecución manual de la recalibración del modelo predictivo. |
| Docente | Gestión de sus cursos, vídeos, preguntas y evaluaciones; participación y supervisión de los foros; seguimiento individual de sus alumnos. |
| Alumno | Acceso a cursos, contenidos, evaluaciones, recomendaciones, foros y perfil de progreso y reputación. |

- El despliegue incluirá cuentas de demostración preconfiguradas para administrador (`admin`) y docente (`docente`), generadas mediante un proceso de inicialización o *seeding*.
- Las cuentas nuevas serán de alumno por defecto. Se contempla el registro por correo electrónico y la incorporación de Google OAuth si resulta viable para la entrega.
- Los permisos deben aplicarse en el servidor. La autorización interna para acceder a un curso o sus recursos no dependerá exclusivamente de la interfaz ni del proveedor audiovisual.
- Se propusieron las credenciales `admin/admin` y `docente/docente` para facilitar la demo. En un despliegue público las contraseñas deberán configurarse de forma segura o limitarse a un entorno aislado; no se publicarán credenciales privilegiadas triviales.

## 3. Cursos y contenidos audiovisuales

- Los docentes organizan y publican sus cursos, enlazan los vídeos correspondientes y preparan el material de evaluación.
- Los cursos demostrativos podrán componerse de vídeos externos de YouTube, reproducidos mediante su integración autorizada.
- La integración audiovisual estará desacoplada del proveedor concreto para permitir incorporar otros servicios en el futuro. YouTube será el proveedor de la demostración.
- La plataforma gestionará metadatos, organización de cursos, permisos, evaluaciones y telemetría, no los archivos audiovisuales pesados.
- El piloto controla el acceso a los recursos dentro de 480Academy; no implementará protección propia del vídeo alojado externamente frente a accesos directos fuera de la plataforma.
- Se contempla un curso de bienvenida disponible desde el primer acceso, dedicado a explicar el funcionamiento de 480Academy. Su producción audiovisual queda condicionada a los recursos disponibles; no bloquea la entrega.

## 4. Evaluación formativa

### 4.1. Evaluación inicial y final

- El test inicial será voluntario y servirá para caracterizar los conocimientos previos del alumno y medir su evolución. No será requisito de certificación ni influirá en la nota que habilita el certificado.
- La ausencia de evaluación inicial se representa como información desconocida, no como una nota de cero ni como falta de competencias.
- Se utilizará la autoevaluación de confianza del alumno como información complementaria, diferenciándola del resultado objetivo de los tests.
- El test final será voluntario para el alumno, pero superarlo será necesario para obtener el certificado del curso.
- Se permiten hasta dos intentos del test final y se conserva la mayor calificación obtenida.
- El aprovechamiento educativo se analizará teniendo en cuenta tanto el nivel final como la mejora respecto al nivel de partida cuando exista información inicial.

### 4.2. Preguntas voluntarias durante los vídeos

Se incorporarán preguntas breves de atención y comprensión asociadas a segmentos del vídeo.

- La participación será voluntaria. Las preguntas aparecerán como ventanas emergentes sin detener ni bloquear la reproducción del vídeo; no se exigirá responder para continuar aprendiendo. Los puntos de aparición serán configurables según la duración del vídeo.
- Los bancos de preguntas se organizan por vídeo, segmento o tema, de forma que puedan reutilizarse y ampliarse de manera acumulativa. En cada aparición se seleccionará aleatoriamente una pregunta del banco correspondiente.
- La IA podrá generar las preguntas de antemano, evitando generar innecesariamente un nuevo conjunto por cada reproducción. El docente podrá revisarlas y corregirlas.
- Las preguntas se presentan en la plataforma, separadas del archivo audiovisual externo.
- Los aciertos pueden aportar reputación simbólica; los errores y las omisiones no penalizan.
- Cada vídeo tendrá un máximo de reputación obtenible por sus preguntas. Al repetirlo, el alumno podrá conseguir los puntos que le falten hasta alcanzar ese máximo, pero no acumular reputación indefinidamente mediante nuevas reproducciones.
- Las respuestas son señales complementarias de actividad y comprensión, no pruebas concluyentes de atención durante toda la reproducción.

## 5. Foros y aprendizaje colaborativo

El foro será el espacio de interacción entre alumnos, docentes e IA, evitando duplicar la experiencia con un chatbot independiente.

- Se fomentará que los alumnos respondan a las preguntas de sus compañeros y contribuyan al aprendizaje colectivo.
- La IA podrá participar como agente identificable dentro de los hilos, colaborar en la moderación y aportar respuestas cuando una consulta quede sin resolver durante un intervalo de tiempo configurable.
- Se contempla la valoración de la calidad de las respuestas mediante una puntuación de 0 a 10 representable mediante estrellas, con asistencia de IA. El docente podrá corregir las valoraciones.
- Se incentivarán la primera respuesta correcta y la rapidez de las contribuciones útiles. No se concederán puntos por responder a una pregunta propia.
- Cuando la IA responda a una consulta sin resolver, consumirá la bonificación por primera respuesta, pero no cerrará el hilo. Las aportaciones humanas posteriores seguirán pudiendo obtener reputación según su calidad. La IA no acumulará reputación.
- No se implementará un sistema específico de detección de colusión entre alumnos para la maqueta.
- El objetivo es mejorar la disponibilidad del feedback y reducir consultas repetitivas al docente sin sustituir su criterio educativo.

## 6. Gamificación y reputación

- Existirá una reputación global del alumno, de carácter simbólico, vinculada a contribuciones y actividades de valor formativo.
- La reputación podrá reflejarse en niveles y medallas o insignias persistentes, tanto globales como asociadas a cursos.
- Las preguntas de atención y las aportaciones útiles a los foros son mecanismos de obtención de reputación, conforme a las reglas de las secciones anteriores.
- La reputación no constituye dinero, crédito canjeable, nota académica ni requisito para acceder a contenidos o certificados.
- La academia podría identificar y contactar en el futuro con alumnos destacados para ofrecerles oportunidades de mentoría. No se implementarán roles, contratación ni flujos específicos de mentoría en el piloto.

## 7. Recomendación de itinerarios

Se implementará un recomendador determinista, independiente del modelo predictivo de aprendizaje.

- Se considerarán las competencias asociadas a los cursos, su dificultad, los conocimientos previos y los intereses del alumno.
- Las recomendaciones orientarán al alumno hacia contenidos adecuados a su perfil y sus objetivos.
- La navegación será libre. Las recomendaciones no constituyen prerrequisitos obligatorios ni bloquean cursos.
- El administrador podrá gestionar las notificaciones comerciales por correo electrónico destinadas a recomendar cursos a los alumnos.

## 8. Telemetría y modelo predictivo

### 8.1. Recogida de señales

La plataforma recogerá métricas propias para superar las limitaciones de un indicador binario de vídeo completado.

Se contemplan, según las capacidades del reproductor y del navegador:

- Progreso y segmentos efectivamente reproducidos, finalización, pausas, saltos, repeticiones y velocidad de reproducción.
- Tiempo de permanencia, inactividad y visibilidad de la página, interpretados en su contexto.
- Respuestas a las preguntas de atención, desempeño en evaluaciones iniciales y finales, y autoevaluación de confianza.
- Actividad educativa complementaria, como contribuciones al foro y recurrencia en cursos.

Ninguna señal aislada equivale a atención, comprensión o desinterés. Por ejemplo, la reproducción completa seguida de inactividad podría corresponder a un alumno ausente, mientras que una reproducción parcial con repeticiones podría indicar aprovechamiento activo.

La aproximación prioriza la interacción con los contenidos y evita depender de vigilancia mediante cámaras, grabaciones o sensores físicos invasivos.

### 8.2. Correlación y aprendizaje del modelo

- Se empleará IA para encontrar relaciones y patrones entre las señales recogidas y los resultados formativos.
- El objetivo es estimar el engagement y el desempeño educativo mediante múltiples señales, contrastándolos con el nivel final y la evolución del alumno cuando puedan medirse.
- El sistema tendrá en cuenta el nivel de partida y la información ausente. No se interpretará automáticamente un dato ausente como evidencia negativa.
- El modelo emitirá inferencias individualizadas sobre cada alumno, diferenciando predicciones probabilísticas de los hechos observados. Las estimaciones de engagement y éxito formativo se expresarán numéricamente y estarán acompañadas de su correspondiente nivel de confianza. Cuando los datos disponibles sean insuficientes para emitir una predicción, se indicará expresamente esa circunstancia en lugar de mostrar una puntuación sin fundamento.
- La recalibración o mejora del modelo será una operación manual iniciada por el administrador, separada de la generación habitual de predicciones. Para la demo se contempla ejecutar la recalibración en varias ocasiones; no se fija una periodicidad automática.
- El algoritmo concreto, la representación de las señales y los parámetros numéricos se resolverán durante la implementación, sin presuponer eficacia predictiva validada.

### 8.3. Informes y permisos de visualización

| Información | Alumno | Docente |
| --- | --- | --- |
| Desempeño y progreso | Propio | De sus alumnos |
| Reputación y logros | Propios | Según los permisos correspondientes |
| Predicciones individualizadas y su confianza | No | Sí, para sus alumnos |
| Telemetría detallada subyacente al modelo | No expuesta | No expuesta |

- El docente configurará el cálculo de patrones y la periodicidad de los informes, semanal por defecto.
- El docente podrá configurar avisos educativos por correo electrónico a sus alumnos rezagados y establecer el umbral de éxito formativo que se utilizará para identificar a los destinatarios de dichos avisos.
- Los informes del piloto se centran **exclusivamente en el nivel individual de cada alumno**. No se desarrollarán informes agregados del curso o de la plataforma.
- La finalidad de las predicciones es orientar el seguimiento educativo del docente. No constituyen hechos comprobados ni deben determinar automáticamente notas, certificados o restricciones de acceso.

## 9. Certificación

- La academia podrá emitir certificados propios, no reglados, al superar la evaluación final del curso.
- Los certificados dispondrán de una URL accesible que permita consultarlos o acreditar su emisión.
- No se exige haber realizado el test inicial ni obtener reputación para recibir un certificado.

### Propuesta adicional: acuñación en blockchain

Como propuesta individual de Miguel Campins, todavía no compartida ni consensuada con el resto del Grupo F, se contempla que los certificados propios de la academia puedan acuñarse en blockchain para aportar una capa adicional de verificabilidad e integridad.

Esta posibilidad puede incorporarse a la prueba de concepto si el alcance y el tiempo disponible lo permiten. Complementa, no sustituye, la certificación accesible mediante URL y no constituye un requisito imprescindible para la entrega. En caso de implementarse, se evitará publicar datos personales de los alumnos en la cadena; se priorizarán identificadores o compromisos criptográficos adecuados y la conservación de la información personal fuera de ella.

## 10. Privacidad y protección de datos

La plataforma se diseña teniendo en cuenta que sus futuros usuarios pueden ser menores de edad.

- Minimizar la recogida de datos y limitar su uso a las finalidades educativas y operativas pertinentes.
- Evitar acceso a cámaras, extracción de imágenes de alumnos y vigilancia física intrusiva.
- Separar identidad de usuario y datos de analítica mediante identificadores seudónimos o datos verdaderamente anónimos cuando resulte posible.
- Evitar transferir al proveedor de IA datos identificativos innecesarios. Se contempla una capa intermediaria que reduzca la exposición de identificadores, utilizando identificadores efímeros cuando proceda.
- La intermediación y la seudonimización no garantizan por sí mismas el anonimato ni el cumplimiento del RGPD. La aplicación a usuarios reales requerirá definir bases jurídicas, permisos, conservación y garantías adecuadas.
- Utilizar datos sintéticos para los escenarios de demostración, sin atribuirlos a alumnos reales.

## 11. Infraestructura y demostración

- Se contempla Vercel Hobby como opción de despliegue para la maqueta, sujeto a sus condiciones de uso aplicables. No se establece como proveedor obligatorio ni como arquitectura definitiva.
- Se almacenarán perfiles, cursos, evaluaciones, foros, reputación y métricas en los servicios de datos que se seleccionen; los vídeos permanecen en el proveedor externo.
- Se preparará un script o proceso de *seeding* que genere datos sintéticos de uso y permita demostrar los flujos de analítica y los distintos patrones de comportamiento. Se incluirán casos contrastantes y ambiguos, sin presentar las asociaciones sintéticas como evidencia empírica.
- El entorno de demostración prevé menos de 100 usuarios y prioriza funcionalidad, simplicidad y coste reducido.
- La escalabilidad comercial y las decisiones definitivas de explotación quedan fuera del alcance inmediato.

## 12. Flujos prioritarios de demostración

1. Acceder como alumno, explorar un curso, reproducir un vídeo y responder voluntariamente a una pregunta de atención.
2. Realizar evaluaciones, observar el progreso y consultar reputación, logros y recomendaciones.
3. Publicar una consulta o contribución en el foro y mostrar la interacción o moderación asistida por IA.
4. Acceder como docente, gestionar contenido y preguntas, revisar contribuciones y consultar los informes predictivos individuales de sus alumnos.
5. Acceder como administrador y ejecutar una recalibración del modelo con los datos demostrativos.
6. Mostrar el flujo de certificación propia mediante URL y, si se incorpora, su extensión blockchain.

Los escenarios de demostración orientan la implementación y no convierten las mejoras opcionales en condiciones de aceptación. Los datos sintéticos prueban el funcionamiento del piloto, no la precisión del modelo ante alumnos reales ni una mejora educativa efectiva.
