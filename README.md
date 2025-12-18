
<p align="center"> <img src="img/datalandWhite.png" width="200"> </p>


Web sobre API de ejemplo para consultar información sobre personajes, películas y parques de Disney. Está pensada como proyecto educativo/demo para mostrar endpoints REST que devuelven JSON.

## Tabla de contenidos

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación y ejecución](#instalación-y-ejecución)
- [Endpoints](#endpoints)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Contribuir](#contribuir)
- [Licencia y contacto](#licencia-y-contacto)

## Descripción

`Dataland` devuelve datos sobre personajes, películas y parques. Ideal para pruebas, demos y aprendizaje sobre diseño de APIs REST.

## Tecnologías

- JSON para intercambio de datos.
- Backend mínimo (JAVASCRIPT) para servir los endpoints.

## Requisitos

- HTML - CSS - API - JAVASCRIPT - JSON 
- Flujo de datos:
- HTML: Prepara el escenario (los contenedores).
- CSS: Definimos estilo 
- javascript: Añade el dinamismo.
- ​API: Provee la fuente de información.
​- JSON: Es el formato ligero de intercambio de datos que viaja por internet.


## Instalación y ejecución

Las instrucciones dependen de la implementación del backend. Aquí hay dos ejemplos rápidos para servir contenido estático o un simple backend:

Con Python (servir carpeta estática):

```bash
# Desde la raíz del proyecto
python -m http.server 3000
```

Con Node.js y `http-server`:

```bash
# Instalar http-server si no está instalado
npm install -g http-server
# Servir en el puerto 3000
http-server -p 3000
```

Después, prueba los endpoints contra `http://localhost:3000` (o el puerto que uses).

## Endpoints

Base URL: `http://localhost:3000` (ajustar según despliegue)

GET /characters
- Descripción: Lista personajes o devuelve un personaje por `id`.
- Parámetros opcionales: `?id=<numero>`


GET /movies
- Descripción: Lista películas o devuelve una película por `id`.
- Parámetros opcionales: `?id=<numero>`


GET /parks
- Descripción: Información sobre parques (ej. Disneyland, Walt Disney World).


## Estructura

- `api/` – Código del BACKEND (endpoints)
- `data/` – Datos JSON de ejemplo
- `docs/` – Documentación adicional
- `README.md` – Este archivo

 Se ha diseñado una estructura HTML5 modular. Utilizando Web Components para el header y footer, manteniendo el código limpio. 

 La parte central es dinámica: mediante JavaScript y la API de Disney, inyectamos las tarjetas de personajes en el characterSection y gestionamos la navegación con un sistema de paginación doble (arriba y abajo) para mejorar la experiencia del usuario."

## Contribuir

Si quieres contribuir:

1. Haz fork del repositorio.
2. Crea una rama `feat/nombre-de-tu-cambio`.
3. Envía un pull request describiendo los cambios.

Para cambios mayores, abre primero un issue para discutir la propuesta.
¡PRUEBA!

## Licencia y contacto

La licencia del proyecto https://github.com/RexTor78/apiDisney/blob/feat/readme/LICENSE o el estado de derechos. Para dudas o propuestas abre un issue en el repositorio.


## Equipo de trabajo

- **Product Owner**: Héctor Santos — github: usuario 
- **Scrum Master**: Xavier Piñeiro — github: usuario
- **Developer**: Melissa Gómez — github: usuario
- **Developer**: Suso Suárez — github: usuario 


Canales de comunicación:

- Slack: `#equipo-disney` / Dataland
- Repositorio: issues / pull requests en este repo
- Documentación y notas: `docs/` o carpeta compartida


## Dailies 


- **Horario**: Lunes a Viernes — 9:00
- **Duración**: 10 minutos
- **Formato**: Cada miembro responde brevemente:
	1. ¿Qué hice ayer?
	2. ¿Qué voy a hacer hoy?
	3. ¿Bloqueos/risks?

Canal y enlace a la reunión:

- Reunión: Zoom / Teams / Meet https://zoom.us/j/94278327258#success



# Daily — 2025-12-16

- Participantes: Xavier, Héctor, Melissa y Suso.

- Punto 1 — Qué hice ayer:
	- ...
- Punto 2 — Qué haré hoy:
	- ...
- Punto 3 — Bloqueos / acciones:
	- ...


Registro semanal (resúmen):

- **Lunes** — Preparación de proyecto, estructura del equipo. Definición de roles.
- **Martes** — Fijar criterios; Tipografías y estilo.
- **Miércoles** — Desarrollo endpoints `/movies` y pruebas.
- **Jueves** — Revisión PRs y QA. Preparación de demo y presentación.
- **Viernes** — Presentación y demostración del proyecto.

¡GRACIAS!
