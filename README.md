# PowerTeam – Práctica 6: Multimedia Adaptativo

## Autor
**Nombre:** Aaron Evangelista
**Materia:** DAW M09. Disseny d'Interfícies Web

---

##  Estrategia de Diseño y Optimización

Los estilos estan pensados para pantallas de moviles y tables.

Mediante **Media Queries** y la optimice de recursos multimedia, el diseño se adapta de forma eficiente a tabletas y escritorios.

Ventajas de esta estrategia:
* Mejore rendimiento y tiempos de carga en móviles.
* Código CSS más limpio y mantenible.
* Experiencia de usuario consistente y de alta calidad en todos los dispositivos.

##  Enlaces del Proyecto

- **GitHub Pages:** [https://aaronevangelista.github.io/mi_primera_web-con/](https://aaronevangelista.github.io/mi_primera_web-con/)
- **Repositorio GitHub:** [https://github.com/AaronEvangelista/mi_primera_web-con.git](https://github.com/AaronEvangelista/mi_primera_web-con.git)

---

##  Soluciones Implementadas: Práctica 6

### 1. Control CSS Global de Tamaño de Imagenes

**Pregunta:** Comprueba que todas las etiquetas `<img>` tienen el tamaño (width y height) controlados desde CSS. Si no es así, aplica una regla CSS global para que todas las imágenes y vídeos(aunque solo tengo img) se escalen correctamente dentro de su contenedor.

**Respuesta  (EJERCICIO 6.1):** meti la siguiente regla CSS global para asegurar que el contenido multimedia no desborde su contenedor y mantenga su proporcion:

```css
img, video {
    max-width: 100%;
    height: auto;
    display: block; 
}