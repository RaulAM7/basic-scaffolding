# Hermes Runtime Agentic Core - Technical Research Pack

## 1. Proposito del research pack

Investiga si Hermes puede ser el runtime agentic central de DClick IA: gateway de canales, sistema de skills, delegacion, cron/background tasks y punto de coordinacion con workers deterministas.

## 2. Resumen tecnico del modulo

Hermes tocaria el dolor de coordinacion: recibir peticiones por canales humanos, interpretar contexto, decidir tools/subagentes y entregar trabajo a Drive/CRM/email/WhatsApp sin que Vivi y Maria usen terminal.

## 3. Estatus de decisiones relacionadas

| Decision / hipotesis | Estatus | Evidencia | Implicacion |
| --- | --- | --- | --- |
| Hermes como runtime central | DECISION ARQUITECTONICA TOMADA | SRC-INT-001 ADR-002; docs oficiales confirman gateway, tools, skills, cron y plugins. | Stage 03 debe disenar como se implementa Hermes: gateway, toolsets, workers, permisos, logs, skills, background tasks y pruebas tecnicas. No debe reabrir si Hermes entra salvo bloqueo grave. |
| Hermes para email y WhatsApp | DECISION ARQUITECTONICA TOMADA | Docs oficiales confirman email y WhatsApp Cloud/Baileys; Kapso + Hermes queda como via objetivo para WhatsApp en el pack 08. | Stage 03 debe especificar integracion, seguridad y fallbacks por canal. |
| Subagentes/delegacion | HIPOTESIS TECNICA A VALIDAR | Docs oficiales confirman delegacion con contexto aislado. | Necesita paquetes de contexto explicitos. |
| Workers deterministas como tools | HIPOTESIS TECNICA A VALIDAR | Plugins/MCP/tools lo permiten conceptualmente. | Hay que construir contrato de tools propio. |

## 4. Fuentes revisadas

- `raw/divi-dclick_contexto_arquitectura_para_spec_driving.md`
- `raw/000_source_status_and_decision_policy.md`
- Hermes quickstart: https://hermes-ai.net/docs/quickstart/
- Hermes official docs: https://hermes-agent.nousresearch.com/docs/
- Hermes GitHub: https://github.com/nousresearch/hermes-agent
- Hermes WhatsApp docs: https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/messaging/whatsapp.md

## 5. Capacidades confirmadas por documentacion

- Hermes puede instalarse en Linux/macOS/WSL2 y configurarse con proveedor LLM.
- Soporta herramientas, slash commands, session recovery, messaging gateways, skills y MCP integrations.
- El repo oficial describe gateway unico para Telegram, Discord, Slack, WhatsApp, Signal y CLI, y cron/scheduled automations.
- Los skills son documentos bajo demanda; los plugins pueden anadir tools, hooks, comandos, skills, plataformas y adaptadores.
- La delegacion existe, pero los subagentes no heredan todo automaticamente: hay que pasar contexto.

## 6. Capacidades no confirmadas o dudosas

- PENDIENTE DE VALIDACION TECNICA: estabilidad real de Hermes 24/7 en VPS con varias integraciones.
- PENDIENTE DE VALIDACION TECNICA: separacion robusta de permisos por canal cliente vs canal interno.
- PENDIENTE DE VALIDACION TECNICA: integracion exacta Hermes + Kapso frente a WhatsApp Cloud nativo.
- PENDIENTE DE VALIDACION TECNICA: como versionar skills y prompts de DClick sin exponer repo a usuarias.

## 7. Opciones tecnicas identificadas

| Opcion | Ventaja | Riesgo | Estatus |
| --- | --- | --- | --- |
| Hermes core + workers | Arquitectura objetivo: runtime agentic con herramientas controladas. | Permisos y seguridad requieren diseno fino. | DECISION ARQUITECTONICA TOMADA |
| Workers propios sin Hermes | Control total. | Pierde gateway/skills/delegacion existentes. | FALLBACK SOLO ANTE BLOQUEO GRAVE |
| n8n core | Facil para flujos simples. | El contexto CTO lo descarta como core conversacional. | DESCARTADO COMO CORE / SOLO AUXILIAR PUNTUAL |

## 8. Diseno candidato / hipotesis preferente

Hermes no es una opcion exploratoria mas. Es la arquitectura objetivo del runtime agentic. La incertidumbre pendiente esta en la configuracion, seguridad, despliegue y limites operativos, no en la direccion arquitectonica.

Diseno candidato: Hermes Gateway recibe canales y decide; workers propios ejecutan acciones estructurales. Hermes no debe escribir directamente estructuras criticas sin tool deterministic que valide inputs, permisos y logs.

## 9. Inputs y outputs probables

- Inputs: mensajes email/WhatsApp, comandos internos, cron jobs, eventos BDNS/Drive/CRM.
- Outputs: tool calls, respuestas, escalados, jobs, logs, resumentes diarios.
- Objetos: `MessageEvent`, `ToolCall`, `JobRun`, `EscalationCase`, `AnalysisRequest`.

## 10. Entidades de datos candidatas

- `agent_session`: canal, usuario, thread, toolset, estado.
- `agent_decision`: motivo, fuentes, riesgo, siguiente accion.
- `skill_run`: skill, input refs, output refs, duracion.
- `tool_permission`: canal, tool, modo, confirmacion requerida.

## 11. Integraciones externas relevantes

- Hermes docs: runtime/gateway; auth por config y API keys; limites PENDIENTE DE VALIDACION; coste LLM; alternativa workers propios.
- LLM provider: uso razonamiento/generacion; auth API key/OAuth; limite contexto/coste; riesgo datos; alternativa modelo self-host/otro provider.
- MCP/tools propios: uso workers; auth interna; limite contrato; riesgo tool injection; alternativa llamadas HTTP internas.

## 12. Skills / tools / subagentes candidatos

- `dclick_route_message`
- `dclick_classify_risk`
- `dclick_delegate_subsidy_analysis`
- `dclick_prepare_customer_reply`
- `dclick_run_daily_briefing`
- `human_escalate_case`

## 13. Seguridad, permisos y limites

- Toolsets por canal: clientes externos no acceden a terminal, filesystem ni tools administrativas.
- Allowlists para canales internos y modo restringido para canales publicos.
- Acciones de envio masivo, borrado, cambios CRM sensibles y respuestas de riesgo alto requieren aprobacion.
- Registrar fuentes usadas y razon de escalado.

## 14. Riesgos tecnicos

| Riesgo | Impacto | Probabilidad | Mitigacion | Estatus |
| --- | --- | --- | --- | --- |
| Toolset demasiado amplio en canal externo | Alto | Media | Toolsets minimos, allowlist y tests adversariales. | PENDIENTE DE VALIDACION TECNICA |
| Hermes no estable 24/7 con plugins | Alto | Media | Prueba tecnica de integracion con restart, logs y healthchecks. | PENDIENTE DE VALIDACION TECNICA |
| Subagentes sin contexto suficiente | Medio | Alta | Paquetes de input explicitos y plantillas de handoff. | HIPOTESIS TECNICA A VALIDAR |
| Respuestas automaticas inseguras | Alto | Media | Clasificador de riesgo y escalado humano. | PENDIENTE DE VALIDACION TECNICA |

## 15. Prueba minima / prueba tecnica recomendada

- Fixture: Hermes en VPS sandbox, email interno, WhatsApp/Kapso o Cloud test, tool mock de CRM/RAG/escalado.
- Pasos: mensaje entrante, clasificar, buscar contexto mock, responder o escalar, ejecutar cron diario.
- Criterio de exito: respuesta correcta con fuente, sin tools peligrosas, log completo.
- Criterio de fallo: acceso a terminal desde canal externo, perdida de contexto, respuesta sin evidencia.

## 16. Preguntas abiertas

- CTO: ¿Hermes tendra un unico gateway o gateways separados por canal?
- DClick: ¿que canales seran internos y cuales externos?
- Documentacion tecnica: ¿que version exacta de Hermes/plugin usar?
- Legal/RGPD: ¿puede Hermes procesar datos de clientes con el provider LLM elegido?
- Comerciales: no decidir promesas de autonomia sin prueba tecnica de integracion.

## 17. Recomendacion para Stage 00/01/02/03

- Stage 00: capturar Hermes como decision arquitectonica tomada y fuentes oficiales.
- Stage 01: auditar si Hermes resuelve autonomia y trabajo repetitivo.
- Stage 02: separar core minimo de extensiones futuras.
- Stage 03: especificar la prueba tecnica minima de integracion antes de cerrar compromiso operativo/produccion, y disenar toolsets, permisos, workers y pruebas antes de cerrar blueprint.

## 18. Source Map

| ID | Fuente | Tipo | Que aporta | Confianza |
| --- | --- | --- | --- | --- |
| SRC-HER-001 | `raw/divi-dclick_contexto_arquitectura_para_spec_driving.md` | contexto interno | ADR Hermes, workers, canales. | media |
| SRC-HER-002 | `raw/000_source_status_and_decision_policy.md` | politica interna | Estatus de decisiones. | alta |
| SRC-HER-003 | https://hermes-ai.net/docs/quickstart/ | docs/guia | Quickstart y prerequisitos; usar con cautela si redirige a docs oficiales. | media |
| SRC-HER-004 | https://hermes-agent.nousresearch.com/docs/ | docs oficiales | Runtime, tools, gateway, cron, seguridad. | alta |
| SRC-HER-005 | https://github.com/nousresearch/hermes-agent | repo oficial | Capacidades, gateway, VPS, cron, skills. | alta |
