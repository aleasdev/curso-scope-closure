function moneyBox() {
    let box = 0;
    return function cashin(money) {
        console.log("cashin");
        box += money;
        return box;
    };
}

let moneybox1 = moneyBox();
console.log(moneybox1(1));
console.log(moneybox1(10));

let moneybox2 = moneyBox();
