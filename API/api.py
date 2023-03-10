import mysql.connector
import hashlib
import re

class api:

    

    def check_mail(email : str):
        regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
        if(re.fullmatch(regex, email)):
            return True
        else:
            return False
        
    def user_db_to_account(data : tuple) -> int:
        account = data[0]
        return account

    def get_account(self, email : str, clear_password : str) -> bool|int:
        hashed_password = hashlib.sha256(clear_password.encode()).hexdigest()

        if api.check_mail(email) == False:
            return False, None
        
       
        with self.connection.cursor() as cursor:
                cursor.execute(f"SELECT * FROM `users` WHERE `email` = '{email}' AND `password` = '{hashed_password}';")
                results = cursor.fetchall()

                if len(results) > 0:
                    return True, api.user_db_to_account(results[0])
                else:
                    return False, None
                

    def __init__(self, mysql_connection) -> None:
        self.connection = mysql_connection
