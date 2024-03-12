const personas = [];

function agregarPersona() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellidos').value;
    const gasto1 = parseFloat(document.getElementById('gasto1').value);
    const gasto2 = parseFloat(document.getElementById('gasto2').value);
    const gasto3 = parseFloat(document.getElementById('gasto3').value);
    const gasto4 = parseFloat(document.getElementById('gasto4').value);

    if (nombre === '' || apellido === '' || isNaN(gasto1) || isNaN(gasto2) || isNaN(gasto3) || isNaN(gasto4)) {
        Swal.fire({
            icon: "error",
            title: "Debe llenar todos los campos.",
            showClass: {
                popup: "animate__animated animate__fadeIn",
            },
            hideClass: {
                popup: "animate__animated animate__fadeOut",
            },
        });
    } else {
        const promedio = (gasto1 + gasto2 + gasto3 + gasto4) / 4;
        personas.push({ nombre, apellido, promedio });

        const selectPersonas = document.getElementById('seleccionarPersona');
        const option = document.createElement('option');
        option.value = nombre + ' ' + apellido;
        option.text = nombre + ' ' + apellido;
        selectPersonas.appendChild(option);

        limpiarDatos();

        Swal.fire({
            icon: "success",
            title: "Persona agregada",
            showClass: {
                popup: "animate__animated animate__fadeIn",
            },
            hideClass: {
                popup: "animate__animated animate__fadeOut",
            },
        });
    }
}

function calcularPromedioSeleccionado() {
    const nombreSeleccionado = document.getElementById('seleccionarPersona').value;
    const resultado = document.getElementById('resultado');
    let personaSeleccionada = null;

    for (let i = 0; i < personas.length; i++) {
        const persona = personas[i];
        const nombreCompleto = persona.nombre + ' ' + persona.apellido;
        if (nombreCompleto === nombreSeleccionado) {
            personaSeleccionada = persona;
            break;
        }
    }

    if (personaSeleccionada) {
        const promedioPersona = personaSeleccionada.promedio;
        resultado.textContent = 'El promedio de gasto mensual de ' + nombreSeleccionado + ' es de: $' + promedioPersona.toLocaleString();
    } else {
        resultado.textContent = '';
    }
}

function limpiarDatos() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('gasto1').value = '';
    document.getElementById('gasto2').value = '';
    document.getElementById('gasto3').value = '';
    document.getElementById('gasto4').value = '';
}
