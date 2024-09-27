import axios from 'axios';

const API_URL = 'http://localhost:5000';  // URL del backend Flask

// Registro de nuevo usuario
const register = (username, email, password) => {
  return axios.post(`${API_URL}/register`, {
    username,
    email,
    password
  });
};

// Inicio de sesión
const login = (email, password) => {
  return axios.post(`${API_URL}/login`, {
    email,
    password
  }).then((response) => {
    if (response.data.access_token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  });
};

// Cerrar sesión
const logout = () => {
  localStorage.removeItem('user');
};

// Obtener el usuario autenticado
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

// Asignar el objeto a una variable primero
const authService = {
    register,
    login,
    logout,
    getCurrentUser
  };
  
  // Luego exportar la variable
  export default authService;
  