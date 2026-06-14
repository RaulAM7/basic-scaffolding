# Google Workspace / Drive / Mirror - Technical Research Pack

## 1. Proposito del research pack

Investiga Drive como biblioteca humana y mirror tecnico regenerable en VPS. Debe ayudar a Stage 03 a disenar sincronizacion controlada sin convertir Drive Desktop en runtime tecnico.

## 2. Resumen tecnico del modulo

Drive resuelve adopcion humana: Vivi y Maria trabajan como en carpetas locales desde Windows. El VPS necesita un mirror tecnico para buscar, indexar y generar outputs sin recorrer Drive en cada consulta.

## 3. Estatus de decisiones relacionadas

| Decision / hipotesis | Estatus | Evidencia | Implicacion |
| --- | --- | --- | --- |
| Drive Desktop como superficie humana | REQUISITO DURO | SRC-INT-001 y politica. | No exigir terminal/repos. |
| Drive canonico + mirror tecnico | DECISION CTO PROVISIONAL FUERTE | Drive API permite archivos, carpetas, permisos, changes y export. | Stage 03 debe disenar manifest y resync. |
| Shared Drive organizativo | HIPOTESIS TECNICA A VALIDAR | Google distingue Shared Drives y permisos organizativos. | Validar edicion Workspace de DClick. |
| Sync bidireccional salvaje | NO DECIDIR TODAVIA | Riesgo alto de conflictos. | Usar sync gobernado por manifest. |

## 4. Fuentes revisadas

- Contexto CTO y politica interna.
- Drive API overview/folders/sharing/changes/push/downloads/export.
- Google Drive for desktop support.
- Google OAuth/service accounts docs.

## 5. Capacidades confirmadas por documentacion

- Drive API permite crear carpetas como archivos con MIME de carpeta y subir/crear archivos.
- Shared Drives requieren parametros especificos como `supportsAllDrives`, `driveId`, `corpora=drive` e `includeItemsFromAllDrives`.
- Los permisos se modelan por tipo (`user`, `group`, `domain`, `anyone`) y roles.
- `changes.list` y start page token permiten detectar cambios; `files.watch`/`changes.watch` permiten notificaciones a webhook HTTPS con expiracion.
- Drive permite descargar blobs y exportar Google Docs/Sheets/Slides a formatos soportados, incluido Markdown para Google Docs segun export formats.
- Drive for desktop da experiencia de explorador local, pero Shared Drives funcionan principalmente en streaming; el mirror VPS debe ser API-driven.

## 6. Capacidades no confirmadas o dudosas

- PENDIENTE DE VALIDACION TECNICA: si DClick tiene Google Workspace con Shared Drives disponibles.
- PENDIENTE DE VALIDACION TECNICA: scopes minimos suficientes (`drive.file` vs `drive`/`drive.readonly`).
- PENDIENTE DE VALIDACION TECNICA: fidelidad de Google Docs a Markdown para outputs finales.
- PENDIENTE DE VALIDACION TECNICA: politica de conflictos si humana edita mientras worker regenera.

## 7. Opciones tecnicas identificadas

| Opcion | Ventaja | Riesgo | Estatus |
| --- | --- | --- | --- |
| Shared Drive gobernado | Propiedad organizativa y permisos claros. | Requiere Workspace/admin. | HIPOTESIS TECNICA A VALIDAR |
| Carpeta compartida en My Drive | Menos friccion si no hay Shared Drives. | Propiedad individual y riesgo de baja de cuenta. | OPCION ABIERTA |
| Mirror pull por polling changes | Simple y robusto. | Latencia y cuotas. | HIPOTESIS TECNICA A VALIDAR |
| Push notifications | Menos polling. | Expiracion, HTTPS, resync. | HIPOTESIS TECNICA A VALIDAR |

## 8. Diseno candidato / hipotesis preferente

Hipotesis preferente: Shared Drive `DClick IA` con carpetas gobernadas, worker de Drive que usa `changes.list` + resync periodico, manifest por `fileId` y hash local, y mirror VPS descartable. Drive sigue siendo canonico para documentos visibles.

## 9. Inputs y outputs probables

- Inputs: cambios Drive, nuevas convocatorias, outputs de analistas, documentos subidos por Vivi/Maria.
- Outputs: carpetas, Markdown, PDFs, manifests, eventos `drive.file.changed`.
- Logs: `drive_sync_run`, `drive_file_snapshot`, `drive_conflict`.

## 10. Entidades de datos candidatas

- `drive_manifest`: `drive_id`, `file_id`, `path`, `mime_type`, `modified_time`, `version`, `local_sha256`, `status`.
- `mirror_file`: `local_path`, `source_file_id`, `export_mime`, `hash`, `indexed_at`.
- `sync_conflict`: `file_id`, `detected_at`, `reason`, `resolution`.

## 11. Integraciones externas relevantes

- Google Drive API: URL https://developers.google.com/workspace/drive/api/; auth OAuth/service account; limites cuotas/scopes; riesgo restricted scopes; alternativa manual upload.
- Google Drive for desktop: URL https://support.google.com/drive/answer/10838124; auth usuario; limites streaming/sync; riesgo conflictos; alternativa navegador.
- Google Workspace Admin/OAuth: URL https://developers.google.com/identity/protocols/oauth2/service-account; auth domain-wide delegation; riesgo superadmin/scopes.

## 12. Skills / tools / subagentes candidatos

- `drive_create_subsidy_workspace`
- `drive_export_document`
- `drive_sync_changes`
- `drive_rebuild_mirror`
- `drive_resolve_conflict`
- `drive_write_manifest`

## 13. Seguridad, permisos y limites

- Operar solo carpetas gobernadas, no todo Drive.
- Preferir grupos y roles minimos.
- No borrar archivos sin confirmacion humana.
- Credenciales de service account/OAuth fuera del repo.
- Registrar cada creacion, movimiento, export y conflicto.

## 14. Riesgos tecnicos

| Riesgo | Impacto | Probabilidad | Mitigacion | Estatus |
| --- | --- | --- | --- | --- |
| Conflictos por edicion humana | Alto | Media | Manifest, locks blandos y revision de conflictos. | PENDIENTE DE VALIDACION TECNICA |
| Scopes restringidos Google | Alto | Media | Diseñar scopes minimos y validar assessment. | PENDIENTE DE VALIDACION TECNICA |
| Perder cambios por webhooks expirados | Medio | Media | Resync periodico y tokens persistidos. | HIPOTESIS TECNICA A VALIDAR |
| Rutas duplicadas/renombradas | Medio | Alta | Identidad por `fileId`, no path. | DECISION CTO PROVISIONAL FUERTE |

## 15. Prueba minima / PoC recomendada

- Fixture: Shared Drive sandbox con 5 carpetas, PDF, Google Doc, Markdown y usuario Windows.
- Pasos: crear arbol por API, verlo en Drive Desktop, modificar, detectar cambios, exportar, hash, manifest.
- Criterio de exito: mirror se reconstruye completo desde Drive y manifest.
- Criterio de fallo: cambios perdidos, duplicados, permisos excesivos o conflicto silencioso.

## 16. Preguntas abiertas

- CTO: ¿Shared Drive o My Drive gobernado?
- DClick: ¿quien administra Workspace y permisos?
- Documentacion tecnica: ¿scopes exactos y verificacion Google?
- Legal/RGPD: ¿datos de expedientes en Drive, retention y backups?
- Comerciales: no cerrar plan de migracion ni coste.

## 17. Recomendacion para Stage 00/01/02/03

- Stage 00: absorber Drive como requisito duro de UX.
- Stage 01: auditar si resuelve desorden documental.
- Stage 02: decidir alcance de migracion/mirror inicial.
- Stage 03: especificar manifest, permisos, sync, conflictos y resync.

## 18. Source Map

| ID | Fuente | Tipo | Que aporta | Confianza |
| --- | --- | --- | --- | --- |
| SRC-GDR-001 | `raw/divi-dclick_contexto_arquitectura_para_spec_driving.md` | contexto interno | Drive casa humana, mirror tecnico. | media |
| SRC-GDR-002 | https://developers.google.com/workspace/drive/api/guides/about-sdk | docs oficiales | Drive API y almacenamiento. | alta |
| SRC-GDR-003 | https://developers.google.com/workspace/drive/api/guides/folder | docs oficiales | Crear carpetas. | alta |
| SRC-GDR-004 | https://developers.google.com/workspace/drive/api/guides/manage-sharing | docs oficiales | Permisos y roles. | alta |
| SRC-GDR-005 | https://developers.google.com/workspace/drive/api/guides/push | docs oficiales | Push notifications HTTPS y expiracion. | alta |
| SRC-GDR-006 | https://support.google.com/drive/answer/10838124 | docs oficiales | Drive for desktop. | alta |

