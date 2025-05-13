import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
function AdminLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting login data:', formData);
    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log('Server response:', data);
      if (response.ok) {
        alert('Admin login successful!');
        localStorage.setItem('adminToken', data.token);
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Admin login failed!');
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h2 className="form-title">Admin Login</h2>
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
            Admin Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;