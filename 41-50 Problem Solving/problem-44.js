function rankStudents(students) {
  const sortedStudents = [...students].sort(
    (a, b) => b.score - a.score
  );

  let rank = 1;

  return sortedStudents.map((student, index) => {
    if (
      index > 0 &&
      student.score !== sortedStudents[index - 1].score
    ) {
      rank = index + 1;
    }

    return {
      ...student,
      rank: rank
    };
  });
}