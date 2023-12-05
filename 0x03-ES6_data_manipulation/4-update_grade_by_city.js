export default function updateStudentGradeByCity(arr, city, newGrades) {
  const updated = arr.filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.find((g) => g.studentId === student.id);

      return { ...student, grade: (grade && grade.grade) || 'N/A' };
    });

  return updated;
}

// test function
// import getListStudents from "./0-get_list_students.js";

// console.log(updateStudentGradeByCity(getListStudents(),
//  "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

// console.log(updateStudentGradeByCity(getListStudents(),
//  "San Francisco", [{ studentId: 5, grade: 97 }]));
