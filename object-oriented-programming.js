//Functions in objects
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};
  
dog.sayLegs();


//USING THE THIS KEYWORD
let dog1 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}  //ehlps when you are referencing so that you don't have to making updates all the time.
};
  
dog1.sayLegs();





//CONSTRUCTORS

function Bird() {
    this.name = "Albert";
    this.color  = "blue";
    this.numLegs = 2;
}

  
let blueBird = new Bird();  //'new' keyword tells JS to create a new instance of Bird called blueBird

//including the parameters
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
  
let terrier = new Dog();






//INSTANCEOF

let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
  let crow = new Bird("Alexis", "black");
  
  crow instanceof Bird;





//THE OBJECT OWN PROPERTIES

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
    this.eyes = "eyes"
}
  
  let duck = new Bird("Donald");
  let canary = new Bird("Tweety");
  
  let ownProps = [];
  let allProps = [];
  
for (let property in duck) {
    if(duck.hasOwnProperty(property)) {
      ownProps.push(property);
    }
}

console.log(ownProps);




//PROTOTYPE PROPERTIES

function Dog(name) {
    this.name = name;
  }
  
let beagle = new Dog("Snoopy");
  
Dog.prototype.numLegs = 4;




//ITERATE THROUGHT ALL THE PROPERTIES
function Bird(name) {
    this.name = name;
    this.age = 12;
    this.breed = "German Sherperd";  //own properties
}
  
Bird.prototype.numLegs = 2;
Bird.prototype.year = 2010;
Bird.prototype.color = "Brown"; // prototype properties
  
let duck1 = new Bird("Donald");
  
let ownProps1 = [];
let prototypeProps1 = [];
  
for (let property in duck1) {
    if(duck.hasOwnProperty(property)) {
      ownProps1.push(property);
    } else {
      prototypeProps1.push(property);
    }
}
  
console.log(ownProps1);
console.log(prototypeProps1);





//THE CONSTRUCTOR PROPERTY
function Dog(name) {
    this.name = name;
}
  
  // Only change code below this line
function joinDogFraternity(candidate) {
    if(candidate.constructor == Dog) {
      return true;
    } else {
      return false;
    }
}
  
console.log(joinDogFraternity(Dog));






//PROTOTYPE TO A NEW OBJECT
function Dog(name) {
    this.name = name;
}
  
Dog.prototype = {
    numLegs: 4,
    eat: function () {
  
    },
    describe: function() {
      
    }
  
};





//SET THE CONSTRUCTOR PROPERTY WHEN CHANGING THE PROTOTYPE
function Dog(name) {
    this.name = name;
}
  
Dog.prototype = {
    //Whenever the prototype is manually set to a new object, remember to define the constructor property
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
};




//WHERE OBJECT'S PROTOTYPE COMES FROM
function Dog(name) {
    this.name = name;
  }
  function Bird(name) {
    this.name - name;
  }
  
  let beagle1 = new Dog("Snoopy");
  let eagle = new Bird("The Eyer");

  console.log(Bird.prototype.isPrototypeOf(eagle));
  console.log(Dog.prototype.isPrototypeOf(beagle1));




//THE PROTOTYPE CHAIN
function Dog(name) {
    this.name = name;
}
  
let beagle2 = new Dog("Snoopy");
  
Dog.prototype.isPrototypeOf(beagle2);  // yields true
  
//this is the prototype chain. 'Object' is the supertype for all objects in JS
Object.prototype.isPrototypeOf(Dog.prototype);






//USING INHERITANCE TO AVOID REPEATING YOURSELF
function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear
  };
  
  function Animal() { }
  
  //to keep the DRY principle, we put the eat() in the Animal supertype
  Animal.prototype = {
    constructor: Animal,
    eat: function () {
      console.log("nom nom nom")
    }
  };





//INHERIT THE BEHAVIORS FROM A SUPERTYPE
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck3 = Object.create(Animal.prototype);
let beagle3 = Object.create(Animal.prototype);  //Object.create(obj) creates a new object, and sets obj as the new object's prototype






//Set the Child's Prototype to an Instance of the Parent
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);

let beagle4 = new Dog();

console.log(beagle4);





//RESET THE INHERITED CONSTRUCTOR PROPERTIES
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck5 = new Bird();
duck.constructor;
let beagle5 = new Dog();
beagle.constructor;





//ADDING METHODS AFTER INHERITANCE
function Animal() { }
Animal.prototype.eat = function() { 
  console.log("nom nom nom");  

};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;


Dog.prototype.bark = function() {
  console.log("Woof!");
}

let beagle6 = new Dog();
console.log(beagle);










// OVERIDE INHERITED METHODS 

// an object can inherit its behavior (methods) from another object by referencing its prototype object:
//ChildObject.prototype = Object.create(ParentObject.prototype);

//Then the ChildObject received its own methods by chaining them onto its prototype:
//ChildObject.prototype.methodName = function() {...};


function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};
//code explanation of the code above

/* If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on the prototype chain of duck:

1==duck => Is eat() defined here? No.
2==Bird => Is eat() defined here? => Yes. Execute it and stop searching.
3==Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
4==Object => JavaScript stopped searching before reaching this level. */

// ============================================= THE CODE =================================
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;


Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
}

let penguin = new Penguin();
console.log(penguin.fly());










//USE A MIXIN TO ADD COMMON BEHAVIOUR BETWEEN UNRELATED OBJECTS
//for unrelated objects, instead of using inheritance, we use mixins which allows other objects to use a collection of functions

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line

let glideMixin = function (obj) {
  obj.glide = function() {
    console.log("The glide works");
  }
};

glideMixin(bird);
glideMixin(boat)

bird.glide();
boat.glide();








// USE CLOSURE TO TO PROTECT PROPERTIES WITHIN AN OBJECT FROM BEING MODIFIED 
// CLOSURE === thgis is a propertiy in JS where a function always has access to the context in which it was created

function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();

//code explanation
/* getHatchedEggCount is a is a privileged method, because 
it has access to the private variable hatchedEgg. 
This is possible because hatchedEgg is declared in the same context as getHatchedEggCount */

function Bird() {
  let weight = 15;
  this.getWeight = function () {
    return weight;
  }
}







//UNDERSTAND THE IMMEDIATELY INVOKE FUNCTION EXPRESSION IIFE
//this enables us to invoke a function as soon as it is declared

(function () {
  console.log("Chirp, chirp!");
})();

//code explation
/*Note that the function has no name and is not stored in a variable. 
The two parentheses () at the end of the function expression 
cause it to be immediately executed or invoked. This pattern is known 
as an immediately invoked function expression or IIFE. */

(function () {
  console.log("A cozy nest is ready");
})();






//USING AN IIFE TO CREATE A MODULE
//An immediately invoked function expression (IIFE) is often used to group related 
//functionality into a single object or module.












