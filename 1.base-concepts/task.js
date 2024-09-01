"use strict";

function solveEquation(coefficient1, coefficient2, coefficient3) {
 let discriminant = Math.pow(coefficient2, 2) - 4 * coefficient1 * coefficient3; 
  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    return  [-coefficient2 / (2 * coefficient1)];
  } else {
    let root1 = (-coefficient2 + Math.sqrt(discriminant)) / (2 * coefficient1);
    let root2 = (-coefficient2 - Math.sqrt(discriminant)) / (2 * coefficient1);
    return  [root1, root2];
  }
}
console.log(solveEquation(2,2,2));


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let interestRate = percent / 100 / 12;
  let bodyCredit = amount - contribution;
  let paymentMonthly = (bodyCredit * (interestRate + (interestRate / (((1 + interestRate) ** countMonths) - 1)))) * countMonths;
  return Number(paymentMonthly.toFixed(2));
  
}
console.log(calculateTotalMortgage(10, 20000, 20000, 24));