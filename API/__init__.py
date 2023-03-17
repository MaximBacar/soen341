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
            return make_response("Invalid token", 403)
        
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





@app.route("/api/testauth")
def testauth():
    auth = request.authorization

    if auth and auth.password == 'password':
        token = jwt.encode({'user' : auth.username, 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config["SECRET_KEY"])
        return {'token':token}
    return make_response("Couldn't authentificate", 401, {'WWW-Authenticate' : 'Basic realm="Login Required"'})

app.run(debug=True)


