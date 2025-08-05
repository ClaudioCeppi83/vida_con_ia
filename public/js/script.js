document.addEventListener('DOMContentLoaded', () => {
    const promptInput = document.getElementById('prompt-input');
    const generateBtn = document.getElementById('generate-btn');
    const btnText = document.getElementById('btn-text');
    const loadingSpinner = document.getElementById('loading-spinner');
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
    const errorMessage = document.getElementById('error-message');

    // --- Lógica de la API de Gemini (Demo Interactiva) ---
    generateBtn.addEventListener('click', generateResponse);

    async function generateResponse() {
        const userPrompt = promptInput.value.trim();
        if (!userPrompt) {
            alert("Por favor, introduce tu pregunta o idea.");
            return;
        }

        // Resetear UI
        resultContainer.classList.add('hidden');
        errorMessage.classList.add('hidden');
        resultText.textContent = '';
        btnText.classList.add('hidden');
        loadingSpinner.classList.remove('hidden');
        generateBtn.disabled = true;

        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt: userPrompt })
            });

            const result = await response.json();

            if (!response.ok) {
                // Si la respuesta no es OK, lanzamos un error con el mensaje del backend
                throw new Error(result.error || `Error del servidor: ${response.status}`);
            }

            const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

            if (text) {
                resultText.textContent = text;
                resultContainer.classList.remove('hidden');
            } else {
                // Este error se activa si la API de Gemini devuelve una respuesta 200 pero sin contenido válido
                throw new Error("La IA no ha devuelto una respuesta válida. Inténtalo de nuevo con otra pregunta.");
            }

        } catch (e) {
            console.error("Fallo en la llamada a la API:", e);
            // Mostramos un mensaje más amigable al usuario
            errorMessage.textContent = `Error: ${e.message}`;
            errorMessage.classList.remove('hidden');
        } finally {
            // Restaurar el estado del botón independientemente del resultado
            btnText.classList.remove('hidden');
            loadingSpinner.classList.add('hidden');
            generateBtn.disabled = false;
        }
    }
});
