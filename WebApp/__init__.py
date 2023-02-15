from flask import Flask
import os
from flask_sqlalchemy import SQLAlchemy

def create_app():
    '''
    Create flask app
    '''
    app = Flask(__name__)

    app.config['SECRET_KEY'] = "SOEN341"
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///weJob.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    #db = SQLAlchemy(app)

   # class User(db.Model):
   #     id = db.Column(db.Integer, primary_key = True)
   #     email = db.Column(db.String(50), unique = True, nullable = False)
   #     password = db.Column(db.String(50), nullable = False) """

    from .views import views
    from .authentification import auth

    app.register_blueprint(views, url_prefix="/")
    app.register_blueprint(auth, url_prefix="/")

    return app