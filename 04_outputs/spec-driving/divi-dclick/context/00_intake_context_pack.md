# 00 - Intake Context Pack

## Project Summary

DClick IA System / Equipo IA DClick / Subvenciones a un Click es una iniciativa para convertir la operativa de DClick, despacho/consultora de gestion de subvenciones, en un sistema propio de automatizacion IA con una capa documental humana, motores always-on y un equipo IA bajo demanda. El material principal describe a DClick como una pyme canaria liderada operativamente por Vivi/Divi/Dash One y apoyada por Maria, con trabajo remoto desde equipos Windows y bajo perfil tecnico. La operativa actual mezcla correo, OneDrive, Excel/Sheets, documentos Word/PDF, IA manual y newsletters poco profesionalizadas. [SRC-001]

El reenfoque del proyecto responde a tres dolores declarados como intensos: vigilancia diaria de nuevas subvenciones, especialmente Canarias; atencion rapida a dudas de clientes y leads; y reduccion de trabajo repetitivo sin perder criterio ni control operativo. [SRC-001]

La arquitectura objetivo segun la politica de decision y el documento CTO combina: Google Drive/Drive Desktop como superficie humana, VPS como instalacion tecnica unica, Hermes como runtime agentic central, Kapso + Hermes como via objetivo para WhatsApp, BDNS/SNPSAP como fuente del radar de subvenciones, workers deterministas para acciones estructurales, Markdown/metadatos como conocimiento auditable, indice ligero derivado y CRM adapter agnostico. [SRC-001] [SRC-002] [SRC-018]

Este Stage 00 no decide alcance, precio, plan comercial, schemas finales ni blueprint tecnico. Normaliza el material bruto y deja trazabilidad para Stage 01/02/03. [SRC-002] [SRC-003]

## Actors and Stakeholders

| Actor / stakeholder | Rol probable | Evidencia | Source ID |
| --- | --- | --- | --- |
| Vivi / Divi / Dash One | Liderazgo operativo de DClick; usuaria principal no tecnica; operadora de Drive/email/WhatsApp. | Documento CTO identifica liderazgo y bajo perfil tecnico. | SRC-001 |
| Maria | Apoyo operativo de DClick; usuaria no tecnica. | Documento CTO la identifica como apoyo y usuaria Windows/local. | SRC-001 |
| Clientes actuales de DClick | Usuarios finales de soporte y consultas sobre expedientes/subvenciones. | Motor de atencion cliente/comercial always-on. | SRC-001 |
| Leads / potenciales clientes | Entrada comercial por email/WhatsApp y precalificacion. | Flujos de lead nuevo y precalificacion. | SRC-001 |
| Equipo tecnico Skilland/Reboot | Diseno, configuracion, pruebas e implantacion del sistema. | Audiencia y arquitectura CTO interna. | SRC-001 |
| Raul / PM-CTO del proyecto | Direccion tecnica/PM segun documento CTO. | Audiencia declarada del documento principal. | SRC-001 |
| Google Workspace / Drive | Proveedor y superficie documental humana/tecnica. | Research Drive/Gmail. | SRC-006, SRC-012 |
| Hermes | Runtime agentic central objetivo. | Decision arquitectonica tomada. | SRC-002, SRC-005 |
| Kapso / Meta WhatsApp | Via objetivo WhatsApp y proveedor/proxy operativo. | Decision arquitectonica tomada; Cloud API directa como fallback. | SRC-002, SRC-011 |
| BDNS/SNPSAP | Fuente publica de convocatorias y documentos. | Research BDNS. | SRC-007 |
| CRM elegido | Memoria comercial visual, no cerebro del sistema. | CRM adapter agnostico y opciones abiertas. | SRC-013 |
| Legal/RGPD | Validacion de base legal, opt-in, retencion, proveedores y riesgos. | Security pack marca blockers legales. | SRC-015 |

## Source Map

| Source ID | Path or Origin | Type | Notes |
| --- | --- | --- | --- |
| SRC-001 | `raw/divi-dclick_contexto_arquitectura_para_spec_driving.md` | contexto interno / hipotesis CTO | Documento principal CTO con vision, ADRs, arquitectura candidata, dolores, componentes, workflows y preguntas. |
| SRC-002 | `raw/000_source_status_and_decision_policy.md` | politica interna | Taxonomia de estatus, decision ledger y regla de interpretacion. |
| SRC-003 | `raw/technical_research_packs/00_index_technical_research_packs.md` | indice research | Mapa de packs, hallazgos, readiness y recomendacion para stages. |
| SRC-004 | `raw/technical_research_packs/01_infra_vps_runtime_research.md` | research tecnico | VPS, Docker, procesos always-on, Postgres, logs, backups y seguridad basica. |
| SRC-005 | `raw/technical_research_packs/02_hermes_runtime_agentic_core_research.md` | research tecnico | Hermes como runtime/gateway/skills/cron/subagentes, toolsets y pruebas tecnicas. |
| SRC-006 | `raw/technical_research_packs/03_google_workspace_drive_mirror_research.md` | research tecnico | Drive API, Drive Desktop, Shared Drives, permisos, changes API y mirror tecnico. |
| SRC-007 | `raw/technical_research_packs/04_bdns_watcher_radar_subvenciones_research.md` | research tecnico | BDNS/SNPSAP API, filtros Canarias, documentos, deduplicacion y PoC. |
| SRC-008 | `raw/technical_research_packs/05_knowledge_layer_markdown_rag_index_research.md` | research tecnico | Markdown, Postgres FTS, pgvector, Chroma, LanceDB, SQLite FTS5 y citas. |
| SRC-009 | `raw/technical_research_packs/06_equipo_analista_subvenciones_research.md` | research tecnico | Equipo IA analista, 8 outputs, handoff a Drive y validacion. |
| SRC-010 | `raw/technical_research_packs/07_atencion_cliente_comercial_autonoma_research.md` | research tecnico | Atencion autonoma, clasificacion de riesgo, RAG, CRM y escalado. |
| SRC-011 | `raw/technical_research_packs/08_whatsapp_kapso_hermes_research.md` | research tecnico | Kapso + Hermes como via objetivo WhatsApp, Cloud API fallback y Baileys fuera de produccion. |
| SRC-012 | `raw/technical_research_packs/09_email_channel_gmail_workspace_research.md` | research tecnico | Gmail API, cuenta dedicada, threads, labels, push, scopes y entregabilidad. |
| SRC-013 | `raw/technical_research_packs/10_crm_adapter_and_crm_options_research.md` | research tecnico | CRM adapter, Twenty, Baserow, NocoDB, GoHighLevel y lock-in. |
| SRC-014 | `raw/technical_research_packs/11_campaigns_broadcasts_and_newsletters_research.md` | research tecnico | Campanas, broadcasts, newsletters, aprobacion humana, opt-in y metricas. |
| SRC-015 | `raw/technical_research_packs/12_security_rgpd_audit_logs_research.md` | research tecnico / legal-risk | RGPD, permisos, logs, auditoria, secretos, retencion y escalado. |
| SRC-016 | `raw/technical_research_packs/13_testing_eval_observability_research.md` | research tecnico | Evals, golden answers, observabilidad, rollback, fixtures y alertas. |
| SRC-017 | `raw/technical_research_packs/14_training_operations_support_research.md` | research operativo | Training, Drive Desktop, WhatsApp/email, soporte, runbooks y aprobaciones. |
| SRC-018 | `raw/technical_research_packs/99_cross_module_contracts_open_questions_research.md` | research transversal | Contratos entre modulos, eventos, riesgos globales y preguntas abiertas. |
| SRC-019 | `run_config.yaml` | configuracion de run | `case_id: divi-dclick`, `artifact_language: es`, `execution_plan_enabled: false`. |

## Raw Facts

| Fact | Source ID | Confidence |
| --- | --- | --- |
| DClick / Subvenciones a un Click es un despacho/consultora de gestion de subvenciones. | SRC-001 | Alta |
| Vivi/Divi/Dash One y Maria son las usuarias operativas principales descritas; trabajan en remoto desde equipos Windows y tienen bajo perfil tecnico. | SRC-001 | Alta |
| La operativa actual mezcla correo, OneDrive, Excel/Sheets, Word/PDF, IA manual y newsletters poco profesionalizadas. | SRC-001 | Alta |
| Los dolores declarados como mas intensos son vigilancia de subvenciones, atencion rapida a clientes/leads y reduccion de trabajo repetitivo. | SRC-001 | Alta |
| El proyecto no debe venderse con framing comercial de fase 1/fase 2; debe presentarse como sistema propio completo con evoluciones futuras. | SRC-001, SRC-002 | Alta |
| Vivi y Maria no deben usar terminal, GitHub, Codex CLI ni repositorios como interfaz principal. | SRC-001, SRC-002, SRC-017 | Alta |
| Google Drive Desktop en Windows debe ser superficie documental humana principal. | SRC-001, SRC-002, SRC-006 | Alta |
| El sistema debe tener componentes always-on para radar BDNS/Canarias y atencion cliente/comercial. | SRC-001, SRC-002, SRC-004 | Alta |
| La atencion cliente/comercial debe ser autonoma por defecto cuando el riesgo sea bajo o suficientemente claro, con escalado por riesgo. | SRC-001, SRC-002, SRC-010, SRC-015 | Alta |
| Hermes es decision arquitectonica tomada como runtime agentic central; no debe reabrirse en Stage 03 salvo bloqueo tecnico, legal u operativo grave. | SRC-002, SRC-005, SRC-018 | Alta |
| Kapso + Hermes es decision arquitectonica tomada como via objetivo para WhatsApp; Cloud API directa queda como fallback si Kapso falla. | SRC-002, SRC-011, SRC-018 | Alta |
| n8n queda descartado como core conversacional/agentic; solo podria ser auxiliar puntual para integraciones ad hoc. | SRC-001, SRC-002, SRC-005 | Alta |
| VPS como instalacion unica es decision CTO provisional fuerte. | SRC-001, SRC-002, SRC-004 | Alta |
| Drive como casa/biblioteca humana y VPS como mirror tecnico regenerable es decision CTO provisional fuerte, pendiente de diseno de sincronizacion controlada. | SRC-001, SRC-002, SRC-006 | Alta |
| Markdown es formato operativo base para outputs, resumenes, checklists, campanas y manifests. | SRC-001, SRC-002, SRC-008 | Alta |
| El indice/RAG ligero debe ser derivado, no fuente de verdad. | SRC-001, SRC-002, SRC-008 | Alta |
| BDNS watcher hibrido es decision CTO provisional fuerte: pescador determinista, archivador agentic y commit determinista. | SRC-001, SRC-002, SRC-007 | Alta |
| La BDNS/SNPSAP ofrece API REST/JSON y documentos descargables segun research tecnico; existen filtros relevantes para Canarias, pero hay validaciones pendientes de limites, filtros y estabilidad de IDs. | SRC-007 | Media-alta |
| CRM adapter agnostico es decision CTO provisional fuerte; el CRM concreto sigue abierto entre Twenty, Baserow, NocoDB o GoHighLevel. | SRC-001, SRC-002, SRC-013 | Alta |
| Twenty parece candidato tecnico fuerte si se prioriza CRM real/self-host; Baserow/NocoDB encajan si se prioriza interfaz tipo hoja; GoHighLevel encaja si se acepta suite SaaS y lock-in. | SRC-013 | Media |
| Campanas masivas pueden prepararse con IA, pero el envio masivo requiere aprobacion humana. | SRC-001, SRC-002, SRC-014 | Alta |
| Security/RGPD, permisos por canal, opt-in, retencion y proveedores son blockers reales antes de produccion. | SRC-003, SRC-015, SRC-018 | Alta |
| El run config actual tiene `execution_plan_enabled: false`, aunque el documento CTO principal recomienda activar Stage 06 si se quiere usar el flujo para plan de ejecucion. | SRC-001, SRC-019 | Alta |

## Business Goals

- Construir un sistema propio DClick IA / Equipo IA DClick / Sistema Operativo IA del despacho, util en si mismo y con evoluciones futuras, sin venderlo como una fase incompleta. [SRC-001] [SRC-002]
- Reducir trabajo repetitivo en vigilancia de subvenciones, atencion al cliente, analisis documental, CRM y campanas. [SRC-001]
- Mantener una experiencia humana simple para Vivi y Maria basada en Drive Desktop, WhatsApp y email. [SRC-001] [SRC-002] [SRC-017]
- Aumentar rapidez de respuesta a clientes y leads, con autonomia por defecto y escalado cuando haya riesgo. [SRC-001] [SRC-010]
- Tener una biblioteca documental visible y auditable que pueda ser usada por IA sin crear dos fuentes de verdad. [SRC-001] [SRC-006] [SRC-008]
- Crear una memoria comercial conectable mediante adapter, evitando lock-in temprano en CRM concreto. [SRC-001] [SRC-013]
- Preparar campanas y comunicaciones sobre nuevas subvenciones de forma mas profesional, con aprobacion humana para envios masivos. [SRC-001] [SRC-014]

## Operational Pains

- Vigilancia manual diaria de nuevas subvenciones, especialmente Canarias. [SRC-001] [SRC-007]
- Atencion manual y lenta de dudas de clientes/leads por email/WhatsApp. [SRC-001] [SRC-010] [SRC-011] [SRC-012]
- Documentacion dispersa en correo, OneDrive, Excel/Sheets, Word/PDF y outputs IA manuales. [SRC-001]
- Dependencia de herramientas tecnicas o procesos no adoptables por usuarias no tecnicas. [SRC-001] [SRC-002] [SRC-017]
- Uso de Excel/Sheets como memoria comercial manual y CRM no estructurado. [SRC-001] [SRC-013]
- Newsletters/comunicaciones poco profesionalizadas y con riesgos de consentimiento/reputacion. [SRC-001] [SRC-014] [SRC-015]
- Riesgo de que la revision humana de todo convierta la IA en simple generador de borradores y no reduzca el dolor real. [SRC-001] [SRC-010]

## Technical Constraints

- Stage 00 debe tratar el documento CTO y research packs como contexto y evidencia previa, no como blueprint final aprobado. [SRC-002]
- Hermes sera el runtime agentic central salvo bloqueo grave; la incertidumbre esta en configuracion, seguridad, despliegue y limites operativos. [SRC-002] [SRC-005] [SRC-018]
- Kapso + Hermes sera la via objetivo WhatsApp salvo bloqueo grave; Cloud API directa es fallback, Baileys/WhatsApp Web no es via de produccion. [SRC-002] [SRC-011] [SRC-018]
- n8n no debe ser core conversacional/agentic; como mucho auxiliar puntual. [SRC-001] [SRC-002] [SRC-005]
- Acciones criticas deben ejecutarse por workers deterministas: crear carpetas Drive, manifests, CRM updates, envios seguros, deduplicacion, logs e indice. [SRC-001] [SRC-004] [SRC-018]
- Drive debe ser la superficie humana/canonica; mirror e indice deben ser regenerables. [SRC-001] [SRC-006] [SRC-008]
- No operar sobre todo el Drive global; solo carpetas gobernadas por el sistema. [SRC-001] [SRC-006]
- Google Drive/Gmail scopes, Shared Drives, Pub/Sub y service accounts requieren validacion tecnica y posiblemente revision de seguridad. [SRC-006] [SRC-012]
- BDNS watcher debe respetar rate limits/uso responsable, deduplicar por `codigoBDNS`/detalle y evitar barridos masivos. [SRC-007]
- RAG/indice no debe responder sin fuentes en consultas especificas; si no hay fuente clara, debe escalar o pedir datos. [SRC-008] [SRC-015]
- Respuestas automaticas de atencion cliente requieren taxonomia de riesgo, evals y logs. [SRC-010] [SRC-015] [SRC-016]
- Campanas y broadcasts requieren opt-in, bajas, reputacion, templates y aprobacion humana. [SRC-011] [SRC-014] [SRC-015]
- `execution_plan_enabled` esta actualmente en `false`; Stage 06 no debe ejecutarse salvo cambio explicito. [SRC-019]

## Open Questions

- ¿DClick ya tiene Google Workspace operativo o hay que contratar/configurar? [SRC-001] [SRC-006]
- ¿Shared Drive organizativo o carpeta compartida gobernada si la edicion no soporta Shared Drives? [SRC-006]
- ¿Quien sera owner/admin del Workspace, Shared Drive, API credentials y servidor? [SRC-001] [SRC-006]
- ¿Que volumen de archivos hay en OneDrive y que parte debe migrarse o gobernarse? [SRC-001]
- ¿DClick quiere radar solo Canarias o tambien estatales con impacto en Canarias? [SRC-007]
- ¿Que sectores/clientes actuales priorizan el scoring del radar? [SRC-007]
- ¿Que preguntas puede responder la IA automaticamente desde el primer despliegue y cuales escalan siempre? [SRC-010] [SRC-015]
- ¿Existe opt-in documentado para WhatsApp/email marketing y mecanismo de baja? [SRC-011] [SRC-014] [SRC-015]
- ¿DClick ya tiene Meta Business/WABA/billing/numero dedicado listo para WhatsApp? [SRC-011]
- ¿Que direccion de email atendera la IA y que direcciones quedan fuera? [SRC-012]
- ¿Que CRM prefieren Vivi y Maria en adopcion real: CRM visual real o interfaz tipo hoja? [SRC-013] [SRC-017]
- ¿Self-host es requisito para CRM/datos o aceptan SaaS? [SRC-013] [SRC-015]
- ¿Embeddings externos son aceptables para expedientes o solo para documentos publicos? [SRC-008] [SRC-015]
- ¿Que politica de retencion aplica a mensajes, adjuntos, logs, documentos, conversaciones y fixtures de eval? [SRC-015] [SRC-016]
- ¿Debe activarse `execution_plan_enabled: true` mas adelante para Stage 06? [SRC-001] [SRC-019]

## Assumptions

- El `case_id` operativo de la run es `divi-dclick`. [SRC-019]
- El paquete de research actualizado y la politica de decision superseden formulaciones mas antiguas del documento CTO cuando haya diferencias de estatus sobre Hermes/Kapso/n8n. [SRC-002] [SRC-018]
- Hermes y Kapso + Hermes son arquitectura objetivo, pero no son promesa absoluta de produccion sin prueba tecnica de integracion y diseno de limites operativos. [SRC-002] [SRC-005] [SRC-011]
- DClick quiere un sistema propio con evoluciones futuras, no un documento comercial que degrade el alcance base como "fase 1". [SRC-001] [SRC-002]
- Los research packs son suficientemente completos para Stage 00 y Stage 01, pero no suficientes por si solos para cerrar Stage 03 final sin pruebas tecnicas. [SRC-003] [SRC-018]

## Contradictions

| Contradiction / tension | Sources | Notes |
| --- | --- | --- |
| El documento CTO recomienda `execution_plan_enabled: true` para poder llegar a plan de ejecucion, pero el run config actual tiene `execution_plan_enabled: false`. | SRC-001, SRC-019 | No bloquea Stage 00. Stage 06 queda deshabilitado salvo cambio explicito. |
| El documento CTO original describe Kapso como via preferente pendiente de prueba tecnica/coste, mientras la politica actual lo clasifica como decision arquitectonica tomada. | SRC-001, SRC-002, SRC-011 | No es contradiccion material si se interpreta como arquitectura objetivo pendiente de prueba tecnica de integracion. Policy y ajuste reciente deben guiar Stage 03. |
| El research index aun menciona PoCs de Hermes/Kapso/Google/BDNS/CRM como requisito antes de Stage 03 final, mientras la politica ajusta el lenguaje a prueba tecnica de integracion. | SRC-003, SRC-002 | Interpretar "PoC" como smoke test/prueba tecnica cuando afecte a Hermes/Kapso; no reabrir direccion arquitectonica. |

## Candidate Scope Areas

Estas son areas candidatas a evaluar en Stage 01/02. No son alcance aprobado.

- Infra/VPS/runtime: instalacion unica, procesos always-on, Postgres, workers, logs, backups y HTTPS. [SRC-004]
- Hermes core: gateway, toolsets, skills, subagentes, cron/background tasks, permisos, logs y workers. [SRC-005]
- Google Workspace/Drive/mirror: Drive humano, carpetas gobernadas, manifest, changes API, permisos y mirror regenerable. [SRC-006]
- BDNS watcher/radar: pesca determinista, landing zone, detalle/documentos, scoring de relevancia, deduplicacion, notificaciones y handoff a analistas. [SRC-007]
- Knowledge layer: Markdown canonico, Postgres FTS/pgvector o alternativa, citas, chunking, regeneracion y fallback. [SRC-008]
- Equipo IA analista: analisis bajo demanda, outputs estandar, logs de run, outputs Drive y validacion humana segun riesgo. [SRC-009]
- Atencion cliente/comercial autonoma: clasificacion de remitente/intencion/riesgo, RAG, respuestas, peticion de datos, escalado y CRM. [SRC-010]
- WhatsApp/Kapso/Hermes: numero dedicado, webhooks, allowlists, templates, media, opt-in, costes y Cloud API fallback. [SRC-011]
- Email/Gmail: cuenta dedicada, hilos, labels, adjuntos, Gmail API/polling, drafts/respuestas y entregabilidad. [SRC-012]
- CRM adapter/opciones: contrato minimo de contacto/oportunidad/tarea/nota/conversacion, con CRM concreto abierto. [SRC-013]
- Campanas/broadcasts/newsletters: segmentacion, copy, aprobacion humana, opt-in/bajas, metricas y safe sender. [SRC-014]
- Seguridad/RGPD/auditoria: permisos minimos, logs, retencion, consentimientos, proveedores, secretos y escalado. [SRC-015]
- Testing/evals/observability: test sets, golden answers, contract tests, alerts, rollback y healthchecks. [SRC-016]
- Training/operaciones/soporte: Drive Desktop, WhatsApp/email, manual operativo, aprobacion de campanas y soporte. [SRC-017]

## Non-Goals

- No escribir blueprint tecnico final en Stage 00. [SRC-002]
- No cerrar precio, plan comercial, SLA, contrato ni condiciones economicas. [SRC-002] [SRC-015]
- No usar framing comercial de fase 1/fase 2 ante DClick. [SRC-001] [SRC-002]
- No decidir schemas definitivos, endpoints finales, CI/CD final, nombres definitivos de agentes/skills ni estructura final interna del VPS. [SRC-002]
- No convertir n8n en core del sistema. [SRC-001] [SRC-002] [SRC-005]
- No usar Baileys/WhatsApp Web como via de produccion. [SRC-011] [SRC-018]
- No operar sobre todo Google Drive ni dar acceso irrestricto a todo el correo historico sin necesidad. [SRC-001] [SRC-006] [SRC-012]
- No enviar campanas masivas sin aprobacion humana, opt-in y mecanismo de bajas. [SRC-014] [SRC-015]
- No tratar el indice/RAG como fuente de verdad. [SRC-008]
- No hacer que Vivi/Maria dependan de terminal, GitHub, repositorios o Codex CLI. [SRC-001] [SRC-002] [SRC-017]

## Missing Information

- Estado real de Google Workspace, Shared Drives, dominio, SPF/DKIM/DMARC y permisos admin de DClick. [SRC-006] [SRC-012]
- Volumen, estructura y calidad de documentos existentes en OneDrive/Drive/correo. [SRC-001]
- Lista de sectores, tipos de cliente y prioridades de scoring para radar BDNS. [SRC-007]
- Muestras reales o anonimizadas de emails/WhatsApps para evaluar atencion automatica. [SRC-010] [SRC-016]
- Politica legal/RGPD sobre datos de expedientes, LLM providers, embeddings, logs, retencion, opt-in y proveedores. [SRC-015]
- Decision sobre CRM concreto y tolerancia a self-host vs SaaS. [SRC-013]
- Decision operativa sobre numero WhatsApp, Meta Business/WABA y presupuesto/costes Kapso/Meta. [SRC-011]
- Criterios exactos de low/medium/high risk para respuestas automaticas. [SRC-010] [SRC-015]
- Definicion final de outputs estandar del equipo analista y formatos de entrega. [SRC-009]
- Decision futura sobre activar Stage 06 cambiando `execution_plan_enabled` a `true`. [SRC-019]

## Handoff to Next Stage

Stage 01 debe auditar problemas reales antes de validar soluciones. En particular:

- Distinguir dolores confirmados de deseos tecnicos: vigilancia BDNS, atencion cliente, orden documental, CRM manual, newsletters/campanas y reduccion de trabajo repetitivo. [SRC-001]
- Evaluar si las decisiones arquitectonicas tomadas, especialmente Hermes y Kapso + Hermes, responden a esos dolores sin sobredimensionar ni ocultar riesgos. [SRC-002] [SRC-005] [SRC-011]
- Mantener como bloqueantes o unknowns las cuestiones de Google Workspace, BDNS rate limits, RGPD, opt-in, CRM concreto, datos reales de atencion y coste/configuracion Kapso. [SRC-006] [SRC-007] [SRC-011] [SRC-013] [SRC-015]
- No avanzar a decision de alcance sin separar requisitos duros, decisiones arquitectonicas tomadas, decisiones CTO provisionales fuertes, hipotesis tecnicas reales y opciones abiertas. [SRC-002]

