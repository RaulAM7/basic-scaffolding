# PROPUESTA TÉCNICA Y ECONÓMICA

## Equipo IA DClick

Sistema propio de automatización IA para vigilancia de subvenciones, atención a clientes y producción documental.

| Concepto | Detalle |
| --- | --- |
| Precio base del proyecto | 5.999 € + IGIC |
| Bonificación por decisión temprana | -1.100 € si se contrata antes del 30 de junio de 2026 |
| Precio bonificado | 4.899 € + IGIC |
| Plazo estimado | 10 semanas |
| Soporte incluido | 6 meses de soporte funcional y acompañamiento inicial sobre el alcance entregado |
| Dirigida a | DClick / Subvenciones a un Click |
| Elaborado por | Skilland / Reboot |
| Fecha | 15 de junio de 2026 |

Documento base para revisión comercial y posterior maquetación visual.

## 1. El problema

DClick no tiene un problema de falta de criterio. Tiene criterio, experiencia y conocimiento real del sector de subvenciones. El problema es que gran parte de ese criterio está atrapado en tareas manuales: vigilancia constante de convocatorias, lectura de documentación, respuestas repetitivas, preparación de materiales y seguimiento comercial.

La operativa actual funciona porque Vivi, María y el equipo saben qué mirar, qué preguntar y cuándo escalar. Pero ese conocimiento depende demasiado de la memoria humana, de documentos repartidos y de procesos que requieren revisión constante.

Los principales puntos de fricción son claros:

- Vigilancia continua de nuevas subvenciones, especialmente en Canarias, con riesgo de llegar tarde o perder oportunidades.
- Consultas repetitivas de clientes y leads por email y WhatsApp, que consumen tiempo aunque muchas puedan clasificarse, responderse o derivarse con reglas claras.
- Documentación dispersa entre correo, OneDrive/Drive, documentos Word/PDF, hojas de cálculo y uso manual de IA.
- Producción repetitiva de resúmenes, checklists, newsletters, textos comerciales y publicaciones.
- Memoria comercial apoyada en hojas o procesos manuales, con dificultad para saber qué se habló, qué oportunidad hay abierta y qué seguimiento toca.
- Campañas y comunicaciones que pueden ganar profesionalización, trazabilidad y control de consentimiento.

El objetivo no es sustituir el criterio del despacho. El objetivo es que el equipo humano deje de estar atrapado en vigilancia, copia-pega, búsqueda documental, respuestas repetitivas y coordinación manual.

## 2. La solución

Proponemos construir **Equipo IA DClick**: un sistema propio de automatización IA diseñado para la forma real en la que DClick gestiona subvenciones.

No añadimos otra herramienta más. Construimos el sistema operativo IA del despacho: una base propia que detecta oportunidades, analiza convocatorias, atiende consultas, prepara comunicaciones y deja memoria comercial.

El sistema combina:

- Una casa documental ordenada en Google Drive.
- Un radar inteligente de subvenciones BDNS/Canarias.
- Un Equipo IA Analista capaz de producir materiales estándar de subvenciones.
- Atención por email y WhatsApp para casos de bajo riesgo, con escalado humano cuando corresponde.
- Memoria comercial conectable a CRM.
- Campañas y comunicaciones preparadas con aprobación humana.
- Control, trazabilidad, permisos y formación para que Vivi y María trabajen desde herramientas conocidas.

La IA trabaja donde aporta velocidad. Vivi, María y el equipo DClick mantienen el criterio donde hay riesgo, decisión profesional o comunicación sensible.

DClick empieza a construir un activo operativo propio, no una colección de prompts.

## 3. Arquitectura funcional

La arquitectura se entiende de forma sencilla:

```text
BDNS / fuentes de subvenciones
   |
   v
Radar inteligente DClick IA
   |
   v
Drive DClick IA + base documental
   |
   v
Equipo IA Analista
   |
   +--> resumen técnico interno
   +--> checklists de requisitos y documentación
   +--> puntos críticos y alertas
   +--> newsletter / web / redes
   |
   v
Atención por email y WhatsApp
   |
   v
CRM / memoria comercial
   |
   v
Briefings, escalados y campañas preparadas
```

Drive es la casa. El orquestador IA es el cerebro. Los procesos controlados son las manos. WhatsApp y email son los canales. El CRM es la memoria comercial.

Para Vivi y María, la experiencia debe ser simple: Drive Desktop, email, WhatsApp y documentos claros. La complejidad técnica queda por detrás, dentro del sistema.

## 4. Componentes del sistema

### Bloque 1 - Google Workspace y Drive gobernado

El sistema necesita una casa documental clara. Para DClick, esa casa será Google Drive, con Drive Desktop en Windows para que el equipo pueda trabajar con carpetas conocidas.

Incluye:

- Configuración de cuentas corporativas y estructura documental.
- Drive gobernado para subvenciones, análisis, clientes, campañas y materiales operativos.
- Drive Desktop en Windows como superficie principal de trabajo.
- Permisos y reglas para evitar que el sistema opere sobre todo el Drive sin control.
- Orden inicial razonable desde OneDrive o estructura actual.
- Manual de uso y formación básica para Vivi y María.

No se plantea como una migración histórica completa de todo lo antiguo salvo acuerdo posterior. El objetivo es crear una base documental operativa, visible y útil.

### Bloque 2 - Radar inteligente de subvenciones BDNS/Canarias

El radar reduce la vigilancia manual. Revisa fuentes públicas de subvenciones, detecta nuevas convocatorias, aplica criterios definidos con DClick, evita duplicados, registra documentación y avisa cuando aparece una oportunidad relevante.

Incluye:

- Vigilancia automática de nuevas subvenciones.
- Foco inicial en Canarias y criterios definidos con DClick.
- Filtros, deduplicación y scoring inicial.
- Registro de documentación.
- Creación de carpetas en Drive.
- Alertas y briefing de oportunidades.

No garantiza que ninguna ayuda del universo se escape. Sí crea un sistema mucho más ordenado, constante y trazable que la vigilancia manual.

### Bloque 3 - Equipo IA Analista de subvenciones

Cuando DClick quiera trabajar una subvención concreta, el Equipo IA Analista podrá generar un paquete estándar de materiales.

Baseline funcional incluido:

1. Resumen técnico interno.
2. Checklist de requisitos.
3. Checklist de documentación para solicitud.
4. Checklist de documentación para justificación.
5. Puntos clave, alertas y letra pequeña.
6. Resumen comercial para web.
7. Newsletter.
8. Post para redes sociales.

Estos outputs se guardan en Drive y se apoyan en las fuentes documentales disponibles. Durante la implantación se ajustarán formato, tono, plantillas y orden de generación, pero el paquete de 8 outputs forma parte del alcance del proyecto.

### Bloque 4 - Atención por email y WhatsApp

El sistema incorpora atención entrante por email y WhatsApp para clientes y leads. No se trata de que la IA responda todo siempre; se trata de que responda lo que puede responder con seguridad y escale lo que requiere criterio humano.

Incluye:

- Clasificación de remitente: lead, cliente, cliente con expediente o contacto desconocido.
- Clasificación de intención y riesgo.
- Acuses de recibo.
- Preguntas de precalificación.
- Solicitud de datos faltantes.
- Respuestas de bajo riesgo apoyadas en fuentes.
- Escalado humano en casos delicados.
- Registro de conversación en la memoria comercial.

La regla es simple: autonomía en lo seguro, escalado en lo sensible.

### Bloque 5 - WhatsApp y email integrados

WhatsApp entra como canal incluido dentro del sistema mediante Kapso + Hermes. Email entra como canal principal mediante Hermes y Gmail/Workspace.

Incluye:

- Canal WhatsApp integrado para uso interno y atención a clientes/leads.
- Canal email conectado al sistema.
- Separación entre uso interno y uso externo.
- Configuración de número, credenciales, canal y reglas durante la implantación.
- Opt-in, límites, logs y aprobación humana para comunicaciones masivas.

WhatsApp no se plantea como opcional ni como bloque débil. La configuración concreta de Kapso, Meta, número y reglas de uso forma parte normal de la puesta en marcha. Si apareciera un bloqueo grave con Kapso, se mantiene la vía directa con WhatsApp Cloud API como alternativa técnica.

### Bloque 6 - CRM / memoria comercial conectable

El CRM es la memoria comercial del sistema. Ahí deben quedar contactos, oportunidades, conversaciones, tareas, notas e intereses por subvención.

Incluye:

- Modelo mínimo de contactos.
- Oportunidades.
- Conversaciones.
- Notas y tareas.
- Tags e intereses por subvención.
- Registro de opt-in o consentimiento cuando aplique.
- Adapter conectable al CRM elegido.

El CRM concreto queda por elegir con DClick. Opciones viables: Twenty, Baserow, NocoDB o GoHighLevel. La decisión debe equilibrar facilidad de uso, coste, API, adopción por Vivi/María y dependencia de proveedor.

### Bloque 7 - Campañas y comunicaciones

El sistema puede preparar campañas cuando se detecta o analiza una subvención relevante.

Incluye:

- Copy para email y WhatsApp.
- Newsletter.
- Segmentación propuesta.
- CTA.
- Preview.
- Aprobación humana antes de envío.
- Registro y métricas básicas si se envía.

No se vende envío masivo automático sin aprobación. Sí entra la preparación de campañas y mensajes para que DClick comunique mejor, con más rapidez y más control.

### Bloque 8 - Seguridad, trazabilidad y control

La autonomía solo tiene sentido si hay control.

Incluye:

- Logs de acciones.
- Fuentes usadas en respuestas y análisis.
- Permisos por canal.
- Escalado por riesgo.
- No operar sobre todo Drive/correo sin límites.
- No respuesta automática en casos de alto riesgo.
- No envío masivo sin aprobación, opt-in y bajas.
- Reglas de uso responsable y validación RGPD cuando corresponda.

El sistema no busca eliminar el criterio humano. Busca reservarlo para los casos donde realmente aporta valor o reduce riesgo.

### Bloque 9 - Formación y soporte operativo

La adopción importa tanto como la tecnología. El sistema se entregará con formación y acompañamiento para que Vivi y María puedan usarlo sin fricción técnica.

Incluye:

- Uso de Drive Desktop.
- Uso por email y WhatsApp.
- Cómo pedir análisis.
- Cómo aprobar campañas.
- Cómo leer briefings.
- Cómo interpretar escalados.
- Manual operativo.
- 6 meses de soporte funcional y acompañamiento inicial sobre el alcance entregado.

## 5. Tecnología e infraestructura

El diseño prioriza una infraestructura ligera y controlada, evitando convertir el proyecto en una suma de licencias externas.

| Capa | Tecnología / herramienta |
| --- | --- |
| Runtime IA | Hermes como orquestador |
| WhatsApp | Kapso + Hermes |
| Email | Gmail/Workspace + Hermes |
| Documentación | Google Drive / Drive Desktop |
| Radar | BDNS/SNPSAP |
| Base técnica | VPS + Postgres |
| Conocimiento | Markdown + índice ligero |
| CRM | Adapter conectable a Twenty/Baserow/NocoDB/GoHighLevel |
| Seguridad | Logs, permisos, escalado y aprobación humana |

DClick no tiene que gestionar esta complejidad técnica en el día a día. El objetivo es que el equipo trabaje desde Drive, email y WhatsApp.

## 6. Qué incluye el proyecto

### Bloque 1 - Arranque operativo y recopilación inicial

- Diagnóstico operativo inicial.
- Recopilación inicial de accesos, materiales, ejemplos de comunicaciones y criterios operativos.
- Mapa de operativa actual.
- Criterios de subvenciones y foco Canarias.
- Definición de canales.
- Definición de reglas de riesgo.
- Definición de estructura documental.
- Definición de roles, permisos y escalados.

### Bloque 2 - Drive y base documental

- Google Workspace / Drive gobernado.
- Estructura de carpetas.
- Drive Desktop.
- Permisos.
- Plantillas iniciales.
- Orden inicial razonable de documentación.
- Manual de uso.

### Bloque 3 - Radar BDNS/Canarias

- Watcher BDNS/SNPSAP.
- Filtros iniciales.
- Landing zone.
- Deduplicación.
- Archivado.
- Scoring inicial.
- Notificaciones.
- Briefing de oportunidades.

### Bloque 4 - Equipo IA Analista

- Configuración del equipo IA de análisis.
- Paquete de 8 outputs baseline.
- Escritura en Drive.
- Fuentes y citas.
- Prueba con subvenciones reales.
- Ajuste de plantillas, formato y tono.

### Bloque 5 - Atención por email y WhatsApp

- Canal email.
- Canal WhatsApp vía Kapso + Hermes.
- Clasificación de mensajes.
- Respuestas de bajo riesgo.
- Solicitud de datos faltantes.
- Escalado humano.
- Registro en CRM/memoria comercial.
- Controles de seguridad.

### Bloque 6 - CRM / memoria comercial

- Adapter CRM.
- Modelo mínimo de contactos, oportunidades, notas y tareas.
- Selección y validación de CRM concreto.
- Conexión con atención y campañas.
- Registro de conversaciones e intereses por subvención.

### Bloque 7 - Campañas

- Preparación de campañas.
- Segmentación propuesta.
- Textos para newsletter, email y WhatsApp.
- Approval gate.
- Registro.
- Métricas básicas si hay envío.

### Bloque 8 - Seguridad, pruebas, formación y salida controlada

- Logs.
- Taxonomía de riesgo.
- Pruebas con casos reales o anonimizados.
- Briefings.
- Manual operativo.
- Formación.
- Soporte funcional inicial.

## 7. Qué no incluye

El proyecto no incluye:

- Garantía de concesión de subvenciones.
- Dictamen jurídico/fiscal definitivo automático.
- Tramitación completa end-to-end sin revisión humana.
- Envío masivo sin aprobación, opt-in y bajas.
- WhatsApp broadcast ilimitado.
- Operar sobre todo el Drive/correo histórico sin límites.
- Migración histórica completa de todo OneDrive/correo salvo acuerdo específico.
- CRM concreto cerrado si DClick no lo decide.
- Limpieza avanzada de base histórica.
- Portal propio cliente.
- Plataforma SaaS comercial para terceros.
- n8n como core del sistema.
- Baileys/WhatsApp Web como producción.
- Soporte 24/7 salvo pacto.
- Mantenimiento posterior salvo acuerdo.
- Garantía legal/RGPD absoluta.
- Plan detallado de ejecución, backlog atomizado o árbol final de repositorio.

Estas exclusiones protegen el proyecto. Evitan prometer resultados administrativos, automatización sin criterio humano, riesgos de consentimiento o dependencias no validadas.

## 8. Calendario orientativo de puesta en marcha

Plazo estimado total: **10 semanas**.

| Hito | Momento | Descripción | Resultado |
| --- | --- | --- | --- |
| M0 | Semana 1 | Arranque operativo, accesos y materiales clave | Criterios, accesos, materiales y prioridades cerradas |
| M1 | Semana 1-2 | Google Workspace, Drive y base documental | Drive gobernado, cuentas y estructura inicial |
| M2 | Semana 2-4 | Infraestructura, Hermes y workers base | Servidor y runtime IA preparados |
| M3 | Semana 4-6 | Radar BDNS y Equipo IA Analista | Detección, archivado y 8 outputs probados |
| M4 | Semana 6-8 | Atención email/WhatsApp y CRM adapter | Canales, memoria comercial y escalado funcionando |
| M5 | Semana 8-9 | Campañas, logs, evals y briefings | Comunicaciones preparables y trazabilidad |
| M6 | Semana 10 | Formación, ajustes y salida controlada | Equipo formado y sistema entregado |

Este calendario es orientativo y puede ajustarse según accesos, proveedores, disponibilidad de materiales y validaciones operativas.

## 9. Precio y condiciones

### Inversión del proyecto

| Concepto | Importe |
| --- | --- |
| Precio base del proyecto | 5.999 € + IGIC |
| Bonificación por decisión temprana hasta el 30/06/2026 | -1.100 € |
| Precio bonificado | 4.899 € + IGIC |

La bonificación por decisión temprana aplica si el proyecto se contrata antes del **30 de junio de 2026**. No se calcula IGIC en esta propuesta; todos los importes se muestran como `+ IGIC`.

### Forma de pago

Sobre el precio bonificado de **4.899 € + IGIC**:

| Pago | Momento | Importe |
| --- | --- | --- |
| 50% | A la firma | 2.449,50 € + IGIC |
| 50% | A la entrega | 2.449,50 € + IGIC |

Si no se aplica la bonificación por decisión temprana, los importes se calcularán sobre el precio base de **5.999 € + IGIC**.

### Estimación orientativa de esfuerzo por módulo

Precio base del proyecto: **5.999 € + IGIC**. Estimación interna de esfuerzo: aproximadamente **150 horas** de trabajo técnico, funcional y de implantación.

Esta distribución es orientativa y sirve para explicar el peso relativo de cada bloque. No es un parte horario cerrado ni limita la flexibilidad del proyecto: algunas horas podrán moverse entre módulos según lo que se detecte durante el arranque y la implantación.

| Módulo / unidad de producción | Qué incluye | Estimación |
| --- | --- | --- |
| Migración y orden documental Google Workspace / Drive | Configuración de cuentas corporativas, dominio/correo si aplica, estructura Drive, Drive Desktop, permisos, orden inicial desde OneDrive/estructura actual y training básico. | 18 h |
| Servidor DClick IA y runtime always-on | Configuración VPS, entorno base, Hermes, Postgres, workers base, logs, seguridad y configuración inicial. | 18 h |
| Radar inteligente de subvenciones BDNS/Canarias | Watcher BDNS, filtros iniciales, deduplicación, landing zone, archivado, scoring inicial, alertas y briefing de oportunidades. | 22 h |
| Equipo IA Analista de subvenciones | Configuración del equipo de análisis, paquete de 8 outputs, plantillas, escritura en Drive, fuentes/citas y prueba con subvenciones reales. | 26 h |
| Bandeja inteligente de atención por email | Canal email, clasificación de mensajes, respuestas low-risk, escalado, registro en CRM/memoria comercial y logs. | 16 h |
| Canal WhatsApp integrado Kapso + Hermes | Integración WhatsApp, configuración Kapso/Hermes, uso interno/cliente, permisos, logs, respuestas y escalado. | 16 h |
| Memoria comercial y CRM adapter | Modelo mínimo de contactos, oportunidades, conversaciones, notas, tareas, tags, intereses por subvención y conexión con CRM elegido. | 10 h |
| Memoria documental / índice de conocimiento DClick | Markdown, base documental consultable, índice ligero, recuperación con fuentes y estructura para futuras ampliaciones. | 12 h |
| Campañas y comunicaciones con aprobación | Preparación de newsletters, mensajes WhatsApp/email, segmentos, CTA, approval gate y registro básico. | 6 h |
| Seguridad, pruebas, formación y salida controlada | Taxonomía de riesgo, pruebas con casos reales/anonimizados, briefings, manual operativo, formación y ajustes finales. | 6 h |

**Total estimado: 150 horas.**

## 10. Costes externos no incluidos

La arquitectura se ha diseñado para minimizar costes externos recurrentes y dedicar la inversión al sistema operativo IA, no a acumular licencias SaaS.

| Coste externo | Tratamiento en propuesta |
| --- | --- |
| Google Workspace | 16 €/mes por cuenta. Sustituye el uso de cuentas personales y permite trabajar con cuentas corporativas bajo dominio propio. |
| VPS / hosting | 24 € pago único. |
| Dominio / DNS / email | Depende del dominio exacto que DClick quiera comprar o mantener. |
| Kapso | 0 € previsto. |
| Meta / WhatsApp | 0 € previsto. |
| CRM | Twenty/Baserow/NocoDB: 0 €. GoHighLevel: 97 €/mes si DClick prefiere esa vía. |
| LLM / IA | 0 € adicional previsto usando las cuentas existentes de ChatGPT Plus de las usuarias. Si durante la implantación se decidiera activar consumo API externo, se trataría como coste separado. |
| Email marketing | 0 € previsto. La arquitectura evita depender de una herramienta externa específica para este bloque. |

Estos costes pueden cambiar si DClick decide una configuración distinta, un proveedor diferente o un nivel de uso superior.

## 11. Soporte incluido

El proyecto incluye **6 meses de soporte funcional y acompañamiento inicial sobre el alcance entregado**.

Incluye:

- Incidencias sobre el alcance entregado.
- Ajustes menores de uso.
- Dudas operativas.
- Acompañamiento funcional.
- Revisión de funcionamiento de canales, Drive, radar, outputs y escalados.

No incluye:

- Nuevas funcionalidades.
- Soporte 24/7.
- Rediseños de alcance.
- Mantenimiento posterior no pactado.
- Cambios derivados de nuevos proveedores o nuevas integraciones no incluidas.

## 12. Propiedad, acceso y documentación

El proyecto debe dejar a DClick con un sistema documentado, operable y entendible:

- Documentación operativa para Vivi y María.
- Documentación técnica interna según corresponda.
- Configuración del sistema y decisiones principales.
- Manual de uso de Drive, canales, aprobaciones, escalados y briefings.
- Accesos y servicios externos sujetos a sus propias condiciones.

La propiedad, cesión, acceso y responsabilidades finales deberán recogerse en el acuerdo comercial correspondiente. Esta propuesta no sustituye documentación legal definitiva.

## 13. Roadmap de evoluciones funcionales futuras

El alcance actual construye el sistema propio DClick IA. A partir de ahí, se pueden valorar evoluciones funcionales futuras si DClick lo decide y si encajan con presupuesto, datos, adopción y proveedores.

### Proyecto actual - Sistema DClick IA

- Drive gobernado.
- Radar BDNS/Canarias.
- Equipo IA Analista.
- Atención email/WhatsApp de bajo riesgo con escalado.
- CRM adapter.
- Campañas preparables con aprobación.
- Logs, seguridad, formación y briefings.

### Evoluciones funcionales futuras

- Migración histórica completa de todo OneDrive/correo si el volumen lo justifica.
- Portal propio cliente.
- Automatización profunda de expedientes/tramitaciones completas.
- Limpieza avanzada de CRM/base histórica.
- Analytics avanzado de campañas.
- Integraciones adicionales con boletines o fuentes no BDNS.
- Multi-despacho o modelo SaaS si algún día interesa.
- Modelo IA local/self-host si RGPD, coste o estrategia lo exige.

Estas evoluciones no forman parte del alcance actual salvo acuerdo posterior.

## 14. ROI y valor operativo

El valor de Equipo IA DClick no depende solo de ahorrar horas. También reduce dispersión, mejora trazabilidad, evita olvidos, acelera respuestas y permite que el equipo llegue antes a oportunidades relevantes.

Estimación conservadora de volumen operativo:

| Métrica | Estimación |
| --- | --- |
| Subvenciones trabajadas al mes | 10-15 |
| Consultas mensuales estimadas por email/WhatsApp | 40-60 |
| Horas actuales de vigilancia | 8-12 h/mes |
| Horas actuales de atención | 20-30 h/mes |
| Horas actuales de análisis documental | 25-40 h/mes |
| Horas actuales de campañas/CRM/seguimiento | 8-12 h/mes |
| Total trabajo manual atacable estimado | 60-90 h/mes |
| Horas potencialmente liberables de forma conservadora | 25-45 h/mes |
| Coste/hora interno estimado | 40 €/h |
| Valor operativo mensual estimado | 1.000-1.800 €/mes |

Cálculo:

```text
25 h x 40 €/h = 1.000 €/mes
45 h x 40 €/h = 1.800 €/mes
```

No es una promesa de ahorro cerrado. Es una estimación conservadora del volumen de trabajo manual que el sistema puede atacar, pendiente de validación durante el arranque del proyecto.

## 15. Supuestos y dependencias

Estos puntos no bloquean la propuesta, pero deben quedar visibles para evitar convertir incógnitas en promesas:

| Dependencia | Por qué importa |
| --- | --- |
| Workspace/admin/accesos | Necesario para Drive, Gmail, permisos y configuración. |
| Material Drive/OneDrive | Define orden inicial y posible migración posterior. |
| Dominio/correo | Afecta email, entregabilidad y cuentas corporativas. |
| Kapso/Meta/número | Afecta WhatsApp integrado y comunicaciones. |
| CRM elegido | Afecta interfaz visual, coste externo y adopción. |
| Criterios BDNS | Afecta calidad del radar y scoring de relevancia. |
| Opt-in/bajas | Necesario para comunicaciones comerciales y broadcasts. |
| RGPD/proveedores | Necesario para datos sensibles, logs, IA, CRM y retención. |
| Datos reales para pruebas | Necesarios para evaluar respuestas, clasificación y riesgo. |

## 16. Cierre comercial

Con **Equipo IA DClick**, DClick no compra una herramienta aislada. Empieza a construir su propio sistema operativo IA para gestionar subvenciones: detectar oportunidades, analizarlas, responder clientes, preparar comunicaciones y mantener memoria comercial con trazabilidad.

La propuesta combina automatización y control. La IA trabaja donde aporta velocidad; el equipo humano conserva criterio donde hay riesgo, decisión profesional o comunicación sensible.

El resultado esperado es un sistema propio, útil y evolucionable, adaptado a la forma real de trabajar de DClick.

## Anexo integrado A - Presupuesto y condiciones

| Concepto | Detalle |
| --- | --- |
| Precio base | 5.999 € + IGIC |
| Bonificación por decisión temprana | -1.100 € hasta el 30/06/2026 |
| Precio bonificado | 4.899 € + IGIC |
| Plazo estimado | 10 semanas |
| Soporte incluido | 6 meses de soporte funcional y acompañamiento inicial |
| Forma de pago bonificada | 50% a la firma y 50% a la entrega |
| Pago 1 bonificado | 2.449,50 € + IGIC |
| Pago 2 bonificado | 2.449,50 € + IGIC |

Si no se aplica la bonificación por decisión temprana, la forma de pago se mantiene 50/50 y los importes se calculan sobre el precio base.

## Anexo integrado B - Costes externos

| Coste externo | Tratamiento en propuesta |
| --- | --- |
| Google Workspace | 16 €/mes por cuenta. |
| VPS / hosting | 24 € pago único. |
| Dominio / DNS / email | Depende del dominio exacto que DClick quiera comprar o mantener. |
| Kapso | 0 € previsto. |
| Meta / WhatsApp | 0 € previsto. |
| CRM | Twenty/Baserow/NocoDB: 0 €. GoHighLevel: 97 €/mes si DClick prefiere esa vía. |
| LLM / IA | 0 € adicional previsto usando cuentas existentes de ChatGPT Plus de las usuarias. Consumo API externo sería coste separado si se activa. |
| Email marketing | 0 € previsto. |

## Anexo integrado C - Roadmap

### Proyecto actual - Sistema DClick IA

Construcción del sistema propio: Drive, radar, analistas IA, atención email/WhatsApp, CRM adapter, campañas preparadas, logs, seguridad, formación y soporte inicial.

### Evoluciones funcionales futuras

Portal cliente, migración histórica completa, automatización profunda de expedientes, analytics avanzado, integraciones adicionales, multi-despacho/SaaS o IA local si conviene.

### Visión de largo plazo

Convertir DClick IA en un sistema operativo propio del despacho: una base sobre la que sumar capacidades sin depender de prompts sueltos ni procesos manuales desconectados.

## Anexo integrado D - ROI y valor operativo

| Driver | Impacto esperado |
| --- | --- |
| Vigilancia de subvenciones | Menos revisión manual y menor riesgo de llegar tarde. |
| Atención email/WhatsApp | Menos tiempo en respuestas repetitivas y clasificación inicial. |
| Análisis documental | Outputs estándar más rápidos y reutilizables. |
| Campañas y CRM | Comunicaciones más preparadas y memoria comercial más ordenada. |
| Trazabilidad | Más claridad sobre fuentes, decisiones, escalados y actividad. |

Estimación conservadora:

```text
trabajo manual atacable: 60-90 h/mes
horas potencialmente liberables: 25-45 h/mes
coste/hora estimado: 40 €/h
valor operativo mensual estimado: 1.000-1.800 €/mes
```

No se promete ROI garantizado. La cifra debe validarse con datos reales durante el arranque y uso inicial del sistema.

## Anexo integrado E - Inclusiones y exclusiones

### Incluye

- Sistema propio Equipo IA DClick.
- Drive gobernado.
- Radar BDNS/Canarias.
- Equipo IA Analista con 8 outputs.
- Atención email/WhatsApp de bajo riesgo.
- WhatsApp vía Kapso + Hermes.
- Email vía Hermes/Gmail/Workspace.
- CRM adapter.
- Campañas preparadas con approval gate.
- Logs, seguridad, pruebas, formación y soporte inicial.

### No incluye

- Garantía de concesión.
- Dictamen jurídico/fiscal automático definitivo.
- Envío masivo sin aprobación/opt-in.
- Autonomía ilimitada.
- Operación sobre todo Drive/correo.
- CRM concreto cerrado sin decisión de DClick.
- Migración histórica completa salvo acuerdo.
- Soporte 24/7 salvo pacto.
- Plan detallado de ejecución, backlog o árbol de repositorio.

### Rationale de exclusiones importantes

Estas exclusiones no recortan el valor del sistema. Protegen a DClick de promesas incorrectas: resultados administrativos garantizados, automatización sin criterio humano, riesgo de consentimiento, exposición de datos o dependencias externas no validadas.
