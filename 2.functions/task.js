function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) 
      max = arr[i];
    
    if (arr[i] < min) 
      min = arr[i];
    
  sum += arr[i];

  }
 avg = Number((sum / arr.length).toFixed(2)); 
 return { min: min, max: max, avg: avg };
}

getArrayParams([-99, 99, 10]);



function summElementsWorker(...arr) {
  const sum = arr.reduce((acc, item) => acc + item, 0);
  return sum; 
}
summElementsWorker()




function differenceMaxMinWorker(...arr) {
  let difference = Number(Math.max(arr) - Math.min(arr));
  return difference;
}
differenceMaxMinWorker()



function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i+=1) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement+= arr[i];
    }
}
let difference = sumEvenElement - sumOddElement;
return difference;
}
differenceEvenOddWorker() 


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i+=1){
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i] + arr[i];
      countEvenElement += arr[i];
    } 
    
   }

   sum = Number((sumEvenElement + countEvenElement) / arr.length);
   return sum;
  }
  averageEvenElementsWorker()






function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i+=1){
    if (arrOfArr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }

}
