# Convenciones del proyecto

**Proyecto** · 480Academy, maqueta educativa web y reputación simbólica, Grupo F de Hackado 2026. La documentación operativa mantiene el castellano de las fuentes y de la UI. El responsable de repositorio y el Grupo F mantienen la autoridad sobre alcance, acceso, presupuesto, aceptación y despliegue. [PRD](PRD.md) · [Hoja de acuerdos](bitacora/Hoja%20de%20acuerdos.pdf).

Se aplica SDD Bootstrap v0.2 experimental, D01–D15, sobre un GitHub existente. D11–D15 se ensayan en este proyecto. Las fases de publicación, selección definitiva de stack y aprobación del host son decisiones del grupo. [Revisión experimental fijada](https://github.com/s1vh/sdd-bootstrap-skill/tree/6785b67decec54adb3a5f68fe64eeda45503b100).

## Guías y fuentes

| Documento | Responsabilidad |
| --- | --- |
| [README](../README.md), [AGENTS](../AGENTS.md), [CONTRIBUTING](../CONTRIBUTING.md) | Entrada, carga selectiva del contexto y colaboración |
| [PRD](PRD.md), [bitácora](bitacora/) | Alcance y priorización de la demo, historias y fuentes históricas |
| [DESIGN.md](../DESIGN.md), [referencias](design/stitch/) | Identidad, interacción y evidencia visual de Stitch |
| [Arquitectura](ARCHITECTURE.md), [contrato de catálogo](specs/catalogo.md), [MCP](MCP.md) | Fronteras técnicas, reglas comprobables y acceso opcional a recursos externos |
| [Backlog](BACKLOG.md), [pruebas](TEST_PLAN.md), [actualizaciones](UPDATES.md) | Dependencias, criterios de verificación y trabajo observado |

Mantener las fuentes históricas identificables. Ante contradicciones, revisar la fuente y registrar efecto sobre alcance o pruebas. Actualizar convenciones, rutas, contratos y criterios afectados en el mismo cambio. La bitácora de tareas vive en el repositorio con suficiente contexto para seguir desde otra sesión.

## Git y atribución

- El repositorio conserva su historia. `dev` es la integración de trabajo. `main` es la línea estable bajo control humano. Crear ramas de tarea desde `dev` y revisar la documentación específica del cambio.
- Los agentes pueden integrar localmente tareas asignadas, completas y con controles baratos relevantes, con `git merge --no-ff`. Conservar commits originales, autoría y SHA de origen. Registrar rama, requisito/tarea, resultado de pruebas y límites. Verificar ascendencia antes de retirar ramas locales propias integradas mediante `git branch -d`. Mantener las ramas con trabajo único, revisión o comprobación pendiente.
- Publicar o retirar ramas remotas de acuerdo con la autorización y comprobar el resultado. La promoción a `main`, la reescritura de historia, el gasto y la publicación de la aplicación requieren autorización específica. Desplegar desde un commit aprobado de `main`. Hacer ensayos locales con `dev` y ramas de tarea.
- Registrar autor y committer efectivos. La atribución de agentes es opcional. Si se usa `Co-authored-by:`, identificar al contribuyente real y omitir modelo o plataforma si no se conocen. Usar la identidad acreditada del agente o un identificador de proyecto inequívoco. Para trailers textuales sin buzón autorizado, se puede usar una dirección reservada bajo `.invalid`. No reutilizar el correo del usuario ni trailers previos.
- Revisar `.gitignore` al introducir rutas de credenciales, caches o datos. El bootstrap verifica exclusiones del estado actual. Se versionan lockfiles, migraciones y fixtures sintéticas revisadas cuando se introduzcan.

## Harness y evidencia

| Pieza | Aplicación |
| --- | --- |
| Guías | Enrutado por [AGENTS.md](../AGENTS.md), tareas acotadas, contratos y fuentes en Git |
| Sensores iniciales | `python3 scripts/check-bootstrap.py`, `git diff --check`, revisión visual local y verificación de ascendencia |
| Sensores al implementar | Pruebas unitarias e integración focalizadas por riesgo. Priorizar invariantes de catálogo, roles por recurso, intentos y telemetría. Conservar los comandos reproducibles que realmente se incorporen |
| Límites de operación | Autorización humana para release, despliegue, gasto y credenciales. Permisos verificados en servidor al implementar. Contrato D15 y modo local por defecto |
| Relevo | En PR o actualizaciones indicar requisito/tarea, SHA, archivos, resultado observado, límites y primera acción que queda. Registrar causas de fallos repetidos y añadir el control más pequeño que los detecte |

Usar los [apuntes del evento](https://hackado2026-grupof.github.io/apuntes-harness-engineering/) como referencia de guías, sensores y límites. El bootstrap aporta una comprobación local. La instalación de CI, hooks, permisos de rama y reglas de ejecución dependerá de su autorización y verificación técnica. Las reglas de repositorio y la configuración de herramientas se evalúan por separado.

Ejecutar comprobaciones focalizadas sobre cambios terminados. Si se propone una campaña extensa de balance, simulación o juego vinculada a la gamificación, identificar un checkpoint estable de `dev` y obtener autorización expresa antes de ejecutarla. Las pruebas unitarias de reputación, seguridad y datos son controles ordinarios. La aceptación de la demo registra las comprobaciones críticas completas o la excepción que apruebe el Grupo F.

## Secretos, datos y licencias

La custodia de credenciales corresponde al operador autorizado. Mantener `/.secrets/`, `/secrets/`, entornos y claves fuera de Git. El acceso de agente a estos almacenes requiere autorización expresa y acotada al fin. La exclusión de Git reduce publicación accidental. Aplicar los límites de herramientas y del host para el acceso. Si hay una exposición, detener el flujo afectado y comunicarla sin repetir el valor.

Preservar el [LICENSE Apache 2.0 ya existente](../LICENSE). Los medios externos mantienen sus licencias y atribuciones de origen. El [anexo](bitacora/480Academy-anexo-videos-demostrativos.md) registra procedencia y comprobaciones pendientes. Las referencias del tablero se han reconstruido como imágenes de interfaz a partir del ZIP suministrado, con material externo sustituido. Confirmar los derechos de cualquier nuevo recurso antes de redistribuirlo.

Para acceso externo, registrar propósito, recursos, operaciones, secreto por referencia, alcance efectivo verificado o desconocido, evidencia y alternativa local. El contrato observado de Stitch vive en [MCP.md](MCP.md). Consultar fuentes en función de cambios o riesgos concretos. Mantener la solución portable entre agentes y clientes.
