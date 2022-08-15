import requests
from datetime import datetime, timedelta

class Checker():
    def __init__(self, park_id, start_date, equipment_type):
        self.park_id = park_id
        self.start_date = start_date
        self.equipment_type = equipment_type
    
    def get_availability(self):
        availability = []
        return availability
    
    def format_url(self):
        url = ""
        return url

    def request_information(self):
        return True        











