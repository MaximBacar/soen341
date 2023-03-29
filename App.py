from mysql.connector import connect, Error
from getpass import getpass


HOST = "localhost"
USER = "root"

if __name__ == "__main__":

    #   Connect to SQL database

    print(f"Connecting to [{HOST}] with user [{USER}]")
    database_password = getpass("Enter password : ")
    connection = None

    try: 
    
        connection = connect(
            host = "localhost",
            user = "root",
            password = database_password,
            database = 'wejob'
        )

    except Error as e:
        print(e)





    app = create_app(connection)
    app.run(debug=True)

