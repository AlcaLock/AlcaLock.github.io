function textoIgual(){
   
    var texto="Amenidades";

    if(document.getElementById('textoRecibido').value == texto){
        alert("Texto Correcto");

    }else{
        alert("Texto Erroneo");
    }

}

function seleccion(opcion){
    var checkbox = document.getElementById('opcion' + opcion);
    if (checkbox.checked) {
        switch(opcion){
            case '1':
                alert("Seleccionó la opción 1");
            break;
    
            case '2':
                alert("Seleccionó la opción 2");
            break;
    
            case '3':
                alert("Seleccionó la opción 3");
            break;
        }
    }
}

function tryElCatch(){
try{
    var texto= document.getElementById('textoRecibido2').value;
    if(!isNaN(texto)){
        alert("Agregado");
    }else{
        throw new Error("El valor ingresado no es un número");
    }
}catch (error){
    alert("Error " + error.message) ;
}
}

function conteoFor(){
        for (let index = 0; index < 10; index++) {
              alert(index );
}
   
}

function binario() {
    var numero = document.getElementById('textoRecibido3').value.trim();
    
    if (numero === '') {
        alert("Por favor, ingresa un número.");
        return;
    }
    
    var binario = '';
    var numeroEntero = parseInt(numero, 10);
    
    if (!isNaN(numeroEntero)) {
        if (numeroEntero === 0) {
            binario = '0';
        } else {
            while (numeroEntero > 0) {
                var residuo = numeroEntero % 2;
                binario = residuo + binario;
                numeroEntero = Math.floor(numeroEntero / 2);
            }
        }
    } else {
        for (var i = 0; i < numero.length; i++) {
            var charCode = numero.charCodeAt(i);
            binario += charCode.toString(2) + ' ';
        }
    }
    
    alert("El número " + numero + " en binario es: " + binario);
}


function doWhileBasico() {
    var contador = 1;

    do {
        alert(contador);
        contador++;
    } while (contador <= 5);
}

function mayormenor(){
var valor1 = document.getElementById('textoRecibido4').value;
var valor2 = document.getElementById('textoRecibido5').value;

if(valor1>valor2){
alert("Valor 1 es mayor que valor 2");
}
else if(valor1<valor2){
    alert("Valor 2 es mayor que valor 1");
}else{
    alert("Son iguales");
}
}

function operacionesAritmeticas(a, b) {
    let suma = Number(a) + Number(b); 
    let resta = a - b; 
    let multiplicacion = a * b;  
    let division = a / b; 
    let modulo = a % b; 
    
    alert("Suma: " + suma);
    alert("Resta: " + resta);
    alert("Multiplicación: " + multiplicacion);
    alert("División: " + division);
    alert("Módulo: " + modulo);
}


function operadoresLogicos(x, y, z) {

    if (x > 0 && y > 0) {
        alert("Ambos números son positivos");
    } else {
        alert("Al menos uno de los números no es positivo");
    }

    if (x > 0 || y > 0) {
        alert("Al menos uno de los números es positivo");
    } else {
        alert("Ambos números son negativos");
    }

    if (!(z > 10)) {
        alert("z no es mayor que 10");
    } else {
        alert("z es mayor que 10");
    }
}

function mostrarPropiedadesNumber() {
    var numero = document.getElementById('numero').value;
    numero = Number(numero);

    alert("Es un número: " + !isNaN(numero));
    alert("Es entero: " + Number.isInteger(numero));
    alert("Es finito: " + Number.isFinite(numero));
    alert("Es NaN: " + Number.isNaN(numero));
}

function calcularSeno() {
    var anguloGrados = document.getElementById('angulo').value;
    var anguloRadianes = anguloGrados * (Math.PI / 180);
    var seno = Math.sin(anguloRadianes);

    alert("El seno de " + anguloGrados + " grados es: " + seno);
}

function mostrarFechaActual() {
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var año = fecha.getFullYear();
    

    alert("Fecha actual: " + dia + "/" + mes + "/" + año);
}


function mostrarCadenaLiteral() {
    var cadena = `Cadena literal: ${document.getElementById('cadenaLiteralInput').value}`;
    alert(cadena);
}
function convertirMayusculas() {
    var cadena = document.getElementById('stringInput').value;
    var mayusculas = cadena.toUpperCase();
    alert("Cadena en mayúsculas: " + mayusculas);
}

var arreglo = [];

function agregarElementoArreglo() {
    var elemento = document.getElementById('arregloInput').value;
    arreglo.push(elemento);
}

function mostrarElementosArreglo() {
    alert("Elementos del arreglo: " + arreglo.join(', '));
}

function resaltarPorId() {
    var id = document.getElementById('inputId').value;
    var elemento = document.getElementById(id);
    if (elemento) {
        alert("Elemento encontrado con el ID proporcionado.");
    } else {
        alert("No se encontró ningún elemento con el ID proporcionado.");
    }
}

function resaltarPorNombreEtiqueta() {
    var tagName = document.getElementById('inputTagName').value;
    var elementos = document.getElementsByTagName(tagName);
    if (elementos.length > 0) {
        alert("Se encontraron elementos con el nombre de etiqueta proporcionado.");
    } else {
        alert("No se encontraron elementos con el nombre de etiqueta proporcionado.");
    }
}

function resaltarPorNombreClase() {
    var className = document.getElementById('inputClassName').value;
    var elementos = document.getElementsByClassName(className);
    if (elementos.length > 0) {
        alert("Se encontraron elementos con el nombre de clase proporcionado.");
    } else {
        alert("No se encontraron elementos con el nombre de clase proporcionado.");
    }
}

function resaltarPorSelector() {
    var selector = document.getElementById('inputSelector').value;
    var elementos = document.querySelectorAll(selector);
    if (elementos.length > 0) {
        alert("Se encontraron elementos con el selector CSS proporcionado.");
    } else {
        alert("No se encontraron elementos con el selector CSS proporcionado.");
    }
}

function resaltarPorIndice() {
    var indice = document.getElementById('inputIndice').value;
    var elementos = document.getElementById('ejemplo').children;
    if (indice >= 0 && indice < elementos.length) {
        alert("Elemento encontrado en el índice proporcionado.");
    } else {
        alert("El índice proporcionado está fuera del rango de elementos.");
    }
}
