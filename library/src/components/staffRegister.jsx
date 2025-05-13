import { useState } from 'react';
 
function StudentRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    studentId: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/students/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        alert('Registration successful!');
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('Registration failed!');
    }
  };

  return (
    <div className="containerr">
      <div className="form-wrapper">
        <h2 className="form-title">Staff Registration</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Staff ID</label>
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <button
            type="submit"
            className="submit-button"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentRegister;