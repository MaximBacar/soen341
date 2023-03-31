import mysql.connector
import hashlib
import re
import jwt
import datetime
import PyPDF2
import textract
import spacy
import fitz


class api:
    

    def check_mail(email : str):
        '''
        Check if email format is valid
        '''
        regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
        if(re.fullmatch(regex, email)):
            return True
        else:
            return False
        
    def user_db_to_account(data : tuple) -> int:
        account = data[0]
        return account

    def auth(self, email : str, clear_password : str) -> bool|int:
        hashed_password = hashlib.sha256(clear_password.encode()).hexdigest()

        if api.check_mail(email) == False:
            return False, None
       
        with self.connection.cursor() as cursor:
                cursor.execute(f"SELECT * FROM `users` WHERE `email` = '{email}' AND `password` = '{hashed_password}';")
                results = cursor.fetchall()

                if len(results) > 0:
                    return True, self.generate_auth_token(results[0][0])
                else:
                    return False, None
                
    def modify_last_name(self, id, name):
        with self.connection.cursor() as cursor:
            cursor.execute(f"UPDATE `users` SET `last_name` = '{name}' WHERE `id`={id}")

    def modify_first_name(self, id, name):
        with self.connection.cursor() as cursor:
            cursor.execute(f"UPDATE `users` SET `first_name` = '{name}' WHERE `id`={id}")

    def update_password(self, id, clear_password):
        hashed_password = hashlib.sha256(clear_password.encode()).hexdigest()
        with self.connection.cursor() as cursor:
            cursor.execute(f"UPDATE `users` SET `password` = '{hashed_password}' WHERE `id`={id}")

    def get_user(self, id):
        with self.connection.cursor() as cursor:
            cursor.execute(f"SELECT `id`, `first_name`, `last_name`, `email`, `location`, `profile_picture_location`, `banner_picture_location`, `about` FROM `users` WHERE `id` = {id};")
            user = cursor.fetchall()
            print(user)
            return {"id" : user[0][0], "first_name" : user[0][1], "last_name" : user[0][2], "email" : user[0][3], "location" : user[0][4], "pfp" : user[0][5], "banner" : user[0][6], "about" : user[0][7]}

    def register_user(self, email, first_name, last_name, password, phone):
        hashed_password = hashlib.sha256(password.encode()).hexdigest()
        sql = f'INSERT INTO `users` VALUES (0, "{first_name}", "{last_name}", "{email}",  "{hashed_password}", NULL, NULL, NULL, "" )'
        with self.connection.cursor() as cursor:
            cursor.execute(sql)
        
    def set_about(self, id, text):
         with self.connection.cursor() as cursor:
            cursor.execute(f"UPDATE `users` SET `about` = '{text}' WHERE `id`={id}")

    def get_skills(self, id : int) -> dict:
        with self.connection.cursor() as cursor:
            cursor.execute(f"SELECT * FROM `user_skills` WHERE `user_id` = {id};")
            user_skills = cursor.fetchall()
            skills = {"nbElement" : len(user_skills), "skills" : {}}
            for i in range (len(user_skills)):
                    skills["skills"][i] = {"skill_id" : user_skills[i][0], "user_id" : user_skills[i][1], "skill_name" : user_skills[i][2]}

            

            return skills
        

    def dashboard(self, id : int):
        response = {}
        response["info"] = self.get_user(id)
        response["recommended_posts"] = self.get_recommended_posts(id)
        response["skills"] = self.get_skills(id)
        return response
    
    def get_employer(self, employer_id):
        with self.connection.cursor() as cursor:
            cursor.execute(f"SELECT `id`, `name`, `email`, `description`, `logo` FROM `employers` WHERE `id` = {employer_id};")
            user = cursor.fetchall()
            print(user)
            return {"id" : user[0][0], "name" : user[0][1], "email" : user[0][2], "description" : user[0][3], "logo" : user[0][4]}
        
    def get_employer_postings(self, employer_id):

        postings = {}

        with self.connection.cursor() as cursor:
            cursor.execute(f"SELECT * FROM `postings` WHERE `employer_id` = {employer_id};")
            posting_db = cursor.fetchall()

            for i in range(len(posting_db)):
                postings[i] = {"id":posting_db[i][0], "name":posting_db[i][1], "post_time" : posting_db[i][2], "description": posting_db[i][3], "salaray":posting_db[i][5]}


        return postings



    
    def employer_dashboard(self, employer_id):
        response = {}
        response["info"] = self.get_employer(employer_id)
        response["postings"] = self.get_employer_postings(employer_id)
        response["total_postings"] = len(self.get_employer_postings(employer_id))
        return response

    
    def generate_auth_token(self, id : int):
        token = jwt.encode({'user_id' : id},  self.key)

        return token
    
    def decode_auth_token(self, token):
        
        try:
            data = jwt.decode(token, self.key, algorithms=["HS256"])
            print(data)
            return True, {"user_id" : data["user_id"]}
        except Exception as e:
            print(e)
            return False, {}
        

    def extract_info_cv():
        nlp = spacy.load('fr_core_news_sm')
        cv_file = 'C:/Users/maxim/OneDrive/Documents/Maxim Bacar/School/University/Winter 2023/scrum/197team-soen341project2023/API/cv.pdf'
        doc = fitz.open(cv_file)



        text = ""
        for page in doc:
            p = page.get_text()
            text += p


        print(text)

        doc = nlp(text)
        print(doc.sents)
        sections = {}
        for ent in doc.ents:
            if ent.label_ == 'SECTION':
                sections[ent.text.strip().lower()] = ent.end_char

        print(sections)



    def extract_cv():
        

        # Open the PDF file
        pdf_file = open(r'C:/Users/maxim/OneDrive/Documents/Maxim Bacar/School/University/Winter 2023/scrum/197team-soen341project2023/API/cv.pdf', 'rb')
        pdf_reader = PyPDF2.PdfReader(pdf_file)

        # Extract text from the PDF
        text = ''
        for i in range(len(pdf_reader.pages)):
            page = pdf_reader.pages[i]
            text += page.extract_text()

        print(text)
        # Use regular expressions to identify sections
        education_section = re.search(r'Expériences(.+?)Formation', text, re.DOTALL)
        experience_section = re.search(r'Formation(.+?)Compét ences', text, re.DOTALL)
        skills_section = re.search(r'Compét ences(.+?)\Z', text, re.DOTALL)

        # Use regular expressions to extract information from each section
        education_info = re.findall(r'\n(.+?)\n(.+?)\n(.+?)\n', education_section.group(1))
        experience_info = re.findall(r'\n(.+?)\n(.+?)\n(.+?)\n', experience_section.group(1))
        skills_info = re.findall(r'\n(.+?)\n', skills_section.group(1))

        # Create a dictionary with the extracted information
        cv_data = {
            'education': education_info,
            'experience': experience_info,
            'skills': skills_info
        }

        # Print the dictionary
        print(cv_data)


    def list_postings(self, id):
        pass

    def search_bar(self, entry):
        with self.connection.cursor() as cursor:
            cursor.execute(f"SELECT * FROM `users` WHERE `first_name` LIKE '%{entry}%' OR `last_name` LIKE '%{entry}%' ;")
            users = cursor.fetchall()
            cursor.execute(f"SELECT * FROM `employes` WHERE `name` LIKE '%{entry}%';")
            companies = cursor.fetchall()
            cursor.execute(f"SELECT * FROM `postings` WHERE `name` LIKE '%{entry}%';")
            postings = cursor.fetchall()




        return {}
        
    
            
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
                        

                    return recommended_posts

                    

                    
                    

                    #return True, api.user_db_to_account(results[0])
                else:
                    return False, None




        
                


    def __init__(self, mysql_connection) -> None:
        self.connection = mysql_connection


        self.token_exp = datetime.timedelta(minutes=30)
        self.key = "SOEN341"



