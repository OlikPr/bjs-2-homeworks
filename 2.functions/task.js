function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max){ 
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  sum += arr[i];

  }
  let avg = Number((sum / arr.length).toFixed(2)); 
 return { min: min, max: max, avg: avg };
}

getArrayParams([-99, 99, 10]);


function summElementsWorker(...arr) {
  if (arr.length === 0){
    return 0;
  } 
   return arr.reduce((acc, item) => acc + item, 0); 
}
summElementsWorker()



function differenceMaxMinWorker(...arr) {
  if (arr.length === 0){
    return 0;
  } 
    return Math.max(...arr) - Math.min(...arr);
  
} 

differenceMaxMinWorker()



function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0){
    return 0;
  } 
    for (let i = 0; i < arr.length; i+=1) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement+= arr[i];
      } 
      }
    return sumEvenElement - sumOddElement;
    
}
differenceEvenOddWorker() 


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0){
    return 0;
  }  
    for (let i = 0; i < arr.length; i+=1){
     if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
     } 
    }

    return sumEvenElement / countEvenElement;
    
}
averageEvenElementsWorker()




function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
      for (let i = 0; i < arrOfArr.length; i+=1){
        const sum = func(...arrOfArr[i]);
        if (sum > maxWorkerResult) {
          maxWorkerResult = sum;
        }
     }
  return maxWorkerResult;
}

