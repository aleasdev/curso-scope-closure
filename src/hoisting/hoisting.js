var nameOfDog; //undefined
console.log(nameOfDog);
var nameOfDog = "elmo";
console.log(nameOfDog);

nameOfDog(); // si se ejecuta
function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`); //este sale undefinded
}
var elmo = "Elmito";
