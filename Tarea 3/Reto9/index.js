document.querySelector('#btnCalcular').addEventListener('click', evaluacion);

function evaluacion() {
    char = document.querySelector('#charla').value;
    error_radio = validar_radio();

    if (char== "" || error_radio == true) {
        Swal.fire({
            title: 'Atención',            
            imageUrl: 'images/error.png',
            width:450,
            height:200,
            iconColor: '#FFF',
            position:'center',
            confirmButtonColor: '#c82b2b',
            color:'#000',
            html: '<br><br> Tiene campos vacios. <br><br> Contestar todas las preguntas.',
        })
    } else {
        
        preg1 = document.querySelector('#pregunta1 input[type=radio]:checked').value;
        preg2 = document.querySelector('#pregunta2 input[type=radio]:checked').value;
        preg3 = document.querySelector('#pregunta3 input[type=radio]:checked').value;
        preg4 = document.querySelector('#pregunta4 input[type=radio]:checked').value;
        preg5 = document.querySelector('#pregunta5 input[type=radio]:checked').value;



        numres1 = parseInt(preg1);
        numres2 = parseInt(preg2);
        numres3 = parseInt(preg3);
        numres4 = parseInt(preg4);
        numres5 = parseInt(preg5);




        ptnSubTotal = numres1 + numres2 + numres3 + numres4 + numres5;
        console.log(ptnSubTotal);

        ptnTotal = ptnSubTotal / 25;
        console.log(ptnTotal);

        porcFinal = ptnTotal * 100;
        console.log(porcFinal);

        Swal.fire({
            title: 'Evaluación obtenida: ' + porcFinal + '%',
            icon: 'info',
            iconColor: '#FFF',
            color:'#000',
            confirmButtonColor: '#c82b2b',
            html: '<br><br> Calificacion brindada a la evaluación del docente: ' + char,
        })

    };

}

let validar_radio = () => {
    let error = false;
    let error_radio = false;
    let inpRadio1 = document.querySelector('#pregunta1 input[type=radio]:checked');
    let inpRadio2 = document.querySelector('#pregunta2 input[type=radio]:checked');
    let inpRadio3 = document.querySelector('#pregunta3 input[type=radio]:checked');
    let inpRadio4 = document.querySelector('#pregunta4 input[type=radio]:checked');
    let inpRadio5 = document.querySelector('#pregunta5 input[type=radio]:checked');
    if (!inpRadio1 || !inpRadio2 || !inpRadio3 || !inpRadio4 || !inpRadio5) {
        error = true;
        error_radio = true;
    } else {
        error_radio = false;
    }
    return error_radio;
}



function btnlimpiar() {
    document.getElementById('charla').value = "";

    document.getElementById("a").checked = false;
        document.getElementById("b").checked = false;
            document.getElementById("c").checked = false;
                document.getElementById("d").checked = false;
                    document.getElementById("e").checked = false;


    document.getElementById("f").checked = false;
        document.getElementById("g").checked = false;
            document.getElementById("h").checked = false;
                document.getElementById("i").checked = false;
                    document.getElementById("j").checked = false;


    document.getElementById("k").checked = false;
        document.getElementById("l").checked = false;
            document.getElementById("m").checked = false;
                document.getElementById("n").checked = false;
                    document.getElementById("o").checked = false;



    document.getElementById("p").checked = false;
        document.getElementById("q").checked = false;
            document.getElementById("r").checked = false;
                document.getElementById("s").checked = false;
                    document.getElementById("t").checked = false;  



    document.getElementById("u").checked = false;
        document.getElementById("w").checked = false;
            document.getElementById("x").checked = false;
                document.getElementById("y").checked = false;
                    document.getElementById("z").checked = false;  
}





