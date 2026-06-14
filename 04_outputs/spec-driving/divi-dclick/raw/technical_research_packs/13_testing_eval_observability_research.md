# Testing / Evaluation / Observability - Technical Research Pack

## 1. Proposito del research pack

Investiga test sets, evaluaciones, observabilidad, alertas y rollback para validar BDNS watcher, Drive mirror, CRM adapter, atencion autonoma, campanas y outputs de analistas.

## 2. Resumen tecnico del modulo

El sistema solo puede ser autonomo si se mide. Este modulo define evidencias que Stage 03/06 deberian transformar en plan de pruebas.

## 3. Estatus de decisiones relacionadas

| Decision / hipotesis | Estatus | Evidencia | Implicacion |
| --- | --- | --- | --- |
| Evals antes de autonomia real | REQUISITO DURO | Riesgo de atencion automatica y RGPD. | No pasar a produccion sin test set. |
| Logs estructurados | DECISION CTO PROVISIONAL FUERTE | CTO ADR-015. | Observabilidad y auditoria. |
| Golden answers | HIPOTESIS TECNICA A VALIDAR | Necesario para RAG/atencion. | Crear fixtures anonimizados. |
| Rollback/fallback humano | REQUISITO DURO | Riesgo operativo. | Modo degradado manual. |

## 4. Fuentes revisadas

- Contexto CTO y policy.
- Research packs BDNS, Drive, Knowledge, Email, WhatsApp, CRM y Security.
- Practicas generales de testing/observabilidad aplicadas al sistema; no se cierra stack final.

## 5. Capacidades confirmadas por documentacion

- Google APIs y Kapso/Meta/Gmail tienen IDs de eventos/mensajes que permiten deduplicar y trazar.
- Postgres puede almacenar logs/evals y soportar consultas de auditoria.
- Hermes tiene logs/tool calls y cron, pero su observabilidad final debe validarse.
- BDNS API y Drive/Gmail permiten fixtures reproducibles con snapshots.

## 6. Capacidades no confirmadas o dudosas

- PENDIENTE DE VALIDACION TECNICA: formato exacto de logs Hermes exportables.
- PENDIENTE DE VALIDACION TECNICA: stack de observabilidad (logs simples, Grafana, Sentry, Uptime Kuma, etc.).
- PENDIENTE DE VALIDACION TECNICA: umbrales de precision para clasificacion/respuestas.
- PENDIENTE DE VALIDACION TECNICA: fixtures reales anonimizados disponibles.

## 7. Opciones tecnicas identificadas

| Opcion | Ventaja | Riesgo | Estatus |
| --- | --- | --- | --- |
| Test set Markdown/JSON versionado | Simple y auditable. | Puede quedar desactualizado. | HIPOTESIS TECNICA A VALIDAR |
| Evals con golden answers | Mide calidad. | Necesita curacion humana. | REQUISITO DURO |
| Observabilidad ligera | Encaja pyme. | Menos sofisticada. | DECISION CTO PROVISIONAL FUERTE |
| Plataforma observability completa | Potente. | Sobrecoste. | NO DECIDIR TODAVIA |

## 8. Diseno candidato / hipotesis preferente

Hipotesis preferente: matriz de tests por modulo, fixtures anonimizados, logs estructurados en Postgres, alertas basicas de healthcheck/job failures y evals periodicos antes de activar autonomia.

## 9. Inputs y outputs probables

- Inputs: fixtures BDNS, documentos Drive, mensajes email/WhatsApp, contactos CRM, campanas sandbox.
- Outputs: `eval_result`, `job_metric`, `alert`, `incident`, `rollback_action`.
- Eventos: `eval.run.completed`, `job.failed`, `healthcheck.failed`, `manual_override.used`.

## 10. Entidades de datos candidatas

- `eval_case`: module, input_ref, expected, risk, tags.
- `eval_result`: case_id, actual, verdict, evidence, reviewed_by.
- `job_metric`: job, duration, success, retries, error_code.
- `incident`: severity, module, root_cause, resolution.

## 11. Integraciones externas relevantes

- Postgres: logs/evals; auth DB; riesgo PII; alternativa archivos JSONL.
- Uptime/monitoring: auth proveedor; riesgo ruido; alternativa cron healthcheck.
- Sentry/log provider: auth DSN; riesgo datos sensibles; alternativa self-host logs.

## 12. Skills / tools / subagentes candidatos

- `eval_run_customer_care_set`
- `eval_run_bdns_watcher_fixture`
- `eval_run_drive_mirror_fixture`
- `eval_run_crm_adapter_contract`
- `observability_emit_metric`
- `rollback_disable_autoreply`

## 13. Seguridad, permisos y limites

- Fixtures reales deben anonimizarse.
- No incluir secretos ni PII innecesaria en logs/evals.
- Alertas no deben filtrar contenido sensible.
- Rollback debe poder desactivar auto-respuesta sin apagar todo.

## 14. Riesgos tecnicos

| Riesgo | Impacto | Probabilidad | Mitigacion | Estatus |
| --- | --- | --- | --- | --- |
| Autonomia sin medir | Alto | Media | Gate de evals y piloto. | REQUISITO DURO |
| Logs insuficientes para debug | Medio-alto | Media | Action log estandar. | DECISION CTO PROVISIONAL FUERTE |
| Alert fatigue | Medio | Media | Alertas por severidad y resumen diario. | HIPOTESIS TECNICA A VALIDAR |
| Fixtures no representan realidad | Medio | Alta | Muestreo con DClick y actualizacion periodica. | PENDIENTE DE VALIDACION TECNICA |

## 15. Prueba minima / PoC recomendada

- Fixture: 10 BDNS calls, 10 Drive changes, 30 mensajes, 20 CRM ops, 3 campanas internas.
- Pasos: correr tests por modulo, registrar metricas, simular fallos y rollback.
- Criterio de exito: fallos detectados, high-risk bloqueado, logs permiten explicar decision.
- Criterio de fallo: fallo silencioso, auto-respuesta insegura, sin rollback.

## 16. Preguntas abiertas

- CTO: ¿stack observability minimo?
- DClick: ¿podemos usar correos reales anonimizados?
- Documentacion tecnica: ¿logs exportables de Hermes/Kapso?
- Legal/RGPD: ¿anonimizacion y retencion de fixtures?
- Comerciales: no prometer SLA sin medicion.

## 17. Recomendacion para Stage 00/01/02/03

- Stage 00: registrar testing como condicion transversal.
- Stage 01: identificar riesgos que requieren evals.
- Stage 02: incluir pruebas como alcance minimo si hay autonomia.
- Stage 03: definir matriz de tests y criterios de go/no-go.

## 18. Source Map

| ID | Fuente | Tipo | Que aporta | Confianza |
| --- | --- | --- | --- | --- |
| SRC-TEST-001 | `raw/divi-dclick_contexto_arquitectura_para_spec_driving.md` | contexto interno | Logs, auditoria, workflows. | media |
| SRC-TEST-002 | `12_security_rgpd_audit_logs_research.md` | research interno | Riesgos y logs. | media |
| SRC-TEST-003 | `04_bdns_watcher_radar_subvenciones_research.md` | research interno | Fixtures BDNS. | media |
| SRC-TEST-004 | `07_atencion_cliente_comercial_autonoma_research.md` | research interno | Evals de atencion. | media |
| SRC-TEST-005 | `10_crm_adapter_and_crm_options_research.md` | research interno | Contract tests CRM. | media |

