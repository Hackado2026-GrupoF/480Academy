# 480Academy — Convenciones de diseño UI/UX

**Hackado 2026 · Cuatroochenta / Universitat Jaume I · Grupo F**  
**Fecha:** 27 de noviembre de 2026  
**Última revisión:** 28 de noviembre de 2026 — reproducción HTML5, orden configurable, catálogo unificado y permisos.  
**Entrega:** lunes 30 de noviembre de 2026  
**Estado:** propuesta de diseño para el piloto, pendiente de refinamiento visual y revisión por el grupo.

## 1. Propósito y proceso de trabajo

Este documento recoge las decisiones de diseño UI/UX de la propuesta 480Academy y sirve como handoff inicial para generar el tablero de mockups en Google Stitch. Complementa el [enunciado](480Academy-enunciado.md), la [memoria de decisiones](480Academy-memoria-decisiones.md) y las [historias de usuario](480Academy-user-stories.md).

El objetivo es una maqueta funcional desplegada, no un producto comercial terminado. La interfaz debe demostrar valor educativo, facilitar el aprendizaje y reducir la fricción, sin maximizar artificialmente el tiempo de permanencia.

Proceso:

1. Definir estas convenciones y revisar las historias de usuario cuando proceda.
2. Generar en Google Stitch un tablero coherente de pantallas y flujos; refinarlo manualmente. Si existen alternativas del equipo, someterlas a votación.
3. Extraer el DESIGN.md del tablero validado y facilitar a los agentes de desarrollo acceso al diseño mediante MCP.
4. Revisar y ampliar las historias de usuario, sus criterios de aceptación y dependencias a partir del diseño; generar después el bootstrap con la skill y los artefactos validados.

Las historias existentes no son un límite inmutable para el diseño. Las decisiones nuevas de este documento deberán reconciliarse con la memoria funcional y las historias antes del bootstrap. Los bocetos en papel de la primera jornada no son referencia visual para esta propuesta.

Se distinguen tres niveles: requisitos funcionales y restricciones que deben respetarse; convenciones de diseño que orientan el resultado; y propuestas visuales o detalles abiertos que Stitch puede explorar. Las funcionalidades opcionales no se convierten en imprescindibles por aparecer en un mockup.

## 2. Identidad visual

### 2.1. Nombre y logotipo

**480Academy** es el nombre de la plataforma propuesta por el Grupo F para el piloto. No es el nombre comunicado por el cliente, cuya identidad no se conoce, ni implica que se trate de un producto oficial de Cuatroochenta.

El logotipo acordado es tipográfico: **480** en blanco (#FFFFFF), seguido inmediatamente de **Academy** en rojo vibrante (#FF4950), sin espacio visible, en una única línea, con tipografía Figtree y peso negrita (700), sobre fondo negro #141414.

No incorporar símbolos, isotipos, degradados, efectos ni reinterpretaciones del logotipo en cada pantalla. Mantener la capitalización exacta: 480Academy. Usar una única composición reutilizable y escalarla proporcionalmente. Cuando el fondo de la interfaz sea claro, utilizar una superficie oscura para el logotipo principal en vez de recolorear sus letras. No se propone de momento una variante alternativa ni un eslogan.

Esta definición fija el wordmark acordado; el recurso gráfico definitivo y su espaciado se materializarán en Stitch o en un componente compartido. No utilizar el logotipo de Learnby-do ni presentar una afiliación comercial no confirmada.

### 2.2. Referencia estética

Referencia: [Apuntes de Harness Engineering de Learnby-do](https://hackado2026-grupof.github.io/apuntes-harness-engineering/) y su [HTML original](https://github.com/Hackado2026-GrupoF/apuntes-harness-engineering/blob/main/index.html).

Se toma como inspiración la identidad visual del material facilitado por Cuatroochenta: minimalismo, limpieza, elegancia, contraste, rojo selectivo y superficies neutras. Se adapta a una aplicación educativa, no se copia literalmente el diseño de documentación ni se presupone que constituya el manual completo de marca del cliente.

| Token de referencia | Valor | Uso |
| --- | --- | --- |
| Acento de marca | `#FF4950` | Logotipo, énfasis, progreso y detalles de interacción |
| Rojo de referencia para interacción | `#E03A41` | Punto de partida para estados activos; ajustar contraste |
| Rojo suave | `#FFF0F0` | Fondos de énfasis puntuales |
| Negro de marca | `#141414` | Cabecera de marca, texto de alto contraste, superficies oscuras |
| Blanco | `#FFFFFF` | Superficies y texto sobre fondos oscuros |
| Fondo alternativo | `#F7F8FA` | Fondo neutro claro |
| Bordes | `#E5E7EB` | Separadores y contornos |
| Texto principal | `#333333` | Texto sobre superficies claras |
| Texto secundario | `#4D4D4D` | Metadatos y apoyo legible |

- Tipografía principal: Figtree, con alternativas de sistema sans-serif. Jerarquía clara, textos legibles y densidad moderada.
- Tarjetas de esquinas redondeadas, aproximadamente 10 px de radio como referencia, bordes ligeros y sombras casi imperceptibles (la referencia HTML utiliza 0 2px 8px con negro al 6 %).
- Botones y controles redondeados, discretos y de superficie táctil suficiente. Evitar grandes bloques de color, decoración excesiva y controles persistentes innecesarios.
- El rojo es un acento, no el único código de estados ni un color reservado exclusivamente al error. Ajustar los colores de texto y estados interactivos para obtener contraste accesible; no asumir que blanco sobre rojo de marca sea adecuado para texto pequeño.
- La composición exacta, iconografía, escala de espaciado y tratamiento de imágenes podrán refinarse en Stitch. Como criterio de accesibilidad propuesto, aspirar a WCAG 2.2 AA, con foco visible, teclado, etiquetas accesibles y controles que no dependan exclusivamente de gestos o colores.

## 3. Principios de experiencia y prioridades

- Web app única, responsiva y mobile-first: no se desarrollarán aplicaciones nativas independientes.
- Misma gramática de interacción en dispositivos móviles y escritorio; adaptar la distribución al espacio y la orientación sin inventar flujos diferentes innecesariamente.
- Maximizar el espacio de visualización del contenido educativo. La interfaz debe ser discreta, simple y fácil de descubrir.
- El aprendizaje prevalece sobre la evaluación, las recompensas, las promociones y la gestión personal. No forzar visualizaciones, tests, itinerarios ni permanencia.
- Prioridad del esfuerzo: alumno, docente y administrador, por ese orden. El panel administrativo puede ser más denso y convencional, orientado a escritorio y responsivo en la medida que resulte razonable.
- Reutilizar componentes y patrones comunes. Las capacidades adicionales dependen del rol y de los permisos sobre cada recurso, comprobados en el servidor.

## 4. Navegación contextual

La dirección preferida es un botón discreto en una esquina (preferentemente inferior derecha) que despliega un menú contextual en abanico, como una fracción de un menú radial. El menú se recoge después de elegir una acción; las opciones dependen de la pantalla y del rol. Se evita reservar una franja permanente de la interfaz para botones que no se necesitan continuamente.

| Nivel | Función |
| --- | --- |
| Global | Mis cursos (incluye catálogo y recomendaciones), perfil, preferencias, progreso/logros y certificados, según proceda |
| Curso | Temario/contenidos, evaluación inicial/final, foro, progreso y acciones de gestión autorizadas |
| Vídeo | Acciones relevantes del vídeo, activar/desactivar preguntas de atención y opciones docentes autorizadas |

Las evaluaciones y el foro tendrán acceso desde el menú contextual del curso; no se insertarán tarjetas de evaluación en la lista principal de vídeos. En el contexto de un vídeo se facilitará también el acceso al foro correspondiente. Las acciones principales del aprendizaje (abrir contenido, reproducir, continuar, marcar como visto) estarán disponibles directamente donde se necesitan.

En la vista de vídeo, el botón y el menú contextual deben ser discretos y no interferir con los controles de reproducción, la lectura de la tarjeta ni sus gestos. Aprovechar el espacio exterior al vídeo cuando exista; si no existe, se admite superponer el control contextual al reproductor propio sin reservar una franja permanente ni ocultar información necesaria. Evitar la colisión del abanico con la tarjeta de preguntas (en especial en la esquina inferior derecha). En pantalla completa propia, mantener la navegación recogida y mostrar sus controles solo cuando proceda; si se utiliza pantalla completa nativa que no admite la interfaz de 480Academy, la navegación desaparece y vuelve al salir (véase §6.3).

El menú debe poder abrirse mediante pulsación normal, con alternativa accesible por teclado en escritorio. La pulsación prolongada con indicador circular y duración configurable es una idea exploratoria, no un requisito del piloto ni el único mecanismo de acceso. Evitar colisiones con bordes, áreas seguras del dispositivo, desplazamiento y controles nativos. Stitch puede explorar la geometría del abanico y una alternativa de lista compacta si la radial resulta poco usable. No multiplicar confirmaciones ni gestos ocultos.

## 5. Alumno: bucles y jerarquía

| Prioridad | Bucle | Experiencia |
| --- | --- | --- |
| Principal | Aprendizaje | Abrir curso, elegir o retomar tema/vídeo, aprender, resolver dudas, recibir feedback y continuar |
| Secundario | Evaluación y progresión | Tests voluntarios, resultados, progreso, autoevaluación y logros |
| Auxiliar | Gestión personal | Perfil, preferencias, datos personales, certificados y otras gestiones |

La comunidad y las preguntas interactivas apoyan el bucle principal; no constituyen una red social paralela. La reputación reconoce contribuciones educativas, sin convertirse en calificación, moneda, requisito de acceso o certificación.

### 5.1. Inicio y estructura de contenidos

Todos los usuarios llegan a **Mis cursos**, una única lista vertical desplazable, sin secciones ni duplicados. Un docente puede aprender en unos cursos y editar otros. El administrador dispone además de su panel exclusivo (§10).

| Prioridad | Cursos | Orden interno |
| --- | --- | --- |
| 1 | Cursos con edición asignada, incluso borradores | Último acceso descendente; no visitados o empatados por publicación descendente (creación para borradores); ID estable |
| 2 | Bienvenida no visitada | Acceso automático; primera entre los cursos no gestionados |
| 3 | Cursos con lectura ya visitados, incluida bienvenida tras visitarla | Último acceso descendente; ID estable |
| 4 | Cursos concedidos aún no visitados | Interés estimado descendente si hay señales suficientes; fecha de concesión descendente como respaldo y desempate; ID estable |
| 5 | Cursos publicados sin acceso | Interés estimado descendente; publicación descendente como respaldo/desempate; ID estable |

Los niveles no se mezclan. La bienvenida se integra en el historial después de visitarla; los cursos gestionados siempre tienen prioridad. Se adopta la última formulación del 28/11: interés entre concedidos no visitados cuando haya señales, y fecha de concesión (equivalente a compra simulada) como respaldo. No se inventan puntuaciones.

Los cursos gestionados tienen una acción o indicador discreto de edición. Los cursos bloqueados se muestran atenuados con contraste y etiqueta accesible; pulsar abre únicamente el mensaje «Para acceder a este curso necesitas adquirirlo. Las compras no están disponibles en esta demostración». No abre contenidos ni registra último acceso. Sin pago, factura ni concesión automática; el administrador concede lectura para simular compra. Los borradores solo son visibles para sus gestores.

El curso de bienvenida es obligatorio desde el registro, con descripción/tutorial textual y foro general, aunque carezca de temas, vídeos y evaluaciones. Lectura automática para todos; edición asignada por el administrador, que puede asignársela a sí mismo o a un docente para añadir vídeos posteriormente. El vídeo tutorial es opcional.

Curso plano: vídeos directamente bajo el curso. Curso temático: temas con listas de vídeos. Mantener el patrón común de tarjetas. El [anexo de vídeos demostrativos](480Academy-anexo-videos-demostrativos.md) propone placeholders externos autorizados, no material definitivo del cliente.

### 5.2. Ordenación fija o adaptativa configurable

El docente con edición asignada controla cada lista por separado; la adaptación estima interés mediante el recomendador determinista de §11, no mediante la inferencia experimental de éxito formativo.

| Estructura | Lista | Configuración |
| --- | --- | --- |
| Plano | Vídeos del curso | Interruptor propio |
| Temático | Temas | Interruptor del temario |
| Temático | Vídeos de cada tema | Interruptor independiente por tema, sin herencia obligatoria |

Modo fijo: todos los elementos en orden canónico, incluyendo iniciados y vistos; ordinal generado por la interfaz antes del título, sin cambiar al marcar como visto. Modo adaptativo: sin ordinales incluso en respaldo; último pendiente iniciado primero (o su tema), después pendientes por interés y vistos/completados al final; si no hay señales suficientes, orden canónico entre pendientes. Recalcular al acceder y al completar/marcar, con desempates estables. El docente conserva el orden canónico y puede alternar modos sin modificar títulos ni posiciones almacenadas. En ambos modos el alumno puede saltar libremente, sin prerrequisitos. El editor siempre muestra la secuencia canónica. En el dossier se explicará que los títulos no deben incluir prefijos numéricos de orden. Valor inicial propuesto: fijo en listas nuevas; seed con ambos modos y combinaciones mixtas.

No mostrar puntuaciones ni etiquetas algorítmicas. El ordinal es una indicación de secuencia, no una obligación. La lista global sigue §5.1 y los hilos/respuestas se ordenan por actividad (§8). Mantener estable la lista durante la lectura y respetar movimiento reducido.

### 5.3. Estado de visualización y progreso

El alumno puede marcar un vídeo como visto aunque ya conociera el contenido o lo viera fuera de 480Academy. Los vistos por reproducción y manuales comparten estado visual: bajan al final solo en listas adaptativas; en las fijas conservan ordinal y posición. Distinguir declaración manual y señales observadas, sin inventar telemetría ni inferir comprensión automáticamente. Un tema podrá considerarse completado cuando todos sus vídeos estén vistos (criterio operativo propuesto).

Se propone permitir desmarcar como visto una unidad, sin borrar el historial real de reproducción. El criterio exacto de finalización automática y la relación de este estado con la métrica de visualización se concretarán antes del bootstrap.

El progreso visible puede mostrar vídeos/temas completados, calificaciones, evolución y estadísticas educativas sencillas, como tiempo de reproducción registrado si está disponible. No mostrar telemetría detallada, puntuaciones internas de ordenación, inferencias de engagement ni predicciones de éxito formativo al alumno. El tiempo de reproducción no equivale a tiempo de atención.

## 6. Reproducción audiovisual y preguntas de atención

### 6.1. Reproductor responsivo

El piloto utilizará un reproductor propio basado en HTML5 con archivos audiovisuales alojados externamente y autorizados para su reutilización. YouTube deja de ser el proveedor de demostración: sus restricciones sobre superposiciones no se trasladarán al diseño del reproductor propio. La plataforma no aloja vídeos; conserva enlaces y metadatos, incluida la atribución y la licencia. El proveedor audiovisual se mantendrá desacoplado de la lógica educativa. Véase el [anexo de vídeos demostrativos](480Academy-anexo-videos-demostrativos.md).

Admitir vídeos horizontales y verticales, preservando la relación de aspecto original y la orientación correcta de la imagen, sin deformar, recortar ni girar el vídeo para llenar artificialmente la pantalla. En reproducción ordinaria no se obliga al usuario a girar el dispositivo: se maximiza la superficie compatible con el formato y se admite espacio sobrante. En pantallas de escritorio o ventanas redimensionables, aplicar la misma lógica según la relación de aspecto del área disponible.

**El reproductor se adapta al dispositivo, no a la aparición de elementos temporales de la interfaz.**

| Formato del vídeo | Orientación del dispositivo o área disponible | Reproductor | Tarjeta de preguntas |
| --- | --- | --- | --- |
| Horizontal | Horizontal / apaisada | Máxima superficie compatible, sin reservar una columna permanente para las preguntas | Superpuesta desde el borde derecho, con alta transparencia; se oculta hacia la derecha y se recupera con el gesto inverso |
| Horizontal | Vertical | Arriba, ocupando todo el ancho disponible y preservando su relación de aspecto | Debajo del vídeo, fuera del reproductor; no cubre la imagen |
| Vertical | Vertical | Máxima superficie compatible con el vídeo vertical | Superpuesta desde el borde inferior, con alta transparencia; se oculta hacia abajo y se recupera con el gesto inverso |
| Vertical | Horizontal / apaisada | Intentar ocupar todo el alto disponible, preservando su relación de aspecto | En el espacio lateral sobrante, fuera del reproductor; no cubre la imagen |

- Un cambio de orientación o tamaño de ventana puede redimensionar y redistribuir el reproductor. La aparición, cierre, ocultación, recuperación o desactivación de una pregunta de atención no debe redimensionarlo.
- Preservar el instante de reproducción, el estado de pausa/reproducción y, cuando proceda, la pregunta pendiente y su estado visible u oculto al cambiar la orientación. Evitar recrear el reproductor innecesariamente.
- Mantener accesibles los controles de reproducción y utilizar el espacio sobrante para la interfaz cuando exista. Si una ventana excepcionalmente pequeña no permite presentar una pregunta exterior de forma usable, prima la reproducción; no convertirla en una superposición en las combinaciones que deben mantenerla fuera del vídeo.
- Los controles y las atribuciones del contenido deberán ser accesibles; la compatibilidad efectiva de archivos, formatos y navegadores se comprobará antes del despliegue.

### 6.2. Tarjeta de preguntas de atención

Utilizar un único componente de tarjeta, tanto cuando se superpone al vídeo como cuando se sitúa fuera de él. Se adapta su posición y dirección de entrada, no la lógica de preguntas, respuestas ni reputación.

- Las tarjetas superpuestas serán discretas y tendrán un alto nivel de transparencia en su fondo para que el alumno pueda seguir viendo lo que ocurre detrás en el vídeo. Mantener el texto, las opciones y los controles legibles sobre fondos audiovisuales variables; ajustar contraste, contornos y opacidad de las superficies de lectura cuando sea necesario. No oscurecer toda la imagen con una capa modal ni interceptar interacciones fuera de la tarjeta. La transparencia concreta, anchura, altura máxima y animaciones se refinarán en Stitch.
- En vídeo y dispositivo horizontales, la tarjeta entra por el borde derecho. Deslizar hacia la derecha, en dirección a ese borde, la oculta; deslizar en sentido inverso, desde una zona de recuperación próxima al borde derecho hacia el interior, vuelve a mostrar la última pregunta si sigue sin responder.
- En vídeo y dispositivo verticales, la tarjeta entra por el borde inferior. Deslizar hacia abajo la oculta; deslizar hacia arriba desde una zona de recuperación próxima al borde inferior vuelve a mostrar la última pregunta si sigue sin responder.
- En orientaciones distintas de vídeo y dispositivo, la tarjeta se muestra fuera de la imagen, debajo o en el espacio lateral según §6.1. Mantener las acciones de ocultar y recuperar sin modificar el tamaño del reproductor.
- Ocultar no equivale a responder ni a descartar definitivamente la pregunta. Como criterio operativo propuesto, conservar solo la última pregunta pendiente del vídeo durante la reproducción: si llega un nuevo punto de aparición, sustituye a la anterior sin acumular una cola ni provocar una ráfaga al recuperar la tarjeta. No reabrir una pregunta ya respondida mediante el gesto inverso.
- Los gestos son una vía directa, no la única: ofrecer acciones discretas y accesibles de ocultación y recuperación (pulsación/clic y teclado). Respetar áreas seguras, desplazamiento y gestos del sistema operativo; no capturar indiscriminadamente los bordes físicos de la pantalla ni interferir con la barra de progreso o los controles de reproducción. Respetar las preferencias de movimiento reducido.
- Las preguntas aparecen en los puntos configurados, seleccionadas del banco correspondiente. Son voluntarias y no detienen ni bloquean la reproducción. El alumno puede responder, ocultar o ignorar.
- Proporcionar feedback inmediato de acierto/error y reputación cuando corresponda, y ocultar automáticamente la tarjeta tras responder, sin exigir una segunda pulsación. El feedback podrá ser breve y no bloqueante. Los errores y omisiones no penalizan; respetar el máximo de puntos por vídeo.
- Permitir activar/desactivar las preguntas desde el menú contextual y conservar la preferencia del alumno. Desactivarlas oculta la tarjeta y suspende nuevas apariciones; al reactivarlas no se acumulan preguntas omitidas.

### 6.3. Pantalla completa y orientación

- Al solicitar pantalla completa, el reproductor propio debe ocupar toda la pantalla y aprovechar la orientación correspondiente al formato del vídeo (horizontal o vertical). A diferencia de la vista ordinaria, este modo puede requerir que el usuario gire el dispositivo para obtener la visualización inmersiva. No deformar ni recortar el contenido para forzar el llenado.
- Cuando el navegador y el dispositivo lo permitan, detectar la orientación/inclinación física y solicitar la orientación de pantalla apropiada durante la pantalla completa. No depender de permisos de sensores para reproducir: si la detección o el bloqueo de orientación no están disponibles, conservar la relación de aspecto y permitir al usuario girar manualmente el dispositivo. No registrar ni enviar lecturas de sensores como telemetría educativa.
- Preferir pantalla completa del contenedor del reproductor propio, de modo que las tarjetas y controles de 480Academy puedan seguir funcionando dentro de ese modo. Con orientación coincidente, aplicar las superposiciones y gestos de §6.2; si la orientación sigue siendo distinta, conservar el criterio de tarjeta exterior al vídeo cuando exista espacio compatible. Mantener despejada la imagen cuando no haya preguntas visibles.
- Si el navegador impone una pantalla completa nativa exclusivamente audiovisual que no permite elementos propios, suspender temporalmente las preguntas y la navegación sin penalización. Al volver, restaurar la interfaz y, cuando proceda, la última pregunta pendiente sin generar una ráfaga de preguntas atrasadas.
- Al salir de pantalla completa, volver a la distribución responsiva ordinaria, liberar el bloqueo de orientación solicitado cuando proceda y preservar el estado de reproducción. No prometer detección de inclinación ni cambio automático de orientación universal: validar los comportamientos disponibles en los navegadores objetivo.

## 7. Evaluaciones, perfil y certificación

Las evaluaciones inicial y final se abren desde el menú contextual del curso y tienen tratamiento visual coherente con los demás componentes, sin participar en el orden adaptativo del temario.

- El test inicial es opcional, permite conocer el punto de partida y puede aportar información al recomendador; si no se realiza, el nivel inicial es desconocido, no cero.
- El test final es voluntario, con hasta dos intentos y conservación de la mejor nota. Superar el umbral habilita el certificado propio no reglado. No exigir haber visualizado todos los contenidos ni haber hecho el test inicial.
- La autoevaluación de confianza, cuando se implemente, es distinta de las calificaciones objetivas.
- Distinguir visualmente progreso de contenidos, curso superado y certificado emitido. No son estados necesariamente equivalentes.

El perfil permite consultar y editar datos personales, preferencias, intereses y logros, además de gestionar certificados. Minimizar los datos solicitados y no mostrar información personal innecesaria.

Los certificados convencionales cuentan con una URL verificable y se rigen por la memoria funcional. La acuñación en blockchain es una extensión opcional pendiente de consenso del grupo (HU-34); si se incorpora, no se ejecutará automáticamente: el alumno solicitará expresamente la acuñación después de revisar y confirmar los datos del certificado. No almacenar datos personales en cadena. La interfaz distinguirá el certificado convencional de su registro blockchain y no condicionará el primero a la existencia del segundo. El flujo de revisión no debe complicar el aprendizaje. Los detalles de emisión convencional y rectificación se reconciliarán con HU-32 antes del bootstrap.

## 8. Foro dinámico de cada curso

Cada curso tiene un foro propio, accesible mediante el menú contextual. El vídeo y la formación siguen siendo los protagonistas de la pantalla de curso.

Reutilizar tarjetas para hilos y respuestas, con anidación legible. La lista se ordena de más reciente a más antigua por **última actividad**, no solo por fecha de publicación.

- Una respuesta nueva actualiza la última actividad de su padre y de todos los ancestros hasta el hilo raíz.
- Cada nivel de respuestas se ordena entre hermanos por última actividad. Una respuesta profundamente anidada puede elevar su rama y el hilo completo.
- Mantener separadas la fecha de creación y la última actividad (por ejemplo, created_at y last_activity_at). La ordenación es determinista.
- Las intervenciones de la IA cuentan como actividad, igual que las humanas, y se identifican claramente. Cuando una consulta permanezca sin resolver más allá del intervalo configurado por el docente, la IA puede publicar una respuesta según las reglas del foro. No cierra el hilo ni gana reputación; consume la bonificación de primera respuesta y las aportaciones humanas posteriores pueden seguir obteniendo reputación.
- Mostrar las valoraciones de 0 a 10 mediante estrellas cuando se implemente esa funcionalidad, con posibilidad de revisión docente. Mantener diferenciadas las contribuciones de alumnos, docentes e IA.
- No incorporar un chatbot independiente. Facilitar preguntar, responder y reconocer aportaciones útiles sin añadir ruido al curso.

Como propuesta de estabilidad, actualizar la ordenación al acceder o refrescar y no desplazar inesperadamente una conversación mientras se lee o redacta una respuesta. La forma de presentar nuevas interacciones y la profundidad visual de anidación quedan para refinamiento.

## 9. Docente: experiencia común enriquecida

El docente utiliza la misma identidad, patrones y tarjetas que el alumno; tiene capacidades de aprendizaje y edición únicamente sobre cursos asignados por un administrador. No se autoasigna recursos; sus cursos gestionados encabezan la lista única (§5.1).

- Editar y publicar/despublicar cursos asignados, crear y editar sus temas y vídeos, sustituir enlaces y modificar el orden. El administrador crea el recurso de curso y asigna edición; el docente no crea cursos con autoasignación ni concede permisos.
- En edición, presentar el orden canónico, permitir modificarlo y configurar los interruptores independientes de §5.2; conservar ordinales en el editor. Reutilizar vistas comunes.
- Gestionar los tests inicial/final y su umbral de superación.
- En cada vídeo gestionado, ofrecer acceso al banco de preguntas: crear/editar/eliminar, asociar bancos a vídeos, segmentos o temas, configurar intervalos o instantes de aparición y reutilizar/ampliar preguntas sin perder las anteriores.
- Solicitar a la IA preguntas para poblar o ampliar el banco a partir del contenido disponible por medios autorizados (descripciones, transcripciones o materiales del docente). Revisar antes de aprobar; no generar un nuevo banco en cada reproducción.
- Participar, supervisar y moderar los foros de sus cursos, corregir valoraciones y configurar el intervalo para la intervención de IA.
- Consultar el listado de sus alumnos y abrir informes individuales. Diferenciar progreso y resultados observados de estimaciones numéricas de engagement/éxito y su confianza. Mostrar «datos insuficientes» cuando corresponda; no convertir la ausencia de datos en valoración negativa.
- Configurar periodicidad de informes (semanal por defecto) y avisos educativos según el alcance de las historias de usuario. Las predicciones no cambian automáticamente notas, certificados ni acceso.

La telemetría detallada tampoco se expone al docente. No se diseñarán informes educativos agregados de curso/plataforma para el piloto.

Para la edición de preguntas por segmentos, Stitch puede explorar una línea temporal esquemática con intervalos y puntos de aparición y un listado editable de bancos. Esta visualización es una propuesta, no una exigencia de editor audiovisual complejo.

## 10. Administrador: panel adicional

El administrador conserva capacidades de alumno y puede asumir edición explícita de un curso, incluso asignándosela a sí mismo. Puede haber varios administradores. El rol global habilita capacidades pero no concede automáticamente lectura, edición ni informes de todos los cursos.

Además dispone de un panel de administración de plataforma, independiente, de navegación estable y convencional. Priorizar funcionalidad sobre innovación visual; no aplicar por defecto la reordenación dinámica de tarjetas. Puede usar navegación lateral, pestañas, tablas, formularios y gráficas, conservando los colores y tipografía comunes. Diseñar principalmente para PC y adaptar razonablemente a pantallas pequeñas.

Capacidades previstas:

- Gestión imprescindible de cuentas: listar/buscar, asignar rol alumno/docente/administrador, crear recursos de curso y conceder/retirar lectura y edición por usuario y curso. Mostrar permisos vigentes y confirmar cambios; impedir autoasignaciones por no administradores y escaladas por API. Sin pasarela, pago ni facturación.
- Gestión de integraciones de IA; configuración de proveedores/modelos y funciones delegadas.
- Acciones manuales para investigar patrones y recalibrar el modelo predictivo; mostrar el estado, la versión y la última ejecución. Diferenciar recalibración de inferencia cotidiana.
- Métricas técnicas e historial de ejecución del modelo, claramente identificados como experimentales. No introducir por ello informes educativos agregados que quedaron fuera de alcance.
- Configuración de notificaciones comerciales según las historias y prioridades existentes.

La gestión de credenciales de API debe ser segura en servidor; no presentar secretos en claro ni incorporarlos al frontend, mockups o repositorio. La edición de integraciones y gráficas administrativas son ampliaciones; la asignación manual de roles y recursos sí es imprescindible. No se requiere CRUD general de cuentas ni gestión comercial.

## 11. Personalización, predicción y uso sostenible de IA

Distinguir dos mecanismos independientes que pueden compartir señales de entrada:

| Mecanismo | Finalidad | Ejecución |
| --- | --- | --- |
| Recomendador determinista | Estimar interés y ordenar cursos concedidos no visitados y bloqueados, y listas de temas/vídeos con adaptación habilitada | Reglas y puntuaciones locales/servidor; sin llamadas a IA generativa por acceso |
| Modelo predictivo experimental | Estimar engagement y éxito formativo individual para el docente | Modelo estadístico o de aprendizaje automático almacenado, con inferencia ordinaria sin llamadas a IA generativa |

El recomendador puede utilizar intereses, conocimientos previos, dificultad, competencias, progreso, preguntas y señales relevantes de interacción. Sin información suficiente aplica los respaldos de §5.1–5.2. No depende del modelo predictivo experimental. Pesos, variables y suficiencia quedan pendientes.

La IA generativa se utilizará cuando aporte valor: generación anticipada de preguntas, participación/moderación asistida en el foro, interpretación de métricas e investigación puntual de patrones. Las operaciones repetitivas (ordenación, registro de progreso, cálculo de puntuaciones e inferencia de un modelo entrenado) no requieren llamadas generativas. El administrador inicia manualmente la recalibración, que puede utilizar técnicas de aprendizaje automático convencionales y asistencia generativa puntual.

No es preciso elegir el modelo estadístico concreto en este documento de UI/UX. Los datos sintéticos permiten demostrar el funcionamiento, no demostrar eficacia educativa ni precisión predictiva sobre alumnos reales. No presentar números ficticios como resultados validados. La privacidad, la minimización de datos y la separación de señales e identidad se mantienen, especialmente por la posibilidad de usuarios menores.

## 12. Handoff para Google Stitch

Generar un tablero de pantallas conectadas, no un conjunto de diseños independientes. Usar el wordmark fijo de §2 y un sistema de componentes reutilizables. La interfaz del alumno debe tener el mayor nivel de acabado; reutilizarla para las capacidades docentes y resolver el panel administrativo con patrones convencionales.

Inventario orientativo (priorizar las historias imprescindibles; agrupar estados y pantallas si resulta conveniente):

| Pantalla o estado | Contenido que debe poder apreciarse |
| --- | --- |
| Acceso | Inicio de sesión/registro por correo, interfaz móvil; Google solo si se incorpora |
| Mis cursos | Lista única: bienvenida, gestionados, visitados, concedidos sin visitar y bloqueados; mensaje de compra simulada y transición tras concesión |
| Curso plano | Interruptor docente; modo fijo numerado y adaptativo sin números, progreso y reanudación |
| Curso con temas | Interruptor del temario y por cada tema; combinación mixta y numeración fija frente a adaptación |
| Vídeo horizontal en dispositivo horizontal | Reproductor amplio; tarjeta transparente superpuesta desde el borde derecho, estados visible y oculto, recuperación hacia el interior |
| Vídeo horizontal en dispositivo vertical | Reproductor arriba a todo el ancho; tarjeta debajo sin cubrir ni redimensionar el vídeo |
| Vídeo vertical en dispositivo vertical | Reproductor amplio; tarjeta transparente superpuesta desde el borde inferior, estados visible y oculto, recuperación hacia arriba |
| Vídeo vertical en dispositivo horizontal | Reproductor a la máxima altura compatible; tarjeta en el espacio lateral sobrante |
| Pantalla completa | Contenedor inmersivo en orientación apropiada al vídeo; preguntas superpuestas cuando sean compatibles, alternativa nativa sin interfaz propia cuando sea necesario |
| Pregunta interactiva | Aparición, ocultación, recuperación de la última pendiente, respuesta, feedback y ocultación automática; alternativas accesibles a los gestos y activación/desactivación en menú |
| Evaluaciones | Test inicial voluntario y final, resultado e intentos según corresponda |
| Foro | Lista dinámica, hilo con respuestas anidadas, respuesta de IA identificada y composición de respuesta |
| Progreso, perfil y recomendaciones | Avance, notas, reputación, intereses, datos y preferencias; sin señales internas |
| Certificados | Certificado propio, URL verificable y vista de verificación; acuñación explícita solo si se aprueba |
| Docente | Lista de cursos común, edición de estructura original y vídeo, banco de preguntas, evaluaciones y moderación |
| Seguimiento docente | Lista de alumnos e informe individual con hechos, predicciones, confianza y datos insuficientes |
| Administración (PC) | Navegación fija, gestión de roles y permisos por usuario/curso, creación de curso y asignación docente, integraciones y recalibración manual |

Incluir variantes de estado (carga, vacío, error, sin datos, sin permiso, guardado/confirmación) de los componentes imprescindibles cuando sea posible. Los controles que se muestren como funcionales deben corresponder al alcance aprobado o quedar identificados como opcionales.

Validar visualmente las cuatro combinaciones de formato de vídeo y orientación del dispositivo, escritorio y pantalla completa, incluida la estabilidad del reproductor, el contraste de tarjetas sobre imágenes variadas y la convivencia con el menú y los controles. Mostrar también los estados oculto, recuperado y respondido; ninguna pregunta debe forzar la rotación ni un redimensionamiento del vídeo. Mantener los textos de la UI en castellano en el primer tablero; los detalles de layout, espaciado, iconos, miniaturas y microcopy son refinables. Mostrar numeración solo en listas con orden fijo; no añadir rankings competitivos, banners promocionales invasivos, chatbots separados ni puntuaciones predictivas para alumnos.

Flujo principal para comprobar la coherencia del tablero: iniciar sesión → Mis cursos → curso → tema si existe → vídeo → pregunta voluntaria → marcar/completar → lista adaptada → siguiente contenido. Desde el menú contextual se accede a evaluación y foro; desde perfil, a progreso y gestión documental. Incluir el camino de edición docente y el de recalibración administrativa sin inventar otras experiencias.

## 13. Revisión antes del bootstrap y cuestiones abiertas

Sin modificar todavía las historias existentes, registrar los siguientes puntos para su revisión tras el tablero:

| Referencia | Revisión prevista |
| --- | --- |
| HU-02, HU-05, HU-50, HU-51 | Roles y permisos por recurso, creación administrativa, edición asignada y enlaces externos HTML5 |
| HU-06, HU-07, HU-26, HU-52 | Lista unificada, prioridades, compra simulada, reanudación y estabilidad del reproductor |
| HU-08 | Bienvenida obligatoria textual y foro; vídeo opcional, edición asignada |
| HU-09, HU-10, HU-11, HU-38 | Tarjeta única superpuesta o exterior según formato y orientación; transparencia, gestos y recuperación, feedback y ocultación automática, preferencia de preguntas, pantalla completa, edición de segmentos y generación anticipada |
| HU-35, HU-36, RNF-08, RNF-11 | Actualizar el seeding según el anexo, navegación contextual compatible con overlays, alojamiento externo y estabilidad del reproductor sin restricciones específicas de YouTube |
| HU-13, HU-14, HU-16 | Acceso contextual a tests y foro, sin desplazar el protagonismo del vídeo |
| HU-16 a HU-20 | Ordenación por actividad propagada por toda la jerarquía, incluidas intervenciones de IA |
| HU-23, HU-24, HU-39, HU-49 | Interés estimado, respaldos, interruptores por lista y ordinales solo en modo fijo |
| HU-28, HU-29 | Informes individuales, controles de recalibración y separación de métricas técnicas administrativas |
| HU-32 a HU-34 | Perfil documental, estados de certificado y confirmación explícita de acuñación opcional |
| Nuevas historias/RNF | Navegación contextual accesible, edición de perfil/preferencias, configuración segura de integraciones de IA y demás necesidades detectadas en los mockups |

Quedan abiertos el detalle geométrico del menú, la transparencia y dimensiones de las tarjetas, los umbrales de gesto y zonas de recuperación, la compatibilidad de pantalla completa y orientación, el criterio de marcado automático, la reversión de vistos, desempates de ordenación, transiciones, estados vacíos y el algoritmo concreto. Son cuestiones de refinamiento, no nuevos bloqueos para generar el tablero. No dar por consensuadas mejoras opcionales del grupo ni ampliar el alcance sin revisar prioridades.

**Reconciliación documental (28/11):** memoria e historias se actualizan junto a esta revisión para reflejar HTML5, catálogo unificado, permisos y orden configurable. Pendientes: validación del grupo, tablero de Stitch, pruebas de navegador y especificación de pesos, umbrales y detalles visuales.

## 14. Memoria de presentación

Separar la documentación de ingeniería de la memoria destinada al jurado y al cliente. Recuperar, cuando se prepare esa memoria, diagramas y simulaciones visuales de los bucles, la ordenación adaptativa, la actividad jerárquica de los foros, los roles acumulativos y la separación entre recomendación y predicción. Utilizar la identidad visual de 480Academy y señalar los datos ficticios. Las simulaciones interactivas deberán reproducirse en un formato independiente si se desea utilizarlas fuera del chat. No son funcionalidades adicionales exigidas al producto desplegado.
