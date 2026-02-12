##  Soluciones Implementadas: Practica 10 (Diseño y Animación)

### 1. Estrategia Visual y Transiciones (Fase 1)

**Diseño**
use la paleta de colores se basa en un fondo oscuro profundo (`#000` y `#050505`) contrastado con un azul tipo neon.

Puse unas transiciones suaves para que la web se va mas atractiva  
**Implementacion**
* **Navegación :** Los enlaces no cambian de golpe use `transition: color 0.3s, text-shadow 0.3s` para que el brillo aparezca gradualmente.
* **Desplegables ** Para el submenú, quería un efecto de "despliegue mecánico". En lugar de un `display: none` simple, he combinado `opacity` con `transform: translateY`.
    * **Curva de velocidad:** He utilizado `cubic-bezier(0.175, 0.885, 0.32, 1.275)` para que tenga un rebote al final de la animacion haciendo que el menu se vea mas atractivo

**Enlace al codigo de las transiciones:**
[Ver implementación CSS en GitHub (Líneas 70-85 y 560-580)](https://github.com/AaronEvangelista/mi_primera_web-con/blob/main/style.css)

```css
/* Ejemplo del efecto rebote */
.dropdown-menu {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}