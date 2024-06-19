// Generic async work function to simulate network requests
function asyncWork(data, delay = 5000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}

// Refactored functions using asyncWork
async function getId(student) {
  console.log(`Fetching ${student} info!`);
  const id = await asyncWork("jdoe23");
  console.log(`Received ${student} info!`);
  return id;
}

async function getCourses(student_id) {
  console.log(`Fetching ${student_id}'s courses!`);
  const courses = await asyncWork(["course-1", "course-2"]);
  console.log(`Received ${student_id}'s courses!`);
  return { student_id, courses };
}

async function getGrades(student_id, student_courses) {
  console.log(`Fetching ${student_id}'s grades!`);
  const grades = await asyncWork(
    student_courses.map((course) => ({
      course: course,
      grade: Math.floor(Math.random() * 100),
    }))
  );
  console.log(`Received ${student_id}'s grades!`);
  return grades;
}

async function displayStudentInfo() {
  try {
    const id = await getId("John Doe");
    console.log("John Doe ID:", id);
    const { student_id, courses } = await getCourses(id);
    console.log("John Doe Courses:", courses);
    const grades = await getGrades(student_id, courses);
    console.log("John Doe Grades:", grades);
  } catch (error) {
    console.error(error);
  }
}

console.log("Listening to events!");
displayStudentInfo();
console.log("Still listening to events!");
