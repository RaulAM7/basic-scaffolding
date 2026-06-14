# Infra / VPS / Runtime - Technical Research Pack

## 1. Proposito del research pack

Investiga opciones de alojamiento y operacion para un sistema DClick IA always-on en VPS. Debe alimentar Stage 00/01/02/03 con evidencia sobre runtime, procesos, Docker, Postgres, workers, logs, backups, variables de entorno, dominios, HTTPS y seguridad basica.

## 2. Resumen tecnico del modulo

El modulo infra existe para que Vivi y Maria no dependan de instalar herramientas locales ni mantener versiones divergentes. El sistema deberia vivir en una instalacion unica, con servicios persistentes y observables.

## 3. Estatus de decisiones relacionadas

| Decision / hipotesis | Estatus | Evidencia | Implicacion |
| --- | --- | --- | --- |
| VPS como instalacion unica | DECISION CTO PROVISIONAL FUERTE | SRC-INT-001 ADR-004; Hermes docs hablan de gateway/servicio y GitHub indica ejecucion en VPS. | Stage 03 debe disenar una instalacion simple, no local por usuaria. |
| Docker Compose para servicios | HIPOTESIS TECNICA A VALIDAR | Docker Compose define servicios, redes, volumenes y variables. | Buen candidato, pero no cerrar sin PoC de Hermes + Postgres + workers. |
| Postgres como base operativa | DECISION CTO PROVISIONAL FUERTE | SRC-INT-001; pgvector y FTS encajan si Postgres ya existe. | Evita servicios extra para logs, CRM mirror e indice. |
| Componentes always-on | REQUISITO DURO | Dolor de vigilancia BDNS y atencion cliente continua. | Necesita supervisor, healthchecks, logs y alertas. |
| Kubernetes o arquitectura enterprise | NO DECIDIR TODAVIA | El contexto CTO lo descarta por sobredimensionamiento. | No usar salvo evidencia fuerte posterior. |

## 4. Fuentes revisadas

- `raw/divi-dclick_contexto_arquitectura_para_spec_driving.md`
- `raw/000_source_status_and_decision_policy.md`
- Docker Compose services: https://docs.docker.com/reference/compose-file/services/
- Docker Compose file reference: https://docs.docker.com/reference/compose-file/
- Postgres official Docker image: https://hub.docker.com/_/postgres
- Hermes quickstart: https://hermes-ai.net/docs/quickstart/
- Hermes official docs/GitHub: https://hermes-agent.nousresearch.com/docs/ and https://github.com/nousresearch/hermes-agent

## 5. Capacidades confirmadas por documentacion

- Docker Compose permite definir servicios, puertos, variables, volumenes y redes en un archivo.
- La imagen oficial de Postgres usa variables como `POSTGRES_PASSWORD` y requiere tratar persistencia con volumenes.
- Hermes se instala en Linux/macOS/WSL2 y puede ejecutarse con gateway, herramientas, skills, cron y canales segun documentacion oficial de Nous.
- Hermes separa configuracion y secretos en archivos de usuario; esto debe mapearse a una politica de secretos en servidor.

## 6. Capacidades no confirmadas o dudosas

- PENDIENTE DE VALIDACION TECNICA: forma exacta de desplegar Hermes como servicio estable en el VPS elegido.
- PENDIENTE DE VALIDACION TECNICA: si Hermes + plugins + workers convienen en un unico compose o en servicios systemd separados.
- PENDIENTE DE VALIDACION TECNICA: dimensionamiento real de CPU/RAM/disco.
- PENDIENTE DE VALIDACION TECNICA: estrategia de backups cifrados y restauracion verificada.

## 7. Opciones tecnicas identificadas

| Opcion | Ventaja | Riesgo | Estatus |
| --- | --- | --- | --- |
| VPS + Docker Compose | Simple, auditable, suficiente para pyme. | Hay que cuidar secretos, backups y upgrades. | HIPOTESIS TECNICA A VALIDAR |
| VPS + systemd para Hermes/workers | Menos capas para procesos concretos. | Menos reproducible si se hace manual. | OPCION ABIERTA |
| PaaS/serverless | Menos ops. | Puede complicar webhooks, Drive, BDNS y procesos persistentes. | OPCION ABIERTA |
| Kubernetes | Escalable. | Sobredimensionado para 2 usuarias y bajo volumen. | NO DECIDIR TODAVIA |

## 8. Diseno candidato / hipotesis preferente

Hipotesis preferente: VPS Linux con Docker Compose para Postgres, workers y servicios auxiliares; Hermes Gateway como servicio gestionado con toolsets restringidos y logs centralizados. Stage 03 debe validar si Hermes se ejecuta dentro o fuera de Compose.

## 9. Inputs y outputs probables

- Inputs: webhooks Kapso, Gmail/PubSub o IMAP, BDNS polling, Drive changes API, comandos de Vivi/Maria.
- Outputs: logs, eventos internos, carpetas Drive, registros CRM, mensajes WhatsApp/email, artefactos Markdown.
- Eventos: `bdns.call.detected`, `drive.file.changed`, `message.received`, `analysis.requested`, `campaign.approval_requested`.

## 10. Entidades de datos candidatas

- `service_status`: servicio, version, estado, ultimo heartbeat.
- `job_run`: tipo, start/end, resultado, errores, correlacion.
- `action_log`: actor, tool, input_hash, output_ref, decision, riesgo.
- `secret_inventory`: nombre logico, proveedor, rotacion, owner.

## 11. Integraciones externas relevantes

- Docker: URL https://docs.docker.com/; uso despliegue; auth no aplica; limite operativo local; riesgo mala gestion de volumenes; coste VPS; alternativa systemd.
- Postgres: URL https://hub.docker.com/_/postgres; uso datos/logs/indice; auth usuario/password; riesgo backup/restauracion; coste VPS; alternativa managed Postgres.
- Hermes: URL https://hermes-agent.nousresearch.com/docs/; uso gateway/runtime; auth por variables y proveedores LLM; riesgo permisos excesivos; coste LLM; alternativa workers propios + API LLM.
- Caddy/Traefik/Nginx: uso HTTPS/webhooks; PENDIENTE DE VALIDACION TECNICA.

## 12. Skills / tools / subagentes candidatos

- `infra_healthcheck_services`
- `infra_rotate_secret`
- `infra_backup_postgres`
- `infra_restore_drill`
- `worker_run_job`
- `human_escalate_incident`

## 13. Seguridad, permisos y limites

- Los canales externos no deben tener toolsets con terminal o filesystem completo.
- Secretos fuera de repositorio y con rotacion documentada.
- Backups cifrados y restauracion probada.
- Webhooks solo por HTTPS y con firma/secreto si el proveedor lo soporta.
- Acciones destructivas requieren confirmacion humana.

## 14. Riesgos tecnicos

| Riesgo | Impacto | Probabilidad | Mitigacion | Estatus |
| --- | --- | --- | --- | --- |
| Gateway caido corta atencion cliente | Alto | Media | Supervisor, healthcheck, alerta y fallback humano. | PENDIENTE DE VALIDACION TECNICA |
| Permisos Hermes excesivos | Alto | Media | Toolsets minimos por canal y allowlists. | HIPOTESIS TECNICA A VALIDAR |
| Perdida de datos Postgres | Alto | Media | Backups diarios + restore drill. | PENDIENTE DE VALIDACION TECNICA |
| Drift de configuracion manual | Medio | Media | Infra declarativa y runbooks. | HIPOTESIS TECNICA A VALIDAR |

## 15. Prueba minima / PoC recomendada

- Fixture: VPS sandbox con dominio temporal, Postgres, Hermes y un worker mock.
- Pasos: levantar servicios, exponer webhook HTTPS, ejecutar job diario, escribir log, simular caida y reinicio.
- Criterio de exito: servicios reinician, logs persisten, secretos no se imprimen, backup se restaura.
- Criterio de fallo: perdida de eventos, credenciales expuestas, reinicio manual obligatorio.

## 16. Preguntas abiertas

- CTO: ¿Hermes dentro de Docker o como servicio systemd?
- DClick: ¿quien sera owner operativo del dominio y servidor?
- Documentacion tecnica: ¿requisitos exactos de produccion Hermes para plugins/canales?
- Legal/RGPD: ¿donde pueden residir datos y backups?
- Comerciales: no decidir precio ni SLA en este pack.

## 17. Recomendacion para Stage 00/01/02/03

- Stage 00: registrar VPS como hipotesis fuerte, no promesa cerrada.
- Stage 01: auditar si always-on resuelve vigilancia y atencion.
- Stage 02: decidir si infra base entra en alcance o si se deja como preparacion tecnica.
- Stage 03: convertir en blueprint con servicios, permisos, backups y observabilidad minima.

## 18. Source Map

| ID | Fuente | Tipo | Que aporta | Confianza |
| --- | --- | --- | --- | --- |
| SRC-INF-001 | `raw/divi-dclick_contexto_arquitectura_para_spec_driving.md` | contexto interno | VPS, workers, Postgres, Hermes, no enterprise. | media |
| SRC-INF-002 | `raw/000_source_status_and_decision_policy.md` | politica interna | Estatus y limites de decision. | alta |
| SRC-INF-003 | https://docs.docker.com/reference/compose-file/services/ | docs oficiales | Servicios Compose, variables, puertos. | alta |
| SRC-INF-004 | https://hub.docker.com/_/postgres | docs oficiales | Imagen oficial Postgres y variables. | alta |
| SRC-INF-005 | https://hermes-agent.nousresearch.com/docs/ | docs oficiales | Gateway, tools, cron, seguridad. | alta |

