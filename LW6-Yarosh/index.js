let subjects = ["Cybersecurity", "Web-development"];
subjects.push("Backend");
let medianIndex = Math.floor(subjects.length/2);
subjects[medianIndex] = "Frontend";
let firstElement = subjects.shift();
console.log(firstElement);
subjects.unshift("JavaScript", "NodeJS");
function cleanArray(arr) {
    return arr.filter(val => val);
  }
// fill
Array.prototype.myFill = function(value, start=0, end=this.length) {
    for(let i=start; i<end; i++) {
      this[i] = value;
    }
    return this;
  }
  
  // forEach
  Array.prototype.myForEach = function(callback) {
    for(let i=0; i<this.length; i++) {
      callback(this[i], i, this);
    }
  }
  
  // map
  Array.prototype.myMap = function(callback) {
    let newArray = [];
    for(let i=0; i<this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
    return newArray;
  }
  
  // filter
  Array.prototype.myFilter = function(callback) {
    let newArray = [];
    for(let i=0; i<this.length; i++) {
      if(callback(this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  }
  
  // some
  Array.prototype.mySome = function(callback) {
    for(let i=0; i<this.length; i++) {
      if(callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  }
  
  // every
  Array.prototype.myEvery = function(callback) {
    for(let i=0; i<this.length; i++) {
      if(!callback(this[i], i, this)) {
        return false;
      }
    }
    return true;
  }
    