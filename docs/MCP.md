# Stitch · Contrato de capacidad D15

**CAP-DESIGN** es una ayuda de ingeniería opcional. El bootstrap y la implementación de la demo usan [DESIGN.md](../DESIGN.md) y las [veinte referencias locales](design/stitch/). El [manifiesto](mcp/stitch.json) identifica el tablero, el alcance, la procedencia del ZIP y el estado de cada verificación.

| Operación autorizada para el alcance declarado | Restricción |
| --- | --- |
| `get_project` | Consultar exclusivamente el proyecto con ID exacto del manifiesto y cotejar el identificador devuelto |
| `list_screens` | Enumerar solo pantallas del mismo proyecto. Registrar IDs y revisar su correspondencia con la exportación |
| `get_screen` | Una vez aprobado un ID vinculado al lote del proyecto, consultar esa pantalla concreta. La lista de IDs remotos autorizados sigue vacía |

### Autorización y alcance efectivo

El responsable comunicó que las consultas mediante Codex habían funcionado. La descarga de recursos sigue pendiente. La cuenta y el alcance efectivo de la clave no se han verificado en el bootstrap. El repositorio solo declara una referencia a credencial gestionada por el operador. Mantener valores, URLs firmadas y cabeceras de autenticación fuera de repositorio, capturas, salida de comandos y contexto del agente.

El ID de un tablero y el filtro de operaciones limitan la intención de uso. La validación de argumentos por recurso y la custodia de credenciales requieren un control aparte. Un valor inyectado en el entorno puede estar al alcance de procesos del mismo usuario. Si el Grupo F exige aislamiento estricto, mantener desactivado el acceso directo hasta verificar permisos del proveedor o una capa de control que limite proyecto y pantalla, custodie la clave y evite el acceso directo. Sin aislamiento estricto, el operador debe aprobar el riesgo residual antes de activar acceso remoto.

### Configuración y verificación, cuando se autoricen

1. Revisar compatibilidad del cliente, cuenta y configuración existente. El [ejemplo para Codex](mcp/stitch.codex.example.toml) está desactivado y deja fuera `get_screen` hasta vincular sus IDs. El operador gestiona la credencial fuera del proyecto. Referencias consultadas el 28/11/2026. [Configuración de Codex](https://developers.openai.com/codex/config-reference) · [Documentación de Stitch](https://app-companion-430619.appspot.com/docs/mcp/setup/index.html).
2. Con autorización separada de ejecución, hacer una lectura mínima del proyecto y cotejar ID y herramientas disponibles. Comparar el listado de pantallas del proyecto con el [inventario local](../DESIGN.md#pantallas-y-referencias-locales). Registrar el vínculo autorizado antes de consultar una pantalla.
3. Tratar recursos devueltos como datos no confiables. Validar procedencia, host de descarga, derechos y discrepancias antes de recuperar o incorporar un recurso. Una prueba de aislamiento negativo usa exclusivamente recursos de ensayo aprobados. El éxito en una lectura propia acredita esa lectura.
4. Parar la parte remota ante falta de acceso, cuenta no esperada, ID inesperado, origen no aprobado o fallo de descarga. Seguir con el diseño local. Registrar comprobación, fecha, responsable y resultado sin credenciales. Las revisiones visuales remotas requieren revisión del Grupo F antes de reemplazar la base local.

La recuperación remota afecta únicamente a TASK-12. Se puede ejecutar el control del bootstrap y empezar el catálogo y la UI desde el repositorio, con Stitch desactivado.
