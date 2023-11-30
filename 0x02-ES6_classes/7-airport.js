export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }
}

// constructs a string representation
Airport.prototype.toString = function airportToString() {
  return `[object ${this._code}]`;
};

/**
 * Every JavaScript object (except for null) has a prototype. It's a reference to another object.
 * The prototype is accessed via the prototype property of a constructor function or
 * an object instance.
 */
