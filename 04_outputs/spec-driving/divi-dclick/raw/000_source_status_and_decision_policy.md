# Source Status and Decision Policy

## Proposito

Este documento define como deben interpretar las etapas posteriores del loop `spec-driving` el documento principal de arquitectura CTO y los research packs tecnicos creados antes de Stage 00.

El documento principal de arquitectura CTO es una hipotesis fuerte de trabajo, no un blueprint final aprobado.

Las decisiones marcadas como requisitos duros deben respetarse salvo imposibilidad tecnica, legal u operativa demostrable.

Las decisiones tecnicas marcadas como provisionales deben ser evaluadas, ajustadas o descartadas por Stage 03 con evidencia.

Los research packs son evidencia tecnica previa, no especificacion final de implementacion.

Stage 00 debe absorberlos como contexto trazable.

Stage 01 debe usarlos para auditar si la arquitectura responde a problemas reales.

Stage 02 debe usarlos para decidir alcance, limites y trade-offs.

Stage 03 debe convertir alcance aprobado + evidencia tecnica en blueprint tecnico-funcional.

## Taxonomia de estatus

### REQUISITO DURO
Viene de una necesidad del cliente, del usuario, del contexto operativo o de una restriccion no negociable.

Ejemplos:
- Vivi y Maria no deben depender de terminal, GitHub ni repositorios.
- Drive Desktop en Windows debe ser superficie humana principal.
- El sistema debe tener componentes always-on.
- Atencion cliente debe ser autonoma por defecto, con escalado por riesgo.

### DECISION CTO PROVISIONAL FUERTE
Decision tecnica preferente tomada en conversacion CTO, pero revisable en Stage 03 si la evidencia lo exige.

Ejemplos:
- Hermes como runtime agentic central.
- VPS como instalacion unica.
- n8n fuera del core.
- BDNS watcher hibrido.

### HIPOTESIS TECNICA A VALIDAR
Opcion con buena pinta, pero que necesita documentacion, PoC o prueba tecnica.

Ejemplos:
- Kapso + Hermes como via preferente para WhatsApp.
- pgvector/FTS como indice ligero.
- mirror Drive <-> VPS regenerable.
- integracion concreta de Hermes con email/WhatsApp/skills/background tasks.

### OPCION ABIERTA
Decision que no debe cerrarse todavia porque hay varias alternativas razonables.

Ejemplos:
- CRM concreto: Twenty, Baserow, NocoDB o GoHighLevel.
- stack exacto del indice.
- modelo exacto de autenticacion Google Workspace.

### NO DECIDIR TODAVIA
Tema que puede documentarse, pero no debe cerrarse antes de Stage 03 o Stage 06.

Ejemplos:
- estructura final exacta de carpetas internas del VPS;
- nombres definitivos de agentes y skills;
- endpoints concretos;
- schemas definitivos;
- CI/CD final;
- precio;
- plan comercial.

## Decision Ledger inicial

| Decision | Estatus | Comentario |
| --- | --- | --- |
| No usar framing comercial de fase 1/fase 2 | REQUISITO DURO | El proyecto debe venderse como sistema propio completo con evoluciones futuras. |
| Google Drive Desktop en Windows como superficie documental humana | REQUISITO DURO | Vivi y Maria son usuarias no tecnicas y trabajan desde Windows/local. |
| Vivi y Maria no usan terminal/GitHub/repos como interfaz principal | REQUISITO DURO | La interaccion debe ser WhatsApp/email/Drive/Hermes Desktop opcional. |
| Atencion cliente autonoma por defecto | REQUISITO DURO | El valor principal es reducir atencion manual; debe escalar solo por riesgo. |
| VPS como instalacion unica | DECISION CTO PROVISIONAL FUERTE | Evita versiones locales divergentes. |
| Hermes como runtime agentic central | DECISION CTO PROVISIONAL FUERTE | Pendiente de validacion contra docs/PoC. |
| n8n fuera del core | DECISION CTO PROVISIONAL FUERTE | Solo auxiliar puntual si hiciera falta. |
| Drive como casa/biblioteca humana y VPS como mirror tecnico | DECISION CTO PROVISIONAL FUERTE | Requiere disenar sync controlado. |
| Markdown como conocimiento operativo base | DECISION CTO PROVISIONAL FUERTE | Fuente documental auditable. |
| RAG/indice ligero como derivado, no fuente de verdad | HIPOTESIS TECNICA A VALIDAR | Debe ser regenerable y no bloquear el sistema. |
| BDNS watcher hibrido | DECISION CTO PROVISIONAL FUERTE | Pescador determinista + archivador agentic + commit determinista. |
| Kapso + Hermes para WhatsApp | HIPOTESIS TECNICA A VALIDAR | Revisar docs, plugin, costes y estabilidad. |
| CRM adapter agnostico | DECISION CTO PROVISIONAL FUERTE | Evita lock-in. |
| CRM concreto | OPCION ABIERTA | Twenty/Baserow/NocoDB/GoHighLevel. |
| Envio masivo de campanas con aprobacion humana | DECISION CTO PROVISIONAL FUERTE | Por RGPD, reputacion y riesgo comercial. |

## Reglas de uso para los research packs

- Ningun research pack sustituye Stage 03.
- Ningun research pack debe interpretarse como promesa tecnica al cliente.
- Las capacidades confirmadas por documentacion oficial pueden alimentar Stage 03, pero siguen dependiendo del alcance aprobado en Stage 02.
- Las capacidades vistas solo en repositorios, ejemplos o README deben validarse con PoC antes de convertirse en compromiso.
- Las dudas legales/RGPD deben permanecer como preguntas abiertas hasta revision especifica.
- Las decisiones de precio, plan comercial y contratos quedan fuera de este paquete.

