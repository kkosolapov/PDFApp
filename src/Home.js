import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    navigate('/profile', { state: { username: formData.username } });
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
      <form className="p-5 rounded bg-secondary" onSubmit={login}
        style={{
          maxWidth: "40vw", 
          width: "100%" 
        }}>
        <h2 className="text-center mb-4">Вхід</h2>
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Логін (макс. довжина - 8 символів)"
            name="username"
            maxLength="8"
            required
            autoFocus
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Пароль (макс. довжина - 8 символів)"
            className="form-control"
            name="password"
            maxLength="8"
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Увійти
        </button>
      </form>
    </div>
  );
}

export default Home;
