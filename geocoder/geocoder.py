import csv
import time
import requests
from datetime import datetime

with open('address.csv', 'r', encoding='utf-8') as csvfile:
  addressreader = csv.reader(csvfile)
  print('result_geometry')
  for query in addressreader:
    url = 'https://dapi.kakao.com/v2/local/search/address.json?query=%s' % query
    headers = {
      'Authorization': 'KakaoAK 191f4e4baf3ada22a2990b2097f4911d'
    }
    r = requests.get(url, headers=headers)
    result = r.json()
    resultstr = ''
    if result['documents']:
      coords = result['documents'][0]
      resultstr = coords['y'] + ',' + coords['x'] + '\n'
    else:
      resultstr = '\n'
    print(query)
    print(resultstr)
    with open("coords_result.txt", "a") as myfile:
        myfile.write(resultstr)
    # time.sleep(0.3)
