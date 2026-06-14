# Training / Operaciones / Soporte - Technical Research Pack

## 1. Proposito del research pack

Investiga training y operacion para Vivi y Maria: Drive Desktop, WhatsApp/email, Hermes Desktop opcional, manual operativo, soporte, fallos, logs/resumenes, aprobacion de campanas y escalado.

## 2. Resumen tecnico del modulo

La adopcion depende de que el sistema se use desde superficies conocidas. Este modulo aterriza como operan las personas sin terminal ni repositorios.

## 3. Estatus de decisiones relacionadas

| Decision / hipotesis | Estatus | Evidencia | Implicacion |
| --- | --- | --- | --- |
| Vivi/Maria no usan terminal/GitHub | REQUISITO DURO | Policy y CTO. | Training debe centrarse en Drive/email/WhatsApp. |
| Drive Desktop como superficie humana | REQUISITO DURO | CTO y Drive docs. | Manual operativo de carpetas. |
| Hermes Desktop opcional | HIPOTESIS TECNICA A VALIDAR | CTO lo deja opcional. | No depender de el para adopcion inicial. |
| Resumenes operativos | HIPOTESIS TECNICA A VALIDAR | CTO propone briefings/logs. | Definir canal y frecuencia. |

## 4. Fuentes revisadas

- Contexto CTO y policy.
- Google Drive for desktop support docs.
- Research packs Drive, Email, WhatsApp, Campaigns, Security, Testing.

## 5. Capacidades confirmadas por documentacion

- Drive for desktop permite navegar Drive y Shared Drives desde Windows/File Explorer.
- Email/WhatsApp pueden ser superficies de interaccion sin interfaz tecnica.
- Google Drive permisos pueden limitar que usuarias trabajen en carpetas concretas.
- Campanas pueden tener preview/aprobacion antes de envio si el sistema lo implementa.

## 6. Capacidades no confirmadas o dudosas

- PENDIENTE DE VALIDACION TECNICA: nivel real de comodidad de Vivi/Maria con Drive Desktop y Google Workspace.
- PENDIENTE DE VALIDACION TECNICA: si Hermes Desktop aporta valor o distrae.
- PENDIENTE DE VALIDACION TECNICA: formato ideal de briefing diario/semanal.
- PENDIENTE DE VALIDACION TECNICA: SLA/soporte y ownership operativo.

## 7. Opciones tecnicas identificadas

| Opcion | Ventaja | Riesgo | Estatus |
| --- | --- | --- | --- |
| Operar via Drive/email/WhatsApp | Baja friccion. | Menos control avanzado. | REQUISITO DURO |
| Hermes Desktop opcional | Interfaz agentic avanzada. | Curva de aprendizaje. | HIPOTESIS TECNICA A VALIDAR |
| Dashboard tecnico | Control. | No apto para usuarias no tecnicas. | NO DECIDIR TODAVIA |

## 8. Diseno candidato / hipotesis preferente

Hipotesis preferente: manual operativo corto, training guiado de Drive Desktop, comandos conversacionales por WhatsApp/email, aprobacion de campanas por enlace/resumen, y soporte con resumenes de incidencias.

## 9. Inputs y outputs probables

- Inputs: dudas de usuarias, solicitudes de analisis, aprobaciones, reportes de fallo.
- Outputs: manual, checklist, briefing, escalado soporte, cambios de configuracion.
- Eventos: `operator.training_completed`, `support.issue_opened`, `campaign.approved`, `manual.updated`.

## 10. Entidades de datos candidatas

- `training_session`: tema, participantes, fecha, evidencia.
- `support_ticket`: issue, severity, status, owner.
- `operator_command`: phrase, channel, result, help_needed.
- `runbook_entry`: symptom, diagnosis, action, escalation.

## 11. Integraciones externas relevantes

- Drive Desktop: auth Google; limites streaming/shared drives; riesgo confusion; alternativa navegador.
- WhatsApp/email: auth canal; limite plantillas/threads; riesgo mensajes ambiguos; alternativa Hermes Desktop.
- Soporte interno: herramienta pendiente; riesgo sin ownership; alternativa email soporte.

## 12. Skills / tools / subagentes candidatos

- `ops_send_daily_briefing`
- `ops_explain_last_action`
- `ops_open_support_ticket`
- `ops_update_manual`
- `campaign_request_human_approval`
- `human_escalate_case`

## 13. Seguridad, permisos y limites

- Training debe explicar que puede y no puede hacer la IA.
- No pedir contrasenas por WhatsApp/email.
- Aprobaciones sensibles deben registrar identidad del aprobador.
- Manual no debe exponer secretos ni endpoints internos.

## 14. Riesgos tecnicos

| Riesgo | Impacto | Probabilidad | Mitigacion | Estatus |
| --- | --- | --- | --- | --- |
| Baja adopcion | Alto | Media | Training practico y superficies conocidas. | PENDIENTE DE VALIDACION TECNICA |
| Usuarias no entienden escalados | Medio | Media | Mensajes claros y runbooks. | HIPOTESIS TECNICA A VALIDAR |
| Dependencia del proveedor tecnico | Medio | Media | Manual y soporte estructurado. | HIPOTESIS TECNICA A VALIDAR |
| Aprobaciones ambiguas | Alto | Media | Confirmaciones explicitas y logs. | DECISION CTO PROVISIONAL FUERTE |

## 15. Prueba minima / PoC recomendada

- Fixture: sesion de 60-90 min, 5 tareas reales, 3 fallos simulados, 1 aprobacion campana.
- Pasos: encontrar carpeta, pedir analisis, revisar output, aprobar draft, reportar fallo.
- Criterio de exito: usuarias completan sin terminal y entienden escalado.
- Criterio de fallo: requieren soporte tecnico para acciones normales.

## 16. Preguntas abiertas

- CTO: ¿Hermes Desktop entra en primer despliegue o queda opcional?
- DClick: ¿nivel real de Google Workspace/Drive?
- Documentacion tecnica: ¿canal de soporte y logs visibles?
- Legal/RGPD: ¿manual de tratamiento de datos y seguridad para usuarias?
- Comerciales: no cerrar plan de soporte/precio.

## 17. Recomendacion para Stage 00/01/02/03

- Stage 00: capturar bajo perfil tecnico como restriccion central.
- Stage 01: auditar dolores de adopcion y soporte.
- Stage 02: incluir training/manual si hay cambio operativo.
- Stage 03: disenar superficies humanas y runbooks, no solo arquitectura tecnica.

## 18. Source Map

| ID | Fuente | Tipo | Que aporta | Confianza |
| --- | --- | --- | --- | --- |
| SRC-OPS-001 | `raw/divi-dclick_contexto_arquitectura_para_spec_driving.md` | contexto interno | Vivi/Maria, Windows, Drive Desktop. | media |
| SRC-OPS-002 | `03_google_workspace_drive_mirror_research.md` | research interno | Drive Desktop y permisos. | media |
| SRC-OPS-003 | https://support.google.com/drive/answer/10838124 | docs oficiales | Drive for desktop. | alta |
| SRC-OPS-004 | `11_campaigns_broadcasts_and_newsletters_research.md` | research interno | Aprobacion campanas. | media |
| SRC-OPS-005 | `12_security_rgpd_audit_logs_research.md` | research interno | Seguridad y limites. | media |

