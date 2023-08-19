//variables
var a; // declarando
var b = "b"; // declarando / asignanmos
b = "bb"; // reasignacion
var a = "aa"; // redeclaracion

// Global Scope
var fruit = "Apple"; // global
function bestFruit() {
    console.log(fruit);
}
bestFruit();

// cuidado con esto
function countries() {
    country = "Chile"; // esto asigna una variable global
    console.log(country);
}
countries();
console.log(country);
