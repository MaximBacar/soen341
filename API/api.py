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
                
    def get_recommended_posts(self, id : int) -> dict:
        with self.connection.cursor() as cursor:
                cursor.execute(f"SELECT * FROM `user_skills` WHERE `user_id` = {id};")
                user_skills = cursor.fetchall()

                if len(user_skills) > 0:
                    sql_request = "SELECT * FROM `posting_skills` WHERE `skill` LIKE "
                    for i in range(len(user_skills)):
                        if i > 0:
                            sql_request = sql_request +f" OR `skill` LIKE '{user_skills[i][2]}'"
                        else:
                            sql_request = sql_request + f"'{user_skills[i][2]}'"
                    sql_request = sql_request +";"

                    print(sql_request)
                    
                    cursor.execute(sql_request)
                    posting_skills = cursor.fetchall()

                    posting_id = []

                    for skill in posting_skills:
                        if skill[1] not in posting_id:
                            posting_id.append(skill[1])

                    sql_request = "SELECT * FROM `postings` WHERE `id` IN ("
                    for i in range(len(posting_id)):
                        sql_request = sql_request + f"{posting_id[i]}"

                        if (i < len(posting_id)-1):
                            sql_request = sql_request+","
                    sql_request = sql_request +") ORDER BY `post_time` DESC LIMIT 5;"

                    

                    

                    cursor.execute(sql_request)
                    postings = cursor.fetchall()

                    recommended_posts = {}

                    for i in range(len(postings)):
                        recommended_posts[i] = {"posting_id" : postings[i][0],
                                                "name" : postings[i][1],
                                                "date" : postings[i][2],
                                                "description" : postings[i][3],
                                                "employer_id" : postings[i][4]
                                                }
                        

                    print(recommended_posts)

                    return recommended_posts

                    

                    
                    

                    #return True, api.user_db_to_account(results[0])
                else:
                    return False, None
                


    def __init__(self, mysql_connection) -> None:
        self.connection = mysql_connection
