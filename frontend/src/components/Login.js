import React, { useState } from 'react';
import authService from '../services/authService';
import './Login.css'; // Importa el archivo CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    authService.login(email, password).then(
      (response) => {
        setMessage({ text: 'Inicio de sesión exitoso. Bienvenido!', type: 'success' }); // Mensaje de éxito
        // Aquí puedes redirigir al usuario a otra página o guardar el token
      },
      (error) => {
        const resMessage =
          (error.response && error.response.data && error.response.data.msg) ||
          error.message ||
          error.toString();
          
        setMessage({ text: resMessage, type: 'error' }); // Mensaje de error
      }
    );
  };

  return (
    <div className="container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Ingresar</button>
      </form>
      {message && (
        <p className={`message ${message.type}`}>{message.text}</p> // Estilo dinámico
      )}
    </div>
  );
};

export default Login;
