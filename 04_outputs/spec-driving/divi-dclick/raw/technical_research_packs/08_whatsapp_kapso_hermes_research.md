# WhatsApp / Kapso / Hermes - Technical Research Pack

## 1. Proposito del research pack

Investiga Kapso como via preferente para conectar WhatsApp con Hermes y compara brevemente con WhatsApp Cloud API directa y Baileys/Hermes nativo.

## 2. Resumen tecnico del modulo

WhatsApp es superficie conversacional clave para Vivi/Maria y potencialmente clientes/leads. Debe operar con numero dedicado, webhooks firmados, allowlists y controles de riesgo.

## 3. Estatus de decisiones relacionadas

| Decision / hipotesis | Estatus | Evidencia | Implicacion |
| --- | --- | --- | --- |
| Kapso + Hermes para WhatsApp | HIPOTESIS TECNICA A VALIDAR | Kapso docs/plugin confirman integracion; requiere PoC. | No prometer sin validar numero/costes/estabilidad. |
| WhatsApp oficial frente a Baileys | DECISION CTO PROVISIONAL FUERTE | Hermes docs advierten Baileys/WhatsApp Web tiene riesgo de ban; Cloud API oficial es via estable. | Preferir via oficial/productiva. |
| Numero dedicado | HIPOTESIS TECNICA A VALIDAR | Kapso/Meta requieren numero conectado. | DClick debe decidir numero y WABA. |
| Broadcasts con aprobacion humana | DECISION CTO PROVISIONAL FUERTE | Kapso Broadcasts + politica interna. | No envio masivo autonomo. |

## 4. Fuentes revisadas

- Contexto CTO y policy.
- Kapso docs: https://docs.kapso.ai/docs/introduction
- Kapso Hermes page: https://kapso.com/whatsapp-hermes-agent
- Repos: https://github.com/gokapso/hermes-agent-plugin, `agent-skills`, `whatsapp-support-agent`, `whatsapp-broadcasts-example`, `whatsapp-cloud-api-js`
- Hermes WhatsApp docs.
- Meta WhatsApp Business docs/snippets oficiales localizados por busqueda.

## 5. Capacidades confirmadas por documentacion

- Kapso Hermes plugin recibe webhooks Kapso y convierte mensajes entrantes en eventos Hermes.
- Plugin permite enviar respuestas por Kapso/WhatsApp Cloud API proxy.
- Requisitos: Hermes gateway, `KAPSO_API_KEY`, numero WhatsApp conectado, URL publica HTTPS, webhook y secreto.
- Kapso menciona allowlist, media, imagenes y voice notes, healthchecks y cache de adjuntos.
- `whatsapp-cloud-api-js` soporta envio de texto/media/templates, contactos, conversaciones y proxy Kapso.
- Broadcasts API permite draft, destinatarios, send/schedule y metricas.
- Hermes nativo por Baileys existe, pero se basa en WhatsApp Web y tiene riesgo de restricciones; Cloud API es camino oficial.

## 6. Capacidades no confirmadas o dudosas

- PENDIENTE DE VALIDACION TECNICA: coste real Kapso + Meta para Espana/Canarias.
- PENDIENTE DE VALIDACION TECNICA: numero nuevo vs existente vs Kapso-managed.
- PENDIENTE DE VALIDACION TECNICA: madurez del plugin para produccion 24/7.
- PENDIENTE DE VALIDACION TECNICA: soporte completo de templates, notas de voz, adjuntos y errores en el caso DClick.
- PENDIENTE DE VALIDACION TECNICA: `agent-skills` esta marcado alpha segun subagente.

## 7. Opciones tecnicas identificadas

| Opcion | Ventaja | Riesgo | Estatus |
| --- | --- | --- | --- |
| Kapso + Hermes plugin | Integracion rapida con Hermes y WhatsApp oficial. | Dependencia externa/coste/API drift. | HIPOTESIS TECNICA A VALIDAR |
| WhatsApp Cloud API directa | Menos intermediarios. | Mas desarrollo propio de webhooks/media/templates. | OPCION ABIERTA |
| Hermes Baileys | Setup rapido sin Meta Business. | Riesgo ban, no ideal produccion. | NO DECIDIR TODAVIA |
| GoHighLevel WhatsApp | Suite comercial. | Lock-in y solape con Kapso/Hermes. | OPCION ABIERTA |

## 8. Diseno candidato / hipotesis preferente

Hipotesis preferente: Kapso como transporte WhatsApp oficial, Hermes como runtime, workers propios para CRM/RAG/escalado y allowlist estricta en canales internos. Para clientes externos, toolset restringido.

## 9. Inputs y outputs probables

- Inputs: webhook WhatsApp, texto, imagen, audio, PDF, status.
- Outputs: respuesta WhatsApp, escalado, CRM log, campaign metric.
- Eventos: `whatsapp.message.received`, `whatsapp.reply.sent`, `whatsapp.media.cached`, `whatsapp.broadcast.approval_requested`.

## 10. Entidades de datos candidatas

- `whatsapp_contact`: phone, opt_in_status, crm_contact_id, allowed_user.
- `whatsapp_message`: provider_id, conversation_id, type, media_ref, status.
- `broadcast_job`: template, recipients, approval_status, metrics.

## 11. Integraciones externas relevantes

- Kapso: URL https://docs.kapso.ai/; auth API key + webhook secret; limites/costes PENDIENTE; riesgo vendor; alternativa Cloud API directa.
- Hermes plugin: URL GitHub; auth env vars; limites version/plugin; riesgo permisos; alternativa plugin propio.
- Meta WhatsApp Cloud API: auth token/WABA; limites 24h/templates; riesgo verificacion/costes; alternativa Kapso proxy.

## 12. Skills / tools / subagentes candidatos

- `whatsapp_send_reply`
- `whatsapp_download_media`
- `whatsapp_check_allowed_user`
- `whatsapp_prepare_template_message`
- `campaign_prepare_new_subsidy_broadcast`
- `human_approve_whatsapp_broadcast`

## 13. Seguridad, permisos y limites

- Numero dedicado recomendado.
- Verificar firma de webhook y usar idempotency keys.
- Allowlists para canales internos; no exponer tools administrativas a clientes.
- Broadcasts solo con opt-in, templates aprobados y aprobacion humana.
- Escalar consultas juridicas/comerciales sensibles.

## 14. Riesgos tecnicos

| Riesgo | Impacto | Probabilidad | Mitigacion | Estatus |
| --- | --- | --- | --- | --- |
| Coste/viabilidad Kapso no cuadra | Alto | Media | PoC y decision comercial/tecnica. | PENDIENTE DE VALIDACION TECNICA |
| Numero WhatsApp bloqueado/reputacion baja | Alto | Media | Opt-in, templates, limites, no spam. | PENDIENTE DE VALIDACION TECNICA |
| Webhook publico inseguro | Alto | Media | Firma, HTTPS, secret, idempotencia. | DECISION CTO PROVISIONAL FUERTE |
| Drift de plugin/API | Medio | Media | Version pinning y tests. | HIPOTESIS TECNICA A VALIDAR |

## 15. Prueba minima / PoC recomendada

- Fixture: numero sandbox/production controlado, 5 contactos internos, mensajes texto/media/audio/PDF.
- Pasos: instalar plugin, configurar env vars, webhook HTTPS, allowlist, enviar/recibir, log y healthcheck.
- Criterio de exito: mensajes llegan a Hermes, media se procesa, respuesta sale, logs y firmas validan.
- Criterio de fallo: webhook sin firma, mensajes perdidos, toolset peligroso, coste inviable.

## 16. Preguntas abiertas

- CTO: ¿Kapso o Cloud API directa si PoC falla?
- DClick: ¿numero nuevo o existente?
- Documentacion tecnica: ¿versiones exactas plugin/Kapso/Hermes?
- Legal/RGPD: ¿opt-in, bajas, retencion de conversaciones y media?
- Comerciales: no decidir coste/precio en este pack.

## 17. Recomendacion para Stage 00/01/02/03

- Stage 00: absorber Kapso como hipotesis, no decision final.
- Stage 01: auditar dolor de WhatsApp/atencion.
- Stage 02: decidir si WhatsApp entra en alcance base o PoC previa.
- Stage 03: si entra, especificar proveedor, numero, webhooks, seguridad y limites.

## 18. Source Map

| ID | Fuente | Tipo | Que aporta | Confianza |
| --- | --- | --- | --- | --- |
| SRC-WA-001 | `raw/divi-dclick_contexto_arquitectura_para_spec_driving.md` | contexto interno | Kapso preferente, canales. | media |
| SRC-WA-002 | https://kapso.com/whatsapp-hermes-agent | docs/proveedor | Plugin Hermes, webhook, media, env vars. | alta |
| SRC-WA-003 | https://github.com/gokapso/hermes-agent-plugin | repo oficial | Implementacion plugin. | alta |
| SRC-WA-004 | https://github.com/gokapso/whatsapp-cloud-api-js | repo oficial | Cliente Cloud API/Kapso proxy. | alta |
| SRC-WA-005 | https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/messaging/whatsapp.md | repo oficial | Baileys vs Cloud API y riesgo. | alta |

