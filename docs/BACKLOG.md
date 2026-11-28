# Backlog de 480Academy

Orden propuesto para el 30/11/2026. Los estados iniciales son «listo», «previsto» o «depende de validación». El Grupo F asigna responsables y registra el avance real. [PRD](PRD.md) · [Plan de pruebas](TEST_PLAN.md).

## P0 · Recorrido principal

| ID y estado | Trabajo y responsabilidad sugerida | Dependencias | Aceptación |
| --- | --- | --- | --- |
| **TASK-01 · Listo para implementar** | Dominio. Implementar proyección del catálogo y orden fijo/adaptativo en funciones puras con fixtures. Rama `feat/TASK-01-catalogo`. REQ-02/03 | Ninguna dependencia de servicios, stack web o Stitch | Casos del [contrato](specs/catalogo.md) con `node --test tests/catalogo.test.mjs`. Mantener independencia del contrato y comprobar entradas congeladas, empates y permisos proyectados |
| **SPIKE-01 · Prioridad inmediata** | Despliegue. Identificar responsable, host y plan autorizados, límites reales y coste. Ensayar el recorrido técnico de sesión, escritura, reinicio y media. REQ-01/04, RNF-06/08 | Lectura documental/local inmediata. Cualquier cuenta, servicio remoto o coste exige su autorización específica | Registrar plan, límites, versión, retención, protección de datos, requisitos de facturación, URL prevista, resultados y opción alterna. [ADR-01](ARCHITECTURE.md#adr-01--runtime-y-persistencia-para-el-lunes) |
| **TASK-02 · Previsto** | Backend. Sustrato de sesión, roles, alta y permisos por curso, y seed repetible con bienvenida y cuentas. REQ-01/02 | Decisión de runtime y persistencia para integrar en remoto. Fixture local con TASK-01 en paralelo | V-01/02. Dos docentes, admin asignado en bienvenida, lectura independiente y revocación |
| **TASK-03 · Previsto** | UI. Construir acceso, cabecera, menú accesible, catálogo, aviso bloqueado y curso plano/temático. REQ-01/03/04 | [Diseño local](../DESIGN.md), TASK-01. Trabajar con datos sintéticos acordados en paralelo a TASK-02 | V-01/03. Primer tramo visible en móvil. Las acciones enlazan a la autorización de servidor al integrar |
| **TASK-04 · Previsto** | Reproductor/QA. HTML5, atribución, reloj de reanudación, estado visto y pregunta voluntaria reproducible. Verificar en paralelo un clip horizontal y uno vertical del anexo. REQ-04, RNF-11 | Diseño local. Candidato de vídeo revisado para pruebas aisladas. TASK-02 para progreso y reputación persistentes | V-04/05. Clip principal y suplente cargan y permiten seek. Una tarjeta conserva nodo, reloj y estado. Preferencia persistente, alternativas accesibles y degradación documentada |
| **TASK-05 · Previsto** | Integración. Wiring del catálogo, panel admin mínimo, editor asignado, publicación, orden por lista y respaldo de interés. REQ-02/03/08 | TASK-01/02/03. Backend y UI acuerdan contrato de proyección antes de combinar cambios | V-01/02/03. Concesión real refleja reintegración de la tarjeta. Admin pierde la acción docente sin asignación. Interés real requiere decisión de pesos y suficiencia |
| **TASK-06 · Previsto** | Demo. Integrar seed, bienvenida y foro general accesible, curso plano y temático, dos formatos y permisos contrastantes. REQ-01/03/04/06 | TASK-02/03/04/05. Lectura audiovisual probada | V-01 a V-05 y V-10. Seed repetible con perfiles ficticios. Ensayo local como alternativa y URL preparada tras SPIKE-01 |

Para avanzar en paralelo, catálogo trabaja bajo `src/lib/domain/`, UI bajo rutas/componentes y sesión/datos bajo módulos de servidor según el stack que se acepte. El contrato y la prueba focalizada se integran primero para evitar modificaciones en paralelo sobre la misma interfaz. Acordar con quien integra cuando dos tareas toquen una migración, permiso o contrato común.

## P1 · Cierre pedagógico y foro

| ID | Trabajo y aceptación | Dependencias |
| --- | --- | --- |
| TASK-07 | Banco mínimo editable, tests inicial y final, registro reproducible de intentos y progreso. Completar señales iniciales HU-27 con minimización. REQ-04/05/07/08, V-04/06 | TASK-02/04/05 |
| TASK-08 | Certificado automático por aprobado, vista de perfil, intereses mínimos, reputación/logros y verificación pública. REQ-05/07, V-06/07 | TASK-07 y emisión con perfil ficticio mínimo. Intereses aplican pesos aprobados o mantienen respaldo |
| TASK-09 | Foro funcional con hilos y respuestas anidadas, actividad y valoración manual. Establecer bonificaciones y resolución antes de ampliar. REQ-06, V-08 | TASK-02/06. Tramo humano independiente de proveedor generativo |

## P2 · Modelo e integraciones

| ID | Trabajo y aceptación | Dependencias |
| --- | --- | --- |
| TASK-10 | Captura con corte temporal, estimaciones versionadas, recalibración manual y seguimiento individual. Añadir caso «Datos insuficientes». REQ-09, V-09 | TASK-04/07/09, definición de desenlaces y suficiencia, datos sintéticos e infraestructura compatible |
| TASK-12 · Opcional | Verificar lectura de Stitch, mapeo de IDs y recuperación de recursos, manteniendo alternativa local. CAP-DESIGN | Autorización de ejecución, cuenta/alcance y control documentados en [MCP.md](MCP.md). Independiente de la entrega del lunes |
| TASK-13 | Intervención automatizada del foro tras intervalo y con minimización. Añadir una intervención de IA verificable sin duplicado. REQ-06/HU-18/43, V-08 | TASK-09, autorización/proveedor, intervalos y tratamiento claros |
| TASK-14 · Ampliaciones | Propuestas de REQ-10, Google, blockchain, notificaciones y administración avanzada. Priorizar según las HU y el Grupo F | Alcance confirmado y revisión de capacidades externas. Blockchain requiere consentimiento del grupo y solicitud expresa del usuario |

## Ensayo y release

**TASK-11.** Probar el candidato desde P0, comprobar accesibilidad y contingencias y solicitar el alcance y la promoción humana a `main`. Requiere TASK-06, resultado de SPIKE-01, V-01 a V-05 y V-10 en el destino. Añadir las pruebas de P1/P2 presentadas. Referencias en el [guion de ensayo](TEST_PLAN.md#guion-de-ensayo-y-decisión-de-entrega).

Si hay que recortar, mantener el recorrido principal con persistencia y permisos. Registrar las capacidades pendientes y etiquetar las vistas simuladas.
