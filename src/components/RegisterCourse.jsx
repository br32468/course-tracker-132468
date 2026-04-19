import { useState } from 'react';

function RegisterCourse({ onRegister, nameInputRef }) {
  const [form, setForm] = useState({
    name: '',
    credits: 5,
    grade: 5,
    attending: false,
    difficulty: 'Easy'
  });

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!form.name.trim()) {
      alert('Course name cannot be empty');
      return;
    }
    if (form.grade < 5 || form.grade > 10) {
      alert('Grade must be a number from 5 to 10');
      return;
    }

    onRegister({
      name: form.name,
      credits: Number(form.credits),
      grade: Number(form.grade),
      attending: form.attending,
      difficulty: form.difficulty
    });

   
    setForm({ name: '', credits: 5, grade: 5, attending: false, difficulty: 'Easy' });
    

    if (nameInputRef.current) nameInputRef.current.focus();
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <h2>Register New Course</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
        <input
          ref={nameInputRef}
          type="text"
          placeholder="Course name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        
        <input
          type="number"
          placeholder="Credit hours"
          value={form.credits}
          onChange={(e) => setForm({ ...form, credits: e.target.value })}
        />
        
        <input
          type="number"
          placeholder="Current grade"
          value={form.grade}
          onChange={(e) => setForm({ ...form, grade: e.target.value })}
        />
        
        <label>
          <input
            type="checkbox"
            checked={form.attending}
            onChange={(e) => setForm({ ...form, attending: e.target.checked })}
          />
          Attending regularly
        </label>
        
        <select
          value={form.difficulty}
          onChange={(e) => setForm({ ...form, difficulty: e.target.value })}
        >
          <option value="Easy">Easy</option>
          <option value="Moderate">Moderate</option>
          <option value="Hard">Hard</option>
        </select>
        
        <button type="submit" style={{ padding: '10px', fontSize: '16px' }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterCourse;