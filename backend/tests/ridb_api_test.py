import requests
# from clients.recreation_client import RecreationClient

api_key = "4bfbd397-2592-4ec6-963e-f464c881d961"
ridb_url = "https://www.recreation.gov"
AVAILABILITY_ENDPOINT = (
    ridb_url + "/api/camps/availability/campground/{park_id}/month"
)
MAIN_PAGE_ENDPOINT = ridb_url + "/api/camps/campgrounds/{park_id}"


def get_park_name(park_id):
    resp = _send_request(
        MAIN_PAGE_ENDPOINT.format(park_id=park_id), {}
    )
    return resp["campground"]["facility_name"]

def _send_request(url, params):
    resp = requests.get(url, params=params)
    if resp.status_code != 200:
        raise RuntimeError(
            "failedRequest",
            "ERROR, {status_code} code received from {url}: {resp_text}".format(
                status_code=resp.status_code, url=url, resp_text=resp.text
            ),
        )
    return resp.json()

print(get_park_name(231959))


"""
plan:
make a python class
const variables with info (inputs):
park id (string)
start date
equipment type

functions:
get availability -> output campsite available list


main:
create user/request object of class -> get availability
if the availability list is not empty -> loop through list and use webdriver to reserve the first one that's open
notify user via text or email that you have 15 min to reserve
"""



