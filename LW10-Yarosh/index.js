// прототип Тварини
function Animal(gender) {
    this.gender = gender;
  }
  
  Animal.prototype.run = function() {
    console.log("I am running");
  }
  
  Animal.prototype.jump = function() {
    console.log("I am jumping");
  }
  
  // прототип Ссавця
  function Mammal(gender) {
    Animal.call(this, gender);
  }
  
  Mammal.prototype = Object.create(Animal.prototype);
  Mammal.prototype.constructor = Mammal;
  
  Mammal.prototype.feedBaby = function() {
    if (this.gender === "female") {
      console.log("I am feeding my baby with milk");
    }
  }
  
  // прототип Єнота
  function Raccoon() {}
  
  Raccoon.prototype = Object.create(Mammal.prototype);
  Raccoon.prototype.constructor = Raccoon;
  
  Raccoon.prototype.steal = function() {
    console.log("I am stealing");
  }
  
  function Cat() {
    this.stomach = [];
  }
  
  Cat.prototype.eat = function(food) {
    this.stomach.push(food);
  };
  
  let speedy = new Cat();
  let lazy = new Cat();
  
  // Цей кіт знайшов їду
  speedy.eat("fish");
  console.log(speedy.stomach); // ["fish"]
  
  // Цей кіт не має їжі
  console.log(lazy.stomach); // []
  

  function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  
  Airplane.prototype.takeOff = function() {
    this.isFlying = true;
    console.log(this.name + " is taking off");
  }
  
  Airplane.prototype.land = function() {
    this.isFlying = false;
    console.log(this.name + " is landing");
  }
  