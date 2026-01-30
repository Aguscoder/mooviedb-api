# MooovieDB API (NodeJS)

API en NodeJS/Express para LAB IV. Expone endpoints propios y consulta TMDB del lado del servidor.

## Requisitos
- Node 18+

## Instalación
```bash
npm install
```

## Variables de entorno (.env)
1) Copiá `.env.example` a `.env` (NO se sube a Git):

```env
PORT=3000
TMDB_API_KEY=tu_api_key_de_tmdb
```

2) Ejecutar local:
```bash
npm start
```

## Endpoints
- `GET /health` → OK
- `GET /movies/popular?language=es-ES&page=1`

## Deploy (Render)
- Create "Web Service" desde GitHub
- Build Command: `npm install`
- Start Command: `npm start`
- Agregar variables de entorno:
  - `TMDB_API_KEY`
  - `PORT` (opcional; Render suele proveer `PORT` automáticamente)
