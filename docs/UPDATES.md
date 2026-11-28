# Actualizaciones y evidencia

## 28 de noviembre de 2026 · Bootstrap del piloto

**Estado** · Preparado para iniciar TASK-01 y las comprobaciones tempranas de alojamiento y medios. La aplicación, el ensayo en dispositivo y el despliegue figuran como trabajo pendiente. Los niveles P0/P1/P2 ordenan la entrega y su aceptación corresponde al Grupo F. [Backlog](BACKLOG.md) · [Plan de pruebas](TEST_PLAN.md).

**Base revisada.** Partimos del commit `35be74389e5296907e254644915a2bd6fa78e46a`. Se consultaron el enunciado, la memoria, las 52 historias, las convenciones, el anexo y la hoja de acuerdos de la bitácora. Se contrastaron los cinco documentos del proyecto con la bitácora versionada, en especial la revisión de permisos, catálogo y HTML5. Se tomó la bitácora del commit como referencia funcional reproducible. Los apuntes del evento se consultaron en la revisión `9e38b3641e25265275f3b80767ca039d7c0d3ff7`. [Base de GitHub](https://github.com/Hackado2026-GrupoF/480Academy/tree/35be74389e5296907e254644915a2bd6fa78e46a) · [Bitácora](bitacora/) · [Apuntes](https://hackado2026-grupof.github.io/apuntes-harness-engineering/).

**Metodología.** Se aplicó la revisión `6785b67decec54adb3a5f68fe64eeda45503b100` de SDD Bootstrap experimental. D11 se adapta al repositorio ya inicializado. D12 conserva atribución verificable. D13 preserva el commit de trabajo al integrarlo en `dev`. D14 pone la viabilidad del recorrido y del destino antes de la elección definitiva de proveedor. D15 vincula Stitch a un proyecto exacto con alternativa local. [Convenciones](PROJECT_CONVENTIONS.md) · [Método](https://github.com/s1vh/sdd-bootstrap-skill/tree/6785b67decec54adb3a5f68fe64eeda45503b100).

| Comprobación ejecutada | Resultado |
| --- | --- |
| ZIP de Stitch | 20 HTML y 3 Markdown. Rutas relativas, sin entradas con recorrido de directorio ni enlaces simbólicos y CRC correcto. El documento de convenciones del ZIP coincide byte por byte con el de la base de GitHub. SHA-256 en el [manifiesto](mcp/stitch.json) |
| Referencias visuales | Se recompilaron estilos del export con Tailwind 3 y se renderizaron 20 vistas con Chromium sin JavaScript del ZIP y con la red bloqueada. Figtree e iconos se cargaron localmente durante el render. Se reemplazaron seis imágenes externas por marcadores y se generalizaron datos de ejemplo. Se verificaron composición y decodificación de las 20 imágenes WebP |
| Harness inicial | `python3 scripts/check-bootstrap.py` verifica enlaces y anclas locales, cobertura de las 52 HU, formato e inventario WebP, fichero de exclusiones y contrato D15 estático. `git diff --check` verifica el cambio antes de integrarlo |
| SDD Bootstrap experimental | `python3 -m unittest discover -s tests -v` en el checkout de la skill, 18 pruebas de política/Git correctas. Son verificaciones de la metodología, independientes del producto |
| Dos fuentes de vídeo candidatas | C02-V03 y C03-V03 redirigieron a WebM y respondieron `206 video/webm` con 1024 bytes a `Range: bytes=0-1023`. Pendientes reproducción, búsqueda temporal y atribución en dispositivos de la demo. [C02-V03](https://commons.wikimedia.org/wiki/File:Differential_(mechanical_device).webm) · [C03-V03](https://commons.wikimedia.org/wiki/File:Painting_process.webm) |
| Stitch remoto | Evidencia comunicada de consultas mediante Codex. Descarga y aislamiento por recurso pendientes. El adaptador versionado está desactivado. No se ejecutó una sesión MCP desde el bootstrap. [Contrato](MCP.md) |

**Decisiones propuestas.** Lanzar `TASK-01` con funciones puras, reservar P0 para un recorrido vertical comprobable y ensayar primero Node con persistencia durable si se identifica un host adecuado. Aplicar respaldo determinista sin señales, proponer un umbral técnico para visto y llevar el ensayo de pantalla completa al dispositivo real. Las fuentes distinguen hipótesis y hechos, y se mantiene la aceptación humana de alcance, stack definitivo y release. [PRD](PRD.md) · [Arquitectura](ARCHITECTURE.md).

**Siguiente relevo.** Catálogo implementa [su contrato](specs/catalogo.md) y pruebas con fixtures. UI y reproductor preparan [sus componentes](../DESIGN.md). Quien gestione despliegue registra el resultado de SPIKE-01 y coordina la verificación de clips. Las tareas que requieran el tablero remoto consultan el [contrato D15](MCP.md).

Para cada relevo posterior registrar fecha, tarea, requisitos, rama/SHA, cambio realizado, controles y resultados, limitaciones y primera acción pendiente. Marcar revisión y aceptación humana cuando se produzcan.

## 28 de noviembre de 2026 · TASK-01 · Catálogo y orden

REQ-02/03 y prueba de dominio de V-03. Implementación de los cinco grupos de Mis cursos y del orden por lista en `feat/TASK-01-catalogo`, desde `dev` en `f7c9cc2`. [Módulo](../src/lib/domain/catalogo.mjs) · [Pruebas](../tests/catalogo.test.mjs).

| Consumidor | Interfaz y relevo |
| --- | --- |
| Servidor · TASK-02 | Resolver `mayEdit` y `hasReadGrant` por usuario y curso y pasar un registro por ID a `proyectarCatalogo(cursos)`, con historial autorizado y fechas en UTC. Adjuntar solo metadatos públicos de tarjeta al estado `blocked`. Comprobar permisos al acceder al recurso y registrar la visita tras autorizarlo |
| UI · TASK-03 | Renderizar la secuencia `{ id, group, access, action }` en el orden entregado. `open` dirige al recurso y `notice` muestra `AVISO_CURSO_BLOQUEADO`. Por lista, `ordenarLista(mode, unidades)` devuelve `id`, `position` canónica, `title`, `seen` y `visualPosition` desde 1. Mostrar `ordinal` antes del título cuando esté presente |
| Integración · TASK-05 | Usar `resumirTema(videos)` para calcular `seen` y `lastStartedAt` de cada tema. Volver a proyectar con permisos y progreso vigentes tras refrescar. Acordar el cálculo real de interés. El respaldo provisional se aplica cuando falta una puntuación finita en el tramo que se ordena por interés |

Los tipos de entrada y las salidas están detallados en el [contrato ESM](specs/catalogo.md#interfaz-esm). Quedan pendientes la autorización y persistencia en servidor y la comprobación de V-03 en UI integrada.

| Comprobación ejecutada | Resultado |
| --- | --- |
| `node --test tests/catalogo.test.mjs` | 10 pruebas correctas con datos sintéticos y entradas congeladas |
| `git diff --check` | Sin incidencias de espacios en el diff |
| `python3 scripts/check-bootstrap.py` | 131 enlaces locales, 52 historias trazadas, 20 referencias WebP y alcance D15 comprobados de forma estática |
