import getListStudents from './0-get_list_students';

export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    const empty = [];
    return empty;
  }
  // get the list- an arr of objects
  const obj = getListStudents();

  // Use map() to extract the ids from the array of objects
  const ids = obj.map((obj) => obj.id);

  return ids;
}

// // test the function

// const obj = getListStudents();

// // test the not arr conditon
// const arr = getListStudentIds('hello');
// // test that the fun returns an arr of ids
// const idsArr = getListStudentIds(obj);

// console.log(arr);
// console.log(idsArr);
