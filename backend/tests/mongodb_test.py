import requests
from flask import Flask
from datetime import datetime, timedelta
import pymongo
import dns


client = pymongo.MongoClient("mongodb+srv://christine2515:wiggle869@campsitecheckerdb.7pzsn6c.mongodb.net/?retryWrites=true&w=majority")
db = client['campsitecheckerdb']
col = db['accounts']

# print(client.list_database_names())
acc = {
    "park": "kirk creek campground",
    "start": "2022-08-20",
    "equipment": "tent",
    "email": "test@test.com",
    "password": "password1"
}

x = col.insert_one(acc)
print(col.find_one())