from flask import Flask
import os
from flask_login import LoginManager


def create_app():
    '''
    Create flask app
    '''
    app = Flask(__name__)
    app.config['SECRET_KEY'] = "SOEN341"

    from .views import views
    from .authentification import auth

    app.register_blueprint(views, url_prefix="/")
    app.register_blueprint(auth, url_prefix="/")

    return app