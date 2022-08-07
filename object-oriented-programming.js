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
