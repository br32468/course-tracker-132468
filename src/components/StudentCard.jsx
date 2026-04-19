function StudentCard({ course }) {
  const atRisk = course.grade < 50 && course.attending === false;
  const distinction = course.grade >= 85;

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px 0',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>{course.name}</h3>
      <p><strong>ID:</strong> {course.id}</p>
      <p><strong>Credits:</strong> {course.credits}</p>
      <p><strong>Grade:</strong> {course.grade}</p>
      <p><strong>Attending:</strong> {course.attending ? 'Yes' : 'No'}</p>
      <p><strong>Difficulty:</strong> {course.difficulty}</p>

      {atRisk && <p style={{ color: 'red', fontWeight: 'bold' }}>🚨 At risk</p>}
      {distinction && <p style={{ color: 'green', fontWeight: 'bold' }}>🏆 Eligible for distinction</p>}
    </div>
  );
}

export default StudentCard;