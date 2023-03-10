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
                print("invalid")
    
    return ""


app.run(debug=True)


