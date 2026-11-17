# Lista de Decisiones de Uso Responsable de IA
**Proyecto:** Asistente de Conocimiento · Módulo IA  
**Autor:** Caro (`carolinnadev`)  
**Marco Legal Referencia:** Ley 1581 de 2012 (Colombia) — Protección de Datos Personales  

---

## 🛡️ Principios Éticos y Decisiones de Diseño

### 1. Privacidad y Protección de Datos
* **Regla:** Queda prohibido solicitar o procesar datos personales sensibles (cédulas, correos personales, números telefónicos, datos de salud o calificaciones).
* **Implementación:** Filtrado previo a nivel de cliente para detectar y anonimizar patrones de datos sensibles antes de interactuar con la API del modelo.

### 2. Detección y Mitigación de Sesgos
* **Regla:** El asistente debe ofrecer el mismo nivel de apoyo y criterios de evaluación sin importar el género, edad, ciudad o antecedente del coder.
* **Implementación:** Batería de pruebas (*unit testing* de prompts) con casos donde solo varían atributos demográficos para validar consistencia y neutralidad en las respuestas.

### 3. Explicabilidad y Trazabilidad (RAG)
* **Regla:** Ninguna respuesta conceptual se basará en la premisa "porque lo dijo la IA".
* **Implementación:** Integración de citas directas y enlaces a las fuentes oficiales de información (documentos PDF del curso) en cada respuesta generada por el Modelo M.

### 4. Transparencia y Divulgación
* **Regla:** El usuario siempre debe saber que interactúa con una IA y cuándo un contenido ha sido generado automáticamente.
* **Implementación:** Microcopia visible permanente en la interfaz y badges explícitos (`Modelo M`, `Regla R`, `Humano H`) para identificar el origen del mensaje.

### 5. Control Humano en Decisiones de Alto Impacto
* **Regla:** La IA actuará únicamente como herramienta de soporte conceptual y nunca tomará decisiones sobre notas, asistencias, faltas o permanencia académica.
* **Implementación:** Detección de palabras clave administrativas para bloquear la respuesta automatizada y activar el botón de derivación inmediata *"Hablar con un coach"*.