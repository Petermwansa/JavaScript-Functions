function mixedNumbers(arr) {
    arr.unshift("I", 2, "three");
    arr.push(7, "VIII", 9);
    return arr;
}
  
  console.log(mixedNumbers(['IV', 5, 'six']));


function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}
  
console.log(popShift(['challenge', 'is', 'not', 'complete']));




//SPLICE
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1,4)
console.log(arr);

const arrSplice = [1,2,3,4,5,5,6,10];
//this will insert numbers
let start  = 5;
let del = 2;

arr.splice(start,del, 6,7,8,9);
console.log(arrSplice);

function htmlColorNames(arr) {
    // Only change code below this line
  arr.splice(0,2, "DarkSalmon", "BlanchedAlmond")
    // Only change code above this line
    return arr;
  }
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));



//SLICE
function forecast(arr) {
    // Only change code below this line
    let newArray = arr.slice(2,4);
    return newArray;
}
  
// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));




//SPREAD OPERATOR
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr]);
      // Only change code above this line
      num--;
    }
    return newArr;
}
  
console.log(copyMachine([true, false, true], 2));

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment, "is", "fun"];
    return sentence;
}
  
  console.log(spreadOut());




//INDEXOF()

function quickCheck(arr, elem) {
    // Only change code below this line
    if(arr.indexOf(elem) == -1){
      return false;
    } else {
      return true;
    }
    // Only change code above this line
}
  
    console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for(let i = 0; i < arr.length; i++){
    if(arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for(let i = 0; i < arr.length; i++){
      if(arr[i].indexOf(elem) == -1) {
        newArr.push(arr[i]);
      }
    }
    // Only change code above this line
    return newArr;
}
  
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));