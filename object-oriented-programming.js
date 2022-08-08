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
