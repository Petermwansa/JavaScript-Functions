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




//multidimensional array
let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];
nestedArray[2][0][0] = "deepestest";
nestedArray[2][0][1] = "deepestest1";

console.log(nestedArray[2][1][0][0][0]);
console.log(nestedArray);


//key-value pairs
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;


console.log(foods);





//modify objects in objects
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};


let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45

console.log(userActivity);





//using the bracket notation
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
  data: {
    one: 12,
    two: 13
  }
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}

console.log(checkInventory("apples"));   //25





//the delete keyword
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;   //removes the specified properties

console.log(foods);




//check if property exists
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  if('Alan' in userObj && userObj.hasOwnProperty('Jeff') && 'Sarah' in userObj && 'Ryan' in userObj) {
    return true;
  } else {
    return false;
  }
}

console.log(isEveryoneHere(users));    //this log will return true





//iterate throught the keys of an obj using the 'for....in'
const users1 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  let count = 0;
  for(let user in usersObj) {
    if(usersObj[user].online === true) {
      count++
    }
  }
      return count;

}

console.log(countOnline(users1));





//generate an array of all objects
let users2 = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users2));




//CONVERT FROM FAR TO CELSIUS
function convertCtoF(celsius) {
  let fahrenheit;

  fahrenheit = (celsius * 9/5) + 32;

  return fahrenheit;
}

convertCtoF(30);