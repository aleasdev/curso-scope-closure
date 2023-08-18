function sumWithClosure(firstNum = 0) {
    
    return function secondNum(secondNum = 0) {
      return firstNum + secondNum
    }

}

console.log(sumWithClosure(2)(3))