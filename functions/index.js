const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const axios = require("axios");

require('dotenv').config();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const API_KEY = process.env.GOOGLE_API_KEY;

app.post('/generate', async (req, res) => {
    const userPrompt = req.body.prompt;

    if (!userPrompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    if (!API_KEY || API_KEY === 'TU_API_KEY_AQUI') {
        return res.status(500).json({ error: 'API key not configured on the server.' });
    }

    const systemPrompt = `Actúa como un asistente de IA experto en organizar la vida cotidiana. El usuario te ha dado un problema o una idea. Ofrece una solución concisa y creativa, enfocada en la organización, productividad o creatividad. El problema/idea del usuario es: ${userPrompt}`;
    const payload = {
        contents: [{ role: "user", parts: [{ text: systemPrompt }] }]
    };
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;

    try {
        const response = await axios.post(apiUrl, payload);
        res.json(response.data);
    } catch (error) {
        console.error('Error calling Gemini API:', error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).json({ error: 'Failed to get response from AI' });
    }
});

exports.api = functions.https.onRequest(app);