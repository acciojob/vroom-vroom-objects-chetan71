// Define the Car constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// Define the SportsCar constructor function
function SportsCar(make, model, topSpeed) {
    // Call the Car constructor function
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
