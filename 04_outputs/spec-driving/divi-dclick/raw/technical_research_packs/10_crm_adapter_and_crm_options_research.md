# CRM Adapter and CRM Options - Technical Research Pack

## 1. Proposito del research pack

Investiga el contrato `crm_adapter` y compara Twenty, Baserow, NocoDB y GoHighLevel para contactos, oportunidades, tareas, notas, campanas, workflows y sync desde Hermes.

## 2. Resumen tecnico del modulo

El CRM es memoria comercial, no cerebro. Debe guardar contactos, oportunidades, conversaciones, tareas y notas, y permitir a Vivi/Maria una superficie visual manejable.

## 3. Estatus de decisiones relacionadas

| Decision / hipotesis | Estatus | Evidencia | Implicacion |
| --- | --- | --- | --- |
| CRM no es core agentic | DECISION CTO PROVISIONAL FUERTE | CTO ADR-013. | Hermes/workers orquestan; CRM almacena. |
| `crm_adapter` agnostico | DECISION CTO PROVISIONAL FUERTE | CTO ADR-014 y comparativa. | Evita lock-in. |
| CRM concreto | OPCION ABIERTA | Twenty/Baserow/NocoDB/GHL son viables con trade-offs. | Stage 02/03 no debe cerrar sin prueba de adopcion/API. |
| Twenty preferente tecnico | HIPOTESIS TECNICA A VALIDAR | CRM real, self-host, REST/GraphQL, webhooks. | Validar UX con usuarias. |

## 4. Fuentes revisadas

- Contexto CTO y policy.
- Twenty: https://twenty.com/ y https://docs.twenty.com/
- Baserow: https://baserow.io/user-docs/
- NocoDB: https://nocodb.com/docs/
- GoHighLevel support/API: https://help.gohighlevel.com/support/solutions y https://marketplace.gohighlevel.com/docs/

## 5. Capacidades confirmadas por documentacion

- Twenty ofrece objetos CRM como People, Companies, Opportunities, Tasks, Notes, dashboards/workflows y API REST/GraphQL generada por schema; puede ser cloud o self-host.
- Baserow ofrece cloud/self-host, tablas, vistas, automation builder, webhooks/API y permisos.
- NocoDB ofrece bases/tablas, vistas, webhooks, REST APIs, roles y varias integraciones; no es CRM nativo.
- GoHighLevel tiene contacts, conversations, opportunities, pipelines, tasks, notes, campaigns, workflows, webhooks y REST API/OAuth/private token segun docs.

## 6. Capacidades no confirmadas o dudosas

- PENDIENTE DE VALIDACION TECNICA: UX real para Vivi/Maria.
- PENDIENTE DE VALIDACION TECNICA: plan/API/costes concretos de GoHighLevel.
- PENDIENTE DE VALIDACION TECNICA: si Baserow/NocoDB soportan sin friccion semantica CRM necesaria.
- PENDIENTE DE VALIDACION TECNICA: campanas dentro de CRM o via safe sender separado.

## 7. Opciones tecnicas identificadas

| Opcion | Ventaja | Riesgo | Estatus |
| --- | --- | --- | --- |
| Twenty | CRM real, open source, self-host, APIs. | Mantenimiento y UX a validar. | HIPOTESIS TECNICA A VALIDAR |
| Baserow | Familiar tipo hoja, flexible. | No CRM nativo, schema drift. | OPCION ABIERTA |
| NocoDB | Self-host/database UI, REST/webhooks. | No CRM nativo, features por edicion. | OPCION ABIERTA |
| GoHighLevel | Suite comercial/campanas/workflows. | Lock-in, SaaS, solapes. | OPCION ABIERTA |

## 8. Diseno candidato / hipotesis preferente

Hipotesis preferente: definir `crm_adapter` minimo y probarlo contra Twenty primero. Mantener Baserow/NocoDB como fallback si UX hoja es prioritaria, y GoHighLevel solo si DClick quiere suite comercial SaaS.

## 9. Inputs y outputs probables

- Inputs: contacto, telefono/email, mensaje, interes en subvencion, lead status, tarea.
- Outputs: contacto upsert, oportunidad, nota, tarea, tag, campaign segment.
- Eventos: `crm.contact.upserted`, `crm.opportunity.created`, `crm.note.added`, `crm.task.created`.

## 10. Entidades de datos candidatas

- `Contact`: nombre, email, telefono, tipo, opt_in, tags.
- `Opportunity`: contacto/company, subvencion, etapa, valor cualitativo, owner.
- `Conversation`: canal, thread, summary, risk.
- `Task`: owner, due_date, priority, linked_entity.
- `CampaignInterest`: contact_id, subsidy_id, status, source.

## 11. Integraciones externas relevantes

- Twenty: auth API key/OAuth; REST/GraphQL; limite 100 req/min segun docs; riesgo mantenimiento; alternativa Baserow/GHL.
- Baserow: token/API/webhooks; riesgo schema drift; alternativa Twenty.
- NocoDB: REST/webhooks; riesgo no CRM y edicion; alternativa Baserow/Twenty.
- GoHighLevel: OAuth/private token, API/webhooks; riesgo lock-in/coste; alternativa Twenty + sender.

## 12. Skills / tools / subagentes candidatos

- `crm_lookup_contact`
- `crm_upsert_contact`
- `crm_create_opportunity`
- `crm_update_pipeline_stage`
- `crm_add_note`
- `crm_create_task`
- `crm_link_subsidy_interest`

## 13. Seguridad, permisos y limites

- API keys con rol minimo.
- No borrar contactos/oportunidades desde IA sin aprobacion.
- Registrar cada cambio de CRM con actor/canal/fuente.
- Bloquear edicion manual de columnas criticas si Baserow/NocoDB.

## 14. Riesgos tecnicos

| Riesgo | Impacto | Probabilidad | Mitigacion | Estatus |
| --- | --- | --- | --- | --- |
| Elegir CRM que usuarias no adoptan | Alto | Media | PoC de adopcion con Vivi/Maria. | PENDIENTE DE VALIDACION TECNICA |
| Lock-in GoHighLevel | Medio-alto | Media | Adapter agnostico y export. | OPCION ABIERTA |
| Schema drift hoja/DB | Medio | Alta | Permisos y migraciones controladas. | HIPOTESIS TECNICA A VALIDAR |
| API limits o plan bloquea | Medio | Media | Probar endpoints reales. | PENDIENTE DE VALIDACION TECNICA |

## 15. Prueba minima / PoC recomendada

- Fixture: 20 contactos, 5 oportunidades, 5 tareas, 5 notas, 3 intereses por subvencion.
- Pasos: implementar adapter mock contra candidato, upsert, lookup, note, task, webhook.
- Criterio de exito: operaciones minimas funcionan y usuarias entienden vistas.
- Criterio de fallo: dependencias de campos fragiles, UX confusa, API insuficiente.

## 16. Preguntas abiertas

- CTO: ¿adapter primero con mock o elegir CRM antes?
- DClick: ¿prefieren CRM real o hoja visual?
- Documentacion tecnica: ¿API y webhooks por plan?
- Legal/RGPD: ¿self-host requerido o SaaS aceptable?
- Comerciales: no cerrar coste/licencia aqui.

## 17. Recomendacion para Stage 00/01/02/03

- Stage 00: registrar CRM como opcion abierta.
- Stage 01: auditar dolor actual Excel/Sheets.
- Stage 02: decidir si CRM real entra en alcance base o solo adapter.
- Stage 03: especificar contrato `crm_adapter` y candidato recomendado con PoC.

## 18. Source Map

| ID | Fuente | Tipo | Que aporta | Confianza |
| --- | --- | --- | --- | --- |
| SRC-CRM-001 | `raw/divi-dclick_contexto_arquitectura_para_spec_driving.md` | contexto interno | CRM adapter, opciones. | media |
| SRC-CRM-002 | https://docs.twenty.com/developers/extend/api | docs oficiales | APIs REST/GraphQL, auth, rate limits. | alta |
| SRC-CRM-003 | https://baserow.io/user-docs/ | docs oficiales | API, webhooks, automations, vistas. | alta |
| SRC-CRM-004 | https://nocodb.com/docs/ | docs oficiales | REST APIs, webhooks, vistas, roles. | alta |
| SRC-CRM-005 | https://marketplace.gohighlevel.com/docs/ | docs oficiales | API, contacts, conversations, opportunities, webhooks. | alta |

