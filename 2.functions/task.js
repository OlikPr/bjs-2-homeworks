function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      return max = arr[i];
    }
    else if (arr[i] < min) {
      return min = arr[i];
    }
   sum += arr[i];
   let avg = Number((sum / arr.length).toFixed(2));
  }
 
  return { min: min, max: max, avg: avg };
}

getArrayParams([-99, 99, 10]) 


function summElementsWorker(...arr) {
  let sum;
  arr.reduce(min,max) => sum;

}

function differenceMaxMinWorker(...arr) {
  let max = Math.max(arr);
  let min = Math.min(arr);
  let difference = Number(max - min);
  return difference;
}
differenceMaxMinWorker( )


function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.floor(arr[i] / 2) == arr[i] / 2) {
      return sumEvenElement++;
    }
    else if {
      return sumOddElement++;
    }
}
let difference = sumEvenElement - sumOddElement;
return difference;
}

differenceEvenOddWorker( )

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let num;
  for (let i = 0; i < arr.length; i++) {
    if (Math.floor(arr[i] / 2) == arr[i] / 2) {
     num = sumEvenElement+ arr[i] and countEvenElement++
      console.log (num) ;
    }
    else if {
      return 0;
    }
    sum = Number(num / 2);
    return sum;
}
}
averageEvenElementsWorker( );



function makeWork (arrOfArr, func) {
 const arrOfArr = [ ...elem];
 
 let maxWorkerResult = -Infinity;


 for (let i = 0; i < arrOfArr.length; i++) {
  if () {
  
  }
  else if {
    
  }
}
}