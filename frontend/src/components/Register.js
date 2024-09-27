import React, { useState } from 'react';
import authService from '../services/authService';
import './Register.css'; // Importa el archivo CSS

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    authService.register(username, email, password).then(
      (response) => {
        setMessage({ text: 'Usuario registrado exitosamente.', type: 'success' });
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.msg) ||
          error.message ||
          error.toString();

        setMessage({ text: resMessage, type: 'error' });
      }
    );
  };

  return (
    <div className="container">
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Nombre de usuario</label><br></br>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label><br></br>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña</label><br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      {message && (
        <p className={`message ${message.type}`}>{message.text}</p> // Estilo dinámico
      )}
    </div>
  );
};

export default Register;
