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
  } else {  
   return arr.reduce((acc, item) => acc + item, 0); 
}
}
summElementsWorker()



function differenceMaxMinWorker(...arr) {
  if (arr.length === 0){
    return 0;
  } else {
    return Number(Math.max(...arr) - Math.min(...arr));
}
  
} 

differenceMaxMinWorker()



function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0){
    return 0;
  } else {  
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
}
differenceEvenOddWorker() 


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0){
    return 0;
  } else {  
    for (let i = 0; i < arr.length; i+=1){
     if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
     } else {  
       countEvenElement += arr[i];
     } 
    }

    sum = Number((sumEvenElement + countEvenElement) / arr.length);
    return sum;
  }
}
averageEvenElementsWorker()




function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
     for (let i = 0; i < arrOfArr.length; i+=1){
      arr = map(func,arrOfArr);
      if (arr > maxWorkerResult){
       console.log (maxWorkerResult = arr);
    } else {  
     
   } 
  }
}
console. log (makeWork(arr, func))