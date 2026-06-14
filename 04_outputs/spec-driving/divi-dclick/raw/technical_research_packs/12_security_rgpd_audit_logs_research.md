# Security / RGPD / Audit Logs - Technical Research Pack

## 1. Proposito del research pack

Investiga controles de seguridad, permisos minimos, datos sensibles, logs, auditoria, escalado humano, secretos, backups, retencion y riesgos de respuesta automatica.

## 2. Resumen tecnico del modulo

Este modulo protege a DClick de fugas, respuestas inseguras, abuso de tools y tratamiento excesivo de datos. No redacta contrato ni sustituye revision legal.

## 3. Estatus de decisiones relacionadas

| Decision / hipotesis | Estatus | Evidencia | Implicacion |
| --- | --- | --- | --- |
| Logs y auditoria obligatorios | DECISION CTO PROVISIONAL FUERTE | CTO ADR-015. | Cada accion automatica debe ser trazable. |
| Permisos minimos por canal | REQUISITO DURO | Riesgo de clientes externos y RGPD. | Toolsets restringidos. |
| Escalado por riesgo | REQUISITO DURO | Policy y atencion autonoma. | Requiere taxonomia y logs. |
| Retencion y DPA | PENDIENTE DE VALIDACION LEGAL/RGPD | Depende de contrato/proveedores. | No cerrar en Stage 00. |

## 4. Fuentes revisadas

- Contexto CTO y policy.
- AEPD principios RGPD: https://www.aepd.es/derechos-y-deberes/cumple-tus-deberes/principios
- AEPD IA: https://www.aepd.es/prensa-y-comunicacion/blog/inteligencia-artificial
- GDPR.eu overview: https://gdpr.eu/
- Google API scopes/security docs revisados en packs 03/09.
- Hermes security docs via subagente.

## 5. Capacidades confirmadas por documentacion

- RGPD exige principios como licitud, minimizacion, limitacion de finalidad, exactitud, limitacion de conservacion, integridad/confidencialidad y responsabilidad proactiva.
- Google Drive/Gmail usan scopes sensibles/restringidos que pueden requerir evaluacion si se almacenan datos en servidor.
- Hermes documenta allowlists, blocklist, aprobacion de comandos peligrosos y separacion de config/secrets.
- Kapso/WhatsApp y Gmail requieren controles de opt-in/anti-spam para comunicaciones.

## 6. Capacidades no confirmadas o dudosas

- PENDIENTE DE VALIDACION LEGAL/RGPD: base legal para tratar mensajes, expedientes y datos de clientes.
- PENDIENTE DE VALIDACION LEGAL/RGPD: anexos con proveedores LLM, Google, Kapso, CRM y hosting.
- PENDIENTE DE VALIDACION TECNICA: politica final de retencion de logs, adjuntos y conversaciones.
- PENDIENTE DE VALIDACION TECNICA: cifrado, backup y rotacion de secretos concretos.

## 7. Opciones tecnicas identificadas

| Opcion | Ventaja | Riesgo | Estatus |
| --- | --- | --- | --- |
| Logs en Postgres + archivos | Consultable y simple. | Datos sensibles en logs. | HIPOTESIS TECNICA A VALIDAR |
| Log append-only separado | Mejor auditoria. | Mas complejidad. | OPCION ABIERTA |
| Proveedor LLM externo | Calidad y rapidez. | Transferencia datos. | PENDIENTE DE VALIDACION LEGAL/RGPD |
| Modelo local | Menos transferencia. | Coste/calidad/operacion. | OPCION ABIERTA |

## 8. Diseno candidato / hipotesis preferente

Hipotesis preferente: permisos minimos por canal, logs estructurados con redaccion de datos sensibles cuando proceda, action log para cada tool, escalado obligatorio en riesgo alto y revision legal antes de produccion.

## 9. Inputs y outputs probables

- Inputs: mensajes, adjuntos, datos CRM, documentos Drive, decisiones de agentes.
- Outputs: action logs, audit events, escalations, redacted summaries, backup records.
- Eventos: `security.risk_detected`, `tool.blocked`, `human.approval_required`, `audit.log_written`.

## 10. Entidades de datos candidatas

- `audit_log`: actor, channel, action, target, risk, source_refs, timestamp.
- `security_event`: severity, cause, mitigation, status.
- `consent_record`: contact_id, channel, basis, timestamp, source.
- `data_retention_policy`: data_type, retention_days, delete_method.

## 11. Integraciones externas relevantes

- Google Workspace: scopes/OAuth; riesgo restricted scopes; alternativa cuenta dedicada.
- Kapso/Meta: WhatsApp data; auth API key/webhook; riesgo opt-in/retencion; alternativa Cloud API directa.
- CRM: PII/contactos; auth API; riesgo SaaS; alternativa self-host.
- LLM provider: datos en prompts; auth API; riesgo transferencia; alternativa local/redaccion.

## 12. Skills / tools / subagentes candidatos

- `security_classify_risk`
- `security_redact_sensitive_data`
- `audit_write_action_log`
- `permission_check_tool_call`
- `human_escalate_high_risk`
- `consent_check_contact`

## 13. Seguridad, permisos y limites

- No exponer terminal/filesystem a clientes.
- No usar datos de cliente A para cliente B.
- Confirmacion humana para high-risk, envios masivos, borrados y cambios irreversibles.
- Secretos fuera de repo y rotacion documentada.
- Logs suficientes para auditoria, pero minimizados.

## 14. Riesgos tecnicos

| Riesgo | Impacto | Probabilidad | Mitigacion | Estatus |
| --- | --- | --- | --- | --- |
| Fuga de datos por prompt/tool | Alto | Media | Redaccion, toolsets minimos, tests. | PENDIENTE DE VALIDACION TECNICA |
| Tratamiento sin base legal | Alto | Media | Revision RGPD y consent records. | PENDIENTE DE VALIDACION LEGAL/RGPD |
| Logs con datos excesivos | Medio-alto | Media | Minimizar y retener por politica. | PENDIENTE DE VALIDACION LEGAL/RGPD |
| Credenciales expuestas | Alto | Baja-media | Secrets manager, `.env` fuera repo, rotacion. | HIPOTESIS TECNICA A VALIDAR |

## 15. Prueba minima / PoC recomendada

- Fixture: mensajes con PII, adjuntos, consulta low/medium/high risk y tool calls.
- Pasos: clasificar riesgo, bloquear tools no permitidas, redaccion, log, escalado.
- Criterio de exito: high-risk no se envia, logs auditables, secretos no aparecen.
- Criterio de fallo: PII en logs innecesarios, envio inseguro, tool no autorizada.

## 16. Preguntas abiertas

- CTO: ¿que datos se envian al LLM y que se redaccionan?
- DClick: ¿politica de retencion y canales autorizados?
- Documentacion tecnica: ¿proveedores finales y DPA disponibles?
- Legal/RGPD: base legal, encargados, transferencias, opt-in, derechos.
- Comerciales: no redactar contrato ni condiciones aqui.

## 17. Recomendacion para Stage 00/01/02/03

- Stage 00: listar seguridad/RGPD como condicion transversal.
- Stage 01: auditar riesgos reales de atencion automatica.
- Stage 02: limitar alcance segun riesgo y datos.
- Stage 03: incluir matriz de permisos, logs, escalados y PoCs.

## 18. Source Map

| ID | Fuente | Tipo | Que aporta | Confianza |
| --- | --- | --- | --- | --- |
| SRC-SEC-001 | `raw/divi-dclick_contexto_arquitectura_para_spec_driving.md` | contexto interno | Logs, seguridad, escalado. | media |
| SRC-SEC-002 | https://www.aepd.es/derechos-y-deberes/cumple-tus-deberes/principios | docs oficiales | Principios RGPD. | alta |
| SRC-SEC-003 | https://www.aepd.es/prensa-y-comunicacion/blog/inteligencia-artificial | docs oficiales | Senales AEPD sobre IA. | media |
| SRC-SEC-004 | https://hermes-agent.nousresearch.com/docs/ | docs oficiales | Seguridad, allowlists, blocklist. | alta |
| SRC-SEC-005 | `03_google_workspace_drive_mirror_research.md` | research interno | Scopes Google Drive. | media |

