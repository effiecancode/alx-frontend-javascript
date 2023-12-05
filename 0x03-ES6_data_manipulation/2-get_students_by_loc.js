export default function getStudentsByLocation(arr, city) {
  // use filter() to filter students by location
  return arr.filter((student) => student.location === city);
}

// test the function

// import getListStudents from './0-get_list_students';
// const students = getListStudents()
// const bylocation = getStudentsByLocation(students, 'San Francisco');
// console.log(students);
// console.log(bylocation);
