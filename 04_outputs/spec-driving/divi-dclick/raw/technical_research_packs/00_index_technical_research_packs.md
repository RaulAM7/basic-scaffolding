# Technical Research Packs - Index

## Proposito

Este indice orienta a Stage 00/01/02/03 sobre el paquete de research tecnico previo para DClick IA System / Equipo IA DClick / Subvenciones a un Click.

Los research packs son contexto tecnico trazable. No son blueprint final, no son propuesta comercial y no cierran implementacion.

## Fuentes internas base

| ID | Fuente | Uso |
| --- | --- | --- |
| SRC-INT-001 | `raw/divi-dclick_contexto_arquitectura_para_spec_driving.md` | Vision CTO, ADR provisionales, dolores y arquitectura candidata. |
| SRC-POL-001 | `raw/000_source_status_and_decision_policy.md` | Taxonomia de estatus y decision ledger inicial. |

## Packs creados

| Pack | Modulo | Funcion |
| --- | --- | --- |
| `01_infra_vps_runtime_research.md` | Infra / VPS / Runtime | Opciones de alojamiento, procesos always-on, Docker, Postgres, logs y backups. |
| `02_hermes_runtime_agentic_core_research.md` | Hermes core | Validar Hermes como runtime/gateway/skills/cron/subagentes. |
| `03_google_workspace_drive_mirror_research.md` | Google Drive / Mirror | Drive humano, Shared Drives, API, cambios, mirror regenerable. |
| `04_bdns_watcher_radar_subvenciones_research.md` | BDNS watcher | Radar Canarias/subvenciones, API SNPSAP, documentos y deduplicacion. |
| `05_knowledge_layer_markdown_rag_index_research.md` | Knowledge/RAG | Markdown canonico, FTS, pgvector, alternativas y citas. |
| `06_equipo_analista_subvenciones_research.md` | Equipo analista | Analisis bajo demanda, 8 outputs, logs y validacion humana opcional. |
| `07_atencion_cliente_comercial_autonoma_research.md` | Atencion cliente | Respuesta autonoma, clasificacion de riesgo, RAG y CRM. |
| `08_whatsapp_kapso_hermes_research.md` | WhatsApp/Kapso | Plugin Hermes, webhooks, media, allowlists, broadcasts y PoC. |
| `09_email_channel_gmail_workspace_research.md` | Email/Gmail | Cuenta dedicada, Gmail API, hilos, labels, push y seguridad. |
| `10_crm_adapter_and_crm_options_research.md` | CRM adapter | Twenty/Baserow/NocoDB/GoHighLevel y contrato agnostico. |
| `11_campaigns_broadcasts_and_newsletters_research.md` | Campanas | Segmentacion, aprobacion humana, email/WhatsApp y metricas. |
| `12_security_rgpd_audit_logs_research.md` | Seguridad/RGPD | Permisos, datos sensibles, auditoria, retencion y escalado. |
| `13_testing_eval_observability_research.md` | Testing/evals | Test sets, golden answers, observabilidad, rollback y alertas. |
| `14_training_operations_support_research.md` | Operaciones | Training de Vivi/Maria, manual operativo y soporte. |
| `99_cross_module_contracts_open_questions_research.md` | Contratos cruzados | Eventos, entidades, preguntas abiertas, riesgos globales y handoff a stages. |

## Hallazgos importantes

- La arquitectura CTO es consistente con un sistema en VPS, pero Hermes como core debe validarse con PoC de gateway, toolsets minimos, cron, email y WhatsApp.
- Google Drive debe tratarse como biblioteca humana canonica. El mirror tecnico debe ser regenerable por API, basado en `fileId`/hash/manifest, no en rutas.
- BDNS/SNPSAP tiene API REST JSON y documentos descargables; el watcher hibrido es viable como hipotesis fuerte, pero hay que validar paginacion, rate-limit, filtros y estabilidad de IDs.
- Postgres FTS + pgvector es la opcion preferente para indice derivado si ya hay Postgres; Chroma, LanceDB y SQLite FTS5 quedan como alternativas.
- Kapso + Hermes tiene evidencia fuerte por plugin y repos, pero requiere PoC: numero dedicado, webhooks firmados, HTTPS publico, templates, opt-in y costes externos.
- CRM debe estar detras de `crm_adapter`; Twenty parece mejor candidato tecnico si se prioriza CRM real/self-host, Baserow/NocoDB si se prioriza hoja visual, GoHighLevel si se acepta suite SaaS/lock-in.
- Campanas masivas no deben ser autonomas: preparacion IA posible, envio con aprobacion humana obligatoria.
- RGPD, seguridad de herramientas y permisos por canal son blockers reales antes de produccion.

## Recomendacion para Stage 00/01/02/03

- Stage 00 debe absorber este pack como contexto trazable y separar fuentes internas, docs oficiales, repos y PoCs pendientes.
- Stage 01 debe auditar si cada modulo responde a los dolores reales: vigilancia BDNS, atencion cliente, orden documental, reduccion de trabajo repetitivo.
- Stage 02 debe decidir alcance base sin prometer todo: al menos Drive/mirror, radar BDNS, atencion entrante controlada, knowledge layer y CRM adapter deben evaluarse como bloques.
- Stage 03 debe convertir solo el alcance aprobado en blueprint tecnico-funcional y mantener abiertas las hipotesis sin PoC.

## Recomendacion de readiness

Estado: LISTO PARA EJECUTAR STAGE 00, con advertencias.

Motivo: hay suficiente contexto tecnico y politico para que Stage 00 cree un intake pack trazable. No esta listo para Stage 03 final sin PoCs de Hermes/Kapso/Google/BDNS/CRM.

Comando futuro recomendado, cuando el operador decida iniciar el loop:

```text
spec-drive-stage divi-dclick 00
```

