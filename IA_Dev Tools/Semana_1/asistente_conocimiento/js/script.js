document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chatForm');
    const userInput = document.getElementById('userInput');
    const chatBody = document.getElementById('chatBody');

    // Base de conocimiento simulada con fuentes RAG
    const guiasDelCurso = [
        {
            tema: "reglas",
            contenido: "Las reglas (programación tradicional) son instrucciones fijas de tipo if/else. Si el dato cambia y no hay regla, el sistema falla.",
            fuente: "Guía de Fundamentos - Módulo 1.pdf"
        },
        {
            tema: "ejemplos",
            contenido: "El aprendizaje a partir de ejemplos (Machine Learning) entrena al sistema con datos etiquetados para que el modelo infiera patrones estadísticos.",
            fuente: "Lectura de Machine Learning.pdf"
        },
        {
            tema: "generativa",
            contenido: "La IA generativa utiliza modelos entrenados con grandes volúmenes de datos para redactar explicaciones o crear contenido basado en contexto.",
            fuente: "Resumen de IA Generativa.pdf"
        }
    ];

    chatForm.addEventListener('submit', procesarConsulta);

    function procesarConsulta(e) {
        e.preventDefault();
        const query = userInput.value.trim().toLowerCase();

        if (!query) return;

        // 1. Mostrar mensaje del usuario
        appendMessage(userInput.value, 'user');
        userInput.value = '';

        // 2. Mostrar estado de CARGA ("Pensando...")
        const loadingId = appendLoadingIndicator();

        // Simulación del tiempo de latencia de la IA
        setTimeout(() => {
            removeLoadingIndicator(loadingId);

            // Regla administrativa / Humano (H)
            if (query.includes('nota') || query.includes('asistencia') || query.includes('falta') || query.includes('examen')) {
                appendMessage('Esta consulta sobre registros oficiales requiere derivación a revisión humana.', 'bot', 'H');
                return;
            }

            // Búsqueda en la base de conocimiento (Simulando RAG / Modelo M)
            let respuestaEncontrada = guiasDelCurso.find(guia => query.includes(guia.tema));

            if (respuestaEncontrada) {
                const mensajeConFuente = `${respuestaEncontrada.contenido}
                    <div class="source-citation">
                        📌 Fuente: <a href="#fuente" onclick="alert('Abriendo documento: ${respuestaEncontrada.fuente}'); return false;">${respuestaEncontrada.fuente}</a>
                    </div>`;
                appendMessage(mensajeConFuente, 'bot', 'M', true);
            } else {
                // Estado de Error / Honestidad (No sé)
                const mensajeError = `Lo siento, no encontré información exacta sobre "${query}" en las guías actuales. ¿Deseas reportar este vacío o hablar con un coach?`;
                appendMessage(mensajeError, 'bot', 'H');
            }
        }, 800);
    }

    function appendMessage(text, sender, tagType = null, isHtml = false) {
        const msgNode = document.createElement('article');
        msgNode.className = `message ${sender}`;

        let tagHTML = '';
        if (tagType === 'R') tagHTML = '<span class="message-tag tag-r">Regla R</span><br>';
        if (tagType === 'M') tagHTML = '<span class="message-tag tag-m">Modelo M</span><br>';
        if (tagType === 'H') tagHTML = '<span class="message-tag tag-h">Humano H</span><br>';

        if (isHtml) {
            msgNode.innerHTML = `${tagHTML}${text}`;
        } else {
            msgNode.innerHTML = `${tagHTML}${text}`;
        }

        chatBody.appendChild(msgNode);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function appendLoadingIndicator() {
        const id = 'loading-' + Date.now();
        const loadingNode = document.createElement('article');
        loadingNode.className = 'message bot';
        loadingNode.id = id;
        loadingNode.innerHTML = `
            <span class="message-tag tag-m">Modelo M</span><br>
            <div class="loading-indicator">
                <div class="spinner"></div>
                <span>Pensando y consultando documentos...</span>
            </div>
        `;
        chatBody.appendChild(loadingNode);
        chatBody.scrollTop = chatBody.scrollHeight;
        return id;
    }

    function removeLoadingIndicator(id) {
        const element = document.getElementById(id);
        if (element) element.remove();
    }
});