from flask import Flask, request, session
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
    return "geelo"

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

@app.route("/api/")
def modify_profile():
    pass


app.run(debug=True)


