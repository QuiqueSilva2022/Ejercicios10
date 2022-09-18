var nombre = prompt("Tu nombre.");
var numero = prompt('Ingresa un Numero, ' + nombre);

if (numero < 0) {
    document.write("Es negativo")
}
else {
    document.write("Es positivo")
}
if (numero == "0") {
    document.write('el numero ingresado es cero, ' + nombre + ' . No es ni positivo ni negativo.')
}
console.log(nombre);
console.log(numero);