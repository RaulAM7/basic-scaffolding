# Campaigns / Broadcasts / Newsletters - Technical Research Pack

## 1. Proposito del research pack

Investiga como preparar campanas sobre nuevas subvenciones, newsletters y broadcasts por email/WhatsApp con segmentacion, aprobacion humana, bajas, logs y metricas.

## 2. Resumen tecnico del modulo

Este modulo convierte el radar BDNS y el CRM en comunicacion proactiva. El valor es preparar mensajes rapidamente, pero el envio masivo es sensible y debe aprobarse manualmente.

## 3. Estatus de decisiones relacionadas

| Decision / hipotesis | Estatus | Evidencia | Implicacion |
| --- | --- | --- | --- |
| Campanas con aprobacion humana | DECISION CTO PROVISIONAL FUERTE | Policy y CTO ADR-011. | No envio masivo autonomo. |
| WhatsApp broadcasts via Kapso | HIPOTESIS TECNICA A VALIDAR | Kapso Broadcasts API y ejemplo. | Validar templates, numero production, opt-in. |
| Email newsletters desde Gmail | HIPOTESIS TECNICA A VALIDAR | Gmail permite envio, pero tiene politicas/limites. | Puede ser limitado o requerir herramienta externa. |
| Segmentacion por CRM | HIPOTESIS TECNICA A VALIDAR | CRM adapter puede tags/intereses. | Requiere datos limpios y consentimiento. |

## 4. Fuentes revisadas

- Contexto CTO y policy.
- Kapso Broadcasts API: https://docs.kapso.ai/docs/platform/broadcasts-api
- Kapso broadcasts example: https://github.com/gokapso/whatsapp-broadcasts-example
- Gmail sender guidelines: https://support.google.com/mail/answer/81126
- Gmail program policies: https://support.google.com/mail/answer/16734397
- Gmail API quotas: https://developers.google.com/workspace/gmail/api/reference/quota

## 5. Capacidades confirmadas por documentacion

- Kapso Broadcasts API permite crear campanas draft, anadir destinatarios, enviar/programar y consultar metricas.
- Broadcasts requieren numero production y templates aprobados; sandbox tiene limitaciones.
- Gmail API permite enviar mensajes y crear drafts, pero las politicas de Google restringen spam y exigen buenas practicas de remitente.
- Gmail documenta limites de destinatarios y requisitos SPF/DKIM/DMARC/DMARC para remitentes masivos.

## 6. Capacidades no confirmadas o dudosas

- PENDIENTE DE VALIDACION TECNICA: coste y limites reales Kapso/Meta para DClick.
- PENDIENTE DE VALIDACION LEGAL/RGPD: opt-in, base legal y bajas para contactos actuales.
- PENDIENTE DE VALIDACION TECNICA: si Gmail es adecuado para newsletters recurrentes o solo comunicaciones puntuales.
- PENDIENTE DE VALIDACION TECNICA: estados `pending_approval`/`approved` deben implementarse internamente, no asumirlos nativos.

## 7. Opciones tecnicas identificadas

| Opcion | Ventaja | Riesgo | Estatus |
| --- | --- | --- | --- |
| Kapso broadcasts | WhatsApp templates, metricas, API. | Opt-in, coste, reputacion. | HIPOTESIS TECNICA A VALIDAR |
| Gmail drafts + aprobacion | Integrado en Workspace. | Limites y reputacion. | HIPOTESIS TECNICA A VALIDAR |
| Herramienta email marketing | Mejor unsubscribe/deliverability. | Otro proveedor. | OPCION ABIERTA |
| GoHighLevel campaigns | Suite integrada. | Lock-in y solape. | OPCION ABIERTA |

## 8. Diseno candidato / hipotesis preferente

Hipotesis preferente: la IA prepara campana y segmento; un `safe_sender` crea draft/preview, registra aprobacion humana y solo entonces envia por canal elegido. WhatsApp requiere templates/opt-in; email requiere bajas y reputacion.

## 9. Inputs y outputs probables

- Inputs: nueva subvencion, segmento CRM, opt-in, template, copy, canal.
- Outputs: draft, approval request, send job, metrics, CRM notes.
- Eventos: `campaign.draft_created`, `campaign.approval_requested`, `campaign.sent`, `campaign.metrics_updated`.

## 10. Entidades de datos candidatas

- `campaign`: subsidy_id, audience, channel, approval_status, template_id.
- `campaign_recipient`: contact_id, opt_in_status, send_status, metrics.
- `campaign_metric`: sent, delivered, read/open, failed, replied, unsubscribed.

## 11. Integraciones externas relevantes

- Kapso Broadcasts: auth API key; limites production/templates; riesgo opt-in/coste; alternativa Cloud API directa.
- Gmail API: auth OAuth/scopes; limites cuotas; riesgo reputacion; alternativa email marketing.
- CRM: segmento/contactos; auth API; riesgo datos desactualizados; alternativa CSV revisado.

## 12. Skills / tools / subagentes candidatos

- `campaign_prepare_new_subsidy_broadcast`
- `campaign_segment_contacts`
- `campaign_create_email_draft`
- `campaign_create_whatsapp_draft`
- `human_approve_campaign`
- `campaign_collect_metrics`

## 13. Seguridad, permisos y limites

- Aprobacion humana obligatoria para envio masivo.
- Opt-in/opt-out registrado antes de enviar.
- No enviar a contactos con consentimiento dudoso.
- Mensajes sobre subvenciones deben evitar promesas de elegibilidad.
- Registrar template, audiencia, aprobador y fecha.

## 14. Riesgos tecnicos

| Riesgo | Impacto | Probabilidad | Mitigacion | Estatus |
| --- | --- | --- | --- | --- |
| Envio a audiencia sin consentimiento | Alto | Media | Opt-in CRM y aprobacion. | PENDIENTE DE VALIDACION LEGAL/RGPD |
| Bloqueo/reputacion WhatsApp/email | Alto | Media | Templates, bajas, volumen gradual. | PENDIENTE DE VALIDACION TECNICA |
| Segmentacion incorrecta | Medio | Media | Preview humano y test segment. | HIPOTESIS TECNICA A VALIDAR |
| Metricas fragmentadas | Medio | Media | Normalizar metrics por canal. | HIPOTESIS TECNICA A VALIDAR |

## 15. Prueba minima / PoC recomendada

- Fixture: 1 subvencion, 10 contactos internos, 2 segmentos, 1 template WhatsApp, 1 email.
- Pasos: preparar copy, crear draft, aprobar, enviar a lista interna, recoger metricas.
- Criterio de exito: no envia sin aprobacion, respeta opt-in y registra metricas.
- Criterio de fallo: envio sin aprobacion, contacto no consentido, falta de logs.

## 16. Preguntas abiertas

- CTO: ¿safe_sender propio o proveedor campanas?
- DClick: ¿existe base de contactos con opt-in?
- Documentacion tecnica: ¿templates Meta aprobables y estados Kapso?
- Legal/RGPD: ¿base legal para comunicaciones comerciales?
- Comerciales: no fijar frecuencia, oferta ni precio.

## 17. Recomendacion para Stage 00/01/02/03

- Stage 00: registrar campanas como modulo sensible.
- Stage 01: auditar dolor y riesgo de newsletters actuales.
- Stage 02: decidir si entra preparacion de campanas o envio real.
- Stage 03: especificar aprobacion, opt-in, safe sender y metricas.

## 18. Source Map

| ID | Fuente | Tipo | Que aporta | Confianza |
| --- | --- | --- | --- | --- |
| SRC-CAM-001 | `raw/divi-dclick_contexto_arquitectura_para_spec_driving.md` | contexto interno | Campanas con aprobacion humana. | media |
| SRC-CAM-002 | https://docs.kapso.ai/docs/platform/broadcasts-api | docs oficiales | Broadcasts API y metricas. | alta |
| SRC-CAM-003 | https://github.com/gokapso/whatsapp-broadcasts-example | repo oficial | Ejemplo operativo de broadcasts. | media |
| SRC-CAM-004 | https://support.google.com/mail/answer/81126 | docs oficiales | Requisitos de remitente. | alta |
| SRC-CAM-005 | https://support.google.com/mail/answer/16734397 | docs oficiales | Politicas anti-spam Gmail. | alta |

