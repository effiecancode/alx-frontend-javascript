export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // get/set name
  get name() {
    return this._name;
  }

  // ensure name is a string
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // get/set length
  get length() {
    return this._length;
  }

  // ensure length is a number
  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // get/set students
  get students() {
    return this._students;
  }

  // (ensure its an arr of strings)
  set students(value) {
    if (Array.isArray(value)) {
      value.forEach((element) => {
        if (typeof element !== 'string') {
          throw new TypeError('Each element of students must be a string');
        }
      });
      this._students = value;
    } else {
      throw new TypeError('Students must be an array');
    }
  }

//   set students(value) {
//     value.forEach((element) => {
//       if (typeof element === 'string') {
//         this._students = value;
//       } else {
//         throw new TypeError('The array elements must be strings');
//       }
//     });
//   }
}
