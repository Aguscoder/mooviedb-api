import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const TMDB_API_KEY = process.env.TMDB_API_KEY;

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// GET /movies/popular?language=es-ES&page=1
app.get('/movies/popular', async (req, res) => {
  try {
    if (!TMDB_API_KEY) {
      return res.status(500).json({
        error: 'TMDB_API_KEY no configurada. Agregarla en .env o variables de entorno.',
      });
    }

    const language = req.query.language || 'es-ES';
    const page = req.query.page || '1';

    const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: TMDB_API_KEY,
        language,
        page,
      },
      timeout: 10000,
    });

    return res.status(200).json(response.data);
  } catch (err) {
    const status = err?.response?.status || 500;
    const message = err?.response?.data || err?.message || 'Error desconocido';
    return res.status(status).json({ error: message });
  }
});

app.listen(PORT, () => {
  console.log(`MooovieDB API running on port ${PORT}`);
});
