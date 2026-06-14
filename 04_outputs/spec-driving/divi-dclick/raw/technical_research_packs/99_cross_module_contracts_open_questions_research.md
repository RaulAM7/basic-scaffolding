# Cross-module Contracts / Open Questions - Technical Research Pack

## 1. Proposito del research pack

Sintetiza contratos entre modulos, mapa global, flujos end-to-end, eventos, entidades transversales, decisiones, riesgos y recomendaciones para Stage 00/01/02/03.

## 2. Resumen tecnico del modulo

DClick IA es un sistema de canales, documentos, automatizacion y conocimiento. El riesgo principal no es una pieza aislada, sino contratos flojos entre Hermes, workers, Drive, BDNS, RAG, CRM y canales.

## 3. Estatus de decisiones relacionadas

| Decision / hipotesis | Estatus | Evidencia | Implicacion |
| --- | --- | --- | --- |
| Arquitectura modular con workers deterministas | DECISION CTO PROVISIONAL FUERTE | CTO y packs. | Definir eventos y contratos. |
| Drive fuente humana/canonica | DECISION CTO PROVISIONAL FUERTE | Drive pack. | Mirror/indice derivados. |
| Hermes runtime central | DECISION ARQUITECTONICA TOMADA | Hermes pack. | Stage 03 debe disenar implementacion y prueba tecnica minima; no reabrir salvo bloqueo grave. |
| Kapso + Hermes para WhatsApp | DECISION ARQUITECTONICA TOMADA | WhatsApp/Kapso pack. | Via objetivo para WhatsApp; Cloud API directa queda como fallback si Kapso falla. |
| CRM adapter | DECISION CTO PROVISIONAL FUERTE | CRM pack. | CRM concreto queda abierto. |
| Seguridad/RGPD transversal | REQUISITO DURO | Security pack. | Ningun modulo se valida sin permisos/logs. |

## 4. Fuentes revisadas

- Todos los research packs `01` a `14`.
- Documento CTO principal.
- Policy de estatus.

## 5. Capacidades confirmadas por documentacion

- Las fuentes oficiales/repo confirman que existen piezas tecnicas suficientes para pruebas de integracion: Hermes gateway/tools, Google Drive/Gmail APIs, BDNS API, Kapso plugin/Broadcasts, Postgres FTS/pgvector y APIs CRM.
- Hermes y Kapso + Hermes no son hipotesis abiertas de direccion: son arquitectura objetivo. Lo pendiente es validar configuracion, seguridad, limites, costes, despliegue y contratos operativos.

## 6. Capacidades no confirmadas o dudosas

- PENDIENTE DE VALIDACION TECNICA: integracion end-to-end de la arquitectura objetivo Hermes + Kapso/Gmail + RAG + CRM + Drive.
- PENDIENTE DE VALIDACION TECNICA: permisos exactos Google/Kapso/CRM.
- PENDIENTE DE VALIDACION LEGAL/RGPD: tratamiento de datos, opt-in y proveedores.
- PENDIENTE DE VALIDACION TECNICA: calidad de respuestas automaticas en dominio subvenciones.

## 7. Opciones tecnicas identificadas

| Area | Opcion preferente | Alternativas | Estatus |
| --- | --- | --- | --- |
| Runtime | Hermes + workers | Workers propios solo como fallback / n8n auxiliar puntual | DECISION ARQUITECTONICA TOMADA |
| Drive | Shared Drive + mirror API | My Drive gobernado | HIPOTESIS TECNICA A VALIDAR |
| Knowledge | Postgres FTS + pgvector | FTS solo, Chroma, LanceDB, SQLite | HIPOTESIS TECNICA A VALIDAR |
| WhatsApp | Kapso + Hermes | Cloud API directa como fallback; Baileys descartado para produccion | DECISION ARQUITECTONICA TOMADA |
| CRM | Adapter + prueba tecnica Twenty | Baserow, NocoDB, GoHighLevel | OPCION ABIERTA |

## 8. Diseno candidato / hipotesis preferente

Diseno candidato global: Hermes interpreta y coordina como runtime agentic objetivo; workers deterministas ejecutan acciones estructurales; Drive es casa humana; Postgres guarda logs/indice; BDNS alimenta radar; Kapso + Hermes es la via objetivo de WhatsApp; Gmail recibe email; CRM adapter guarda memoria comercial; seguridad/evals gobiernan autonomia.

## 9. Inputs y outputs probables

- Inputs globales: BDNS, Drive changes, emails, WhatsApps, comandos internos, aprobaciones.
- Outputs globales: carpetas Drive, respuestas, CRM updates, campanas, analisis, logs, alertas.
- Eventos estandar:
  - `bdns.call.detected`
  - `drive.file.changed`
  - `message.received`
  - `risk.classified`
  - `crm.contact.upserted`
  - `analysis.requested`
  - `campaign.approval_requested`
  - `audit.log_written`

## 10. Entidades de datos candidatas

- `SubsidyCall`
- `SourceDocument`
- `DocumentChunk`
- `Contact`
- `Conversation`
- `Opportunity`
- `AnalysisRun`
- `Campaign`
- `ActionLog`
- `EscalationCase`

## 11. Integraciones externas relevantes

- Hermes: core agentic objetivo; prueba tecnica de integracion obligatoria antes de cerrar compromiso operativo/produccion.
- Google Drive/Gmail: Workspace; scopes y Pub/Sub; validar con admin.
- BDNS/SNPSAP: API publica; validar limites y filtros.
- Kapso/Meta: via objetivo para WhatsApp; validar numero, opt-in, costes, plugin, webhooks y fallback Cloud API directa.
- CRM elegido: validar UX, API y lock-in.
- LLM provider: validar datos, coste y seguridad.

## 12. Skills / tools / subagentes candidatos

- `dclick_route_message`
- `bdns_fetch_new_calls`
- `drive_create_subsidy_workspace`
- `rag_search_subsidy_docs`
- `crm_lookup_contact`
- `email_reply_thread`
- `whatsapp_send_reply`
- `analysis_generate_standard_outputs`
- `campaign_prepare_new_subsidy_broadcast`
- `human_escalate_case`

## 13. Seguridad, permisos y limites

- Toolsets minimos por canal.
- Logs obligatorios por accion.
- Indice y mirror regenerables.
- No envio masivo sin aprobacion.
- No respuestas high-risk sin humano.
- No acceso a todo Drive/Gmail si basta carpeta/cuenta dedicada.

## 14. Riesgos tecnicos

| Riesgo | Impacto | Probabilidad | Mitigacion | Estatus |
| --- | --- | --- | --- | --- |
| Integracion end-to-end no estable | Alto | Media | Pruebas tecnicas por modulo + contract tests. | PENDIENTE DE VALIDACION TECNICA |
| Permisos excesivos | Alto | Media | Scopes minimos y toolsets. | REQUISITO DURO |
| Autonomia sin evals | Alto | Media | Test set y rollout progresivo. | REQUISITO DURO |
| Vendor lock-in CRM/WhatsApp | Medio | Media | Adapters y export. | DECISION CTO PROVISIONAL FUERTE |
| RGPD sin resolver | Alto | Media | Revision legal antes de produccion. | PENDIENTE DE VALIDACION LEGAL/RGPD |

## 15. Prueba minima / prueba tecnica recomendada

- Fixture: 1 convocatoria BDNS Canarias, 5 docs Drive, 10 contactos CRM, 20 mensajes, 1 campana interna.
- Pasos: detectar convocatoria, crear Drive, indexar, responder una consulta, registrar CRM, preparar campana, pedir aprobacion.
- Criterio de exito: flujo completo con logs, fuentes, permisos y escalados.
- Criterio de fallo: cualquier accion externa sin log/aprobacion requerida, datos cruzados o perdida de fuentes.

## 16. Preguntas abiertas

- CTO:
  - ¿Hermes dentro o fuera de Docker?
  - ¿Que condiciones hacen activar Cloud API directa como fallback si Kapso falla?
  - ¿Twenty primero o adapter mock?
- DClick:
  - ¿Workspace/Shared Drives disponibles?
  - ¿Sectores prioritarios para radar?
  - ¿Cuales son respuestas automaticas aceptables?
- Documentacion tecnica:
  - ¿Scopes Google finales?
  - ¿Rate limits BDNS reales?
  - ¿Versiones Hermes/Kapso/CRM?
- Legales/RGPD:
  - ¿Base legal, opt-in, retencion y proveedores?
  - ¿Embeddings externos permitidos?
- Comerciales:
  - No decidir precio, contrato, SLA ni plan comercial en estos packs.

## 17. Recomendacion para Stage 00/01/02/03

- Stage 00: puede ejecutarse ya. Debe mapear cada pack como fuente trazable y separar decisiones duras, decisiones arquitectonicas tomadas, decisiones provisionales e hipotesis reales.
- Stage 01: debe auditar si los modulos resuelven dolores reales y si hay riesgo de sobrearquitectura.
- Stage 02: debe decidir alcance base y dejar fuera/pendiente lo que requiere prueba tecnica, decision DClick o validacion legal.
- Stage 03: debe convertir alcance aprobado en blueprint, incluyendo contratos de tools, permisos, logs, pruebas tecnicas y decisiones abiertas.

## 18. Source Map

| ID | Fuente | Tipo | Que aporta | Confianza |
| --- | --- | --- | --- | --- |
| SRC-XMOD-001 | `raw/divi-dclick_contexto_arquitectura_para_spec_driving.md` | contexto interno | Arquitectura global y ADRs. | media |
| SRC-XMOD-002 | `raw/000_source_status_and_decision_policy.md` | politica interna | Taxonomia y decision ledger. | alta |
| SRC-XMOD-003 | `01_infra_vps_runtime_research.md` | research interno | Runtime/VPS. | media |
| SRC-XMOD-004 | `02_hermes_runtime_agentic_core_research.md` | research interno | Hermes core. | media |
| SRC-XMOD-005 | `03_google_workspace_drive_mirror_research.md` | research interno | Drive/mirror. | media |
| SRC-XMOD-006 | `04_bdns_watcher_radar_subvenciones_research.md` | research interno | BDNS radar. | media |
| SRC-XMOD-007 | `05_knowledge_layer_markdown_rag_index_research.md` | research interno | Knowledge/RAG. | media |
| SRC-XMOD-008 | `12_security_rgpd_audit_logs_research.md` | research interno | Seguridad/RGPD. | media |
