# 480Academy — Enunciado del reto

**Hackado 2026 · Cuatroochenta / Universitat Jaume I · Grupo F**  
**Fecha:** 26 de noviembre de 2026  
**Entrega:** lunes 30 de noviembre de 2026

## 1. Contexto

El reto parte de una necesidad real de un cliente de Cuatroochenta, representado durante la primera jornada de la hackathon por un interlocutor que ejercía el papel de cliente. Se trata de una academia digital que ofrece formación mediante vídeos, orientada al aprendizaje y al refuerzo de competencias.

El presente documento recoge el enunciado transmitido durante la presentación y las sesiones de preguntas al cliente del 23 de noviembre, distinguiendo la información comunicada de las hipótesis de diagnóstico del Grupo F.

## 2. Problemática comunicada

### 2.1. Consumo de contenidos y engagement

- Aproximadamente entre el 30 % y el 40 % de los vídeos se registran como visualizados hasta el final.
- El cliente desea mejorar el engagement de los alumnos con los contenidos formativos.
- La tasa de finalización de vídeos no proporciona, por sí sola, una explicación de las dificultades ni de su impacto en el aprendizaje.

### 2.2. Evaluación y éxito formativo

- La plataforma evalúa actualmente mediante cuestionarios tipo test, sin exigir proyectos prácticos.
- En las sesiones de preguntas se indicó que el porcentaje de éxito en los tests supera el 60 % y que la mayoría de los éxitos se produce en el segundo intento.
- No se dispone de información suficiente sobre el contenido de ambos intentos, la variabilidad de las preguntas, el criterio exacto de visualización o el cálculo de los indicadores.
- Actualmente no se emiten certificados. El reto permite explorar la emisión de certificados propios de la academia, no reglados.

Las cifras anteriores son aproximaciones comunicadas verbalmente, no estadísticas obtenidas de una auditoría independiente. No se dispone de las métricas ni de los datos originales del cliente.

### 2.3. Participación y atención docente

- La plataforma dispone de foros, pero su grado de utilización es reducido.
- Las consultas tienden a dirigirse al docente, que no siempre puede atenderlas con la rapidez o profundidad necesarias.
- El cliente desea fomentar la participación en los foros y mejorar el feedback disponible para los alumnos, reduciendo la sobrecarga del profesorado.

## 3. Hipótesis de diagnóstico

Las siguientes hipótesis explican posibles causas de la problemática; no constituyen hechos demostrados ni presuponen deficiencias concretas en la implementación del cliente.

1. **Medición insuficiente de la visualización.** Un alumno puede consumir selectivamente el contenido, repetir partes relevantes u omitir segmentos introductorios y finales sin perder valor formativo. A la inversa, un vídeo reproducido íntegramente no garantiza atención efectiva.
2. **Limitaciones de la evaluación.** Si los dos intentos de un test reutilizan preguntas o permiten memorizar respuestas, el éxito en el segundo podría sobrestimar el aprendizaje real. También podría explicarse por aprendizaje entre intentos o por otros factores. Se desconoce cómo se implementan los tests actuales.
3. **Diferencia entre actividad y aprendizaje.** La tasa de visualización, la tasa de superación y el aprovechamiento educativo son indicadores distintos; su divergencia no demuestra por sí sola un fallo de la plataforma.
4. **Indicadores alternativos de valor.** La recurrencia (realización de otros cursos), la evolución de las competencias y la satisfacción pueden complementar los indicadores actuales. La ausencia de certificación puede reducir el incentivo de algunos alumnos para realizar tests aun cuando hayan obtenido valor del curso.

## 4. Objetivo del reto

Diseñar y desplegar una prueba de concepto funcional de una plataforma educativa que pueda sustituir conceptualmente a la actual y que permita:

- Favorecer el engagement y el aprovechamiento de los contenidos formativos.
- Obtener información más significativa sobre el comportamiento y el progreso de los alumnos.
- Mejorar el feedback, la participación en foros y la capacidad del docente para atender a sus alumnos.
- Explorar mecanismos que permitan evaluar de forma más útil el éxito formativo.

El principio rector del Grupo F es maximizar el valor educativo obtenido por el alumno, no maximizar indiscriminadamente el tiempo de permanencia en la plataforma.

## 5. Alcance y restricciones de la prueba de concepto

- Se entregará una **maqueta funcional desplegada**, no un producto comercial ni un MVP preparado para explotación a escala.
- La plataforma está orientada al uso desde dispositivos móviles.
- Los vídeos se alojarán externamente. No corresponde al piloto implementar infraestructura propia de alojamiento o distribución audiovisual.
- Se permite utilizar vídeos de YouTube para componer cursos demostrativos, mediante las opciones de reproducción autorizadas por el proveedor. No es necesario disponer del material original del cliente.
- No se dispone de datos reales de uso. La demostración podrá utilizar datos sintéticos claramente identificados para representar situaciones relevantes.
- El entorno está destinado al equipo de desarrollo, los evaluadores y el personal del evento; se prevén menos de 100 usuarios.
- Se prioriza la entrega funcional dentro del plazo, con infraestructura ligera y de coste reducido. La escalabilidad futura es deseable, pero no condiciona el éxito de la maqueta.
- Debe considerarse que los usuarios de la plataforma real podrían ser menores de edad, aplicando privacidad y protección de datos desde el diseño y evitando vigilancia intrusiva.

## 6. Criterio de demostración

La prueba de concepto debe permitir apreciar la utilidad de la propuesta mediante flujos funcionales, datos demostrativos y ejemplos de intervención educativa. La efectividad real sobre el aprendizaje, la retención o la carga docente deberá medirse posteriormente con datos y usuarios reales; la demostración con datos sintéticos no constituye por sí misma una validación de esos resultados.

Las decisiones de diseño e implementación del Grupo F se recogen por separado en `480Academy-memoria-decisiones.md`.
