# Semana 2: Fundamentos de IA y Arquitectura del Asistente en JavaScript

En esta segunda semana del módulo profundizamos en los fundamentos de la inteligencia artificial, contrastando la programación tradicional por reglas frente al aprendizaje automático y la IA generativa. Además, aplicamos estos conceptos creando la estructura base para un asistente inteligente interactivo utilizando **JavaScript**, **HTML** y archivos de texto de apoyo.

---

## Contenido de la Sesión 1 (Semana 2)

### 1. Mapa de Conceptos: Fundamentos de IA (`mapa_de_conceptos.txt`)
Estructura conceptual y comparativa analizada durante la sesión:
* **Programación por Reglas (Código Tradicional):** Funciona con algoritmos fijos y reglas estrictas (`IF` / `ELSE`). Si un caso no fue contemplado explícitamente, el sistema falla o arroja un error (*Reto 1: Tarjetas*).
* **Aprendizaje de Ejemplos (Machine Learning):** Encuentra patrones a partir de datos existentes (entrenamiento) y tiene la capacidad de generalizar ante datos totalmente nuevos (*Reto 2: Clasificador de spam/no spam*).
* **IA Generativa:** Subcampo enfocado en crear contenido nuevo (texto, código, imágenes) basándose en los patrones aprendidos por el modelo.

### 2. Estructura de Flujo para el Asistente (Reto 3)
Diseño de la arquitectura lógica dividida en tres fases clave:
* **R [Reglas / If-Else]:** Validación inicial de entradas, control de formatos y detección de errores básicos.
* **M [Modelo / IA Generativa]:** Procesamiento inteligente, consulta de guías y generación de respuestas basadas en el contexto.
* **H [Revisión Humana]:** Derivación de casos ambiguos, calificaciones y faltas para supervisión directa por un operador.

### 3. Implementación Práctica (`index.html` y `script.js`)
* **`index.html`:** Interfaz visual desarrollada para interactuar con el usuario, estructurando los campos de entrada y la visualización de respuestas del asistente.
* **`script.js`:** Lógica de programación implementada en JavaScript para manejar el flujo de validaciones, la simulación de respuestas del asistente y la gestión de eventos en el navegador.

### 4. Declaración de Límites del Asistente
Como parte del entregable, se definieron los alcances operativos del prototipo:
> *"Nuestro asistente ayuda a procesar consultas frecuentes y ordenar información básica, pero todavía no debe tomar decisiones críticas ni ejecutar cambios directos en el sistema sin supervisión humana."*