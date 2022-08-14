import selenium
import requests
from selenium import webdriver
PATH = "/Users/christinetu/Projects/chromedriver"

driver = webdriver.Chrome(PATH)
recreation_url = "https://www.recreation.gov/"
driver.get(recreation_url)
driver.maximize_window()

api_key = "4bfbd397-2592-4ec6-963e-f464c881d961"
ridb_url = url = 'https://ridb.recreation.gov/api/v1/campsites/'

params = {'apikey': api_key}

r = requests.get(ridb_url, params=params)

# function to gather data from user => input to class
# data to gather: campsite id/name, possible arrival date(s), equipment (tent or RV)

CAMPSITE = ""
ARRIVAL_DATES = []

# booking info (have login and name/info autosaved) actually this is optional...
# GROUP_SIZE
# CAMPING_EQUIPMENT
# NUM_VEHICLES

# function to check website
def check():
    available = False
    if available == True:
        return True
    else:
        return False


# function to notiify
def notify():
    return True

def book():
    # click the button
    # click the book button
    # click the login button if needed
    # check that there's a timer on the upper left
    # notify
    return True

# while not campsite_found:
#     campsite_found = False
#     campsite_found = check()
#     if campsite_found:
#         book()







