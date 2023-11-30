export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}

/**
 * use Symbol.species to define a static getter.
 * Symbol.species is a special symbol in JS that defines a function
 * valued property that is used to create derived objects.
 */
