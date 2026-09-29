let students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 72 },
  { name: "Charlie", marks: 58 },
];


function groupStudentsByGrade(students) {
  let result = students.reduce(
    (result, student) => {
      if (student.marks >= 80) {
        result.A.push(student);
      } else if (student.marks >= 70) {
        result.B.push(student);
      } else if (student.marks >= 60) {
        result.C.push(student);
      } else {
        result.F.push(student);
      }

      return result;
    },
    {
      A: [],
      B: [],
      C: [],
      F: [],
    },
  );

  return result;
}
