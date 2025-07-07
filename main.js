fetch('products.json')
  .then(response => response.json())
  .then(data => {      
        const products = data.products; 
        
    const input = prompt("Ingrese el ID del producto que desea buscar:");
    const productId = parseInt(input);
    const product = products.find(p => p.id === productId); 
    // busca en el arreglo products el primer objeto cuyo id sea igual a productId
    // p es una variable temporal que representa cada elemento del arreglo mientras se itera

    const catalogo = document.getElementById("catalogo"); 

    if (product) {    
      console.log(product); //respuesta api devtool
      
      const div = document.createElement('div');
      //div.className = 'producto';
      div.innerHTML =
        "<h2>" + product.name + "</h2>" +
        "<p>" + product.description + "</p>" +
        "<p><strong>Precio:</strong> $" + product.price + " " + product.currency + "</p>" +
        "<p><strong>Stock:</strong> " + (product.in_stock ? "Disponible" : "Agotado") + "</p>";

      catalogo.appendChild(div); // vista en pantalla, agregar elemento hijo. Sin esto solo esta en memoria.
    } else {
      catalogo.innerHTML = "<p>Producto no encontrado</p>";
    }
  })
  .catch(error => console.error("Error al cargar productos:", error));

2