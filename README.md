# listado-de-productos
Ejercicio en JS que muestra el detalle de productos obtenidos desde un archivo JSON, permitiendo buscar por ID y visualizar su información en pantalla.

---

## Características del Proyecto
Proyecto desarrollado como parte de mi formación académica en Teclab.
Este proyecto, creado con JavaScript y HTML, simula el consumo de una API externa para un e-commerce, accediendo a información de productos desde un archivo JSON. Incluye datos como nombre, descripción, precio, stock y moneda.
El usuario puede ingresar el ID de un producto para visualizar su detalle específico en pantalla, y el sistema gestiona casos donde el producto no se encuentra mostrando un mensaje claro.
Esta práctica sirve como base para aprender consumo de APIs, manipulación dinámica del DOM y manejo básico de datos en formato JSON.

## Enlaces de interés
JSON con el listado de los productos que se debe mostrar en la aplicación.  
https://jsonkeeper.com/b/MX0A

---

## Diario de aprendizaje

- **Organización básica de archivos:**  
Separar HTML, CSS y JavaScript en archivos distintos para mantener el proyecto ordenado.

- **Qué es y cómo funciona una API externa**

- **Uso de fetch para consumir datos:**  
Función en JavaScript que permite hacer peticiones HTTP y obtener datos desde una URL o un archivo JSON local utilizando fetch('products.json')

- **Uso del método .then()**  
Utilizado para encadenar acciones que deben ejecutarse después de que una tarea asíncrona (como obtener datos con fetch) y finalizar correctamente.

- **Manejo de datos JSON:**  
 Trabajar con archivos JSON que contienen listas de productos y cómo extraer información específica. Buscar un producto por ID usando .find() junto con una variable temporal (p) dentro de una función flecha

- **Validar la entrada del usuario:**  
Uso de prompt() para recibir datos y luego convertirlos adecuadamente (parseInt) para la búsqueda.

- **Crear elementos HTML dinámicamente**  
Crear elementos HTML dinámicamente usando document.createElement, asignarles contenido con innerHTML (como texto o etiquetas HTML dentro de un elemento que creé con JavaScript) y luego mostrarlos en la página agregándolos al DOM con appendChild.

- **Estructura del código para validar datos:**  
Comprender la importancia de validar si un producto existe antes de mostrarlo, para evitar errores y mostrar mensajes adecuados al usuario.

- **Depuración con console.log:**  
Entender la utilidad de imprimir en consola tanto el objeto completo de datos como el producto específico para verificar que el código funciona correctamente.

- **Errores comunes y cómo resolverlos:**  
Identificar y entender errores frecuentes como el 404 del favicon o problemas con la consola que no muestra logs.

