# PowerTeam – Laboratorio 8: Selector de Idioma Trilingüe

## Autor
**Nombre:** Aaron Evangelista
**Materia:** DAW M09. Disseny d'Interfícies Web

---

##  Estrategia de Implementación y DOM

Esta práctica se centra en la manipulación dinamica del **Modelo de Objetos del Documento (DOM)** y la gestión del almacenamiento en el lado del cliente.

Mediante el uso de un **Diccionario de Traducciones** en JavaScript y la API de **LocalStorage**, el sitio web es capaz de cambiar de idioma en tiempo real sin recargar la página y recordar la preferencia del usuario indefinidamente.

**Ventajas de esta estrategia:**
* **Interactividad fluida:** Los cambios de idioma son rapidos mediante la manipulación de nodos.
  
* **Código Escalable:** El uso de un objeto de traducciones permite añadir nuevos idiomas o elementos de texto de forma sencilla.

##  Enlaces del Proyecto

- **GitHub Pages:** [https://aaronevangelista.github.io/mi_primera_web-con/](https://aaronevangelista.github.io/mi_primera_web-con/)
- **Repositorio GitHub:** [https://github.com/AaronEvangelista/mi_primera_web-con.git](https://github.com/AaronEvangelista/mi_primera_web-con.git)

---

##  Soluciones Implementadas: Laboratorio 8

### 1. Manipulación del DOM y Diccionario de Datos
Se ha implementado un objeto JavaScript (`translations`) donde cada clave corresponde a un `id` único en el HTML. Esto permite una localización precisa de los elementos que requieren traducción.



### 2. Logica de Cambio de Idioma (Fase 3)
Se desarrolló la función `setLanguage(lang)` que realiza las siguientes acciones:
1. Itera sobre las claves del diccionario.
2. Utiliza `document.getElementById()` para referenciar el nodo.
3. Actualiza la propiedad `innerHTML` con el valor correspondiente al idioma seleccionado.

```javascript
function setLanguage(lang) {
    for (let id in translations) {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.innerHTML = translations[id][lang];
        }
    }
    savePreference(lang);
}