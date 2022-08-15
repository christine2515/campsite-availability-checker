import selenium
from selenium import webdriver
PATH = "/Users/christinetu/Projects/chromedriver"

driver = webdriver.Chrome(PATH)
url = "https://www.recreation.gov/"
driver.get(url)
driver.maximize_window()
# yay it works!!! :DDD