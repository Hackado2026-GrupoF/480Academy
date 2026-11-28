# 480Academy — Memoria de decisiones del piloto

**Hackado 2026 · Cuatroochenta / Universitat Jaume I · Grupo F**  
**Fecha:** 26 de noviembre de 2026  
**Última revisión:** 28 de noviembre de 2026 — permisos, catálogo, orden configurable y HTML5.  
**Entrega:** lunes 30 de noviembre de 2026

## 1. Propósito y alcance

Este documento recoge las decisiones de diseño que orientan la implementación de 480Academy. Complementa `480Academy-enunciado.md`, que recoge el problema y las restricciones del reto.

Se desarrollará una maqueta funcional desplegable antes de la segunda jornada de la hackathon, con prioridad absoluta a la demostración de los flujos de valor. No se exige un MVP comercial ni infraestructura preparada para producción a gran escala. Se favorecerá la reutilización posterior cuando no comprometa la entrega.

La solución combina evaluación, aprendizaje social, gamificación, recomendaciones y analítica predictiva para mejorar el aprovechamiento educativo y la capacidad de actuación del docente.

## 2. Roles, autenticación y acceso

Tres roles globales y permisos independientes por curso. Las funciones de administración de negocio/plataforma no incluyen por sí mismas las de docencia. La condición de docente de un curso se obtiene por asignación explícita, incluso para una cuenta administradora.

| Rol | Responsabilidad |
| --- | --- |
| Alumno | Aprender en cursos concedidos y consultar progreso/reputación. |
| Docente | Capacidades de alumno más edición, publicación y gestión de cursos asignados y seguimiento de sus alumnos. |
| Administrador | Gestión de negocio y plataforma: roles, registros de cursos, permisos y recalibración. Solo actúa como docente en cursos con asignación docente explícita. |

- El seeding crea inicialmente una cuenta admin y una docente; las nuevas cuentas son alumno por defecto. Puede haber varios administradores/docentes; Google OAuth sigue opcional. El administrador inicial recibe asignación docente explícita en bienvenida; no en el resto de cursos por defecto.
- Solo el administrador cambia roles, crea el registro inicial de cursos como recurso de negocio y concede/retira lectura y asignaciones docentes por usuario y curso. Puede asignarse como docente, pero el rol administrador no da derechos pedagógicos ni acceso a informes de ningún curso por sí solo. Un curso admite varios docentes con los mismos derechos de edición, cada uno asignado independientemente; retirar uno no afecta a los demás. Promover a docente no otorga cursos; una cuenta puede aprender en uno y editar otro, sin duplicarse. Edición docente incluye lectura y gestión pedagógica, no autoasignación ni concesión de accesos por condición docente.
- La concesión de lectura simula una compra; guardar fecha de concesión, sin dinero, facturación, pasarela ni transacción. Revocación impide el acceso salvo otro permiso válido, sin borrar historial automáticamente.
- Como criterio de seguridad propuesto, degradar rol invalida capacidades incompatibles; impedir dejar la plataforma sin administrador. Los permisos se verifican en servidor por interfaz y API. No se requiere CRUD general de cuentas.
- Contraseñas de demostración en variables de entorno; no publicar credenciales privilegiadas triviales. El acceso interno no protege URLs públicas externas.

## 3. Cursos y contenidos audiovisuales

- El administrador crea el registro inicial del recurso y asigna uno o varios docentes; únicamente estos organizan, editan y publican el curso, sus temas, vídeos y evaluaciones, incluidos borradores. El administrador solo puede hacerlo si también tiene asignación docente en ese curso. Alumnos acceden a cursos publicados con lectura concedida.
- Vídeos externos autorizados con reproductor HTML5 propio, no YouTube. Guardar enlaces, atribución y metadatos, no archivos audiovisuales pesados; proveedor desacoplado. Véase [anexo](480Academy-anexo-videos-demostrativos.md).
- Curso plano: vídeos directamente bajo el curso. Curso temático: temas con vídeos. Configuración de adaptación independiente por lista:

| Estructura | Lista | Configuración |
| --- | --- | --- |
| Plano | Vídeos del curso | Interruptor propio |
| Temático | Temas | Interruptor del temario |
| Temático | Vídeos de cada tema | Interruptor independiente por tema, sin herencia obligatoria |

Modo fijo: todos los elementos en orden canónico, incluyendo iniciados y vistos; ordinal generado por la interfaz antes del título, sin cambiar al marcar como visto. Modo adaptativo: sin ordinales incluso en respaldo; último pendiente iniciado primero (o su tema), después pendientes por interés y vistos/completados al final; si no hay señales suficientes, orden canónico entre pendientes. Recalcular al acceder y al completar/marcar, con desempates estables. El docente conserva el orden canónico y puede alternar modos sin modificar títulos ni posiciones almacenadas. En ambos modos el alumno puede saltar libremente, sin prerrequisitos. El editor siempre muestra la secuencia canónica. En el dossier se explicará que los títulos no deben incluir prefijos numéricos de orden. Valor inicial propuesto: fijo en listas nuevas; seed con ambos modos y combinaciones mixtas.

- Bienvenida obligatoria desde registro, con descripción/tutorial textual y foro general, incluso sin temas, vídeos o evaluaciones. Lectura automática para todos; administrador inicial asignado expresamente como docente/editor, con posibilidad de añadir otros docentes. Vídeo tutorial opcional.

### 3.1. Lista unificada de cursos

| Prioridad | Cursos | Orden interno |
| --- | --- | --- |
| 1 | Cursos con edición asignada, incluso borradores | Último acceso descendente; no visitados o empatados por publicación descendente (creación para borradores); ID estable |
| 2 | Bienvenida no visitada | Acceso automático; primera entre los cursos no gestionados |
| 3 | Cursos con lectura ya visitados, incluida bienvenida tras visitarla | Último acceso descendente; ID estable |
| 4 | Cursos concedidos aún no visitados | Interés estimado descendente si hay señales suficientes; fecha de concesión descendente como respaldo y desempate; ID estable |
| 5 | Cursos publicados sin acceso | Interés estimado descendente; publicación descendente como respaldo/desempate; ID estable |

Una sola lista desplazable, sin secciones ni duplicados. Los niveles no se mezclan. La bienvenida se integra en el historial después de visitarla; los cursos gestionados siempre tienen prioridad. Se adopta la última formulación del 28/11: interés entre concedidos no visitados cuando haya señales, y fecha de concesión (equivalente a compra simulada) como respaldo. No se inventan puntuaciones.

Cursos bloqueados visualmente diferenciados; solo abren mensaje de compra simulada, no contenidos ni registro de visita. El administrador concede lectura; no hay transacción. La experiencia educativa prevalece sobre la recomendación comercial.

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
- Las preguntas se presentan separadas del archivo externo: tarjeta transparente desde derecha si vídeo/dispositivo horizontales, desde abajo si ambos verticales; fuera del vídeo si difieren. Gestos hacia borde ocultan y el inverso recupera la última pendiente; feedback y ocultación automática al responder. No redimensionar ni pausar; pantalla completa del contenedor con preguntas cuando compatible, nativa exclusiva las suspende. DC §6.1–6.3; no registrar inclinación.
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

El recomendador determinista independiente del modelo predictivo estima interés y ordena los cursos concedidos no visitados y bloqueados dentro de sus grupos (§3.1), además de listas con adaptación habilitada (§3).

- Considerar competencias, dificultad, conocimientos previos, intereses, progreso, evaluaciones e interacciones pertinentes disponibles; respaldo por concesión/publicación u orden canónico. No inventar interés ni presentarlo como garantía.
- Las recomendaciones no alteran las prioridades de cursos gestionados, accesos recientes ni permisos; no imponen compras.
- La navegación será libre. Las recomendaciones no constituyen prerrequisitos obligatorios ni bloquean cursos.
- El administrador podrá gestionar las notificaciones comerciales por correo electrónico destinadas a recomendar cursos a los alumnos.

## 8. Telemetría y modelo predictivo

### 8.1. Recogida de señales

La plataforma recogerá métricas propias para superar las limitaciones de un indicador binario de vídeo completado.

Se contemplan, según las capacidades del reproductor HTML5 y navegador, sin API de YouTube ni lecturas de sensores de orientación:

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
- Se preparará seeding con cursos del anexo, bienvenida, permisos diferenciados, curso bloqueado/adquirido simulado, docente que aprende en otro curso, listas fijas/adaptativas mixtas y datos sintéticos contrastantes, sin presentarlos como evidencia empírica.
- El entorno de demostración prevé menos de 100 usuarios y prioriza funcionalidad, simplicidad y coste reducido.
- La escalabilidad comercial y las decisiones definitivas de explotación quedan fuera del alcance inmediato.

## 12. Flujos prioritarios de demostración

1. Registrar alumno → bienvenida/foro → catálogo bloqueado y mensaje de compra → concesión administrativa → curso, vídeo y pregunta voluntaria.
2. Realizar evaluaciones, observar el progreso y consultar reputación, logros y recomendaciones.
3. Publicar una consulta o contribución en el foro y mostrar la interacción o moderación asistida por IA.
4. Promover cuenta a docente, asignar edición de otro curso y comprobar prioridad/permisos; editar contenido, configurar modos fijo/adaptativo, preguntas, contribuciones e informes.
5. Administrador: asignar/retirar roles y permisos, crear registro de recurso y asignar varios docentes; comprobar que no puede editar cursos no asignados y que puede editar bienvenida como docente asignado; recalibrar modelo con datos demostrativos.
6. Mostrar el flujo de certificación propia mediante URL y, si se incorpora, su extensión blockchain.

Los escenarios de demostración orientan la implementación y no convierten las mejoras opcionales en condiciones de aceptación. Los datos sintéticos prueban el funcionamiento del piloto, no la precisión del modelo ante alumnos reales ni una mejora educativa efectiva.
