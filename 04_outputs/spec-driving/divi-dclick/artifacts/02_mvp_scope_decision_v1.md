# 02 - Decision de alcance base v1

## Decision Summary

Decision ejecutiva de alcance: el alcance base del proyecto DClick IA debe construir un sistema propio, util y operativo para vigilancia de subvenciones, atencion cliente/comercial y produccion documental, no una coleccion de demos ni un paquete de borradores.

Entra en alcance base: VPS/instalacion unica, Hermes como core agentic, workers deterministas, Drive Desktop/Drive gobernado, mirror tecnico regenerable, Markdown/metadatos, indice ligero derivado, radar BDNS/Canarias, equipo IA analista bajo demanda, atencion entrante autonoma low-risk por email, WhatsApp via Kapso + Hermes como via objetivo, `crm_adapter`, logs/auditoria/evals, preparacion de campanas y training/runbook. [SRC-001] [SRC-002] [SRC-004] [SRC-005] [SRC-018]

La activacion operativa de algunos bloques requiere parametros de despliegue y validaciones: numero/cuenta/canales, Workspace, scopes, opt-in, templates, CRM concreto, RGPD, retencion, datos permitidos y pruebas tecnicas. Estos parametros no expulsan WhatsApp, email, Drive, CRM adapter ni atencion autonoma del alcance base; condicionan puesta en produccion, nivel de autonomia y reglas de uso. [SRC-006] [SRC-010] [SRC-011] [SRC-012] [SRC-013] [SRC-014] [SRC-015]

Queda como evolucion funcional futura: migracion historica completa si el volumen es alto, portal cliente, automatizacion profunda de tramitaciones completas, analytics avanzado, multiempresa/multidespacho, LLM local si no es necesario al inicio e integraciones adicionales no BDNS. [SRC-001] [SRC-006] [SRC-016]

Queda fuera o no se debe vender ahora: garantias de concesion, dictamen juridico/fiscal definitivo automatico, envio masivo sin aprobacion, autonomia sin escalado, Baileys/WhatsApp Web en produccion, n8n como core, interfaces de terminal/GitHub/repos para Vivi/Maria, operar sobre todo Drive/correo sin limites y cerrar precio/SLA/contrato en Stage 02. [SRC-001] [SRC-002] [SRC-011] [SRC-015]

Internamente, cuando el template del flujo use lenguaje generico de alcance minimo o roadmap, este documento lo traduce como alcance base del proyecto DClick IA y evoluciones funcionales futuras. No debe usarse framing comercial de fases ante DClick. [SRC-001] [SRC-002]

## Alcance base del proyecto DClick IA

### 1. Decision ejecutiva de alcance

Se construye el alcance base de DClick IA como sistema always-on en servidor, con Drive como casa humana, Hermes como core agentic, workers deterministas como capa de ejecucion segura, BDNS como radar de subvenciones, email/WhatsApp como canales de atencion, una base de conocimiento auditable y CRM adapter como memoria comercial conectable.

El objetivo es atacar los dolores reales auditados en Stage 01: vigilancia manual de subvenciones, atencion lenta de clientes/leads, documentacion dispersa, adopcion no tecnica, CRM manual, comunicaciones poco profesionalizadas, analisis repetitivo, riesgo de automatizacion sin gobierno y necesidad de componentes always-on. [SRC-001] [SRC-007] [SRC-010] [SRC-013] [SRC-015]

El alcance base debe ser suficientemente completo para venderse como sistema propio util: radar, atencion autonoma low-risk, analisis bajo demanda, Drive/mirror/knowledge, CRM adapter, logs/evals y operaciones/training. No debe venderse como una "primera parte incompleta". [SRC-001] [SRC-002]

Hermes no se reabre: sera el core agentic salvo bloqueo grave. Stage 03 debe disenar gateway, toolsets, workers, permisos, skills, background tasks, logs y pruebas tecnicas. [SRC-002] [SRC-005] [SRC-018]

Kapso + Hermes no se reabre: WhatsApp via Kapso + Hermes entra en el alcance base como canal objetivo decidido. Stage 03 debe disenar la integracion con Hermes, toolsets, seguridad, logs, uso interno/cliente, numero, webhooks, opt-in, templates, costes externos y fallback Cloud API directa ante bloqueo grave. Baileys/WhatsApp Web queda descartado para produccion. [SRC-002] [SRC-011] [SRC-018]

Email no se reabre: entra como canal principal de atencion mediante Hermes y/o integracion Gmail/Workspace. Stage 03 debe decidir cuenta dedicada o alias, Gmail API vs Hermes email/IMAP, labels, hilos, adjuntos, scopes, safe sender y logs. [SRC-001] [SRC-010] [SRC-012]

Atencion cliente no se reduce a "borradores para revisar". El flujo principal sera autonomia por defecto en casos low-risk o claros, con escalado humano por riesgo, falta de fuente, expediente sensible, queja, decision juridica/fiscal o compromiso comercial. [SRC-001] [SRC-002] [SRC-010] [SRC-015]

Campanas entran como preparacion: copy, newsletter, WhatsApp/email, segmento, CTA y borrador listo. El envio masivo real queda condicionado a aprobacion humana, opt-in, bajas y reputacion de canal. [SRC-002] [SRC-014] [SRC-015]

El paquete estandar de outputs del Equipo IA Analista entra como baseline funcional del proyecto. Stage 03 podra ajustar formato, orden, plantillas, naming, fuentes/citas, validaciones, revision humana y estructura de carpetas, pero no debe tratar la existencia del paquete de outputs como una idea opcional desde cero. [SRC-001] [SRC-009]

CRM entra como adapter y entidades minimas; el CRM concreto queda abierto para decidir con DClick y validar adopcion/API. [SRC-013]

## Jerarquia de alcance

### Nucleo no negociable del sistema

- VPS / instalacion unica.
- Hermes como runtime agentic central.
- Workers deterministas.
- Google Drive Desktop + Drive gobernado.
- Mirror tecnico regenerable.
- Markdown/metadatos.
- BDNS watcher/radar Canarias.
- Atencion cliente/comercial autonoma low-risk por email.
- WhatsApp via Kapso + Hermes.
- Logs/auditoria.
- Seguridad, permisos y escalado por riesgo.
- Training/runbook para Vivi y Maria.

### Capacidades funcionales incluidas

- Equipo IA Analista bajo demanda con paquete estandar de outputs.
- Knowledge layer / indice ligero derivado.
- CRM adapter agnostico.
- Preparacion de campanas/newsletters/broadcasts.
- Briefings y control operativo.
- Evals y observabilidad basica.

### Activacion operativa condicionada / parametros de despliegue

- Configuracion concreta de Google Workspace, Shared Drive o carpeta gobernada.
- Configuracion concreta de Gmail/cuenta dedicada/scopes.
- Configuracion concreta de Kapso/Meta/numero/webhook/templates.
- Eleccion de CRM concreto.
- Activacion de envio masivo real.
- Autonomia sobre expedientes activos.
- Indexacion de datos sensibles de clientes/expedientes.
- Politica RGPD, retencion, proveedores y datos permitidos.

Importante: estos puntos condicionan produccion, configuracion o nivel de autonomia, pero no vacian el alcance base.

## Alcance base incluido

| Bloque | Entra / No entra / Condicionado | Justificacion | Problema que resuelve | Fuentes |
| --- | --- | --- | --- | --- |
| Infra/VPS/runtime | Entra | El sistema necesita instalacion unica, always-on, logs, workers, Postgres, backups y webhooks; no debe vivir en PCs de Vivi/Maria. | Componentes always-on sin fragilidad local; adopcion no tecnica. | [SRC-001] [SRC-004] |
| Hermes core | Entra | Decision arquitectonica tomada. Hermes debe coordinar canales, skills, subagentes, cron/background tasks y toolsets controlados. | Atencion autonoma, analistas bajo demanda, orquestacion y reduccion de trabajo repetitivo. | [SRC-002] [SRC-005] [SRC-018] |
| Workers deterministas | Entra | Acciones criticas deben ejecutarse con validacion, schemas y logs: Drive, BDNS, CRM, indice, envios seguros. | Gobierno operativo, seguridad, trazabilidad y fiabilidad. | [SRC-001] [SRC-004] [SRC-018] |
| Google Workspace / Drive Desktop / Drive gobernado | Entra | Drive Desktop en Windows es requisito duro para Vivi/Maria; Drive es biblioteca humana/canonica. | Documentacion dispersa y riesgo de adopcion. | [SRC-001] [SRC-002] [SRC-006] [SRC-017] |
| Mirror tecnico | Entra | Mirror regenerable permite busqueda/indexacion sin recorrer Drive en cada interaccion; debe operar solo carpetas gobernadas. | Documentacion auditable, rendimiento y recuperacion con fuentes. | [SRC-001] [SRC-006] [SRC-008] |
| Knowledge layer Markdown + indice ligero | Entra | Markdown/metadatos son base operativa; indice/RAG es derivado y regenerable, con citas y fallback a fuentes. | Respuestas con fuentes, analisis documental y no cargar todos los documentos. | [SRC-001] [SRC-008] [SRC-015] |
| BDNS watcher/radar Canarias | Entra | Dolor principal confirmado; BDNS/SNPSAP tiene API/datos consultables; watcher hibrido es decision CTO fuerte. | Vigilancia manual y riesgo de perder oportunidades. | [SRC-001] [SRC-007] |
| Archivador agentic + commit determinista | Entra | La clasificacion semantica ayuda a relevancia; el commit determinista evita que el agente cree estructuras sin control. | Radar fiable, Drive ordenado y trazabilidad. | [SRC-001] [SRC-007] [SRC-018] |
| Equipo IA analista bajo demanda | Entra | El paquete estandar de outputs entra como baseline funcional; Stage 03 ajustara plantillas, formato, naming, orden, fuentes/citas y validaciones. | Trabajo repetitivo de analisis de convocatorias y produccion documental. | [SRC-001] [SRC-009] |
| Atencion cliente/comercial autonoma por email | Entra | Email entra como canal principal mediante Hermes y/o Gmail/Workspace. Cuenta, alias, Gmail API vs Hermes email/IMAP, labels, hilos, adjuntos y scopes son parametros de Stage 03/despliegue. | Atencion lenta/manual de clientes y leads. | [SRC-001] [SRC-002] [SRC-010] [SRC-012] |
| WhatsApp via Kapso + Hermes | Entra | Kapso + Hermes es la via objetivo decidida para WhatsApp. El alcance incluye disenar e integrar el canal con Hermes, toolsets, seguridad, logs y uso interno/cliente. Numero, webhook, templates, credenciales y parametros Kapso/Meta son despliegue tecnico, no decision de alcance. | Atencion rapida por canal natural y control interno por WhatsApp. | [SRC-002] [SRC-011] [SRC-018] |
| CRM adapter | Entra | Adapter agnostico evita lock-in y permite registrar contactos, oportunidades, tareas, notas, conversaciones y tags. | CRM manual/fracturado y falta de memoria comercial. | [SRC-001] [SRC-013] |
| CRM concreto | Condicionado | No se cierra proveedor en Stage 02. Twenty es preferente tecnico si se prioriza CRM real/self-host; Baserow/NocoDB si UX hoja; GoHighLevel si DClick quiere suite SaaS. | Memoria comercial visual y adopcion por usuarias. | [SRC-013] [SRC-017] |
| Campanas/newsletters/broadcasts | Entra condicionado | Entra preparacion de campanas, segmentos, copy, previews y approval gate. Envio real queda condicionado a opt-in, bajas, dominio/reputacion, templates y aprobacion humana. | Comunicaciones poco profesionalizadas sin asumir riesgo de spam/RGPD. | [SRC-001] [SRC-014] [SRC-015] |
| Seguridad/RGPD/logs/evals | Entra | Es transversal y obligatorio para autonomia: permisos minimos, taxonomia de riesgo, audit logs, fixtures, golden answers, rollback y escalado. | Riesgo legal, operativo y reputacional. | [SRC-015] [SRC-016] [SRC-018] |
| Training/operaciones/soporte | Entra | La adopcion depende de Drive Desktop, WhatsApp/email, manual operativo, runbooks, briefings y aprobacion de campanas sin terminal. | Riesgo de adopcion e interfaces tecnicas inadecuadas. | [SRC-002] [SRC-017] |
| Stage 06 / execution plan | No entra ahora | `execution_plan_enabled` esta en false. No se crea plan de ejecucion en Stage 02; puede habilitarse mas adelante si el operador lo decide. | Evita planificar implementacion antes de Stage 03/04 y respeta run config. | [SRC-001] [SRC-019] |

## Alcance base recomendado

Incluido en alcance base:

- VPS / instalacion unica con servicios always-on, Postgres, logs, backups, healthchecks y dominios/HTTPS a definir en Stage 03. [SRC-004]
- Hermes como core agentic: gateway, toolsets, skills, subagentes, background tasks, routing y coordinacion con workers. [SRC-002] [SRC-005]
- Workers deterministas para Drive, BDNS, CRM, indice, logs, safe sender, backups y validacion de acciones criticas. [SRC-001] [SRC-018]
- Google Drive Desktop + Drive gobernado como superficie humana principal, operando solo carpetas controladas. [SRC-002] [SRC-006] [SRC-017]
- Mirror tecnico regenerable por API/manifest, con identidad por `fileId`/hash y resync. [SRC-006]
- Markdown/metadatos como fuente operativa visible y auditable. [SRC-001] [SRC-008]
- Indice ligero derivado, preferentemente Postgres FTS + pgvector si Stage 03 lo valida; fallback a FTS o busqueda directa en Markdown si conviene. [SRC-008]
- BDNS watcher/radar Canarias con pesca determinista, landing zone, deduplicacion, scoring inicial, archivador agentic, commit determinista y alertas. [SRC-007]
- Equipo IA analista bajo demanda con paquete estandar de outputs de subvencion, fuentes y escritura en Drive. El baseline funcional inicial incluye: resumen tecnico interno; checklist de requisitos; checklist de documentacion para solicitud; checklist de documentacion para justificacion; puntos clave / alertas / letra pequena; resumen comercial para web; newsletter; post para redes sociales. [SRC-001] [SRC-009]
- Atencion cliente/comercial autonoma low-risk por email, mediante Hermes y/o Gmail/Workspace, con clasificacion remitente/intencion/riesgo, RAG/fuentes, peticion de datos, escalado y CRM log. [SRC-010] [SRC-012]
- WhatsApp via Kapso + Hermes como canal incluido y via objetivo decidida. La configuracion operativa del canal -numero, credenciales, webhook, templates, parametros Kapso/Meta y costes externos- se resolvera durante Stage 03/implementacion como parte normal del despliegue. Cloud API directa queda como fallback tecnico si Kapso presentara bloqueo grave. [SRC-011] [SRC-018]
- `crm_adapter` con entidades minimas: contacto, oportunidad, conversacion, tarea, nota, tag, interes en subvencion y opt-in. [SRC-013]
- Logs/auditoria/evals: action log, risk log, test sets, golden answers, contract tests, rollback de auto-respuesta y healthchecks. [SRC-015] [SRC-016]
- Taxonomia de riesgo y escalado: low-risk automatico, medium con cuidado/confirmacion segun politica, high-risk siempre humano. [SRC-010] [SRC-015]
- Preparacion de campanas: copy, newsletter, WhatsApp/email, segmento, CTA, preview, approval request y registro. [SRC-014]
- Training de Vivi/Maria, manual operativo/runbook, briefing diario/semanal y soporte de incidencias. [SRC-017]

Activacion operativa condicionada / parametros de despliegue:

- WhatsApp real a clientes: incluido como canal, con puesta en produccion condicionada a numero dedicado o gestionado, Meta Business/WABA, Kapso, opt-in cuando aplique, templates, webhooks firmados, costes externos y prueba tecnica de integracion. [SRC-011]
- Envio email/newsletter real: condicionado a dominio, SPF/DKIM/DMARC, cuenta dedicada o herramienta sender, opt-in, bajas, limites y politica de envio. [SRC-012] [SRC-014]
- Autonomia de respuestas sobre expedientes activos: condicionada a taxonomia de riesgo, fuentes verificables, muestras reales/anonimizadas y validacion DClick/legal. [SRC-010] [SRC-015] [SRC-016]
- Indexacion de expedientes/clientes: condicionada a RGPD, permisos, retencion, proveedor LLM/embeddings y decision de datos. [SRC-008] [SRC-015]
- CRM concreto: condicionado a decision de DClick, prueba de UX/API y criterio self-host vs SaaS. [SRC-013] [SRC-017]
- Shared Drive: condicionado a Google Workspace/plan/admin; si no esta disponible, usar carpeta gobernada en My Drive como alternativa operativa. [SRC-006]

## Evoluciones funcionales futuras

Esta seccion recoge evoluciones funcionales futuras. No debe presentarse al cliente como "fase 2" comercial ni como senal de que el alcance base sea incompleto.

- Migracion historica completa de todo OneDrive/correo si el volumen es alto o la limpieza previa es costosa. El alcance base gobierna la documentacion operativa y nuevas subvenciones. [SRC-001] [SRC-006]
- Portal propio cliente para seguimiento, subida documental o area privada.
- Limpieza avanzada de CRM/base historica y normalizacion completa de contactos antiguos.
- Automatizacion profunda de tramitaciones completas o expedientes end-to-end.
- Analytics avanzado de campanas, scoring comercial sofisticado y atribucion de conversion.
- Multiempresa/multidespacho o empaquetado SaaS para otros despachos.
- Modelo LLM local/self-host si RGPD/coste lo exige; no es necesario cerrarlo como bloque inicial. [SRC-015]
- Integraciones adicionales con boletines, sedes o fuentes no BDNS si DClick confirma necesidad recurrente. [SRC-007]
- Dashboard tecnico avanzado si el equipo interno lo necesita; no para Vivi/Maria como interfaz principal. [SRC-017]
- Automatizaciones ad hoc con n8n solo si Stage 03 detecta una integracion puntual que lo justifique, sin convertirlo en core. [SRC-002] [SRC-005]

## Explicitly Out of Scope

- Garantizar concesion de subvenciones o elegibilidad definitiva.
- Emitir dictamen juridico/fiscal definitivo automatico.
- Automatizar tramitaciones completas sin revision humana.
- Enviar campanas masivas sin aprobacion humana, opt-in y bajas/unsubscribe. [SRC-014] [SRC-015]
- Prometer autonomia sin escalado por riesgo. [SRC-010] [SRC-015]
- Usar Baileys/WhatsApp Web como via de produccion. [SRC-011] [SRC-018]
- Convertir n8n en core conversacional, agentic o de radar. [SRC-001] [SRC-002] [SRC-005]
- Obligar a Vivi/Maria a trabajar con terminal, GitHub, repositorios, Codex CLI o carpetas internas del VPS. [SRC-001] [SRC-002] [SRC-017]
- Operar sobre todo Google Drive o todo el correo historico sin limites, scopes minimos y gobernanza. [SRC-006] [SRC-012] [SRC-015]
- Usar el indice/RAG como fuente de verdad o responder sin fuentes cuando la consulta sea especifica. [SRC-008] [SRC-015]
- Cerrar precio, contrato, SLA, anexos legales, condiciones comerciales o plan de ejecucion en Stage 02. [SRC-002] [SRC-015] [SRC-019]
- Cerrar schemas definitivos, endpoints, nombres finales de agentes/skills, CI/CD final o estructura exacta del VPS; eso corresponde a Stage 03/06 si aplica. [SRC-002]

## Rationale

### Rationale por problema Stage 01

| Problema Stage 01 | Decision Stage 02 | Por que | Fuentes |
| --- | --- | --- | --- |
| Vigilancia manual de subvenciones y riesgo de perder oportunidades, especialmente Canarias. | Incluir BDNS watcher/radar Canarias, archivador agentic, commit determinista, alertas y handoff a analistas. | Es dolor principal y tiene fuente tecnica viable; los unknowns afectan filtros/rate limits/scoring, no la decision de incluir radar. | [SRC-001] [SRC-007] |
| Atencion lenta/manual de clientes y leads por email/WhatsApp. | Incluir atencion autonoma low-risk por email y WhatsApp objetivo via Kapso + Hermes, con escalado por riesgo. | El valor central es ahorrar atencion manual; borrador permanente no resuelve el dolor. | [SRC-001] [SRC-002] [SRC-010] [SRC-011] [SRC-012] |
| Documentacion dispersa y ausencia de fuente operativa auditable. | Incluir Drive gobernado, mirror tecnico, Markdown/metadatos e indice derivado con citas. | Sin fuente canonica y trazabilidad, la IA no puede responder ni analizar de forma segura. | [SRC-001] [SRC-006] [SRC-008] |
| Riesgo de adopcion por interfaces tecnicas inadecuadas. | Incluir Drive Desktop, email/WhatsApp, training, manual operativo y Hermes Desktop solo opcional. | Las usuarias principales son no tecnicas y trabajan desde Windows/local. | [SRC-001] [SRC-002] [SRC-017] |
| Memoria comercial y CRM manual/fracturado. | Incluir `crm_adapter` y entidades minimas; CRM concreto condicionado a decision/UX/API. | El problema es memoria comercial estructurada, no casarse temprano con un proveedor. | [SRC-001] [SRC-013] |
| Newsletters/broadcasts poco profesionalizados con riesgo de consentimiento/reputacion. | Incluir preparacion de campanas y approval gate; envio real condicionado a opt-in, bajas, dominio/templates y aprobacion. | Se captura valor sin asumir riesgo legal/reputacional de envio masivo autonomo. | [SRC-014] [SRC-015] |
| Trabajo repetitivo de analisis de convocatorias y produccion documental. | Incluir equipo IA analista bajo demanda con baseline funcional de 8 outputs, fuentes y Drive. | Reduce lectura/redaccion repetitiva y alimenta campanas, atencion y conocimiento; Stage 03 solo debe refinar plantillas, formato, orden, naming, revision y citas. | [SRC-001] [SRC-009] |
| Automatizacion sin gobierno suficiente: riesgo legal, operativo y reputacional. | Incluir seguridad/RGPD/logs/evals como bloque transversal, no opcional. | La autonomia solo es viable si hay permisos minimos, fuentes, audit logs, evals y escalado. | [SRC-015] [SRC-016] [SRC-018] |
| Necesidad de componentes always-on sin fragilidad tecnica local. | Incluir VPS, Hermes, workers, healthchecks, logs y backups. | Radar, canales, sync e indice necesitan ejecucion continua y no pueden depender de PCs locales. | [SRC-004] [SRC-005] [SRC-018] |

### Principios de decision aplicados

- Unknowns no expulsan bloques centrales del alcance; se convierten en dependencias, condiciones, pruebas tecnicas y warnings.
- El alcance base debe ahorrar tiempo operativo desde el principio: radar, atencion low-risk y analistas bajo demanda son nucleares. [SRC-001]
- Se prioriza la adopcion de Vivi/Maria por superficies conocidas sobre interfaces tecnicas. [SRC-002] [SRC-017]
- Se mantiene control humano donde hay riesgo real: high-risk, envios masivos, borrados, compromisos, legal/fiscal y expedientes sensibles. [SRC-010] [SRC-015]
- Se evita lock-in prematuro: Kapso tiene fallback Cloud API directa; CRM se abstrae con adapter; indice es derivado y regenerable. [SRC-011] [SRC-013] [SRC-008]

## Dependency Notes

| Dependencia | Bloque afectado | Bloquea diseno, venta, produccion u operacion real | Validacion minima necesaria | Owner |
| --- | --- | --- | --- | --- |
| Google Workspace/admin/Shared Drives | Drive gobernado, mirror, Gmail, permisos | No bloquea diseno; condiciona produccion/operacion real de Drive/Gmail y modelo Shared Drive. | Confirmar Workspace, plan, admin, owner, Shared Drives, carpetas gobernadas y permisos. | DClick + CTO + Stage 03 |
| Dominio, SPF/DKIM/DMARC | Email, newsletters, entregabilidad | No bloquea diseno; bloquea envio real fiable y venta de newsletter produccion. | Revisar dominio, DNS, autenticacion remitente, reputacion y limites. | DClick/proveedor dominio + CTO |
| Gmail/cuenta dedicada/scopes | Atencion email, hilos, labels, adjuntos | Parametros de despliegue del canal email incluido. No bloquean la decision de incluir email; condicionan configuracion, permisos y puesta en produccion. | Decidir cuenta `ia@` o alias, Gmail API vs Hermes email/IMAP, scopes minimos, labels y modo push/polling. | CTO + DClick + Stage 03 |
| WhatsApp numero/Kapso/Meta/WABA/opt-in/templates | WhatsApp atencion, canal interno, broadcasts | Parametros de despliegue del canal WhatsApp incluido. No bloquean la decision de incluir WhatsApp; condicionan puesta en produccion y uso real del canal. Solo serian bloqueo estrategico si hubiera imposibilidad legal/RGPD, proveedor no viable, coste externo inaceptable, imposibilidad tecnica grave o falta total de opt-in para outbound. | Confirmar numero, Meta Business/WABA, Kapso, webhook HTTPS, templates, opt-in, costes y prueba tecnica de integracion Kapso + Hermes. | DClick + CTO + proveedor Kapso/Meta |
| CRM concreto | CRM visual, CRM adapter, segmentacion | No bloquea diseno del adapter; condiciona UI final, migracion y produccion CRM. | Elegir Twenty/Baserow/NocoDB/GoHighLevel o mock inicial; validar UX con Vivi/Maria y API minima. | DClick + CTO + Stage 03 |
| BDNS filtros/rate limits/scoring | Radar BDNS/Canarias | No bloquea diseno; condiciona produccion y calidad de relevancia. | Prueba con ventana 7-30 dias Canarias, filtros por region/organo/keywords, descarga documentos, dedupe y scoring con muestras. | CTO + Stage 03 |
| RGPD/proveedores/LLM/embeddings/logs | Atencion, RAG, CRM, Drive, WhatsApp, email, logs | No bloquea alcance base; bloquea produccion completa y promesas de autonomia amplia. | Definir base legal, encargados, datos permitidos, retencion, redaccion, embeddings externos/locales, DPA y consent records. | Legal/RGPD + DClick + CTO |
| Muestras reales de mensajes | Atencion autonoma, evals, riesgo | No bloquea decision de incluir atencion; condiciona umbrales y autonomia real. | Reunir emails/WhatsApps reales anonimizados o sinteticos validados; crear test set y golden decisions. | DClick + CTO + Stage 03 |
| Criterios de riesgo low/medium/high | Atencion, campañas, analistas, escalado | No bloquea diseno; bloquea activacion segura de auto-respuestas. | Taxonomia inicial, ejemplos por categoria, reglas de no enviar, owner humano y rollback. | CTO + DClick + Legal/RGPD |
| Volumen documental/migracion | Drive, mirror, knowledge, migracion historica | No bloquea alcance base; condiciona si migracion historica completa entra como evolucion. | Medir volumen OneDrive/correo/Drive, calidad documental, prioridad de carpetas y necesidad de OCR. | DClick + CTO |
| Stage 06 deshabilitado | Plan de ejecucion detallado | Bloquea crear Stage 06 ahora; no bloquea Stage 02/03/04. | Si se quiere plan de ejecucion, cambiar `execution_plan_enabled` a `true` explicitamente tras stages necesarios. | Operador/CTO |

## Risk Notes

| Riesgo | Impacto | Decision de alcance | Mitigacion para Stage 03 |
| --- | --- | --- | --- |
| Hermes/Kapso integracion inestable o costosa | Alto | Hermes y Kapso se mantienen como arquitectura objetivo; produccion depende de prueba tecnica. | Smoke test Hermes gateway + Kapso webhook + reply + logs + fallback Cloud API directa. [SRC-005] [SRC-011] |
| Autonomia responde sin fuente o con dato incorrecto | Alto | Atencion low-risk entra; high-risk escala; respuesta especifica sin fuente no se envia. | Taxonomia, RAG con fuentes, evals, action log y rollback de auto-reply. [SRC-010] [SRC-015] [SRC-016] |
| RGPD/proveedores no resuelto | Alto | Seguridad/RGPD entra como bloque transversal; produccion completa se condiciona a validacion legal. | Matriz de datos, retencion, consent records, proveedor LLM/embeddings y minimizacion. [SRC-015] |
| Drive/mirror crea conflictos o opera sobre demasiado contenido | Alto | Drive/mirror entra solo para carpetas gobernadas y manifest; no sync salvaje. | Scopes minimos, `fileId`, hash, resync, conflictos visibles y no borrar sin aprobacion. [SRC-006] |
| CRM elegido no se adopta | Medio-alto | Adapter entra; CRM concreto condicionado. | Probar UX/API con Vivi/Maria y mantener salida exportable. [SRC-013] [SRC-017] |
| BDNS filtros dejan fuera oportunidades o generan ruido | Medio-alto | Radar entra; scoring/criterios se validan con DClick. | Fixture Canarias, criterios sectoriales, revision de descartes y alertas con razon. [SRC-007] |
| Campanas danan reputacion o incumplen consentimiento | Alto | Preparacion entra; envio masivo con aprobacion y opt-in. | Safe sender, unsubscribe, templates, preview humano y logs. [SRC-014] [SRC-015] |
| Sistema no se adopta por complejidad | Alto | Training/runbook entra como alcance base. | Operacion por Drive/email/WhatsApp, manual corto, briefing y soporte. [SRC-017] |

## Unresolved Questions

Preguntas para Stage 03:

- ¿Hermes se despliega dentro de Docker Compose, como servicio systemd o modelo mixto?
- ¿Que toolsets exactos existen por canal interno, email cliente, WhatsApp cliente y jobs background?
- ¿Que workers deterministas son obligatorios en el primer blueprint: Drive, BDNS, CRM, indexer, safe sender, audit, backup?
- ¿Gmail API, Hermes email/IMAP o combinacion para el canal email inicial?
- ¿Shared Drive o carpeta gobernada en My Drive segun Workspace real de DClick?
- ¿Postgres FTS + pgvector, FTS solo o alternativa como Chroma/Lance/SQLite para el indice inicial?
- ¿Cliente BDNS propio o `bdns-fetch` solo para prueba tecnica, considerando GPLv3 y mantenimiento?
- ¿Como se refinan plantillas, formato, orden, naming, revision humana, fuentes/citas y estructura de carpetas del baseline funcional de 8 outputs del Equipo IA Analista?
- ¿Que consultas low-risk puede responder el sistema desde el despliegue y que consultas escalan siempre?
- ¿Como se implementa el fallback Cloud API directa si Kapso falla?
- ¿Que CRM se recomienda presentar como ruta preferente y como se mantiene `crm_adapter` agnostico?
- ¿Que proveedor LLM/embeddings se permite para documentos publicos, expedientes, mensajes y CRM?
- ¿Que datos se loguean completos, cuales se redaccionan y cuanto se retienen?
- ¿Que criterios de go/no-go activan auto-respuesta, puesta en produccion del canal WhatsApp incluido y envio real de campanas?

Preguntas para DClick:

- ¿Workspace, dominio, admin, Shared Drives y cuenta de correo dedicada existen ya?
- ¿Canarias solo o tambien subvenciones estatales con impacto en Canarias?
- ¿Sectores, tipos de cliente y palabras clave prioritarias para scoring?
- ¿Numero WhatsApp nuevo o existente? ¿Meta Business/WABA disponible?
- ¿Existe opt-in para email/WhatsApp marketing y mecanismo de baja?
- ¿CRM real vs interfaz tipo hoja? ¿Self-host vs SaaS aceptable?
- ¿Podemos usar mensajes reales anonimizados para evals?
- ¿Volumen real de OneDrive/correo/documentos historicos?

## Do Not Sell This Yet Warnings

No vender todavia como cerrado hasta validar:

- "Respuesta automatica ilimitada sobre cualquier expediente": requiere taxonomia, fuentes, test set, validacion DClick/legal y reglas de escalado. [SRC-010] [SRC-015] [SRC-016]
- "WhatsApp como broadcast ilimitado o sin reglas": no vender WhatsApp como broadcast ilimitado, sin opt-in, sin limites o sin configuracion operativa. Si puede presentarse como canal incluido via Kapso + Hermes dentro del sistema, sujeto a configuracion estandar de despliegue, costes externos y reglas de uso responsable. [SRC-011]
- "Envio masivo automatico sin control": no vender envio masivo automatico sin aprobacion humana, opt-in, bajas y control de reputacion. Si entra preparacion de campanas y mensajes. [SRC-014] [SRC-015]
- "Migracion historica completa": no vender sin medir volumen, calidad documental, duplicados, OCR y limpieza. [SRC-006]
- "CRM X definitivo": no vender un proveedor concreto hasta validar UX/API y decision DClick; si se comunica, hacerlo como opcion recomendada con adapter agnostico. [SRC-013]
- "Cero revision humana": no venderlo. La promesa correcta es autonomia low-risk con escalado por riesgo. [SRC-010] [SRC-015]
- "RAG que lo sabe todo": no vender respuestas sin fuentes; el indice es derivado y regenerable. [SRC-008]
- "Plan de ejecucion cerrado": no vender en Stage 02 porque Stage 06 esta deshabilitado y Stage 03 aun debe producir blueprint. [SRC-019]

## Handoff to Next Stage

Stage 03 debe producir el blueprint tecnico-funcional solo del alcance aprobado aqui: VPS/runtime, Hermes core, workers deterministas, Drive gobernado/mirror, knowledge layer, BDNS radar, equipo analista, atencion email/WhatsApp, Kapso + Hermes, CRM adapter, campanas con approval gate, seguridad/RGPD/logs/evals y operaciones/training.

Stage 03 debe tratar Hermes y Kapso + Hermes como arquitectura objetivo, no como opciones abiertas. Debe definir como se implementan, que smoke tests/pruebas tecnicas minimas requiere cada canal, que fallback existe si Kapso falla y que limites operativos aplican antes de produccion.

Stage 03 debe definir contratos entre modulos: eventos, entidades, toolsets, permisos, logs, escalados, idempotencia, manifests, `crm_adapter`, safe sender y criterios de go/no-go. No debe convertir esto en plan atomico de ejecucion ni cerrar precio/SLA/contrato.

Stage 03 debe mantener separadas las promesas cliente-facing de la documentacion tecnica interna: comercialmente DClick compra un sistema propio completo y util; internamente hay alcance base, condiciones de produccion y evoluciones funcionales futuras.
