/**
 * index.js
 * 
 * Este archivo contiene las Cloud Functions para Firebase.
 * Actualmente, no contiene lógica de API de Gemini después de la refactorización.
 * 
 * Aquí se pueden añadir futuras funciones de backend, asegurando siempre
 * las mejores prácticas de seguridad y manejo de errores.
 */

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

require('dotenv').config();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// No hay endpoints de API de Gemini aquí

exports.api = functions.https.onRequest(app);