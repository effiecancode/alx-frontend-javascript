export default function getStudentsByLocation(arr, city) {
  // use filter() to filter students by location
  return arr.filter((student) => student.location === city);
}
