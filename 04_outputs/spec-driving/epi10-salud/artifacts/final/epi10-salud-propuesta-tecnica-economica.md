# PROPUESTA TÉCNICA Y ECONÓMICA

## EPI10 Salud MVP 1.0

> Software propio para operación, portal cliente, backoffice e informe final asistido

Documento confidencial · Uso exclusivo de EPI10 Salud

| Concepto | Detalle |
| --- | --- |
| Precio del proyecto | **4.700 € + IGIC no incluido** |
| Plazo estimado | **8 semanas desde kick-off y accesos confirmados** |
| Soporte incluido | **6 meses desde la entrega formal** |
| Dirigida a | **EPI10 Salud — A la atención de Carmen Sosa** |
| Elaborado por | **Reboot Academy / Skilland — Equipo técnico liderado por Fernando Martín Santana** |
| Fecha | **11 de junio de 2026** |

## 1. El problema

EPI10 Salud está en el momento de convertir una propuesta de alto valor en una operación real, repetible y controlada. El objetivo no es diseñar una plataforma sanitaria completa desde cero, sino poner en marcha una primera fase práctica, segura y suficientemente sólida para operar cuanto antes con herramientas existentes y con una primera base software propia.

Hoy el flujo operativo depende de demasiadas piezas que todavía no están orquestadas entre sí: web/pago, Odoo, Healthie como posible portal cliente, TellmeGen, analíticas/documentos, producción del informe final y seguimiento posterior.

Cuando esas piezas no están coordinadas por un sistema claro, Aitor y el equipo operativo acaban actuando como “middleware humano”: revisan estados, mueven información, recuerdan próximos pasos, coordinan herramientas y se aseguran de que cada cliente avance correctamente. Esto puede funcionar al principio, pero introduce tres riesgos importantes:

- dependencia excesiva de personas concretas;
- riesgo de errores, olvidos o doble entrada;
- dificultad para escalar sin aumentar la carga operativa de forma lineal.

Además, la experiencia cliente puede quedar fragmentada si formularios, consentimientos, cuestionarios, analíticas, comunicación e informe final se gestionan por canales separados.

Para Carmen, la oportunidad de esta primera fase es clara: ordenar el servicio, profesionalizar la relación con el cliente, reducir manualidad, mejorar trazabilidad y construir una operación más segura sin sobredimensionar el proyecto.

Hay una restricción técnica relevante: TellmeGen no dispone actualmente de una API operativa para partners. Por tanto, la integración genética automática no puede ser el núcleo de Fase 1. El problema real de esta fase es construir un sistema operativo inicial para EPI10 Salud, capaz de operar mejor ahora y preparado para crecer después.

## 2. La solución

# EPI10 Salud MVP 1.0

Proponemos desarrollar **EPI10 Salud MVP 1.0**: una primera aplicación/capa software propia de EPI10, desarrollada a medida y desplegada en **AWS España**, que conecta web/pago, Healthie y Odoo, automatiza estados y tareas, centraliza parte del flujo operativo y habilita la entrega trazable del informe final.

EPI10 Salud MVP 1.0 no es una simple conexión entre SaaS. Es una primera capa software propia de EPI10, desarrollada a medida, desplegada en AWS España, que orquesta web/pago, Healthie y Odoo, automatiza estados y tareas, reduce carga operativa y habilita la entrega trazable del informe final.

Esta capa queda diseñada como una **base ampliable** para futuras fases. La idea es usar herramientas existentes para acelerar el MVP, pero construir desde el inicio una base software propia que pueda ir absorbiendo capacidades críticas del negocio conforme EPI10 crezca.

En esta arquitectura:

- **Healthie** actúa como hipótesis principal de portal cliente.
- **Odoo** actúa como backoffice operativo.
- **AWS España** aloja la capa propia.
- **EPI10 Informe Final Copilot** asiste la producción del informe final.
- **TellmeGen queda como sistema externo no integrado en Fase 1** por no disponer de API operativa actual.

El resultado es un primer **activo tecnológico propio** de EPI10 para operar, medir, controlar y evolucionar el servicio.

## 3. Arquitectura funcional

La arquitectura funcional puede entenderse así:

```text
Cliente final
   ↓
Web EPI10 + pago
   ↓
EPI10 Salud MVP 1.0 en AWS España
   ↓                         ↓
Healthie                     Odoo
Portal cliente               Backoffice operativo
   ↓                         ↓
formularios                  estados
consentimientos              tareas
cuestionarios                responsables
analíticas/documentos        dashboard operativo
informe final                seguimiento

Y aparte:

EPI10 Informe Final Copilot
   ↓
inputs anonimizados/pseudonimizados
   ↓
borrador asistido
   ↓
revisión humana obligatoria
   ↓
informe final validado
   ↓
entrega en Healthie
   ↓
estado actualizado en Odoo
```

La web capta y cobra. Healthie centraliza la relación con el cliente. Odoo ordena la operación interna. EPI10 Salud MVP 1.0 orquesta eventos, estados, tareas y trazabilidad. El Copilot asiste la producción del informe.

TellmeGen no se integra automáticamente en Fase 1 porque el proveedor no dispone de API operativa actual. El equipo EPI10 seguirá usando TellmeGen como sistema externo y sus resultados como input del proceso, pero no se venderá como integración automática hasta que exista una API real, documentada y viable.

## 4. EPI10 Salud MVP 1.0

EPI10 Salud MVP 1.0 es el entregable tecnológico central del proyecto.

Consiste en una primera capa de orquestación con lógica de negocio propia, desarrollada específicamente para EPI10. Su función es coordinar eventos y estados críticos entre web/pago, Healthie y Odoo, manteniendo trazabilidad sin convertirse en una plataforma sanitaria completa.

Componentes previstos:

| Componente | Función |
| --- | --- |
| Backend propio | Servicio TypeScript / NestJS para ejecutar la lógica de negocio. |
| Base técnica | PostgreSQL técnico mínimo para IDs, estados, trazabilidad e idempotencia. |
| AWS España | Infraestructura de despliegue de la capa propia. |
| Endpoints web/pago | Recepción de eventos como lead creado o pago confirmado. |
| Healthie API/Webhooks | Alta/invitación de cliente, eventos de onboarding, documentos e informe si el plan lo permite. |
| Odoo API | Contactos, casos, estados, tareas, responsables y dashboard operativo. |
| Motor de estados | Seguimiento del avance operativo de cada cliente. |
| Motor de tareas | Creación de tareas y avisos para Aitor/equipo. |
| Trazabilidad | Registro técnico minimizado de eventos, errores y sincronizaciones. |
| Control de errores | Reintentos, idempotencia y detección de incidencias. |
| Mapeo de IDs | Relación entre IDs de web/pago, Healthie, Odoo y caso interno. |
| Módulo de informe final | Subida o registro del informe final si Healthie API lo permite. |

Este bloque deja a EPI10 con una base propia. No sustituye Healthie ni Odoo en Fase 1. Se apoya en esas herramientas para acelerar el lanzamiento, pero concentra en software propio la lógica que da valor diferencial y permite evolucionar el sistema.

## 5. Healthie como portal cliente

Healthie se plantea como hipótesis principal de portal cliente porque cubre un conjunto de necesidades cercanas al servicio EPI10:

- perfil cliente;
- onboarding;
- formularios;
- consentimientos;
- cuestionarios;
- subida de analíticas y documentos;
- comunicación segura;
- entrega de informes;
- seguimiento.

EPI10 ya dispone, está valorando o puede contratar Healthie como herramienta principal. Como referencia pública inicial, **Healthie Group aparece desde 149,99 USD/mes**. El coste real dependerá del plan, usuarios, API/add-ons y condiciones contratadas. La API/add-on debe validarse antes de cerrar la contratación.

Healthie no queda cerrado al 100% hasta validar plan, coste, idioma, API/webhooks, DPA/GDPR, residencia de datos, límites funcionales y condiciones de uso.

ContinuousCare o una herramienta equivalente quedaría como alternativa si Healthie no encaja por coste, API, DPA, residencia, idioma o requisitos funcionales.

## 6. Odoo como backoffice operativo

Odoo actuará como backoffice operativo de EPI10, no como portal cliente ni como repositorio clínico/genético.

Su papel en Fase 1 será ordenar internamente:

- contactos y clientes;
- casos o servicios EPI10;
- estados;
- tareas;
- responsables;
- fechas clave;
- dashboard operativo básico;
- seguimiento;
- facturación o pedidos si aplica.

Odoo debe recibir estados, tareas, referencias y trazabilidad operativa. No debe convertirse en repositorio de datos genéticos crudos.

La integración se plantea vía API y configuración de modelos, campos y vistas. No se propone de entrada un módulo custom de Odoo salvo que durante la ejecución se demuestre necesario.

No se estima licencia adicional de Odoo en esta propuesta; cualquier coste dependerá de la modalidad actual, hosting, usuarios o soporte que EPI10 ya tenga contratado o decida mantener.

## 7. EPI10 Informe Final Copilot

El informe final es una de las piezas centrales del modelo de negocio de EPI10. Por eso Fase 1 no debe limitarse a entregar el informe por un canal más cómodo: debe empezar a convertir su producción en un sistema asistido, trazable y propio.

**EPI10 Informe Final Copilot** será un sistema asistido para preparar borradores internos del informe final EPI10, usando inputs anonimizados/pseudonimizados y con **revisión humana obligatoria**.

Debe incluir:

- checklist de inputs;
- script propio de anonimización/pseudonimización;
- prompts, skills, subagentes y scripts;
- generación de borrador preliminar;
- revisión humana obligatoria;
- exportación final;
- subida a Healthie si API lo permite;
- actualización de estado en Odoo;
- formación a Aitor/equipo.

El Copilot no es diagnóstico automático. No es interpretación genética autónoma. No genera el informe final sin revisión. El output inicial es un borrador interno y la versión final la valida EPI10.

El valor estratégico es claro: si EPI10 empieza a sistematizar el informe final desde Fase 1, reduce carga manual ahora y construye una capacidad diferencial a futuro.

## 8. Anonimización y tratamiento de datos sensibles

El proyecto se diseñará con una lógica de minimización de datos, trazabilidad y control de acceso.

Para el Copilot y los procesos asociados se incluirá:

- checklist de anonimización;
- script propio anonimizador;
- eliminación de identificadores directos;
- pseudonimización por case ID;
- revisión previa antes de usar inputs en el Copilot;
- no almacenar datos genéticos crudos en Odoo;
- no almacenar datos genéticos crudos en PostgreSQL técnico;
- logs sin datos sensibles;
- retención mínima de paquetes temporales;
- revisión legal/DPO si EPI10 lo requiere.

La implementación técnica se diseñará orientada a minimización, trazabilidad y control de acceso. La validación legal/GDPR debe realizarla el equipo legal/DPO correspondiente si EPI10 lo considera necesario.

No se promete cumplimiento legal absoluto como resultado automático del desarrollo técnico.

## 9. Tecnología e infraestructura

| Capa | Tecnología / Herramienta |
| --- | --- |
| Portal cliente | Healthie como hipótesis principal |
| Alternativa portal | ContinuousCare o herramienta equivalente si Healthie no encaja |
| Backoffice | Odoo como backoffice operativo |
| Backend propio | TypeScript / NestJS |
| Base técnica | PostgreSQL |
| Infraestructura | AWS España |
| Integraciones | Healthie API/Webhooks, Odoo API, Web/Pago |
| Informe final | EPI10 Informe Final Copilot |
| IA / LLM | Cuentas corporativas/autorizadas de EPI10 o herramientas validadas durante la ejecución |
| Seguridad | Minimización, control de accesos, logs técnicos, anonimización |

Infraestructura AWS España: se contempla una estimación inicial de **44 USD/mes** para alojar la capa propia de EPI10 Salud MVP 1.0 en una configuración ligera de Fase 1. Este coste será asumido directamente por EPI10 y podrá ajustarse si durante la ejecución se requieren más recursos, backups, retención de logs, disponibilidad o servicios adicionales. La configuración final se validará antes del despliegue.

AWS España no está incluido dentro del precio de implantación.

Healthie, AWS y posibles costes de proveedores externos deben quedar separados del precio de implantación.

## 10. Sobre el equipo responsable del desarrollo

El proyecto será liderado por un equipo compacto, senior y orientado a producto, software, cloud, integraciones e IA aplicada.

| Rol | Nombre | Responsabilidad principal |
| --- | --- | --- |
| Tech Lead / Arquitectura | Fernando Martín Santana | Dirección técnica, arquitectura cloud/software, validación de decisiones críticas, supervisión de calidad técnica, escalabilidad y seguridad. |
| Product Lead / Product Manager | Raúl Artiles | Dirección funcional del MVP, priorización, coordinación de alcance, validación de experiencia cliente y enfoque producto/comercial. |
| Product Manager / Delivery Coordination | Romina Ojeda | Coordinación operativa del proyecto, seguimiento de hitos, comunicación con cliente, control de entregables y acompañamiento de implantación. |
| Ingeniero de IA | Aaron | Diseño del EPI10 Informe Final Copilot, prompts, skills, anonimización/pseudonimización, pruebas de borrador y documentación de uso. |
| Desarrollador Full-stack / Integraciones | Brian | Desarrollo del EPI10 Salud MVP 1.0, APIs, Healthie, Odoo, web/pago, AWS España, PostgreSQL técnico, estados, tareas y trazabilidad. |

Fernando Martín Santana es un líder técnico con más de 20 años de experiencia en desarrollo de software, arquitectura cloud e inteligencia artificial.

Experiencia relevante:

- **CTO en ComplexChaos.ai, San Francisco (2023-2025).** Empresa de IA respaldada por Village Global. Plataforma de IA para negociaciones multipartitas con NLP a gran escala. Arquitectura full-stack y despliegue en AWS.
- **CTO Fractional en Mottum Analytica (2026-presente).** Líder técnico de Noetia.io, plataforma de IA para análisis de licitaciones públicas en España, asistentes especializados, análisis documental automatizado y scoring.
- **Fundador de Reboot Academy (2019-2025).** Empresa de educación tecnológica con más de 600 graduados y 93% de empleabilidad. Desarrollo de edukami.ai, plataforma con IA adoptada por Universidad de La Laguna, Gobierno de Canarias e ITC. Equipo de 12 ingenieros y orquestación multi-LLM.
- **Product Manager en Telefónica I+D.** Bluevia.com, APIs para desarrolladores en 16 países y 260 millones de clientes móviles.
- **CTO en PCCW Solutions, Hong Kong.** Equipo de más de 25 ingenieros, plataforma e-commerce a gran escala y migración a microservicios en AWS.
- **Investigador AI en NTT Emergent Technologies Lab, Japón.** Investigación en computación ubicua con MIT Media Lab / Vulcanus.
- **Consultor Senior en Fusion Systems, Japón/Singapur.** Sistemas de trading de alta frecuencia y consultoría de software delivery.

Formación relevante:

- Ingeniero en Informática, ULPGC.
- Máster en Inteligencia de Negocio y Gestión del Conocimiento, UOC.
- Machine Learning, Stanford University.
- Deep Learning, EOI.
- Data Science, GA.

La combinación de experiencia en arquitectura cloud, APIs, productos propios e inteligencia artificial encaja especialmente bien con la naturaleza de EPI10 Salud MVP 1.0: un primer activo tecnológico propio, operativo y ampliable.

## 11. Qué incluye este proyecto

### Bloque 1 — Arranque y diseño operativo

- Workshop de arranque operativo de 3 horas.
- Checklist previo para EPI10.
- Mapa operativo de Fase 1.
- Estados, responsables y puntos de automatización.

### Bloque 2 — Portal cliente

- Validación de Healthie como hipótesis principal.
- Configuración inicial de Healthie si se valida.
- Formularios, consentimientos y cuestionarios.
- Documentos y analíticas.
- Entrega de informe final.
- Comunicación y seguimiento según capacidades de la herramienta.

### Bloque 3 — Backoffice Odoo

- Configuración de Odoo como backoffice operativo.
- Contactos, casos y servicios.
- Estados.
- Tareas.
- Responsables.
- Dashboard operativo básico.

### Bloque 4 — EPI10 Salud MVP 1.0

- Desarrollo de capa software propia.
- Despliegue en AWS España.
- Integración web/pago.
- Integración Healthie API/webhooks.
- Integración Odoo API.
- Motor de estados y tareas.
- Trazabilidad técnica.
- PostgreSQL técnico mínimo.

### Bloque 5 — EPI10 Informe Final Copilot

- Checklist de inputs.
- Script anonimizador.
- Prompts, skills, subagentes y scripts.
- Borrador asistido.
- Revisión humana obligatoria.
- Exportación/subida a Healthie si API lo permite.
- Actualización de estado en Odoo.

### Bloque 6 — Documentación, formación y soporte

- Documentación técnica.
- Documentación operativa.
- Formación inicial.
- Soporte incluido durante 6 meses desde la entrega formal.

## 12. Qué no incluye esta fase

No incluye en Fase 1:

- integración automática TellmeGen;
- creación automática de usuarios, tests o barcodes en TellmeGen;
- consulta automática de estado o resultados TellmeGen;
- descarga automática de PDF TellmeGen;
- ingesta estructurada de resultados genéticos;
- dashboard genética;
- interpretación genética automática;
- diagnóstico automatizado;
- gemelo digital;
- plataforma sanitaria propia completa;
- app móvil propia si Healthie/equivalente cubre portal/app;
- garantía legal/GDPR absoluta;
- nuevas funcionalidades fuera del alcance;
- mantenimiento posterior al periodo incluido, salvo nuevo acuerdo.

TellmeGen queda fuera no por una decisión arbitraria de diseño, sino porque el proveedor no dispone actualmente de una API operativa disponible para esta integración. Si TellmeGen habilita una API real, documentada y viable, la integración podrá plantearse como Fase 2.

## 13. Plan de trabajo

El proyecto se plantea con un plazo estimado de **8 semanas desde kick-off y accesos confirmados**.

| Hito | Semana | Descripción | Entregable / criterio de aceptación |
| --- | --- | --- | --- |
| M0 | Semana 1 | Kick-off y workshop operativo | Sesión 3h, checklist revisado, estados iniciales cerrados |
| M1 | Semana 1-2 | Validación Healthie/Odoo/Web | Decisiones de herramienta, accesos, APIs y restricciones |
| M2 | Semana 2-3 | Configuración portal y backoffice | Healthie/Odoo preparados para flujo base |
| M3 | Semana 3-5 | Desarrollo EPI10 Salud MVP 1.0 | Backend propio, AWS España, eventos y sincronizaciones base |
| M4 | Semana 5-6 | EPI10 Informe Final Copilot | Checklist, script anonimizador, flujo de borrador y revisión |
| M5 | Semana 6-7 | Integración, QA y pruebas | Flujo end-to-end validado con casos de prueba |
| M6 | Semana 7-8 | Formación y salida controlada | Equipo formado, documentación entregada, soporte activado |

Esta tabla presenta hitos comerciales y criterios de aceptación de alto nivel para que EPI10 entienda el recorrido del proyecto.

## 14. Precio y condiciones

| Concepto | Detalle | Importe |
| --- | --- | ---: |
| Desarrollo e implantación EPI10 Salud MVP 1.0 | Software propio, configuración, integraciones, Copilot, documentación y formación | **4.700 €** |
| IGIC | No incluido | — |
| Total sin IGIC |  | **4.700 €** |

El precio del proyecto es **4.700 € + IGIC no incluido**.

### Desglose orientativo del esfuerzo

| Bloque | Descripción | Dedicación estimada | Importe |
| --- | --- | ---: | ---: |
| B1. Configuración Healthie / Odoo | Configuración inicial de portal cliente y backoffice, estados base, vistas y preparación operativa. | 6 h | 300 € |
| B2. EPI10 Salud MVP 1.0 | Desarrollo de la capa software propia, APIs, eventos web/pago, Healthie, Odoo, estados, tareas, trazabilidad y PostgreSQL técnico. | 34 h | 1.700 € |
| B3. EPI10 Informe Final Copilot | Checklist, script anonimizador, prompts/skills, borrador asistido, flujo de revisión humana y preparación de entrega. | 24 h | 1.200 € |
| B4. Integración, QA y pruebas | Pruebas end-to-end, validación de eventos, subida/entrega del informe, manejo de errores y ajustes finales. | 12 h | 600 € |
| B5. Documentación, formación y activación de soporte | Documentación técnica, documentación operativa, formación inicial y activación del soporte incluido. | 8 h | 400 € |
| B6. Preparación infraestructura AWS | Configuración inicial de AWS España, entorno de despliegue, secretos/configuración, logs, backups básicos y base cloud ampliable. | 10 h | 500 € |
|  | **Total** | **94 h** | **4.700 €** |

## 15. Costes externos previstos

Los siguientes costes externos no están incluidos en el precio de implantación:

| Coste externo | Tratamiento |
| --- | --- |
| Healthie licencia | Healthie se plantea como hipótesis principal de portal cliente. Como referencia pública inicial, Healthie Group aparece desde 149,99 USD/mes. |
| Healthie API/add-on | Necesario si Healthie se confirma para el alcance previsto. Coste pendiente de validación del plan y cotización. |
| Healthie usuarios/add-ons | Pendiente de plan real, número de usuarios y condiciones contratadas. |
| Odoo | No se estima licencia adicional de Odoo en esta propuesta; cualquier coste dependerá de la modalidad actual, hosting, usuarios o soporte que EPI10 ya tenga contratado o decida mantener. |
| AWS España | Estimación inicial de 44 USD/mes para una configuración ligera de Fase 1. |
| LLM/API Copilot | No se presupuesta un coste LLM/API propio para esta fase. |
| Legal/DPO | Si EPI10 requiere revisión especializada. |

Infraestructura AWS España: se contempla una estimación inicial de **44 USD/mes** para alojar la capa propia de EPI10 Salud MVP 1.0 en una configuración ligera de Fase 1. Este coste será asumido directamente por EPI10 y podrá ajustarse si durante la ejecución se requieren más recursos, backups, retención de logs, disponibilidad o servicios adicionales. La configuración final se validará antes del despliegue.

No se presupuesta un coste LLM/API propio para esta fase. El uso del EPI10 Informe Final Copilot se apoyará en las cuentas corporativas/autorizadas de EPI10 o en las herramientas que se validen durante la ejecución. Si más adelante se decide usar una API LLM dedicada, su coste se presupuestará aparte.

## 16. Forma de pago

| Pago | Momento | Importe |
| --- | --- | ---: |
| 50% | Firma del contrato | **2.350 € sin IGIC** |
| 50% | Entrega formal | **2.350 € sin IGIC** |

Los importes anteriores no incluyen IGIC.

## 17. Soporte incluido

Soporte incluido durante **6 meses desde la entrega formal**.

Este soporte cubre:

- incidencias sobre el alcance entregado;
- soporte sobre EPI10 Salud MVP 1.0;
- soporte sobre EPI10 Informe Final Copilot;
- soporte de despliegue AWS;
- soporte de integraciones Healthie/Odoo/Web;
- acompañamiento inicial;
- formación y dudas operativas.

No incluye:

- nuevas funcionalidades;
- integración TellmeGen;
- rediseño completo;
- cambios legales/regulatorios;
- soporte 24/7 salvo pacto expreso;
- mantenimiento posterior al periodo incluido.

El mantenimiento posterior se valorará al final del periodo incluido si procede.

## 18. Propiedad del código y documentación

Todo el código desarrollado específicamente para EPI10 Salud se entregará a EPI10 y pasará a formar parte de sus activos tecnológicos.

Esto incluye:

- código EPI10 Salud MVP 1.0;
- EPI10 Informe Final Copilot;
- script anonimizador;
- integraciones propias;
- documentación técnica;
- documentación operativa;
- documentación suficiente para que cualquier equipo autorizado por EPI10 pueda trabajar sobre el sistema.

Esta cesión se refiere al software específico desarrollado para EPI10. Librerías open source, frameworks, servicios de terceros y herramientas preexistentes mantienen sus propias licencias y condiciones.

## 19. Roadmap

### Fase 1 — EPI10 Salud MVP 1.0

- Portal cliente.
- Odoo backoffice.
- Software propio en AWS España.
- Automatizaciones operativas.
- EPI10 Informe Final Copilot.
- Soporte inicial.

### Fase 2 — Automatización y ampliación

- Integración TellmeGen si habilita API real, documentada y viable.
- Mejora del Copilot.
- Automatización documental avanzada.
- Reporting operativo avanzado.
- Más eventos Healthie/Odoo.
- Validaciones internas.

### Fase 3 — Capacidades propias / gemelo digital

- Evolución del portal cliente propio.
- Posible reducción progresiva de dependencia de Healthie.
- Posible reducción progresiva de dependencia de Odoo.
- Research médico asistido.
- Integración de papers/evidencia científica.
- Módulos propios de análisis.
- Base futura para gemelo digital.

Fase 3 es visión futura. No está incluida en Fase 1.

## 20. ROI y valor operativo

El valor de EPI10 Salud MVP 1.0 no depende solo de ahorrar horas. También depende de reducir fricción, errores, dispersión documental y dependencia de procesos manuales.

Valor esperado:

- reducción de manualidad de Aitor/equipo;
- menor doble entrada;
- menos errores operativos;
- mejor trazabilidad;
- entrega más profesional del informe;
- menor dependencia de email;
- base escalable;
- capacidad de atender más clientes sin aumentar linealmente la carga operativa.

La fórmula de estimación puede ser:

```text
horas ahorradas al mes = horas ahorradas por cliente x clientes al mes
```

Si el equipo ahorra `X` horas por cliente y procesa `Y` clientes al mes, el ahorro mensual estimado sería `X x Y` horas. Esta cifra se podrá concretar al inicio de Fase 1 cuando EPI10 comparta volumen y tiempos actuales.

Tomás puede usar esta sección para valorar coste, ROI y capacidad de escalar, pero el diseño funcional sigue priorizando a Carmen como buyer principal y a Aitor/equipo como fuente del dolor operativo.

## 21. Supuestos y dependencias

Esta propuesta asume:

- Healthie pendiente de validación final de plan, coste, API, DPA, residencia e idioma.
- Odoo pendiente de revisar modalidad, API y configuración real.
- Web/pago pendiente de confirmar eventos o mecanismo de integración.
- AWS a contratar/pagar por EPI10.
- API Healthie/add-on pendiente de cotización.
- Legal/DPO si EPI10 lo requiere.
- TellmeGen sin API actual, fuera de Fase 1.

Estos puntos no bloquean la propuesta, pero deben quedar visibles para no convertir incógnitas en promesas.

## 22. Cierre comercial

Con **EPI10 Salud MVP 1.0**, EPI10 no solo implanta herramientas existentes: empieza a construir su primera base software propia para operar, escalar y evolucionar el servicio.

La Fase 1 permite salir al mercado con una operación más ordenada, un portal cliente profesional, un backoffice trazable y un proceso asistido de producción del informe final, sin sobredimensionar el proyecto ni depender de integraciones genéticas que hoy el proveedor no ofrece.

El objetivo es pragmático: lanzar antes, operar mejor y construir desde el principio un activo tecnológico propio que pueda crecer con EPI10.
