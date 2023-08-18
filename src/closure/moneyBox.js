function moneyBox(coins) {
    let box = 0;
    function cashin() {
        console.log("cashin");
        box += coins;
        return 
    }
    return cashin();
}

console.log(moneyBox(0));
console.log(moneyBox(2));
console.log(moneyBox(4));
console.log(moneyBox(20));
