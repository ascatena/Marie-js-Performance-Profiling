# MARIE.js - Performance & Memory Profiling Edition

![Svelte](https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

Esta versión modificada del simulador **MARIE.js** introduce capacidades de perfilado de rendimiento y análisis de ocupación de memoria, permitiendo evaluar la eficiencia de algoritmos escritos en lenguaje ensamblador MARIE.

Autor de las modificaciones: **Adriano Scatena**

---

## 🚀 Mejoras e Implementaciones

A diferencia de la versión original, esta edición se centra en la métrica de eficiencia del hardware y el uso optimizado de los recursos de memoria.

### 1. Panel de Análisis de Rendimiento (Performance)
Se ha integrado un nuevo módulo en la interfaz de usuario que monitorea la ejecución en tiempo real:
* **Contador de Microsteps:** Registra el total de micro-operaciones de transferencia entre registros (RTL) realizadas por la unidad de control.
* **Contador de Instrucciones:** Muestra la cantidad de instrucciones completas (ciclos de búsqueda, decodificación y ejecución) procesadas.

### 2. Profiling de Memoria por Segmentos
El simulador ahora identifica y diferencia el uso de la memoria principal ($4096 \times 16$ bits) en dos categorías:
* **Segmento de Programa:** Espacio ocupado por las instrucciones ejecutables tras el proceso de ensamblado.
* **Segmento de Datos:** Cálculo dinámico del espacio ocupado por variables estáticas (declaradas con `DEC`, `HEX`, `OCT`) y datos generados dinámicamente en tiempo de ejecución mediante operaciones de almacenamiento (`Store`, `StoreI`, `JnS`).
* **Métrica de Ocupación:** Visualización porcentual del uso de memoria total para cada segmento.

---

## 🛠️ Detalles Técnicos de la Modificación

### Núcleo del Simulador (`marie.ts`)
* Se han añadido "hooks" en los métodos `microStep()` y `step()` para capturar eventos de ejecución sin interferir en la lógica original de la arquitectura.
* Implementación de la lógica de detección de direcciones dinámicas dentro de la clase `MarieSim`, permitiendo rastrear el mapa de memoria activa.
* Nueva función `calculateDataBytesOccupied` para consolidar el tamaño del segmento de datos sin redundancias entre declaraciones estáticas y escrituras dinámicas.

### Interfaz de Usuario (`App.svelte`)
* Integración de variables de estado reactivas de Svelte para sincronizar las métricas internas del motor de simulación con el DOM.
* Creación de componentes visuales específicos para mostrar los contadores y las barras de progreso de memoria en el panel lateral.

---

## 📂 Estructura del Proyecto

* `/src/marie.ts`: Motor de simulación con lógica de rendimiento añadida.
* `/src/App.svelte`: Interfaz principal con el nuevo panel de métricas.
* `/public/examples`: Ejemplos clásicos de MARIE para probar el rendimiento (Multiplicación, Quicksort, etc.).

---
## 🛜Web Deployment
La versión modificada de MARIE.js se encuentra accesible en el siguiente [link](https://marie-modified-for-performance-8slxt43u0.vercel.app/) (https://marie-modified-for-performance-8slxt43u0.vercel.app/).
## ⚙️ Instalación y Uso

1. Clonar el repositorio.
2. Instalar dependencias:
   ```bash
   npm install
3. Ejecutar en modo desarrollo:
   ```bash
    npm run dev
4. Ensamblar cualquier código `.mas` y observar las métricas de memoria y ciclos en el panel de Performance.    

---

## Referencias

Este proyecto es un fork mejorado basado en la implementación original de [MARIE.js](https://marie.js.org/). 
Puedes encontrar el código fuente original en su [repositorio oficial](https://github.com/MARIE-js/MARIE.js).
