# 480Academy · Instrucciones para agentes

Repo de la maqueta del Grupo F para el 30/11/2026. Comienza por el encargo y consulta sus secciones relevantes.

| Trabajo | Referencias |
| --- | --- |
| Alcance, dependencias o tarea inicial | [PRD](docs/PRD.md) · [Backlog](docs/BACKLOG.md) |
| Interfaz y reproducción | [DESIGN.md](DESIGN.md) · [Pruebas](docs/TEST_PLAN.md) |
| Catálogo y orden | [Contrato del catálogo](docs/specs/catalogo.md) |
| Permisos, persistencia, despliegue | [Arquitectura](docs/ARCHITECTURE.md) |
| Colaboración y relevo | [Convenciones](docs/PROJECT_CONVENTIONS.md) · [Evidencia](docs/UPDATES.md) |
| Referencia de Stitch | [Contrato MCP](docs/MCP.md) · [Diseño local](DESIGN.md#pantallas-y-referencias-locales) |

- Usa ramas de tarea desde `dev`. Integra cambios completos y comprobados con merge sin squash. Promover a `main` y desplegar requieren autorización específica. Consulta [CONTRIBUTING.md](CONTRIBUTING.md).
- Ejecuta `python3 scripts/check-bootstrap.py` si cambias documentación o referencias de diseño y las comprobaciones focalizadas relevantes si cambias código. Registra resultados y pendientes en [UPDATES.md](docs/UPDATES.md).
- Comprueba roles y permisos por usuario y curso en servidor. Preserva la distinción entre administración y docencia asignada. Usa datos sintéticos y conserva los documentos históricos.
- Requiere autorización humana explícita y acotada para abrir, inspeccionar, indexar, copiar o transmitir `/.secrets/`, `/secrets/`, credenciales o sus valores. Mantén referencias sin valores en los archivos versionados. Si aparece un secreto, detén la operación y avisa sin reproducirlo.
- Usa el diseño local por defecto. Para Stitch remoto, consulta el contrato D15, limita IDs y operaciones al alcance autorizado y detente ante cuenta, recurso u origen inesperados. Las muestras de configuración son inertes.
- Escala discrepancias de alcance, seguridad o gasto con la fuente y su impacto. Actualiza en el mismo cambio la especificación, prueba y ruta documental afectadas.
