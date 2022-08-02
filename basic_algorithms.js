//CONVERT FROM FAR TO CELSIUS
function convertCtoF(celsius) {
    let fahrenheit;
  
    fahrenheit = (celsius * 9/5) + 32;
  
    return fahrenheit;
  }
  
  convertCtoF(30);





//reverse a string
function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
}
  
console.log(reverseString("hello"));

function reverseString(str) {

  let blank = [];
  
  for(let i = str.length - 1; i >=0; i--){
    blank.push(str[i]);
  }

  return blank;
}


console.log(reverseString("Peter"));




//THE FACTORIAL
fact = (num) => {
    if(num === 0){
      return 1;
    }
    return num * fact(num - 1);
}
  
console.log(fact(19));





//LONGEST WORD IN A STRING
function findLongestWordLength(str) {
    //first, we split each word
    let words = str.split(' ');
    //this will be the global var to track the max length
    maxLength = 0;
    
    // then we loop through the whole string 
    for(let i = 0; i < words.length; i++) {
      if(words[i].length > maxLength){
        maxLength = words[i].length
      }
    }
      return maxLength;
}





//RETURN ARRAY OF LARGEST NUMBERS IN MULTI ARRAY
function largestOfFour(arr) {

    const results =[];
    for(let i = 0; i < arr.length; i++){
      let largestNumber = arr[i][0];
      for(let j = 1; j < arr[i].length; j++) {
        if(arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      results[i] = largestNumber;
    }
    return results;
}
    
  
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));






//CHECK IF STRING ENDS WITH GIVEN NAME
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
  
    return str.slice(str.length - target.length) === target;
}
  
confirmEnding("He has to give me a new name", "name");
   





//TO REPEAT A STRING
function repeatStringNumTimes(str, num) {

  if(num < 0){
    return "";
  } else if(num > 0){
    str = str.repeat(num);
  }

return str
}

console.log(repeatStringNumTimes("abc", 2));


function repeatStringNumTimes(str, num) {

  let newString = "";

  if(num <= 0){
    newString = "";
  } else if(num > 0){
    for(let i = 0; i < num; i++){
      newString += str;
    }
  }

return newString;
}

console.log(repeatStringNumTimes("abc", 2));






//TRUNCATE A STRING


function truncateString(str, num) {
  
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
  
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 12));
  
  




//FIND AND KEEP A NUMBER
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)); 






//CHECK FOR THE TYPE OF A PARSED VARIABLE
function booWho(bool) {
  
  if(typeof bool === 'boolean'){
    return true;
  } else {
    return false
  }
  
}


console.log(booWho(null));





//CAPITALIZE THE FIRST LETTERS
function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

console.log(titleCase("I'm a little tea pot yes"));







//SLICE AND SPLICE

function frankenSplice(arr1, arr2, n) {
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}





//NOT RETURN FALSY

function bouncer(arr){
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}
console.log(bouncer([7, "ate", "", false, 9]));

//method 2
function bouncer(arr) {
  return arr.filter(Boolean);
}





//SORT AND RETURN LENGTH(INDEX) OF ENTRY

const arr = [12,3,34,2,67,22,5,6,78,9,2,3,45,29,21,7];
function sorted(array, num) {
  array.sort((a,b) => a - b);
  
  for(let i = 0; i < array.length; i++) {
    if(arr[i] >= num){
      return i;
    }
  }
  
  return array.length;
}
console.log(sorted(arr, 12));




//TEST IF ALL THE LETTERS IN THE SECOND ARRAY ARE IN THE FIRST

let array = ["Hello", "hey" ]

function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  
  for (let i = 0; i < test.length; i++){
    if(target.indexOf(test[i]) < 0) return false;
  }
  return true
}


console.log(mutation(array));
