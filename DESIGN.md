---
name: 480Academy
description: Academia de vídeo mobile-first con Figtree, superficies neutras y acentos rojos selectivos.
---

# 480Academy · Sistema de diseño

El alumno llega a **Mis cursos**, abre una lección y puede retomar donde la dejó. La interfaz reserva el espacio principal para el contenido. Las preguntas voluntarias, el foro, la evaluación y la gestión aparecen en su contexto. Los componentes se comparten entre móvil y escritorio y entre roles.

Esta especificación aplica las convenciones y las historias vigentes al [tablero exportado](docs/design/stitch/) el 28 de noviembre de 2026. Las imágenes muestran composición y estados de referencia. El [PRD](docs/PRD.md) y las [historias de usuario](docs/bitacora/480Academy-user-stories.md) gobiernan el comportamiento. El [contrato de Stitch](docs/MCP.md) documenta la procedencia y la consulta remota opcional.

## Identidad y tokens

El wordmark se compone en una sola línea y sin espacio entre **480** en blanco y **Academy** en rojo, en **Figtree 700** sobre `#141414`. Mantener proporción, capitalización y colores en cada vista. Usar texto accesible «480Academy» y una presentación constante en cabeceras y acceso.

| Token | Valor | Uso |
| --- | --- | --- |
| `brand-black` / `on-brand-black` | `#141414` / `#FFFFFF` | Banda de marca, superficie oscura y controles de alto contraste |
| `brand-red` / `brand-red-hover` | `#FF4950` / `#E03A41` | Wordmark, progreso y acentos. Validar cualquier uso interactivo |
| `brand-red-soft` / `on-brand-red-soft` | `#FFF0F0` / `#930019` | Énfasis suave legible |
| `primary` / `on-primary` | `#BC1227` / `#FFFFFF` | Acción principal y enlaces en fondos claros |
| `primary-container` / `on-primary-container` | `#FFEDEB` / `#410006` | Selección o aviso contextual |
| `surface` / `surface-alt` / `surface-container` | `#FFFFFF` / `#F7F8FA` / `#F3F0EF` | Tarjeta, lienzo, superficie secundaria |
| `on-surface` / `on-surface-variant` | `#333333` / `#4D4D4D` | Texto principal y metadatos |
| `outline` / `outline-strong` | `#E5E7EB` / `#C8C6C5` | Separadores decorativos. Para bordes necesarios usar un tono que alcance 3:1 |
| `success` / `success-container` / `on-success-container` | `#006E2D` / `#C5FFC8` / `#002109` | Acierto, visto, certificado emitido |
| `warning` / `warning-container` / `on-warning-container` | `#904D00` / `#FFEDE3` / `#2F1500` | Atención, acción pendiente |
| `info` / `info-container` / `on-info-container` | `#0053DB` / `#EEF0FF` / `#00174B` | Estado del sistema, intervención de IA etiquetada |
| `error` / `error-container` / `on-error-container` | `#BA1A1A` / `#FFEDEA` / `#410002` | Validación, error recuperable |

Los cuatro tonos semánticos sólidos usan blanco como texto. Para texto normal en controles usar el carmesí accesible `#BC1227` o negro de marca con blanco. El rojo `#FF4950` con blanco da aproximadamente **3,3:1**. El objetivo es WCAG 2.2 AA, 4,5:1 para texto normal y 3:1 para texto grande y componentes pertinentes. Verificar combinaciones renderizadas, especialmente opacidades sobre vídeo, estados de foco y tarjetas bloqueadas.

| Tipo | Tamaño/interlínea · peso | Espaciado |
| --- | --- | --- |
| Display escritorio / móvil | 36/44 · 700 / 28/34 · 700 | −0,5 / −0,25 px |
| Titular grande escritorio / móvil | 28/36 · 700 / 24/30 · 700 | −0,25 px |
| Titular medio | 22/28 · 600 | −0,15 px |
| Título grande / medio | 18/24 · 600 / 16/22 · 600 | Normal |
| Cuerpo grande / medio | 16/24 · 400 / 14/20 · 400 | Normal |
| Etiqueta grande / media / pequeña | 14/20 · 600 / 12/16 · 600 / 11/14 · 500 | 0,1 / 0,2 / 0,2 px |

Usar Figtree con respaldo `system-ui, sans-serif` y números tabulares en reloj, progreso y datos comparables. Interfaz en castellano y estilo oración. Figtree se puede empaquetar con licencia y procedencia verificadas si la implementación necesita fuentes sin red.

- **Espacio.** Escala de 4, 8, 12, 16, 24, 32 y 48 px. Móvil de referencia a 390 px, margen 16 px y separaciones de 12–16 px. Comprobar reflujo también a 320 px. Escritorio hasta 1120 px para aprendizaje, 1200 px para edición/seguimiento y 1280 px para panel o reproducción amplia. Una columna fluida en móvil, dos o tres cuando la legibilidad lo permita, manteniendo el orden de lectura.
- **Componentes.** Tarjeta blanca, borde de 1 px, radio 10 px, sombra `0 2px 8px rgba(0,0,0,.06)`. Controles de radio 8 px, etiquetas y pistas de progreso redondas. Usar botones de texto, con icono y de solo icono con nombre accesible. Los campos tienen etiqueta persistente, error asociado y foco visible. Usar icono y texto para estados.
- **Navegación.** Disparador contextual discreto en esquina inferior derecha, elevado con `0 8px 24px rgba(20,20,20,.14)`. Un abanico o lista compacta abre con pulsación y teclado, se recoge al elegir o pulsar Escape y devuelve el foco al disparador. Respetar áreas seguras y evitar la esquina ocupada por el vídeo o la tarjeta activa. Global ofrece perfil, certificados y Mis cursos. Curso ofrece evaluaciones, foro, progreso y gestión autorizada. Vídeo ofrece foro y preferencia de preguntas, con edición cuando corresponde. Abrir, reproducir, retomar y marcar visto son acciones directas.
- **Movimiento.** Cambios de estado de 120 ms, abanico de 200 ms al abrir y 140 ms al cerrar. Respetar movimiento reducido y mantener estable el orden durante lectura o redacción. Usar reordenación en acceso, refresco o acción explícita.
- **Estados.** Prever carga, vacío, error recuperable, acceso denegado, confirmación y «Datos insuficientes». Mantener etiquetas accesibles en controles, objetivo táctil de 44 px en acciones principales, foco visible y anuncios de feedback no intrusivos. Usar nombres ficticios o sintéticos en la demo.

## Reproductor y preguntas de atención

La vista usa un único `<video>` HTML5 propio, con controles accesibles, atribución y `object-fit: contain`. Los formatos 16:9 y 9:16 ilustran orientaciones. Usar la proporción original de los metadatos, también para archivos con otras proporciones, y calcular el espacio por el área disponible. Mantener identidad del nodo, tiempo y estado de reproducción al mostrar, esconder, responder o desactivar la tarjeta.

| Vídeo | Área disponible | Imagen | Tarjeta de atención |
| --- | --- | --- | --- |
| Horizontal | Apaisada | Máxima superficie compatible | Translúcida a la derecha, sobre la imagen, conservando controles. Ocultar hacia la derecha, recuperar hacia dentro |
| Horizontal | Vertical | Ancho disponible arriba | Debajo, fuera de la imagen |
| Vertical | Vertical | Máxima superficie compatible | Translúcida desde abajo, por encima de controles. Ocultar hacia abajo, recuperar hacia arriba |
| Vertical | Apaisada | Máxima altura compatible | Lateral en el espacio sobrante, fuera de la imagen |

Mantener una sola tarjeta y como máximo la última pregunta pendiente. Dar controles visibles «Ocultar» y «Recuperar pregunta» como alternativa a gestos. La tarjeta permite ignorar, responder y recibir feedback breve antes de recogerse. El contenido sigue reproduciéndose y la selección respondida no es recuperable. No interceptar interacciones fuera de la tarjeta. Si el espacio exterior es insuficiente, suspender la tarjeta conservando la reproducción. Las filas exteriores reservan su disposición independientemente de que haya pregunta.

Pantalla completa del contenedor cuando esté disponible, con la misma matriz y salida visible. Admitir giro manual. En pantalla completa nativa exclusivamente audiovisual, suspender preguntas y navegación y restaurar el contexto al volver sin acumular preguntas. Los botones de las maquetas no prueban APIs de navegador. La [matriz de pruebas](docs/TEST_PLAN.md) define la validación en dispositivo.

## Pantallas y referencias locales

Capturas derivadas de los veinte HTML del ZIP. Conservan su jerarquía y tokens. Las seis imágenes vinculadas a un alojamiento externo se sustituyeron por fotogramas neutros. Los correos y apellidos de ejemplo del tablero se generalizaron. La exportación contenía estilos y scripts, pero carecía de imágenes binarizadas, capturas originales y fichas `components/*.html`. Estas referencias WebP se abren sin red y sirven para reconstruir componentes. Los anchos base son 390 px en móvil, 844 px en móvil apaisado y 1440 px en escritorio.

| Pantalla o variante | Referencia | Aplicación |
| --- | --- | --- |
| Acceso | [Móvil](docs/design/stitch/acceso.webp) | Inicio de sesión y entrada al registro por correo. Añadir registro, validación y error accesible |
| Mis cursos | [Móvil](docs/design/stitch/mis-cursos-movil.webp) · [Escritorio](docs/design/stitch/mis-cursos-escritorio.webp) | Una lista de cinco bandas lógicas sin secciones visibles. Añadir aviso de compra simulada y actualización tras concesión |
| Curso plano | [Móvil](docs/design/stitch/curso-plano.webp) | Vídeos directos, reanudar y estado visto. Ordinal solo en modo fijo y sin cabecera separada de vistos |
| Curso con temas | [Móvil](docs/design/stitch/curso-tematico-movil.webp) · [Escritorio](docs/design/stitch/curso-tematico-escritorio.webp) | Temas y vídeos con modo independiente. Distribución maestro–detalle en escritorio |
| Vídeo horizontal en área vertical | [Móvil](docs/design/stitch/video-horizontal-vertical.webp) | Tarjeta y acciones debajo del vídeo |
| Vídeo horizontal en área apaisada | [Escritorio](docs/design/stitch/video-horizontal-horizontal.webp) | Tarjeta superpuesta a la derecha |
| Vídeo vertical en área vertical | [Móvil](docs/design/stitch/video-vertical-vertical.webp) | Tarjeta superpuesta desde abajo |
| Vídeo vertical en área apaisada | [Escritorio](docs/design/stitch/video-vertical-horizontal.webp) | Tarjeta fuera del vídeo, en el lateral libre |
| Pantalla completa | [Escritorio](docs/design/stitch/pantalla-completa-escritorio.webp) · [Móvil apaisado](docs/design/stitch/pantalla-completa-movil-horizontal.webp) | Contenedor propio. Añadir modo vertical y retorno desde modo nativo con las reglas anteriores |
| Evaluaciones | [Inicial y final](docs/design/stitch/evaluaciones.webp) | Entrada por menú. Añadir cuestionario, mejor nota e intentos restantes |
| Foro | [Hilos y respuestas](docs/design/stitch/foro.webp) | Anidación, rol, respuestas y actividad propagada. Identificar intervenciones de IA y datos simulados |
| Progreso, perfil y certificados | [Móvil](docs/design/stitch/progreso-perfil-certificados.webp) | Progreso, superación y emisión son estados distintos. Añadir vista pública de verificación |
| Edición docente | [Móvil](docs/design/stitch/docente-edicion-movil.webp) · [Escritorio](docs/design/stitch/docente-edicion-escritorio.webp) | Canónico, publicación, interruptores por lista y banco de preguntas solo para docentes asignados |
| Seguimiento docente | [Móvil](docs/design/stitch/docente-seguimiento-movil.webp) · [Escritorio](docs/design/stitch/docente-seguimiento-escritorio.webp) | Informe individual. Separar hechos, estimación, confianza y ausencia de datos |
| Administración | [Escritorio](docs/design/stitch/administracion.webp) | Navegación lateral. Añadir vistas de usuarios, roles, registro de cursos y concesiones antes de ampliar IA |

## Reconciliación con las especificaciones

| Hallazgo en el tablero o la bitácora | Regla de implementación |
| --- | --- |
| Nota de Stitch sobre controles de YouTube. El enunciado permitía ese proveedor | Reproductor propio HTML5 y fuentes autorizadas externas. Las maquetas de controles ilustran disposición, no un proveedor. HU-07, HU-09, RNF-08/11 |
| El tablero evita ordinales de forma general y alguna lista agrupa los vistos | Ordinal generado y orden canónico completo en fijo. Adaptativo sin ordinales, continuación y vistos al final en la misma lista. Editor canónico. HU-37/39/49 |
| Mis cursos del boceto enseña un orden ilustrativo y la bienvenida carece de vista propia | Orden exacto del [catálogo](docs/specs/catalogo.md) para los tres roles. Bienvenida textual y foro general con lectura automática. Tarjeta bloqueada operable con aviso, sin abrir ficha ni registrar visita. HU-06/08/52 |
| Administración enfatiza IA y el menú de seguimiento dibuja «Panel admin (PC)» | Mostrar ese enlace solo con rol administrativo. Implementar primero permisos y asignaciones múltiples. Edición e informes requieren asignación explícita aun para administradores. HU-02/42/44/50/51 |
| Certificación parece una acción manual y el mockup no incluye la verificación externa | Emitir una vez al aprobar el final. «Copiar enlace» abre la verificación pública. Mantener una identificación mínima sintética. Blockchain queda como propuesta opcional del grupo. HU-13/32/33/34 |
| Google, integraciones de IA, nombres de cursos, valores, badges y fotos son ejemplos | Usar correo/contraseña, el [anexo audiovisual](docs/bitacora/480Academy-anexo-videos-demostrativos.md) y datos sintéticos. Aplicar los niveles de alcance del [PRD](docs/PRD.md). Distinguir el estado «Datos insuficientes» de cifras experimentales calculadas |

Usar estas referencias al implementar. Probar texto y foco con contenido largo, estados sin permiso, tarjetas sin imágenes y todas las posiciones del reproductor. La geometría del menú, opacidad y umbrales de gestos se afinan con esa revisión.
