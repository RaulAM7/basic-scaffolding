# Knowledge Layer / Markdown / RAG / Index - Technical Research Pack

## 1. Proposito del research pack

Investiga la capa de conocimiento de DClick IA: Markdown canonico, indice derivado, busqueda full-text/vectorial, citas y regeneracion desde Drive/mirror.

## 2. Resumen tecnico del modulo

El modulo permite responder preguntas y generar outputs sin cargar todos los documentos. Debe ser memoria rapida, no fuente de verdad.

## 3. Estatus de decisiones relacionadas

| Decision / hipotesis | Estatus | Evidencia | Implicacion |
| --- | --- | --- | --- |
| Markdown como base operativa | DECISION CTO PROVISIONAL FUERTE | SRC-INT-001 ADR-007. | Los outputs tecnicos deben ser auditables y legibles. |
| RAG/indice derivado | HIPOTESIS TECNICA A VALIDAR | pgvector/Postgres FTS/alternativas viables. | Si falla el indice, se regenera desde Drive/Markdown. |
| Postgres FTS + pgvector preferente | HIPOTESIS TECNICA A VALIDAR | pgvector y FTS oficiales; encaja con VPS/Postgres. | Validar con documentos reales. |
| Chroma/Lance/SQLite | OPCION ABIERTA | Docs oficiales muestran capacidades. | Alternativas, no cerrarlas aun. |

## 4. Fuentes revisadas

- Contexto CTO y policy.
- pgvector: https://github.com/pgvector/pgvector
- PostgreSQL FTS: https://www.postgresql.org/docs/current/textsearch.html
- SQLite FTS5: https://www.sqlite.org/fts5.html
- Chroma: https://docs.trychroma.com/docs/overview/introduction
- LanceDB: https://docs.lancedb.com/

## 5. Capacidades confirmadas por documentacion

- pgvector permite similitud vectorial dentro de Postgres, exacta/aproximada, con HNSW/IVFFlat y distancias comunes.
- Postgres FTS ofrece `tsvector`, `tsquery`, ranking, configuracion, indices y busqueda textual.
- SQLite FTS5 permite busqueda full-text local con `MATCH`, ranking, highlight, prefijos, frases y proximidad.
- Chroma almacena documentos, embeddings y metadata, con busqueda vectorial, full-text/regex y filtros.
- LanceDB ofrece SDKs y capacidades vector/hybrid search, pero introduce otro componente/concepto.

## 6. Capacidades no confirmadas o dudosas

- PENDIENTE DE VALIDACION TECNICA: modelo de embeddings, dimension, coste y residencia de datos.
- PENDIENTE DE VALIDACION TECNICA: calidad de FTS en espanol juridico-administrativo.
- PENDIENTE DE VALIDACION TECNICA: extraccion fiable de PDF/Word/OCR.
- PENDIENTE DE VALIDACION TECNICA: formato exacto de chunking y citas.

## 7. Opciones tecnicas identificadas

| Opcion | Complejidad | Trazabilidad | Encaje | Estatus |
| --- | --- | --- | --- | --- |
| Postgres FTS + pgvector | Media-baja | Alta | Mejor si ya hay Postgres. | HIPOTESIS TECNICA A VALIDAR |
| Postgres FTS solo | Baja | Alta | Buen primer PoC. | OPCION ABIERTA |
| SQLite FTS5 | Baja | Media | Fallback local, menos central. | OPCION ABIERTA |
| Chroma | Media | Media | Bueno para prototipo vectorial. | OPCION ABIERTA |
| LanceDB | Media | Media | Potente, posible sobrecoste conceptual. | OPCION ABIERTA |

## 8. Diseno candidato / hipotesis preferente

Hipotesis preferente: Postgres contiene `source_documents`, `document_chunks`, FTS y embeddings pgvector. El indice se reconstruye desde Drive/mirror + Markdown + manifests; cada respuesta debe devolver fuentes.

## 9. Inputs y outputs probables

- Inputs: Markdown, PDFs exportados, metadatos BDNS, emails, notas CRM.
- Outputs: chunks, embeddings, resultados FTS/vector, citas, `sources_used`.
- Eventos: `document.indexed`, `index.rebuilt`, `rag.query.logged`, `rag.no_source_found`.

## 10. Entidades de datos candidatas

- `source_document`: `source_id`, `drive_file_id`, `path`, `sha256`, `mime`, `canonical_status`.
- `document_chunk`: `chunk_id`, `source_id`, `section`, `page`, `text`, `tsvector`, `embedding`.
- `rag_query`: `query`, `filters`, `results`, `answer_status`, `sources_used`.

## 11. Integraciones externas relevantes

- Postgres/pgvector: auth DB; limites RAM/index; riesgo recall aproximado; coste VPS; alternativa Chroma/Lance.
- Embeddings provider: auth API key; limites coste/datos; riesgo RGPD; alternativa embeddings locales.
- Drive mirror: fuente de documentos; auth Google; riesgo sync; alternativa carga manual.

## 12. Skills / tools / subagentes candidatos

- `rag_search_subsidy_docs`
- `rag_rebuild_index`
- `rag_cite_sources`
- `knowledge_ingest_markdown`
- `knowledge_extract_pdf_text`
- `knowledge_no_source_escalate`

## 13. Seguridad, permisos y limites

- No responder sin fuentes en consultas especificas.
- No indexar expedientes de cliente sin base legal/consentimiento y decision de alcance.
- Embeddings externos para datos sensibles requieren validacion RGPD.
- Indice borrable y reconstruible; no es fuente canonica.

## 14. Riesgos tecnicos

| Riesgo | Impacto | Probabilidad | Mitigacion | Estatus |
| --- | --- | --- | --- | --- |
| Respuesta sin cita fiable | Alto | Media | `sources_used` obligatorio y escalado. | DECISION CTO PROVISIONAL FUERTE |
| Extraccion documental mala | Alto | Media | PoC con PDFs reales y OCR fallback. | PENDIENTE DE VALIDACION TECNICA |
| Embeddings con datos sensibles | Alto | Media | Politica RGPD y provider aprobado. | PENDIENTE DE VALIDACION LEGAL/RGPD |
| Indice deja de ser derivado | Medio | Media | Rebuild total y manifest/hash. | DECISION CTO PROVISIONAL FUERTE |

## 15. Prueba minima / PoC recomendada

- Fixture: 8-12 documentos reales de subvencion, 20 preguntas, 3 consultas cliente.
- Pasos: indexar Markdown/PDF, ejecutar FTS/vector/hybrid, citar fuentes, borrar indice y reconstruir.
- Criterio de exito: respuestas citadas, no inventa, rebuild reproduce conteos/hash.
- Criterio de fallo: no localiza requisitos/plazos, cita erronea o no escala sin fuente.

## 16. Preguntas abiertas

- CTO: ¿embeddings externos o locales?
- DClick: ¿que documentos pueden alimentar respuestas automaticas?
- Documentacion tecnica: ¿chunking por pagina, seccion o parrafo?
- Legal/RGPD: ¿indexar expedientes y emails de clientes?
- Comerciales: no prometer asesoramiento sin revision.

## 17. Recomendacion para Stage 00/01/02/03

- Stage 00: registrar RAG como derivado.
- Stage 01: auditar si ayuda a atencion y analisis.
- Stage 02: decidir corpus inicial.
- Stage 03: especificar schema candidato, busqueda, citas, fallback y rebuild.

## 18. Source Map

| ID | Fuente | Tipo | Que aporta | Confianza |
| --- | --- | --- | --- | --- |
| SRC-KNO-001 | `raw/divi-dclick_contexto_arquitectura_para_spec_driving.md` | contexto interno | Markdown, indice derivado, Postgres. | media |
| SRC-KNO-002 | https://github.com/pgvector/pgvector | repo oficial | Vector search en Postgres. | alta |
| SRC-KNO-003 | https://www.postgresql.org/docs/current/textsearch.html | docs oficiales | Full-text search. | alta |
| SRC-KNO-004 | https://www.sqlite.org/fts5.html | docs oficiales | FTS5 como alternativa. | alta |
| SRC-KNO-005 | https://docs.trychroma.com/docs/overview/introduction | docs oficiales | Vector DB/metadata/full-text. | alta |
| SRC-KNO-006 | https://docs.lancedb.com/ | docs oficiales | Alternativa vector/hybrid. | media |

