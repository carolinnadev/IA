# Semana 3: Ingeniería de Prompts y Evaluación Básica

En esta tercera semana del módulo nos enfocamos en el diseño estructurado de prompts reutilizables y en la aplicación de metodologías de evaluación mediante casos de prueba controlados para evitar alucinaciones en modelos de lenguaje.

---

## Contenido de la Semana 3

### 1. Plantilla de Prompt Reutilizable
Diseño de un prompt optimizado para un asistente virtual de soporte del Clan para coders principiantes, estructurado bajo componentes clave:
* **[Rol]**: Definición del asistente virtual de soporte.
* **[Contexto]**: Delimitación estricta de la información oficial sobre la dinámica semanal, calendario, temas de las semanas 1, 2 y 3, modalidades de entrega y exclusión de fechas límite o notas.
* **[Instrucción]**: Pauta clara para procesar y responder la variable `{pregunta}`.
* **[Restricciones]**: Directrices para mantener la concisión, rechazar temas ajenos, evitar alucinaciones y derivar excepciones al TL o coach.
* **[Formato de Salida]**: Estructura estandarizada en formato JSON (`respuesta` y `fuente`).

### 2. Matriz de Evaluación (5 Casos de Prueba)
Implementación y validación del comportamiento del asistente a través de escenarios diversos:
* **Caso 1 (Pregunta Frecuente / Fácil):** Consulta sobre el día y la duración de la sesión con el TL.
* **Caso 2 (Pregunta Frecuente / Fácil):** Consulta sobre la evidencia específica de la Semana 3.
* **Caso 3 (Pregunta Ambigua):** Sintetiza los tres momentos clave del desarrollo semanal ante una duda general.
* **Caso 4 (Datos Faltantes / Excepción):** Manejo seguro ante solicitudes de fechas límite o notas, redirigiendo correctamente con el TL o coach.
* **Caso 5 (Fuera de Tema):** Rechazo amable y respetuoso ante peticiones ajenas al trayecto de IA del clan.

### 3. Review Breve Post-Sesión
* **Piezas clave del prompt:** Verificación de la inclusión de rol, contexto, instrucciones, restricciones, formato JSON y variable de entrada.
* **Estrategia de evaluación:** Análisis de robustez frente a preguntas sencillas, ambiguas, vacíos de información y temas fuera de alcance para garantizar respuestas consistentes y prevenir alucinaciones.