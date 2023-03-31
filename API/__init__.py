from flask import Flask, request, session, redirect, make_response
from flask_restful import Resource, Api
from flask_httpauth import HTTPBasicAuth
from api import api
from functools import wraps
import os
from mysql.connector import connect, Error
import mysql.connector
import jwt
import datetime
from getpass import getpass
import json



HOST = "localhost"
USER = "root"



#   Connect to SQL database

print(f"Connecting to [{HOST}] with user [{USER}]")
#database_password = getpass("Enter password : ")
database_password = "Lego2002"
connection = None

try: 
    
    connection = connect(
        host = "localhost",
        user = "root",
        password = database_password,
        database = 'wejob'
    )

except Error as e:
    print()

app = Flask(__name__)



api_interface = api(connection)

app.config['SECRET_KEY'] = api_interface.key

@app.route('/')
def home():
    return "API"


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.args.get('token')
        print(token)
        response = api_interface.decode_auth_token(token)

        if response[0] == False:
            return make_response({"validity" : False}, 403)
        
        id = response[1]["user_id"]
        
        return f(id, *args, **kwargs)
    return decorated

@app.route("/api/auth", methods=['GET', 'POST'])
def auth():

    if request.method == "POST":
        data = request.get_json()
        email = data["email"]
        password = data["password"]

        acc_data = api_interface.auth(email=email, clear_password=password)
        if acc_data[0] == True:
            return {"token" : acc_data[1]}
        
    
    return "invalid"

@app.route("/api/register", methods=['GET', 'POST'])
def register():

    if request.method == "POST":
        data        = request.get_json()
        email       = data["email"]
        first_name  = data["first_name"]
        last_name   = data["last_name"]
        password    = data["password"]
        phone       = data["phone"]

        



@app.route("/api/updateAbout", methods=['POST'])
def set_about():
    if request.method == "POST":
        id = request.form["user_id"]
        text = request.form["text"]

        api_interface.set_about(id, text)

    return redirect("http://localhost:3000/dashboard/")

@app.route("/api/dashboard", methods=['GET'])
@token_required
def dashboard(id):
    
    if id == None:
        return make_response("Invalid user id", 400)
    return api_interface.dashboard(id)


@app.route("/api/feed/")
@token_required
def feed(id):
    if id == None:
        return make_response("Invalid user id", 400)
    pass


@app.route("/api/profile/")
def profile():
    pass

@app.route("/api/company")
def company():
    pass

@app.route("/api/company_dashboard")
def company_dashboard():
    return api_interface.employer_dashboard(1)

app.run(debug=True)


