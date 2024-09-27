from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
import os

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    
    # Configuración de la base de datos MariaDB
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'mysql+pymysql://root:@localhost/user_registration_system')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    # Configuración de JWT
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'super-secret')  # Cambia esto a una clave segura
    
    # Inicialización de extensiones
    db.init_app(app)
    migrate.init_app(app, db)
    jwt = JWTManager(app)
    
    # Registro de las rutas
    from .routes import auth_bp
    app.register_blueprint(auth_bp)
    
    return app
