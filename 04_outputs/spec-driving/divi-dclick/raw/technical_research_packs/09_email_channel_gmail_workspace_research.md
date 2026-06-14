# Email / Gmail / Workspace - Technical Research Pack

## 1. Proposito del research pack

Investiga email como canal principal de atencion cliente/comercial, usando Google Workspace/Gmail o Hermes email, con hilos, adjuntos, labels, seguridad y logs.

## 2. Resumen tecnico del modulo

Email es canal critico de clientes y leads. Debe permitir recepcion, clasificacion, respuesta o borrador, registro CRM y escalado humano.

## 3. Estatus de decisiones relacionadas

| Decision / hipotesis | Estatus | Evidencia | Implicacion |
| --- | --- | --- | --- |
| Email como canal principal | REQUISITO DURO | CTO y operativa DClick. | Debe entrar en Stage 00/01. |
| Cuenta dedicada IA | HIPOTESIS TECNICA A VALIDAR | Gmail API permite mailbox autorizado; falta decidir cuenta/alias. | Evita acceso total al historico. |
| Gmail API preferente | HIPOTESIS TECNICA A VALIDAR | Gmail API ofrece labels, threads, push, drafts. | Validar scopes restringidos y Pub/Sub. |
| Respuestas automaticas por riesgo | REQUISITO DURO | Policy atencion autonoma. | Requiere evals y logs. |

## 4. Fuentes revisadas

- Contexto CTO y policy.
- Gmail API overview, sending, labels, threads, push, sync, scopes, quotas.
- Google support sender guidelines and policies.
- Hermes email docs via subagente.

## 5. Capacidades confirmadas por documentacion

- Gmail API es REST para acceder a buzones y enviar correo con autorizacion.
- `messages.send`/`drafts.send` permiten enviar o preparar borradores.
- `threads`, `labels`, busquedas `q` y `labelIds` permiten routing y contexto.
- Gmail push usa Cloud Pub/Sub, `watch`, `historyId` y requiere renovacion periodica.
- Si el historial caduca o falla, hay que hacer full sync.
- Scopes como `gmail.modify`/`gmail.readonly` son restricted; `gmail.send` es sensitive.

## 6. Capacidades no confirmadas o dudosas

- PENDIENTE DE VALIDACION TECNICA: cuenta dedicada `ia@` vs alias/cuenta existente.
- PENDIENTE DE VALIDACION TECNICA: OAuth usuario vs service account/domain-wide delegation.
- PENDIENTE DE VALIDACION TECNICA: configuracion Pub/Sub y domain restricted sharing.
- PENDIENTE DE VALIDACION TECNICA: SPF/DKIM/DMARC del dominio DClick.
- PENDIENTE DE VALIDACION TECNICA: Gmail para campanas pequeñas vs herramienta externa.

## 7. Opciones tecnicas identificadas

| Opcion | Ventaja | Riesgo | Estatus |
| --- | --- | --- | --- |
| Gmail API | Hilos, labels, push, drafts, trazabilidad. | Scopes restricted y Pub/Sub. | HIPOTESIS TECNICA A VALIDAR |
| Hermes email IMAP/SMTP | Integrado con Hermes. | Polling y menos control Gmail-native. | OPCION ABIERTA |
| IMAP/SMTP propio | Simple. | Menos metadata y push. | OPCION ABIERTA |
| Herramienta email marketing | Mejor campanas. | Otro proveedor. | OPCION ABIERTA |

## 8. Diseno candidato / hipotesis preferente

Hipotesis preferente: cuenta dedicada `ia@dclick...`, Gmail API para hilos/labels/drafts, worker de riesgo, Hermes para razonamiento y CRM adapter para memoria. Usar Gmail API push si la configuracion Workspace lo permite; fallback polling.

## 9. Inputs y outputs probables

- Inputs: mensaje, thread, attachments, labels, contact lookup.
- Outputs: reply, draft, label, CRM note, escalation.
- Eventos: `email.message.received`, `email.thread.classified`, `email.draft.created`, `email.reply.sent`.

## 10. Entidades de datos candidatas

- `email_thread`: `thread_id`, `contact_id`, `status`, `last_history_id`.
- `email_message`: `message_id`, `from`, `subject`, `attachments`, `risk_level`.
- `email_decision`: `auto_sent`, `drafted`, `escalated`, `sources`.

## 11. Integraciones externas relevantes

- Gmail API: auth OAuth/scopes; limites cuotas/destinatarios; riesgo restricted scopes; alternativa IMAP.
- Cloud Pub/Sub: auth Google Cloud; limite configuracion; riesgo eventos perdidos; alternativa polling.
- Hermes email: auth IMAP/SMTP; limite polling/toolsets; alternativa Gmail API.
- CRM: auth API; registra contacto/conversacion; alternativa log interno.

## 12. Skills / tools / subagentes candidatos

- `email_fetch_thread`
- `email_classify_message`
- `email_reply_thread`
- `email_create_draft`
- `email_apply_label`
- `email_sync_to_crm`

## 13. Seguridad, permisos y limites

- No dar acceso irrestricto a todo el historico si basta cuenta dedicada.
- Etiquetas para `needs_human`, `processed`, `blocked`, `campaign_opt_out`.
- No enviar respuestas high-risk sin revision.
- Sanitizar adjuntos y limitar que documentos pasan al LLM.

## 14. Riesgos tecnicos

| Riesgo | Impacto | Probabilidad | Mitigacion | Estatus |
| --- | --- | --- | --- | --- |
| Scope restricted exige assessment | Alto | Media | Scopes minimos y decision legal/Google. | PENDIENTE DE VALIDACION TECNICA |
| Perdida de eventos push/history | Medio | Media | Full sync y polling fallback. | HIPOTESIS TECNICA A VALIDAR |
| Mala entregabilidad | Alto | Media | SPF/DKIM/DMARC, no spam, bajas. | PENDIENTE DE VALIDACION TECNICA |
| Respuesta a hilo equivocado | Alto | Baja-media | ThreadId, tests y CRM match. | PENDIENTE DE VALIDACION TECNICA |

## 15. Prueba minima / PoC recomendada

- Fixture: cuenta sandbox, 20 emails, labels, 3 adjuntos.
- Pasos: full sync, watch/poll, clasificar, crear draft, enviar reply, registrar CRM.
- Criterio de exito: hilos correctos, labels correctos, escalado high-risk, logs completos.
- Criterio de fallo: reply fuera de hilo, evento perdido sin recovery, envio inseguro.

## 16. Preguntas abiertas

- CTO: ¿Gmail API o Hermes email para primera PoC?
- DClick: ¿direccion dedicada y reglas de redireccion?
- Documentacion tecnica: ¿scopes y Pub/Sub disponibles?
- Legal/RGPD: ¿consentimiento, retencion y tratamiento de adjuntos?
- Comerciales: no decidir envio masivo desde Gmail sin politica.

## 17. Recomendacion para Stage 00/01/02/03

- Stage 00: absorber email como canal prioritario.
- Stage 01: auditar volumen/tipos de correos.
- Stage 02: decidir autonomia inicial y cuenta dedicada.
- Stage 03: especificar API, labels, sync, risk gates y CRM.

## 18. Source Map

| ID | Fuente | Tipo | Que aporta | Confianza |
| --- | --- | --- | --- | --- |
| SRC-EMAIL-001 | `raw/divi-dclick_contexto_arquitectura_para_spec_driving.md` | contexto interno | Email como canal. | media |
| SRC-EMAIL-002 | https://developers.google.com/workspace/gmail/api/guides | docs oficiales | Gmail API overview. | alta |
| SRC-EMAIL-003 | https://developers.google.com/workspace/gmail/api/guides/sending | docs oficiales | Envio/drafts MIME. | alta |
| SRC-EMAIL-004 | https://developers.google.com/workspace/gmail/api/guides/push | docs oficiales | Push/PubSub/historyId. | alta |
| SRC-EMAIL-005 | https://developers.google.com/workspace/gmail/api/auth/scopes | docs oficiales | Scopes sensitive/restricted. | alta |
| SRC-EMAIL-006 | https://support.google.com/mail/answer/81126 | docs oficiales | Requisitos remitente/entregabilidad. | alta |

