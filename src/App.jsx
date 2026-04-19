import { useState, useRef, useCallback } from 'react';
import StudentCard from './components/StudentCard';
import RegisterCourse from './components/RegisterCourse';

function App() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Introduction to Cs", 
      credits: 6,
      grade: 92,
      attending: true,
      difficulty: "Easy"
    },
    {
      id: 2,
      name: "Calculus ",
      credits: 6,
      grade: 45,
      attending: false,
      difficulty: "Hard"
    },
    {
      id: 3,
      name: "Data Structures",
      credits: 6,
      grade: 78,
      attending: true,
      difficulty: "Moderate"
    }
  ]);

  const fullName = "Besir Rexhepi";     
  const studentId = "132468";       
NT_
  
  const addCourse = useCallback((newCourse) => {
    setCourses(prev => [...prev, { ...newCourse, id: Date.now() }]);
  }, []);

  const nameInputRef = useRef(null);   

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Semester Course Tracker</h1>
      <p><strong>{fullName}</strong> (ID: {studentId})</p>
      <p>The courses below are my enrolled courses for this semester.</p>

      <h2>My Courses</h2>
      <div>
        {courses.map(course => (
          <StudentCard key={course.id} course={course} />
        ))}
      </div>

      <RegisterCourse 
        onRegister={addCourse} 
        nameInputRef={nameInputRef} 
      />
    </div>
  );
}

export default App;