import requests
from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from datetime import datetime, timedelta
import pymongo
from pymongo import MongoClient
import dns

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'campsitecheckerdb'
app.config['MONGO_URI'] = 'mongodb+srv://christine2515:wiggle869@campsitecheckerdb.7pzsn6c.mongodb.net/?retryWrites=true&w=majority'

mongo = PyMongo(app)
db = mongo.db

print(db)

# ADD REQUEST (and make account)
@app.route('/MainPage', methods=['POST'])
def add_request():
    users = mongo.db.accounts
    # data = users.find()
    park = request.json['park']
    start = request.json['start']
    equipment = request.json['equipment']
    email = request.json['email']
    password = request.json['password']

    user_id = users.insert_one({
        "park": park,
        "start": start,
        "equipment": equipment,
        "email": email,
        "password": password,
    }).inserted_id

    output = {'success':200, 'user': str(user_id)}
    return jsonify({'result': output})

# FIND YOUR REQUESTS
@app.route('/AccountPage', methods=['GET'])
def get_user_requests():
    users = mongo.db.accounts
    email = request.json['email']
    password = request.json['password']

    user_requests = users.find({
        "email": email,
        "password": password,
    })

    output = []

    if r:
        for r in user_requests:
            output.append({
                'park': r['park'],
                'start': r['start'],
                'equipment': r['equipment']
            })
    else:
        output = "Account not found."

    return jsonify({'result': output})





# @app.route('/AccountPage', methods=['GET'])
# def get_user_account():
#     users = mongo.db.accounts
#     data = users.find()


#     output = []

#     for account in accounts.find():
#         output.append({'name' : account['park'], 'language' : account['equipment']})
    
#     print(jsonify({'result' : output}))

#     return jsonify({'result' : output})

# @app.route('/MainPage', methods=['PUT'])
# def add_user_account():
#     accounts = mongo.db.framework 

#     output = []

#     for account in accounts.find():
#         output.append({'name' : account['park'], 'language' : account['equipment']})
    
#     print(jsonify({'result' : output}))

#     return jsonify({'result' : output})

if __name__ == '__main__':
    app.run(debug=True)



# client = pymongo.MongoClient("mongodb+srv://christine2515:wiggle869@campsitecheckerdb.7pzsn6c.mongodb.net/?retryWrites=true&w=majority")
# db = client['campsitecheckerdb']
# col = db['accounts']

# acc = {
#     "park": "kirk creek campground",
#     "start": "2022-08-20",
#     "equipment": "tent",
#     "email": "test@test.com",
#     "password": "password1"
# }










# if __name__ == '__main__':
#     app.run(debug=True)

# class Checker():
#     def __init__(self, park_id, start_date, equipment_type):
#         self.park_id = park_id
#         self.start_date = start_date
#         self.equipment_type = equipment_type
    
#     def get_availability(self):
#         availability = []
#         return availability
    
#     def format_url(self):
#         url = ""
#         return url

#     def request_information(self):
#         return True        











