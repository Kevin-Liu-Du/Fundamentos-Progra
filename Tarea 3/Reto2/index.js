function calcularFactura() {
    // Obtener valores ingresados por el usuario
    const cliente = document.getElementById('cliente').value;
    const articulo = document.getElementById('articulo').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const precio = parseFloat(document.getElementById('precio').value);

    
    if (cliente === "" || articulo === "" || isNaN(cantidad) || isNaN(precio)) {
        Swal.fire({
            title: 'Atención',
            icon: 'error',
            iconColor: '#3a7aa5',
            text: 'Campos vacíos. Por favor, inténtalo de nuevo.',
            imageUrl: "img/factura.png",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Logotipo de la empresa',
        });
    } else {
        // Calcular subtotal
        const subtotal = cantidad * precio;

        // Calcular impuestos y servicio
        const iva = subtotal * 0.13;
        const servicio = subtotal * 0.05;

        // Calcular total
        const total = subtotal + iva + servicio;

        // Formatear números con separadores de miles
        const formatter = new Intl.NumberFormat('en-US', { 
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });

        // Mostrar factura en la página
        const facturaDiv = document.getElementById('factura');
        facturaDiv.innerHTML = `
            <h2>Factura</h2>
            <p><strong>Cliente:</strong> ${cliente}</p>
            <p><strong>Artículo:</strong> ${articulo}</p>
            <p><strong>Cantidad:</strong> ${cantidad}</p>
            <p><strong>Precio:</strong> ${formatter.format(precio)}</p>
            <p><strong>Subtotal:</strong> ${formatter.format(subtotal)}</p>
            <p><strong>IVA (13%):</strong> ${formatter.format(iva)}</p>
            <p><strong>Servicio (5%):</strong> ${formatter.format(servicio)}</p>
            <p><strong>Total a pagar:</strong> ${formatter.format(total)}</p>
        `;
        facturaDiv.classList.add('mostrar'); // Agregar la clase "mostrar" para mostrar la factura
    }
}

function limpiar() {
    // Limpiar los campos de entrada y la factura
    document.getElementById('cliente').value = '';
    document.getElementById('articulo').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('factura').innerHTML = '';
    document.getElementById('factura').classList.remove('mostrar'); // Eliminar la clase "mostrar"
}
