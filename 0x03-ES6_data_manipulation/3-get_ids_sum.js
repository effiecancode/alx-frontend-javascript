import getListStudentIds from './1-get_list_student_ids';
import getListStudents from './0-get_list_students';

export default function getStudentIdsSum(getListStudents) {
  // get the list of students
  const obj = getListStudents();

  // extract ids
  const ids = getListStudentIds(obj);

  // accumulate the ids
  sum = ids.reduce((accumulator, currentId) => accumulator + currentId, 0);

  return sum;
}

// test the function

// const obj = getListStudents();
// const ids = getListStudentIds(obj);
// const idsum = getStudentIdsSum(ids);

// console.log(idsum);
