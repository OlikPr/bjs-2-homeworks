"use strict";

function solveEquation(a, b, c) {
  //let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c; 
  if (d < 0) {
    return 'Нет корней';
  } else if (d === 0) {
    return  'Корень один: ' + (-b / (2 * a));
  } else {
    let root1 = (-b + Math.sqrt(d)) / (2 * a);
    let root2 = (-b - Math.sqrt(d)) / (2 * a);
    return 'Два корня: ' + root1 + ' и ' + root2;
  }
}
console.log (solveEquation(2,2,2));


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100)/12;
  let S = amount - contribution;
  let n = countMonths;
  let paymentMonthly = (S * (P + (P / (((1 + P) ** n) - 1)))).toFixed(2);
  return "Сумма платежа: " + contribution + paymentMonthly;
  
}
console.log (calculateTotalMortgage(0, 1000, 50000, 12));