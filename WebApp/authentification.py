from flask import Blueprint, render_template, url_for
from flask import Flask, render_template, redirect, url_for, request
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, PasswordField, BooleanField
from wtforms.fields import EmailField
from wtforms.validators import Email, InputRequired, Length


auth = Blueprint("auth", __name__)


class LoginForm(FlaskForm):
    email = StringField('email', validators = [InputRequired(), Length(max = 40)])
    password = PasswordField('password', validators = [InputRequired(), Length(min = 8, max = 20)])

class Registration(FlaskForm):
    email = StringField('email', validators = [InputRequired(), Email(message = 'Invalid email'), Length(max = 40)])
    password = PasswordField('password', validators = [InputRequired(), Length(min = 8, max = 20)])

@auth.route("/login", methods = ['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if request.form['email'] != 'admin' or request.form['password'] != 'secret':
            error = 'Invalid email or password. Please try again.'
        else:
            return 'You were successfully logged in'
    return render_template('login.html', error = error)


@auth.route("/register")
def register():
    return "register"