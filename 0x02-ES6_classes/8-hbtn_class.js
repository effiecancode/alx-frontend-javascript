export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](value) {
    if (value === 'number') {
      return this._size;
    }
    return this._location;
  }
}

/**
 * -[Symbol.toPrimitive] is a special method in JavaScript
 * -that allows objects to define how they behave when converted to a primitive type
 * (like a number, string, or default value).
 * It takes one argument, value, which specifies the type of conversion being performed.
 *
 * -the method checks the value parameter:If the value is 'number',
 * the method returns the _size property of the object.
 * -so if an operation expects a number JavaScript will convert the object to a number
 * by accessing its _size property.
 *
 * For any other value (not specifically 'number'), it returns the _location
 */
