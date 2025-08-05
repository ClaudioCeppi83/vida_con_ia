# Vida con IA

Este es el repositorio para el sitio web "Vida con IA", un landing page diseñado para promocionar un curso práctico sobre el uso de la Inteligencia Artificial en la vida cotidiana.

## ✨ Características

- **Landing Page Atractiva:** Diseño moderno y enfocado en la conversión, construido con Tailwind CSS.
- **Demo Interactiva:** Una sección que permite a los usuarios interactuar con la API de Gemini para obtener respuestas de IA en tiempo real.
- **Backend con Firebase Functions:** El servidor está construido con Node.js y Express, desplegado como una Cloud Function de Firebase.
- **Diseño Responsivo:** Totalmente adaptable a dispositivos móviles y de escritorio.

## 🚀 Puesta en Marcha Local

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/vida-con-ia.git
    cd vida-con-ia
    ```

2.  **Instala las dependencias del proyecto principal:**
    ```bash
    npm install
    ```

3.  **Instala las dependencias de las Cloud Functions:**
    ```bash
    cd functions
    npm install
    cd ..
    ```

4.  **Configura las variables de entorno:**
    - Crea un archivo `.env` en la raíz del directorio `functions`.
    - Añade tu clave de la API de Google Gemini:
      ```
      GOOGLE_API_KEY=TU_API_KEY_AQUI
      ```

5.  **Inicia el emulador de Firebase:**
    ```bash
    firebase emulators:start
    ```

6.  Abre tu navegador y visita `http://localhost:5000`.

## 🛠️ Tecnologías Utilizadas

- **Frontend:** HTML5, Tailwind CSS, JavaScript (ES6+)
- **Backend:** Node.js, Express.js
- **Plataforma:** Firebase (Hosting, Cloud Functions)
- **API de IA:** Google Gemini
