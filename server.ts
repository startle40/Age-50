import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Gemini API proxy
  app.post('/api/coach', async (req, res) => {
    try {
      const { message } = req.body;
      const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY || '',
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const prompt = `
        You are a helpful and encouraging health coach for "BoomerHealth Essentials", 
        specifically helping seniors (aged 60+) with their arm strength routine.
        The routine consists of: Bicep Curls, Tricep Overhead Extensions, Lateral Raises, and Hammer Curls.
        
        Answer the following question from a user in a helpful, safe, and professional manner:
        "${message}"
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      res.json({ text: response.text });
    } catch (error) {
      console.error('Gemini Error:', error);
      res.status(500).json({ error: 'Failed to get response from Health Coach' });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
