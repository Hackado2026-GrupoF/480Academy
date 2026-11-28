# Contrato · Catálogo y orden de contenidos

**Implementación inicial** · TASK-01. **Trazabilidad** · REQ-02/03, HU-02/06/08/23/37/39/42/49/51/52. [PRD](../PRD.md) · [Historias y aceptación](../bitacora/480Academy-user-stories.md).

## Entrada y salida de TASK-01

Implementar funciones puras en JavaScript ESM, con pruebas `node --test`. Usar objetos de prueba y no depender de base de datos, login, red, framework o Stitch. Ubicación inicial sugerida `src/lib/domain/catalogo.mjs` con `tests/catalogo.test.mjs`. El servicio autenticado entregará una proyección de estas entradas al catálogo y hará cumplir permisos al abrir o modificar recursos.

1. **Cursos.** Uno por ID estable. Campos mínimos `id`, `publishedAt` (nulo para borrador), `createdAt`, `isWelcome`. Para el usuario, pasar `mayEdit`, `hasReadGrant`, `grantedAt`, `visitedAt` e `interest` (número finito o nulo) por curso. `mayEdit` ya refleja rol global y asignación vigente. Solo hay una bienvenida, publicada y de lectura automática. Fechas normalizadas a UTC, nulo si falta. `visitedAt` solo procede de accesos autorizados, no de clics bloqueados.
2. **Resultado.** Secuencia de entradas con ID, grupo, estado de acceso y acción permitida (`open` o `notice`). El servidor aplica proyecciones diferentes para tarjetas con y sin acceso. Para el consumidor bloqueado, devolver solo metadatos públicos de tarjeta. Excluir borradores ajenos.
3. **Listas de contenidos.** Entrada `mode` (`fixed` o `adaptive`) y unidades únicas con ID, posición canónica, título, `seen`, `lastStartedAt` e `interest`. Un tema recibe el instante del vídeo pendiente iniciado más reciente de su lista, si existe. En salida, posición visual y ordinal solo cuando corresponda. Las funciones preservan títulos y posiciones de entrada.

## Orden exacto de Mis cursos

Asignar la primera fila que se cumpla. En cada fila ordenar de forma descendente por las claves indicadas, con nulos al final e ID ascendente como último desempate. Comparar el ID de forma estable e independiente de la configuración regional.

| Grupo | Elegibilidad | Claves |
| --- | --- | --- |
| 1 | `mayEdit` vigente, incluye borradores | `visitedAt`, `publishedAt` o `createdAt` para borrador, ID |
| 2 | Bienvenida publicada sin visita, sin edición | ID |
| 3 | Publicado con lectura concedida o bienvenida, con visita | `visitedAt`, ID |
| 4 | Publicado con lectura concedida, sin visita | Interés si hay señal suficiente en el grupo, `grantedAt`, ID |
| 5 | Publicado sin lectura concedida, sin edición ni bienvenida | Interés si hay señal suficiente en el grupo, `publishedAt`, ID |
| Excluido | Borrador sin edición asignada | Fuera de la proyección |

Para TASK-01, considerar suficiente una entrada explícita y finita para todos los miembros de un grupo ordenable. Con puntuaciones ausentes o incompletas se usa el respaldo del grupo completo. Es una decisión operativa provisional para mantener el orden total. TASK-05 especificará cómo calcular interés y suficiencia. La comparación de dos elementos con las mismas fechas y señales siempre acaba en el ID.

Al pulsar un bloqueado, mostrar «Para acceder a este curso necesitas adquirirlo. Las compras no están disponibles en esta demostración». Tras conceder lectura y refrescar, el mismo ID pasa al grupo que corresponda, conservando historial válido si existe. Una revocación sin otro permiso válido devuelve un publicado al grupo bloqueado. Abrir contenido registra visita únicamente tras autorización. La bienvenida cambia al grupo 3 cuando se visita, salvo prioridad 1.

## Orden por lista

- **Fijo.** Orden canónico por posición y luego ID. Mostrar ordinal consecutivo desde 1 antes del título y conservarlo si se inicia, se ve o se desmarca. El docente edita el orden canónico aunque el alumno vea el modo adaptativo.
- **Adaptativo.** Sin ordinal. Primero, una única unidad pendiente previamente iniciada, la de `lastStartedAt` más reciente, con posición e ID como desempates. Después, todas las demás pendientes por interés cuando haya señal suficiente y, como respaldo y desempate, posición e ID. Finalmente, vistas/completadas en canónico. El inicio anterior y el marcado visto son estados distintos.
- **Ámbito.** Una configuración por lista de vídeos del curso plano, lista de temas y lista de vídeos de cada tema. Adaptar una de ellas no altera nombres, posiciones persistidas ni modos de las demás. Recalcular al entrar o tras una acción de completar o marcar/desmarcar cuando se presenta de nuevo la lista. Cualquier unidad autorizada se puede abrir.
- Para la primera integración, un tema no vacío está completado cuando todos sus vídeos están vistos. Un curso vacío como bienvenida muestra su texto y foro sin exigir contenido audiovisual.

## Casos mínimos para entregar TASK-01

| Caso | Resultado observable |
| --- | --- |
| Admin con edición de bienvenida, docente con borrador asignado, alumno con lectura y publicado bloqueado | Se obtiene el grupo correcto en cada rol. El admin sin asignación en otro borrador queda fuera |
| Misma cuenta con lectura y edición en un curso | Un ID una vez, en grupo 1 |
| Visita de bienvenida y concesión/revocación de otro curso | Se respetan grupos 2, 3, 4 y 5 con el historial preservado |
| Interés ausente, empates y entrada permutada | Mismos resultados con respaldos e IDs estables |
| Fijo frente a adaptativo y tema mixto | En fijo se conservan posición y ordinal. En adaptativo, continuación primero, visto al final y ausencia de ordinal. La lista vecina conserva su modo |
| Título y fechas de entrada observados después de ordenar | Se conservan exactamente. Probar listas vacías y unidad única |

El control de autorización de servidor, la persistencia y los cambios transaccionales se comprueban al integrar TASK-02/05. La función de proyección pura no decide por sí sola el acceso a un recurso.
