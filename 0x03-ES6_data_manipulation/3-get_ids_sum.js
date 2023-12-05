import getListStudents from './0-get_list_students';
import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum() {
  // get the list
  const list = getListStudents();

  // extract ids
  const ids = getListStudentIds(list);

  // accumulate the ids
  const sum = ids.reduce((accumulator, currentId) => accumulator + currentId, 0);

  return sum;
}

// test the function

// const idsum = getStudentIdsSum();
// console.log(idsum);
