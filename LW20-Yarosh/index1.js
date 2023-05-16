// 1
let dog = {
    name: "Aflac",
    numLegs: 4
};
// 2
let dog = {
    name: "Spot",
    numLegs: 4
};
// Змініть код лише під цим рядком
console.log(dog.name);
console.log(dog.numLegs);
// 3
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
        {return `This dog has ${this.numLegs} legs.`;}
    }
};
  
 dog.sayLegs();
// 4
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
        {return `This dog has ${this.numLegs} legs.`;}
    }
};
  
dog.sayLegs();
// 5
function Dog() {
    this.name = 'BB';
    this.color = 'grey';
    this.numLegs = 4;
}
// 6
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Змініть код лише під цим рядком
  const hound = new Dog();
// 7
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  // Змініть код лише під цим рядком
  const terrier = new Dog('Robert', 'grey');
// 8
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Змініть код лише під цим рядком
  const myHouse = new House(4);
  
  myHouse instanceof  House;
// 9
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Змініть код лише під цим рядком
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
  
  console.log(ownProps);
// 10
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 2;
  
  // Змініть код лише над цим рядком
  let beagle = new Dog("Snoopy");
// 11
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Змініть код лише під цим рядком
  for (let property in beagle) {
    if(beagle.hasOwnProperty(property) && property == 'name') {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
}
// 12
function Dog(name) {
    this.name = name;
  }
  
  // Змініть код лише під цим рядком
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true;
    } else {
      return false;
    }
  }
// 13
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Змініть код лише під цим рядком
    numLegs: 4, 
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
// 14
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
// 15
function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // Змініть код лише під цим рядком
  Dog.prototype.isPrototypeOf(beagle);
// 16
function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  // показує правильно
  
  // Виправте код нижче так, щоб він мав логічне значення
  Object.prototype.isPrototypeOf(Dog.prototype);
// 17
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
// 18
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Змініть код лише під цим рядком

let duck = Object.create(Animal.prototype); // Змініть цей рядок
let beagle = Object.create(Animal.prototype); // Змініть цей рядок
// 19
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Змініть код лише під цим рядком

Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();
// 20
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Змініть код лише під цим рядком

Bird.prototype = Object.create(Animal.prototype);

let duck = new Bird();
let beagle = new Dog();

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
// 21
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Змініть код лише під цим рядком
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!");
};
// Змініть код лише над цим рядком

let beagle = new Dog();
// 22
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Змініть код лише під цим рядком

Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
};

// Змініть код лише над цим рядком

let penguin = new Penguin();
console.log(penguin.fly());
// 23
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Змініть код лише під цим рядком

function glideMixin(obj) {
  obj.glide = function() {
    console.log("");
  }
}

glideMixin(bird);
glideMixin(boat);
// 24
function Bird() {
  let weight = 15;

  this.getWeight = function() { 
    return weight;
  };
}
// 25
(function () {
  console.log("Chirp, chirp!");
})();
// 26
let funModule  = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        console.log("Gliding on the water");
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
