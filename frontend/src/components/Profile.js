import React from 'react';
import authService from '../services/authService';

const Profile = () => {
  const currentUser = authService.getCurrentUser();

  return (
    <div>
      <h3>Perfil del Usuario</h3>
      {currentUser ? (
        <div>
          <p><strong>Usuario:</strong> {currentUser.username}</p>
          <p><strong>Email:</strong> {currentUser.email}</p>
        </div>
      ) : (
        <p>No has iniciado sesión.</p>
      )}
    </div>
  );
};

export default Profile;
