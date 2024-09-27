
# 🗒️ Login with JWT

## 📖 Descripción

Este mini proyecto es una aplicación web de inicio de sesión y registro de usuarios utilizando JSON Web Tokens (JWT) para la autenticación. Los usuarios pueden registrarse y acceder a su cuenta de forma segura. La interfaz es sencilla y permite a los usuarios interactuar sin complicaciones.

## ⚙️ Tecnologías Utilizadas

- **Frontend**: 
  - ![React](https://img.icons8.com/color/48/000000/react-native.png) React
- **Backend**: 
  - ![Python](https://img.icons8.com/color/48/000000/python.png) Python
  - ![Flask](https://img.icons8.com/ios-filled/50/000000/flask.png) Flask
- **Base de Datos**: 
  - ![MariaDB](https://img.icons8.com/color/48/000000/mariadb.png) MariaDB

## 🚀 Guía de Uso

Sigue los siguientes pasos para clonar el proyecto y ejecutarlo localmente:

1. **Clona el repositorio**:
   Abre tu terminal y ejecuta el siguiente comando:
   ```bash
   git clone https://github.com/tu_usuario/login-jwt.git
   ```
   Asegúrate de reemplazar `tu_usuario` con tu nombre de usuario de GitHub.

2. **Navega al directorio del proyecto**:
   ```bash
   cd login-jwt
   ```

3. **Instala las dependencias del frontend**:
   Ve al directorio del cliente de React y ejecuta:
   ```bash
   cd client
   npm install
   ```

4. **Instala las dependencias del backend**:
   Regresa al directorio raíz y luego ve al directorio del servidor:
   ```bash
   cd server
   pip install -r requirements.txt
   ```

5. **Configura la base de datos**:
   - Asegúrate de tener MariaDB instalado y ejecutándose.
   - Crea una base de datos llamada `user_management` y aplica las migraciones necesarias.

6. **Ejecuta el servidor**:
   En el directorio del servidor, ejecuta:
   ```bash
   python app.py
   ```
   Esto iniciará el backend en el puerto 5000.

7. **Ejecuta la aplicación React**:
   En el directorio del cliente, ejecuta:
   ```bash
   npm start
   ```
   Esto abrirá la aplicación en tu navegador por defecto en `http://localhost:3000`.

8. **¡Listo!** Ahora puedes usar la aplicación para registrarte e iniciar sesión.

## 📄 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, por favor abre un *pull request* o *issue*.

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).
