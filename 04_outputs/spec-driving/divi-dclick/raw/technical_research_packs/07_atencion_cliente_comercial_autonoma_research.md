# Atencion Cliente / Comercial Autonoma - Technical Research Pack

## 1. Proposito del research pack

Investiga la atencion entrante autonoma por email/WhatsApp, clasificacion de remitente, RAG, CRM y escalado humano por riesgo.

## 2. Resumen tecnico del modulo

Es uno de los dolores centrales: responder dudas de clientes/leads sin que Vivi y Maria tengan que revisar manualmente todo. Debe separar autonomia segura de casos que requieren decision humana.

## 3. Estatus de decisiones relacionadas

| Decision / hipotesis | Estatus | Evidencia | Implicacion |
| --- | --- | --- | --- |
| Atencion autonoma por defecto | REQUISITO DURO | Policy y CTO. | El diseno no puede ser solo borradores siempre. |
| Escalado por riesgo | REQUISITO DURO | CTO y RGPD/riesgo operativo. | Necesita taxonomia y test set. |
| RAG para respuestas | HIPOTESIS TECNICA A VALIDAR | Knowledge pack. | Responder solo con fuentes o escalar. |
| CRM sync | DECISION CTO PROVISIONAL FUERTE | CTO y CRM adapter. | Registrar conversaciones y estados. |

## 4. Fuentes revisadas

- Contexto CTO y policy.
- Hermes docs: gateway, email, WhatsApp Cloud, tools, security.
- Google Gmail research.
- Kapso/WhatsApp research.
- Knowledge/RAG and CRM research.
- AEPD principles and AI/RGPD docs.

## 5. Capacidades confirmadas por documentacion

- Hermes puede recibir mensajes por gateway/canales y tiene tools/skills.
- Email por Gmail API o Hermes email permite hilos, adjuntos y respuestas.
- WhatsApp Cloud/Kapso permite mensajes entrantes y respuestas con webhooks.
- CRM APIs permiten lookup/upsert/log si se implementa adapter.
- RAG puede aportar fuentes si se construye el indice derivado.

## 6. Capacidades no confirmadas o dudosas

- PENDIENTE DE VALIDACION TECNICA: precision de clasificacion lead/cliente/expediente.
- PENDIENTE DE VALIDACION TECNICA: que consultas son low-risk en la practica.
- PENDIENTE DE VALIDACION LEGAL/RGPD: respuestas automaticas sobre subvenciones y datos de expedientes.
- PENDIENTE DE VALIDACION TECNICA: integracion Hermes + canales + CRM + RAG en tiempo real.

## 7. Opciones tecnicas identificadas

| Opcion | Ventaja | Riesgo | Estatus |
| --- | --- | --- | --- |
| Auto-respuesta low-risk | Reduce carga real. | Error reputacional/legal. | REQUISITO DURO con controles |
| Borrador para todo | Seguro. | No resuelve dolor principal. | NO DECIDIR TODAVIA |
| Escalado por taxonomia | Equilibrio. | Requiere evals. | DECISION CTO PROVISIONAL FUERTE |

## 8. Diseno candidato / hipotesis preferente

Hipotesis preferente: Hermes clasifica mensaje, consulta CRM/RAG, calcula riesgo, responde automaticamente solo si el caso es claro y con fuente, o escala con resumen y propuesta de respuesta.

## 9. Inputs y outputs probables

- Inputs: mensaje, canal, remitente, thread, adjuntos, CRM context, documentos RAG.
- Outputs: respuesta enviada, borrador, escalado, CRM note, task, log.
- Eventos: `message.received`, `sender.classified`, `reply.sent`, `human.escalation.created`, `crm.note.created`.

## 10. Entidades de datos candidatas

- `conversation`: canal, external_id, contact_id, risk_level, status.
- `reply_decision`: action, reason, sources, confidence.
- `escalation_case`: owner, summary, deadline, recommended_reply.
- `customer_intent`: type, subsidy_ref, urgency, missing_data.

## 11. Integraciones externas relevantes

- Hermes gateway: uso orquestacion; riesgo permisos; alternativa workers.
- Gmail API: hilos/email; scopes restricted; riesgo compliance; alternativa IMAP/Hermes email.
- Kapso/WhatsApp Cloud: canal WhatsApp; auth API key/webhook; limites templates/opt-in; alternativa Cloud API directa.
- CRM: contacto/estado; auth API; riesgo lock-in; alternativa spreadsheet controlado.
- RAG: fuentes; riesgo alucinacion; alternativa escalado.

## 12. Skills / tools / subagentes candidatos

- `customer_classify_sender`
- `customer_classify_intent`
- `rag_search_customer_answer`
- `crm_lookup_contact`
- `crm_log_conversation`
- `email_reply_thread`
- `whatsapp_send_reply`
- `human_escalate_case`

## 13. Seguridad, permisos y limites

- Riesgo bajo: acuses, informacion general con fuentes, pedir datos faltantes.
- Riesgo medio: responder con cuidado o pedir confirmacion segun politica.
- Riesgo alto: plazos criticos, elegibilidad dudosa, quejas, datos personales sensibles, compromiso economico o legal.
- Nunca usar datos de otro cliente en una respuesta.

## 14. Riesgos tecnicos

| Riesgo | Impacto | Probabilidad | Mitigacion | Estatus |
| --- | --- | --- | --- | --- |
| Respuesta automatica incorrecta | Alto | Media | Taxonomia, evals, fuentes y escalado. | PENDIENTE DE VALIDACION TECNICA |
| Mezcla de datos entre clientes | Alto | Baja-media | Scoping por contacto/expediente y tests. | PENDIENTE DE VALIDACION TECNICA |
| Canal externo accede a tools peligrosas | Alto | Media | Toolsets minimos. | DECISION CTO PROVISIONAL FUERTE |
| Mala clasificacion de lead/cliente | Medio | Media | CRM lookup + fallback preguntas. | HIPOTESIS TECNICA A VALIDAR |

## 15. Prueba minima / PoC recomendada

- Fixture: 30 emails/WhatsApps sinteticos y reales anonimizados: lead, cliente, expediente, spam, queja.
- Pasos: clasificar, buscar fuentes, decidir auto/borrador/escalado, registrar CRM.
- Criterio de exito: precision alta en riesgo alto, cero envio automatico inseguro.
- Criterio de fallo: envio sin fuente, fuga de datos, no escalado de riesgo alto.

## 16. Preguntas abiertas

- CTO: ¿quien define taxonomia final de riesgo?
- DClick: ¿que respuestas pueden ser automaticas desde dia 1?
- Documentacion tecnica: ¿CRM/knowledge disponibles antes de atencion autonoma?
- Legal/RGPD: ¿base legal, informacion al cliente y retencion?
- Comerciales: no prometer autonomia total sin piloto.

## 17. Recomendacion para Stage 00/01/02/03

- Stage 00: registrar atencion autonoma como requisito duro.
- Stage 01: auditar volumen y tipos de mensajes.
- Stage 02: definir alcance de autonomia inicial.
- Stage 03: especificar taxonomia, toolsets, canal, CRM/RAG y pruebas.

## 18. Source Map

| ID | Fuente | Tipo | Que aporta | Confianza |
| --- | --- | --- | --- | --- |
| SRC-CUS-001 | `raw/divi-dclick_contexto_arquitectura_para_spec_driving.md` | contexto interno | Dolor y flujo de atencion. | media |
| SRC-CUS-002 | https://hermes-agent.nousresearch.com/docs/ | docs oficiales | Gateway/tools/security. | alta |
| SRC-CUS-003 | `09_email_channel_gmail_workspace_research.md` | research interno | Gmail/hilos/labels/push. | media |
| SRC-CUS-004 | `08_whatsapp_kapso_hermes_research.md` | research interno | WhatsApp/Kapso. | media |
| SRC-CUS-005 | https://www.aepd.es/derechos-y-deberes/cumple-tus-deberes/principios | docs oficiales | Minimización y principios RGPD. | alta |

