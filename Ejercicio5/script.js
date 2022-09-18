
var genero;
let masculino = 0;
let femenino = 1;
genero = prompt("Ingrese 0 Si es Hombre o 1 Si es mujer");
if (genero == 0) {
    alert("Es hombre");
} else {
    alert("Es mujer");
}
var edad;
let mas = 18;
let fem = 20;
edad = prompt("Hombre mayor de 18 o Mujer mayor de 20");
if (edad >= 18) {
    alert("Puedes entrar, eres hombre.");
} else if (edad >= 20) {
    alert("Puedes entrar, eres mujer.");
}
if (edad < 18) {
    alert("Eres menor de edad")
}
