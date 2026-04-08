# Práctica 13 — DAW M09 · Unidad 4 · Integracion de contenidos interactivos

## Descripción
Integración de gráficos dinámicos, animaciones de interfaz y un canvas interactivo sobre la web **PowerTeam**, una tienda de videojuegos con tema oscuro/neón.

---

## Selectores HTML utilizados como anclajes

| Bloque | Selector / ID | Uso |
|--------|--------------|-----|
| A – Gráfico | `#tabla-ejemplo` | El nuevo `<section>` del gráfico se inserta justo después de este elemento (`insertAdjacentElement('afterend', ...)`) |
| B – Anime.js | `#proyectos .tarjeta` | Animación de entrada escalonada (staggering) y micro-interacciones hover/mousedown |
| B – Anime.js | `.btn-add` | Micro-interacción de rebote en botones "Añadir al carrito" |
| B – Anime.js | `.nav-link`, `.custom-btn-nav` | Micro-interacción flotante en los enlaces de navegación |
| C – Canvas | `footer` | Se crea una nueva `<section>` con el canvas y se inserta justo antes del footer (`insertAdjacentElement('beforebegin', ...)`) |

---

## Librerías externas (CDN)

Añadir estas líneas antes del cierre de `</body>` en `index.html`, **antes** de cargar `interactividad_practica13.js`:

```html

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.3/dist/chart.umd.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.min.js"></script>

<link rel="stylesheet" href="css/interactividad_practica13.css">
<script src="js/interactividad_practica13.js"></script>
```

---

## Estructura de archivos añadidos

```
/
├── css/
│   └── interactividad_practica13.css
├── js/
│   └── interactividad_practica13.js 
```

---

## Descripción de cada bloque

### A · Visualización Dinámica
- **Librería**: Chart.js v4
- **Gráfico**: Lineas con datos de ventas estimadas por juego
- **Responsive**: Contenedor con `aspect-ratio: 16/9` y `max-width: 780px`
- **Theming**: Paleta de colores `rgba(0,195,255)` y `rgba(0,255,180)` para que sea como el tema neon
- **Interactividad**: Botón "Barras" botón "Líneas" y botón "Actualizar datos" genera valores aleatorios

### B · Animacion de Interfaz
- **Librería**: Anime.js v3
- **Staggering**: Las tarjetas de la Biblioteca (`#proyectos .tarjeta`) arrancan invisibles y aparecen de forma escalonada
- **Micro-interacciones**:
  - `mouseenter/mouseleave` en tarjetas en escala ligera (1.03)
  - `mousedown/mouseup` en botones "Añadir" en efecto de pulsación con rebote
  - `mouseenter/mouseleave` en enlaces de nav en desplazamiento vertical sutil
- **Rendimiento**: Uso de `will-change: transform, opacity` en tarjetas para optimizar las animaciones de transformación

### C · Canvas de Alto Rendimiento
- **Elemento**: `<canvas id="p13-particle-canvas">` dentro de una sección independiente
- **Bucle**: `requestAnimationFrame` continuo
- **Comportamiento**: al mover el cursor sobre el panel se generan particulas azul
- **Sin interferencias**: El canvas recibe eventos solo dentro de su propio area

