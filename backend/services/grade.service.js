import { db } from "../index.js";

export const getGradesForCurrentUser = async (req, res, next) => {
  const userId = req.user.user_id;
  const date = req.query?.date;

  if (!userId) {
    return res.status(400).json({ message: 'User must be provided' })
  }
  if (!date) {
    return res.status(400).json({ message: 'Date must be provided' })
  }
  console.log(formatDate(date), userId);
  try {
    const grades = [...await db.query(`
    select p.grade, s.name as subject_name, u.first_name as teacher_first_name, u.last_name as teacher_last_name, p.comments 
    from school.performance p
      join school.subject s on p.subject_id=s.subject_id
        join school.teacher t on p.teacher_id=t.teacher_id
        join school.user u on u.user_id=t.user_id
        where p.student_id=${userId} and p.date='${formatDate(date)}';`)];

    res
      .status(200)
      .json(grades)

  } catch (e) {
    console.log('*getCurrentUser service')
    next(e)
  }
}

function formatDate(inputDate) {
  const parts = inputDate.split('.');
  if (parts.length === 3) {
    const day = parts[0].padStart(2, '0');
    const month = parts[1].padStart(2, '0');
    const year = parts[2];

    return `${year}-${month}-${day}`;
  } else {
    console.error('Invalid date format. Expected format: DD.MM.YYYY');
    return null;
  }
}
