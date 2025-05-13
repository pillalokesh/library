import { useState } from 'react';
 
function StudentLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/students/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        alert('Login successful!');
        localStorage.setItem('token', data.token);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h2 className="form-title">Staff Login</h2>
        <form onSubmit={handleSubmit} className="form">
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
          <button
            type="submit"
            className="submit-button"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentLogin;