function greeting() {
    let userName = 'Ana'; //este es un local scope
    console.log(userName)    
    if (userName === 'Ana'){
        console.log(`henlo ${userName}`)
    }
}


greeting()

console.log(userName) //Este no funciona porque la variable userName esta declarada dentro de una función