# 480Academy — Convenciones de diseño UI/UX

**Hackado 2026 · Cuatroochenta / Universitat Jaume I · Grupo F**  
**Fecha:** 27 de noviembre de 2026  
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
| Global | Mis cursos, catálogo y recomendaciones, perfil, preferencias, progreso/logros y certificados, según proceda |
| Curso | Temario/contenidos, evaluación inicial/final, foro, progreso y acciones de gestión autorizadas |
| Vídeo | Acciones relevantes del vídeo, activar/desactivar preguntas de atención y opciones docentes autorizadas |

Las evaluaciones y el foro tendrán acceso desde el menú contextual del curso; no se insertarán tarjetas de evaluación en la lista principal de vídeos. En el contexto de un vídeo se facilitará también el acceso al foro correspondiente. Las acciones principales del aprendizaje (abrir contenido, reproducir, continuar, marcar como visto) estarán disponibles directamente donde se necesitan.

El botón y el menú no deben tapar el reproductor ni sus controles. Durante la pantalla completa nativa desaparecen y vuelven al salir. En la vista ordinaria del vídeo se sitúan en espacio de interfaz ajeno al reproductor y a la tarjeta de preguntas.

El menú debe poder abrirse mediante pulsación normal, con alternativa accesible por teclado en escritorio. La pulsación prolongada con indicador circular y duración configurable es una idea exploratoria, no un requisito del piloto ni el único mecanismo de acceso. Evitar colisiones con bordes, áreas seguras del dispositivo, desplazamiento y controles nativos. Stitch puede explorar la geometría del abanico y una alternativa de lista compacta si la radial resulta poco usable. No multiplicar confirmaciones ni gestos ocultos.

## 5. Alumno: bucles y jerarquía

| Prioridad | Bucle | Experiencia |
| --- | --- | --- |
| Principal | Aprendizaje | Abrir curso, elegir o retomar tema/vídeo, aprender, resolver dudas, recibir feedback y continuar |
| Secundario | Evaluación y progresión | Tests voluntarios, resultados, progreso, autoevaluación y logros |
| Auxiliar | Gestión personal | Perfil, preferencias, datos personales, certificados y otras gestiones |

La comunidad y las preguntas interactivas apoyan el bucle principal; no constituyen una red social paralela. La reputación reconoce contribuciones educativas, sin convertirse en calificación, moneda, requisito de acceso o certificación.

### 5.1. Inicio y estructura de contenidos

Tras iniciar sesión, el alumno llega directamente a **Mis cursos**, una lista vertical de tarjetas de los cursos a los que tiene acceso, ordenada por último acceso (el más reciente primero). No utilizar recomendaciones predictivas para ordenar esta lista. Los cursos aún no iniciados necesitan un desempate estable; el criterio concreto queda para implementación. Si es viable, incluir el curso de bienvenida desde el primer acceso; su producción sigue siendo opcional.

Cada tarjeta permite abrir el curso y presenta solo la información útil (título, estado/progreso y, cuando proceda, indicación de continuación). No saturar el inicio con estadísticas, medallas, promociones ni un segundo bloque redundante de «Continuar».

Existen dos estructuras de curso:

- **Curso con temas:** el curso contiene temas; cada tema contiene varios vídeos.
- **Curso plano:** el curso contiene directamente vídeos. Cada vídeo funciona como unidad independiente a efectos de ordenación adaptativa; no crear un nivel artificial de tema para un único vídeo.

Los cursos de ejemplo podrán ser listas de reproducción de YouTube (p. ej., pintura o reglas de Warhammer, escalada o senderismo). No son contenidos definitivos del cliente. Se recomienda probar al menos un curso con temas y otro plano mediante datos de demostración si resulta viable.

Utilizar el mismo patrón visual de tarjetas verticales para cursos, temas y vídeos. No mostrar numeraciones de orden pedagógico al alumno: el orden original se conserva internamente y puede consultarse y editarse en el modo docente.

### 5.2. Ordenación dinámica y silenciosa

| Lista | Criterio |
| --- | --- |
| Mis cursos | Último acceso, descendente |
| Temas del curso | Continuación, prioridad adaptativa y completados al final |
| Vídeos de un curso plano | Continuación, prioridad adaptativa y vistos al final |
| Vídeos dentro de un tema | Orden docente entre los pendientes, con vistos al final; sin reordenación algorítmica |
| Hilos y respuestas del foro | Actividad más reciente (véase §8) |

En las listas adaptativas:

1. El último contenido iniciado y todavía pendiente tiene prioridad absoluta; en un curso con temas se prioriza el tema correspondiente para facilitar la continuación.
2. Los demás contenidos pendientes se ordenan por prioridad estimada para ese alumno. Si no existen datos suficientes, se mantiene el orden original definido por el docente.
3. Los contenidos completados o marcados como vistos pasan al final y siguen accesibles.

Dentro de un tema con varios vídeos se respeta la secuencia del docente entre los pendientes; no se aplica el recomendador en ese nivel. Si el alumno abrió libremente un vídeo fuera de secuencia, deberá poder reanudarlo sin alterar el orden pedagógico de los demás. La presentación concreta de esa reanudación (por ejemplo, indicación de continuar) se refinará en Stitch.

El orden adaptativo se recalcula al entrar en la pantalla, utilizando la información disponible en ese momento; al completar o marcar un contenido se actualiza el orden correspondiente. No se fija un itinerario inmutable por alumno ni se cambia el orden canónico almacenado del docente. La adaptación no solicita consentimiento en cada sugerencia, no requiere mostrar puntuaciones ni etiquetas algorítmicas y no bloquea la elección de otro contenido.

Como refinamiento propuesto, mantener estable la lista durante la lectura y aplicar transiciones discretas solo cuando el usuario realiza una acción que modifica el estado. Evitar animaciones que distraigan y respetar las preferencias de movimiento reducido.

### 5.3. Estado de visualización y progreso

El alumno puede marcar un vídeo como visto, incluso si ya conocía el contenido o lo vio fuera de 480Academy. Los vídeos que consten como vistos por reproducción y los marcados manualmente comparten el estado visual de completado y bajan en la lista. Internamente se distinguen la declaración manual y las señales de reproducción efectivamente registradas; no se inventa telemetría ni se infiere automáticamente comprensión. Un tema podrá representar el progreso de sus vídeos y considerarse completado cuando estén completados sus contenidos (criterio operativo propuesto).

Se propone permitir desmarcar como visto una unidad, sin borrar el historial real de reproducción. El criterio exacto de finalización automática y la relación de este estado con la métrica de visualización se concretarán antes del bootstrap.

El progreso visible puede mostrar vídeos/temas completados, calificaciones, evolución y estadísticas educativas sencillas, como tiempo de reproducción registrado si está disponible. No mostrar telemetría detallada, puntuaciones internas de ordenación, inferencias de engagement ni predicciones de éxito formativo al alumno. El tiempo de reproducción no equivale a tiempo de atención.

## 6. Reproducción audiovisual y preguntas de atención

### 6.1. Reproductor responsivo

YouTube es el proveedor de la demostración, integrado mediante su reproductor autorizado. La plataforma no aloja vídeos. Se desacoplará técnicamente el proveedor, pero no se diseñarán ni implementarán interfaces específicas para otros proveedores en el piloto.

Admitir vídeos horizontales y verticales, preservando la relación de aspecto original y sin recortes involuntarios. En un teléfono en vertical, un vídeo horizontal se presenta arriba, utilizando el ancho disponible; debajo se sitúa la interfaz. En orientación apaisada o pantalla completa, aprovechar al máximo la superficie compatible con el vídeo. No se conoce la orientación de los contenidos del cliente; procurar ejemplos de ambos formatos.

**El reproductor se adapta al dispositivo, no a la aparición de elementos temporales de la interfaz.**

- Un cambio de orientación o tamaño de ventana puede redimensionar y redistribuir el reproductor.
- La aparición, cierre o desactivación de una pregunta de atención no debe redimensionarlo.
- Preservar el instante de reproducción, el estado de pausa/reproducción y, cuando proceda, la pregunta pendiente al cambiar la orientación. Evitar recrear el reproductor innecesariamente.
- Mantener accesibles los controles originales del proveedor y su pantalla completa nativa. La compatibilidad concreta dependerá del navegador y del reproductor.

### 6.2. Tarjeta de preguntas de atención

Utilizar un único componente de tarjeta de preguntas compatible con YouTube:

- En vertical, aparece debajo del reproductor; en apaisado, puede aparecer en un espacio lateral o inferior exterior al reproductor si hay espacio reservado desde el principio. En una vista sin ese espacio, no se superpone ni fuerza un redimensionamiento.
- Mantener la misma estética y comportamiento de tarjeta en ambas orientaciones; adaptar solo su posición y entrada. No colocar capas ajenas sobre el reproductor de YouTube ni interferir con sus controles.
- En pantalla completa nativa del proveedor, suspender temporalmente las preguntas sin penalización. La navegación vuelve al abandonar ese modo; la gestión exacta de eventos pendientes se concretará sin generar ráfagas de preguntas.
- Las preguntas aparecen en los puntos configurados, seleccionadas del banco correspondiente. Son voluntarias y no detienen ni bloquean la reproducción. El alumno puede responder, cerrar o ignorar.
- Proporcionar feedback inmediato de acierto/error y reputación cuando corresponda. Los errores y omisiones no penalizan; respetar el máximo de puntos por vídeo.
- Permitir activar/desactivar las preguntas desde el menú contextual y conservar la preferencia del alumno.

Un modo inmersivo propio que mantenga una zona lateral/inferior estable es una posible distribución del mismo componente, no una obligación de construir un segundo reproductor. Si las restricciones del navegador impiden presentar preguntas en pantalla completa, prima la reproducción.

**Backlog, fuera del piloto:** estudiar tarjetas semitransparentes superpuestas y arrastrables con otros proveedores que permitan esa interacción. No generar mockups ni dedicar esfuerzo de implementación a esa variante.

Referencia de restricciones: [YouTube API Services — Required Minimum Functionality](https://developers.google.com/youtube/terms/required-minimum-functionality).

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

El docente utiliza la misma identidad, patrones de navegación y tarjetas dinámicas que el alumno en las vistas comunes. Añade acciones de gestión cuando posee o tiene permiso para gestionar el curso; no necesita una aplicación separada.

- Crear, editar, publicar/despublicar cursos, temas y vídeos; sustituir enlaces de vídeo y modificar su orden.
- En modo de edición, presentar la estructura original y el orden pedagógico, sin reordenación adaptativa del alumno. Reutilizar las vistas comunes en lo posible.
- Gestionar los tests inicial/final y su umbral de superación.
- En cada vídeo gestionado, ofrecer acceso al banco de preguntas: crear/editar/eliminar, asociar bancos a vídeos, segmentos o temas, configurar intervalos o instantes de aparición y reutilizar/ampliar preguntas sin perder las anteriores.
- Solicitar a la IA preguntas para poblar o ampliar el banco a partir del contenido disponible por medios autorizados (descripciones, transcripciones o materiales del docente). Revisar antes de aprobar; no generar un nuevo banco en cada reproducción.
- Participar, supervisar y moderar los foros de sus cursos, corregir valoraciones y configurar el intervalo para la intervención de IA.
- Consultar el listado de sus alumnos y abrir informes individuales. Diferenciar progreso y resultados observados de estimaciones numéricas de engagement/éxito y su confianza. Mostrar «datos insuficientes» cuando corresponda; no convertir la ausencia de datos en valoración negativa.
- Configurar periodicidad de informes (semanal por defecto) y avisos educativos según el alcance de las historias de usuario. Las predicciones no cambian automáticamente notas, certificados ni acceso.

La telemetría detallada tampoco se expone al docente. No se diseñarán informes educativos agregados de curso/plataforma para el piloto.

Para la edición de preguntas por segmentos, Stitch puede explorar una línea temporal esquemática con intervalos y puntos de aparición y un listado editable de bancos. Esta visualización es una propuesta, no una exigencia de editor audiovisual complejo.

## 10. Administrador: panel adicional

El administrador puede utilizar la experiencia común y, si es propietario o gestor autorizado de un curso (por ejemplo, el de bienvenida), sus capacidades docentes. Esto no implica que cualquier permiso de edición se conceda únicamente por ocultar o mostrar botones.

Además dispone de un panel de administración de plataforma, independiente, de navegación estable y convencional. Priorizar funcionalidad sobre innovación visual; no aplicar por defecto la reordenación dinámica de tarjetas. Puede usar navegación lateral, pestañas, tablas, formularios y gráficas, conservando los colores y tipografía comunes. Diseñar principalmente para PC y adaptar razonablemente a pantallas pequeñas.

Capacidades previstas:

- Gestión de plataforma, usuarios e integraciones de IA; configuración de proveedores/modelos y de las funciones delegadas a cada uno.
- Acciones manuales para investigar patrones y recalibrar el modelo predictivo; mostrar el estado, la versión y la última ejecución. Diferenciar recalibración de inferencia cotidiana.
- Métricas técnicas e historial de ejecución del modelo, claramente identificados como experimentales. No introducir por ello informes educativos agregados que quedaron fuera de alcance.
- Configuración de notificaciones comerciales según las historias y prioridades existentes.

La gestión de credenciales de API debe ser segura en servidor; no presentar secretos en texto claro, ni incorporarlos al frontend, mockups o repositorio. La edición de integraciones, el alcance exacto de gestión de usuarios y las gráficas administrativas son ampliaciones a revisar con las historias de usuario, no motivos para bloquear el flujo imprescindible de recalibración manual.

## 11. Personalización, predicción y uso sostenible de IA

Distinguir dos mecanismos independientes que pueden compartir señales de entrada:

| Mecanismo | Finalidad | Ejecución |
| --- | --- | --- |
| Recomendador determinista | Recomendar cursos y ordenar los temas o vídeos independientes pendientes | Reglas y puntuaciones locales/servidor; sin llamadas a IA generativa por acceso |
| Modelo predictivo experimental | Estimar engagement y éxito formativo individual para el docente | Modelo estadístico o de aprendizaje automático almacenado, con inferencia ordinaria sin llamadas a IA generativa |

El recomendador puede utilizar intereses, conocimientos previos, dificultad, competencias, progreso, resultados de preguntas y señales relevantes de interacción. Cuando no tenga información suficiente, conserva el orden docente. No depende de que el modelo predictivo experimental esté validado. Los pesos, variables, reglas y criterio de suficiencia de datos están pendientes de implementación y validación.

La IA generativa se utilizará cuando aporte valor: generación anticipada de preguntas, participación/moderación asistida en el foro, interpretación de métricas e investigación puntual de patrones. Las operaciones repetitivas (ordenación, registro de progreso, cálculo de puntuaciones e inferencia de un modelo entrenado) no requieren llamadas generativas. El administrador inicia manualmente la recalibración, que puede utilizar técnicas de aprendizaje automático convencionales y asistencia generativa puntual.

No es preciso elegir el modelo estadístico concreto en este documento de UI/UX. Los datos sintéticos permiten demostrar el funcionamiento, no demostrar eficacia educativa ni precisión predictiva sobre alumnos reales. No presentar números ficticios como resultados validados. La privacidad, la minimización de datos y la separación de señales e identidad se mantienen, especialmente por la posibilidad de usuarios menores.

## 12. Handoff para Google Stitch

Generar un tablero de pantallas conectadas, no un conjunto de diseños independientes. Usar el wordmark fijo de §2 y un sistema de componentes reutilizables. La interfaz del alumno debe tener el mayor nivel de acabado; reutilizarla para las capacidades docentes y resolver el panel administrativo con patrones convencionales.

Inventario orientativo (priorizar las historias imprescindibles; agrupar estados y pantallas si resulta conveniente):

| Pantalla o estado | Contenido que debe poder apreciarse |
| --- | --- |
| Acceso | Inicio de sesión/registro por correo, interfaz móvil; Google solo si se incorpora |
| Mis cursos | Tarjetas verticales ordenadas por acceso, curso iniciado y sin empezar; entrada al menú |
| Curso plano | Vídeos pendientes/reanudables y vistos al final, sin numeraciones; menú abierto con evaluación y foro |
| Curso con temas | Temas dinámicos y progreso; vista interior con vídeos en orden docente |
| Vídeo móvil vertical | Reproductor arriba para vídeo horizontal, tarjeta de atención debajo, navegación sin colisión |
| Vídeo vertical y orientación apaisada | Relación de aspecto preservada; tarjeta externa si existe espacio; pantalla completa nativa sin preguntas ni navegación |
| Pregunta interactiva | Estado de respuesta, feedback, cierre y activación/desactivación en menú |
| Evaluaciones | Test inicial voluntario y final, resultado e intentos según corresponda |
| Foro | Lista dinámica, hilo con respuestas anidadas, respuesta de IA identificada y composición de respuesta |
| Progreso, perfil y recomendaciones | Avance, notas, reputación, intereses, datos y preferencias; sin señales internas |
| Certificados | Certificado propio, URL verificable y vista de verificación; acuñación explícita solo si se aprueba |
| Docente | Lista de cursos común, edición de estructura original y vídeo, banco de preguntas, evaluaciones y moderación |
| Seguimiento docente | Lista de alumnos e informe individual con hechos, predicciones, confianza y datos insuficientes |
| Administración (PC) | Navegación fija, integraciones y recalibración manual, estado e historial experimental |

Incluir variantes de estado (carga, vacío, error, sin datos, sin permiso, guardado/confirmación) de los componentes imprescindibles cuando sea posible. Los controles que se muestren como funcionales deben corresponder al alcance aprobado o quedar identificados como opcionales.

Validar visualmente móvil vertical, móvil apaisado y escritorio, incluida la estabilidad del reproductor y del menú. Mantener los textos de la UI en castellano en el primer tablero; los detalles de layout, espaciado, iconos, miniaturas y microcopy son refinables. No añadir numeraciones visibles al temario del alumno, rankings competitivos, banners promocionales invasivos, chatbots separados, puntuaciones predictivas para alumnos ni controles que cubran YouTube.

Flujo principal para comprobar la coherencia del tablero: iniciar sesión → Mis cursos → curso → tema si existe → vídeo → pregunta voluntaria → marcar/completar → lista adaptada → siguiente contenido. Desde el menú contextual se accede a evaluación y foro; desde perfil, a progreso y gestión documental. Incluir el camino de edición docente y el de recalibración administrativa sin inventar otras experiencias.

## 13. Revisión antes del bootstrap y cuestiones abiertas

Sin modificar todavía las historias existentes, registrar los siguientes puntos para su revisión tras el tablero:

| Referencia | Revisión prevista |
| --- | --- |
| HU-02, HU-05 | Capacidades comunes y permisos por propiedad/gestión de curso, incluidos administradores que gestionen uno |
| HU-06, HU-07, HU-26 | Mis cursos por acceso, cursos planos o con temas, estados visto/manual, reanudación, orientación y estabilidad del reproductor |
| HU-08 | Curso de bienvenida disponible si se produce; conservar su carácter no bloqueante |
| HU-09, HU-10, HU-11 | Tarjeta externa compatible con YouTube, preferencia de preguntas, pantalla completa, edición de segmentos y generación anticipada |
| HU-13, HU-14, HU-16 | Acceso contextual a tests y foro, sin desplazar el protagonismo del vídeo |
| HU-16 a HU-20 | Ordenación por actividad propagada por toda la jerarquía, incluidas intervenciones de IA |
| HU-23, HU-24 | Recomendación adaptativa de unidades, no solo cursos; orden docente de respaldo y libertad de elección |
| HU-28, HU-29 | Informes individuales, controles de recalibración y separación de métricas técnicas administrativas |
| HU-32 a HU-34 | Perfil documental, estados de certificado y confirmación explícita de acuñación opcional |
| Nuevas historias/RNF | Navegación contextual accesible, edición de perfil/preferencias, configuración segura de integraciones de IA y demás necesidades detectadas en los mockups |

Quedan abiertos el detalle geométrico del menú, el criterio de marcado automático, la reversión de vistos, desempates de ordenación, transiciones, estados vacíos y el algoritmo concreto. Son cuestiones de refinamiento, no nuevos bloqueos para generar el tablero. No dar por consensuadas mejoras opcionales del grupo ni ampliar el alcance sin revisar prioridades.

## 14. Memoria de presentación

Separar la documentación de ingeniería de la memoria destinada al jurado y al cliente. Recuperar, cuando se prepare esa memoria, diagramas y simulaciones visuales de los bucles, la ordenación adaptativa, la actividad jerárquica de los foros, los roles acumulativos y la separación entre recomendación y predicción. Utilizar la identidad visual de 480Academy y señalar los datos ficticios. Las simulaciones interactivas deberán reproducirse en un formato independiente si se desea utilizarlas fuera del chat. No son funcionalidades adicionales exigidas al producto desplegado.
