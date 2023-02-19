from flask import Blueprint, render_template, url_for
from flask import Flask, render_template, redirect, url_for, request
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, PasswordField, BooleanField
from wtforms.fields import EmailField
from wtforms.validators import Email, InputRequired, Length, EqualTo
from flask_sqlalchemy import SQLAlchemy

auth = Blueprint("auth", __name__)
db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(50), unique = True, nullable = False)
    password = db.Column(db.String(50), nullable = False)

class LoginForm(FlaskForm):
    email = StringField('email', validators = [InputRequired(), Length(max = 40)])
    password = PasswordField('password', validators = [InputRequired(), Length(min = 8, max = 20)])

class RegistrationForm(FlaskForm):
    email = StringField('email', validators = [InputRequired(), Email(message = 'Invalid email'), Length(max = 40)])
    password = PasswordField('password', validators = [InputRequired(), EqualTo('confirm_password', message = 'Passwords must match'), Length(min = 8, max = 20)])
    confirm_password = PasswordField('please confirm your password')

@auth.route('/login', methods = ['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if request.form['email'] != 'admin' or request.form['password'] != 'secret':
            error = 'Invalid email or password. Please try again.'
        else:
            return 'You were successfully logged in'
    return render_template('login.html', error = error)


@auth.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(email = form.email.data, password = form.password.data)
        db.session.add(user)
        db.session.commit()
       # return redirect(url_for('home'))
    return render_template('register.html', form = form)
