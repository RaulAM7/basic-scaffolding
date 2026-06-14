# Equipo IA Analista de Subvenciones - Technical Research Pack

## 1. Proposito del research pack

Investiga como podria ejecutarse un equipo IA de analistas bajo demanda desde Hermes para analizar convocatorias, producir outputs estandar y guardar resultados en Drive.

## 2. Resumen tecnico del modulo

Este modulo reduce trabajo repetitivo de lectura, interpretacion y preparacion documental. No sustituye criterio profesional; organiza informacion, detecta dudas y prepara materiales revisables.

## 3. Estatus de decisiones relacionadas

| Decision / hipotesis | Estatus | Evidencia | Implicacion |
| --- | --- | --- | --- |
| Equipo IA bajo demanda | DECISION CTO PROVISIONAL FUERTE | SRC-INT-001 describe 8 outputs y agentes candidatos. | Stage 03 debe definir flujo minimo y handoff a Drive. |
| 8 outputs estandar | DECISION CTO PROVISIONAL FUERTE | Documento CTO los conserva como paquete base. | Deben tratarse como candidatos, no prompts finales. |
| Hermes delega analisis | HIPOTESIS TECNICA A VALIDAR | Hermes soporta subagentes/skills; requiere contexto explicito. | PoC con una convocatoria real. |
| Validacion humana opcional | HIPOTESIS TECNICA A VALIDAR | Depende del riesgo y tipo de output. | Clasificar outputs de bajo/medio/alto riesgo. |

## 4. Fuentes revisadas

- Contexto CTO y policy.
- Hermes docs oficiales sobre skills, subagentes, cron y tools.
- BDNS research pack para detalle/documentos de convocatorias.
- Drive/Knowledge research packs para outputs y citas.

## 5. Capacidades confirmadas por documentacion

- Hermes soporta skills y delegacion, lo que permite empaquetar instrucciones de analisis.
- BDNS puede aportar detalle y documentos de convocatoria para alimentar analisis.
- Drive API permite guardar outputs y manifests.
- Knowledge layer puede recuperar fuentes y citas si se construye indice derivado.

## 6. Capacidades no confirmadas o dudosas

- PENDIENTE DE VALIDACION TECNICA: calidad de analisis con documentos reales y lenguaje administrativo.
- PENDIENTE DE VALIDACION TECNICA: estructura exacta de los 8 outputs.
- PENDIENTE DE VALIDACION TECNICA: cuanto contexto puede procesar Hermes sin degradar.
- PENDIENTE DE VALIDACION TECNICA: que outputs pueden entregarse sin revision humana.

## 7. Opciones tecnicas identificadas

| Opcion | Ventaja | Riesgo | Estatus |
| --- | --- | --- | --- |
| Hermes skill por output | Modular y auditable. | Puede fragmentar demasiado. | HIPOTESIS TECNICA A VALIDAR |
| Subagente por rol analitico | Separa criterio y contexto. | Necesita handoffs buenos. | HIPOTESIS TECNICA A VALIDAR |
| Worker determinista de paquete final | Controla estructura Drive/log. | Menos flexible para razonamiento. | DECISION CTO PROVISIONAL FUERTE |

## 8. Diseno candidato / hipotesis preferente

Hipotesis preferente: Hermes recibe `analysis_request`, carga convocatoria + documentos + knowledge context, delega subagentes de analisis y llama a un worker determinista para escribir outputs en Drive con manifest y log de fuentes.

## 9. Inputs y outputs probables

- Inputs: `codigoBDNS`, documentos descargados, resumen BDNS, perfil de cliente/sector, tipo de analisis solicitado.
- Outputs: resumen ejecutivo, requisitos, checklist, plazos, documentos, riesgos, oportunidades, piezas de comunicacion, log.
- Eventos: `analysis.requested`, `analysis.output.generated`, `analysis.requires_human_review`.

## 10. Entidades de datos candidatas

- `analysis_run`: `run_id`, `subsidy_id`, `requested_by`, `status`, `risk_level`, `drive_folder_id`.
- `analysis_output`: `type`, `file_id`, `source_refs`, `review_status`.
- `analysis_finding`: `claim`, `source_ref`, `confidence`, `open_question`.

## 11. Integraciones externas relevantes

- Hermes: ejecucion agentic; auth provider LLM; limites contexto/coste; riesgo razonamiento no verificable; alternativa pipeline propio.
- Drive: persistencia visible; auth Google; limites permisos; alternativa filesystem interno.
- BDNS: datos/documentos fuente; auth no confirmada; limite API; alternativa subida manual.
- Knowledge layer: citas y busqueda; auth DB/embeddings; riesgo sin fuente; alternativa lectura directa documentos.

## 12. Skills / tools / subagentes candidatos

- `analysis_generate_standard_outputs`
- `analysis_extract_requirements`
- `analysis_build_checklist`
- `analysis_compare_client_fit`
- `analysis_prepare_newsletter_draft`
- `analysis_write_drive_outputs`

## 13. Seguridad, permisos y limites

- No afirmar elegibilidad sin fuente y sin margen de duda.
- Outputs comerciales o juridicos de riesgo deben ir a revision humana.
- Citas obligatorias para requisitos, plazos, cuantias y exclusiones.
- No modificar expedientes de cliente sin tool determinista y log.

## 14. Riesgos tecnicos

| Riesgo | Impacto | Probabilidad | Mitigacion | Estatus |
| --- | --- | --- | --- | --- |
| Alucinacion de requisitos | Alto | Media | Citas obligatorias y golden tests. | PENDIENTE DE VALIDACION TECNICA |
| Documento fuente incompleto | Alto | Media | Fetch detalle + documentos + fallback humano. | HIPOTESIS TECNICA A VALIDAR |
| Outputs inconsistentes | Medio | Media | Templates y worker de escritura. | HIPOTESIS TECNICA A VALIDAR |
| Coste/latencia alta | Medio | Media | Chunking, cache y modo incremental. | PENDIENTE DE VALIDACION TECNICA |

## 15. Prueba minima / PoC recomendada

- Fixture: una convocatoria BDNS Canarias con PDF, una consulta de Vivi y un perfil cliente ficticio.
- Pasos: cargar fuentes, generar 3 de los 8 outputs, guardar en Drive, registrar fuentes.
- Criterio de exito: todos los claims clave citados, dudas marcadas y estructura repetible.
- Criterio de fallo: datos inventados, falta de fuentes, archivos mal ubicados.

## 16. Preguntas abiertas

- CTO: ¿subagentes por output o pipeline unico?
- DClick: ¿cuales son los 8 outputs imprescindibles para el primer despliegue?
- Documentacion tecnica: ¿formato final Markdown, Google Docs o PDF?
- Legal/RGPD: ¿analisis de clientes reales desde el inicio?
- Comerciales: no prometer asesoramiento automatico definitivo.

## 17. Recomendacion para Stage 00/01/02/03

- Stage 00: capturar los 8 outputs como candidatos.
- Stage 01: auditar el dolor de analisis repetitivo.
- Stage 02: decidir outputs del alcance base.
- Stage 03: especificar flujo, sources, revision y escritura Drive.

## 18. Source Map

| ID | Fuente | Tipo | Que aporta | Confianza |
| --- | --- | --- | --- | --- |
| SRC-ANA-001 | `raw/divi-dclick_contexto_arquitectura_para_spec_driving.md` | contexto interno | Equipo analista, outputs, agentes. | media |
| SRC-ANA-002 | `raw/000_source_status_and_decision_policy.md` | politica interna | No cerrar prompts/schemas. | alta |
| SRC-ANA-003 | https://hermes-agent.nousresearch.com/docs/ | docs oficiales | Skills, tools, delegacion. | alta |
| SRC-ANA-004 | `04_bdns_watcher_radar_subvenciones_research.md` | research interno | Detalle y documentos BDNS. | media |
| SRC-ANA-005 | `03_google_workspace_drive_mirror_research.md` | research interno | Guardado Drive y manifests. | media |

