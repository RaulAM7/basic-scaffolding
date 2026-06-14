# BDNS Watcher / Radar Subvenciones - Technical Research Pack

## 1. Proposito del research pack

Investiga el radar BDNS/Canarias como motor always-on para detectar subvenciones relevantes, archivar documentacion y activar analisis posteriores.

## 2. Resumen tecnico del modulo

El modulo ataca el dolor principal de DClick: no tener que vigilar manualmente nuevas subvenciones. Debe combinar pesca determinista, scoring agentic y commit determinista a Drive/manifest.

## 3. Estatus de decisiones relacionadas

| Decision / hipotesis | Estatus | Evidencia | Implicacion |
| --- | --- | --- | --- |
| BDNS watcher hibrido | DECISION CTO PROVISIONAL FUERTE | BDNS tiene API REST JSON; bdns-fetch evidencia paginacion/documentos. | Stage 03 debe convertirlo en watcher + archivador + commit. |
| Canarias como filtro prioritario | REQUISITO DURO | Dolor DClick y fuentes BDNS permiten regiones. | El radar inicial debe cubrir Canarias. |
| bdns-fetch como dependencia | HIPOTESIS TECNICA A VALIDAR | Repo ofrece cliente/CLI; licencia GPLv3. | Revisar impacto legal o escribir cliente propio. |
| Scoring agentic de relevancia | HIPOTESIS TECNICA A VALIDAR | Necesario para ruido/keywords. | Requiere test set y criterios DClick. |

## 4. Fuentes revisadas

- Contexto CTO y policy.
- Datos.gob.es BDNS: https://datos.gob.es/es/catalogo/e05250001-base-de-datos-nacional-de-subvenciones
- Portal SNPSAP: https://www.infosubvenciones.es/
- bdns-fetch: https://github.com/cruzlorite/bdns-fetch
- Pruebas directas subagente contra `https://www.infosubvenciones.es/bdnstrans/api`.

## 5. Capacidades confirmadas por documentacion

- Datos.gob confirma consulta HTML, export CSV/XLS/PDF y API REST JSON.
- SNPSAP centraliza convocatorias, concesiones y otros datos de subvenciones.
- `bdns-fetch` documenta cliente Python/CLI, paginacion, JSONL, busquedas y descarga de documentos/PDF.
- La API viva devuelve JSON paginado para `convocatorias/busqueda` y detalle por `numConv`.
- Documentos de convocatoria pueden descargarse por `idDocumento` o PDF por id/vpd segun pruebas.
- Canarias tiene region SNPSAP identificable y organos canarios filtrables, pero IDs deben cachearse/refrescarse.

## 6. Capacidades no confirmadas o dudosas

- PENDIENTE DE VALIDACION TECNICA: limites reales de rate-limit.
- PENDIENTE DE VALIDACION TECNICA: OpenAPI/Swagger JSON directo y estabilidad de endpoints.
- PENDIENTE DE VALIDACION TECNICA: semantica exacta AND/OR para filtros multivalor.
- PENDIENTE DE VALIDACION TECNICA: filtro por actividad en convocatorias.
- PENDIENTE DE VALIDACION TECNICA: criterios de relevancia real para sectores/clientes DClick.

## 7. Opciones tecnicas identificadas

| Opcion | Ventaja | Riesgo | Estatus |
| --- | --- | --- | --- |
| Cliente propio contra API | Control, sin GPL. | Hay que mantener endpoints. | HIPOTESIS TECNICA A VALIDAR |
| Usar bdns-fetch como CLI/dependencia | Acelera PoC. | GPLv3 y cobertura parcial. | HIPOTESIS TECNICA A VALIDAR |
| Scraping HTML | Fallback. | Fragil y menos limpio. | OPCION ABIERTA |
| Manual search | Simple. | No resuelve dolor always-on. | NO DECIDIR TODAVIA |

## 8. Diseno candidato / hipotesis preferente

Hipotesis preferente: watcher determinista consulta ventanas diarias/semanales por regiones/organos/keywords, guarda landing JSONL, deduplica por `codigoBDNS` + version/detalle, archivador agentic propone relevancia y commit determinista crea Drive/manifest solo si supera reglas.

## 9. Inputs y outputs probables

- Inputs: parametros BDNS, ventana temporal, lista de sectores, organos, regiones, keywords, historico.
- Outputs: `bdns_raw_result`, `subsidy_candidate`, documentos descargados, decision de relevancia, carpeta Drive.
- Eventos: `bdns.poll.started`, `bdns.call.detected`, `bdns.call.updated`, `subsidy.relevance_scored`, `subsidy.archived`.

## 10. Entidades de datos candidatas

- `subsidy_call`: `codigo_bdns`, `api_id`, `title`, `organ`, `region`, `budget`, `dates`, `status`.
- `subsidy_document`: `document_id`, `type`, `url`, `sha256`, `drive_file_id`.
- `subsidy_relevance`: `score`, `reasons`, `sector_tags`, `risk`, `review_status`.

## 11. Integraciones externas relevantes

- BDNS/SNPSAP API: URL https://www.infosubvenciones.es/bdnstrans/api; auth no confirmada/publica; limites rate-limit PENDIENTE; riesgo cambios API; alternativa bdns-fetch/scraping.
- Datos.gob dataset: URL arriba; uso fuente oficial/condiciones; auth no; limites legales; alternativa portal transparencia.
- bdns-fetch: URL GitHub; uso PoC; auth no; limite GPLv3/cobertura; alternativa cliente propio.

## 12. Skills / tools / subagentes candidatos

- `bdns_fetch_new_calls`
- `bdns_fetch_call_detail`
- `bdns_download_documents`
- `bdns_score_relevance`
- `drive_create_subsidy_workspace`
- `analysis_queue_subsidy`

## 13. Seguridad, permisos y limites

- Respetar uso responsable de datos publicos y datos personales.
- No descargar barridos masivos innecesarios.
- No enviar alertas comerciales sin opt-in.
- Los documentos publicos se archivan con fuente y fecha de descarga.

## 14. Riesgos tecnicos

| Riesgo | Impacto | Probabilidad | Mitigacion | Estatus |
| --- | --- | --- | --- | --- |
| API cambia o limita abuso | Alto | Media | Ventanas cortas, retries, cache y fallback manual. | PENDIENTE DE VALIDACION TECNICA |
| Duplicados por familia de convocatoria | Medio | Alta | Dedup por `codigoBDNS`, no solo titulo/URL. | DECISION CTO PROVISIONAL FUERTE |
| bdns-fetch GPLv3 | Alto | Media | Revisar legal o cliente propio. | PENDIENTE DE VALIDACION TECNICA |
| Filtro pierde oportunidades | Medio | Media | Scoring + revision de muestras. | HIPOTESIS TECNICA A VALIDAR |

## 15. Prueba minima / PoC recomendada

- Fixture: ventana de 7 dias Canarias + organos prioritarios + keywords DClick.
- Pasos: buscar, paginar, traer detalle, descargar documento, deduplicar, generar summary y propuesta Drive.
- Criterio de exito: detecta convocatorias reales Canarias, documentos descargan, dedup correcto, relevancia explicada.
- Criterio de fallo: pierde campos clave, excede limites, duplica carpetas o no descarga documentos.

## 16. Preguntas abiertas

- CTO: ¿cliente propio o bdns-fetch para PoC?
- DClick: ¿Canarias solo o tambien estatales con impacto en Canarias?
- Documentacion tecnica: ¿Swagger JSON estable y rate-limit?
- Legal/RGPD: ¿uso y retencion de datos publicos con beneficiarios/personas fisicas?
- Comerciales: no convertir alertas en campanas sin consentimientos.

## 17. Recomendacion para Stage 00/01/02/03

- Stage 00: absorber BDNS como fuente tecnica confirmada con dudas.
- Stage 01: auditar dolor de vigilancia manual.
- Stage 02: decidir alcance del radar inicial por region/sectores.
- Stage 03: especificar watcher, dedup, documentos, scoring, Drive y alertas.

## 18. Source Map

| ID | Fuente | Tipo | Que aporta | Confianza |
| --- | --- | --- | --- | --- |
| SRC-BDNS-001 | `raw/divi-dclick_contexto_arquitectura_para_spec_driving.md` | contexto interno | Watcher hibrido y handoff analista. | media |
| SRC-BDNS-002 | https://datos.gob.es/es/catalogo/e05250001-base-de-datos-nacional-de-subvenciones | docs oficiales | API REST JSON y formatos. | alta |
| SRC-BDNS-003 | https://www.infosubvenciones.es/ | portal oficial | SNPSAP y acceso publico. | alta |
| SRC-BDNS-004 | https://github.com/cruzlorite/bdns-fetch | repo | Cliente Python/CLI, paginacion, documentos, GPL. | media |
| SRC-BDNS-005 | `https://www.infosubvenciones.es/bdnstrans/api` | API observada | Endpoints y campos probados por subagente. | media |

