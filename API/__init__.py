from flask import Flask, request, session, redirect, make_response
from api import api
import os
from mysql.connector import connect, Error
import mysql.connector
from getpass import getpass



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

app.config['SECRET_KEY'] = "SOEN341"

@app.route('/')
def home():
    return "API"

@app.route("/api/auth", methods=['POST'])
def auth():
    if session.get("user") == None:
        if request.method == "POST":
            email = request.form["email"]
            password = request.form["password"]


            acc_data = api_interface.get_account(email=email, clear_password=password)
            if acc_data[0] == True:
                session["user"] = acc_data[1]
                return "valid"
            else:
                return "invalid"
    
    return f"{ session.get('user') }"


@app.route("/api/session", methods=['GET'])
def get_session():
    '''
    Return session
    '''

    status = {}
    if session.get("user") == None:
        status['status'] = False
        status['id'] = None
        
    else:
        status['status'] = True
        status['id'] = session.get("user")
    
    return status


@app.route("/api/recommended", methods=['GET','POST'])
def recommended():
    '''
    Return a json of 5 recommended postings for the candidate
    '''
    
    if request.method == "POST":
        id = request.form['id']

        pass
    

    return api_interface.get_recommended_posts(1)

@app.route("/api/skills", methods=['GET', 'POST'])
def skills():
    return api_interface.get_skills(1)


@app.route("/api/user", methods=['GET', 'POST'])
def user():
        return api_interface.get_user(1)

@app.route("/api/updateAbout", methods=['POST'])
def set_about():
    if request.method == "POST":
        id = request.form["user_id"]
        text = request.form["text"]

        api_interface.set_about(id, text)

    return redirect("http://localhost:3000/dashboard/")

@app.route("/api/dashboard", methods=['GET'])
def dashboard():
    id = request.args.get("user_id")

    if id == None:
        return make_response("Invalid user id", 400)
    return api_interface.dashboard(id)

@app.route("/api/m")
def modify_profile():
    pass


app.run(debug=True)


