function greetings() {
    let userName = "ale"; //declarar y asignar variable local
    
    function displayUserName() {    //declarar funcion para hacer ejemplo de closure
        return `henlo ${userName}`; //llamar y retornar a variable local
    }

    return displayUserName; //retornar funcion
}

const g = greetings();

console.log(g)
console.log(g())