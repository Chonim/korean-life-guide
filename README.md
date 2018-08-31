# Travel With Kids

> The ultimate web application you need when you travel with your kids 

- [Travel+with+Kids_Kids+First+v.2..pptx](https://firebasestorage.googleapis.com/v0/b/travel-with-kids.appspot.com/o/docs%2FTravel%2Bwith%2BKids_Kids%2BFirst%2Bv.2..pptx?alt=media&token=bd9ee4f5-0a23-418f-b77b-979eca150a92)

## URL
[https://travel-with-kids.firebaseapp.com/](https://travel-with-kids.firebaseapp.com/)

## Features
- Public lavatory / hospitals (ER) search
- Kids lavatory / pediatric doctor search
- Nearby search
- Specific area search
- Optimal way search with elevator information
- Place autocomplete
- Geocoding

## Used Framework & Libraries
- VueJS
- Vue Router
- Vuex
- Axios
- Firebase
- Here API
- Google Maps API
- Font Awesome

## Used Open Data

- Download List: [Kids+First+활용데이터+목록-1.xlsx
](https://firebasestorage.googleapis.com/v0/b/travel-with-kids.appspot.com/o/docs%2FKids%2BFirst%2B%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%83%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%90%E1%85%A5%2B%E1%84%86%E1%85%A9%E1%86%A8%E1%84%85%E1%85%A9%E1%86%A8-1.xlsx?alt=media&token=4cee544f-40cc-49a5-ba6d-c05f63872e2a)

| Country     | Title                         | Provider   | Fields                            | Format |
|-------------|-------------------------------|------------|-----------------------------------|--------|
| South Korea | Public Lavatory               | Seoul      | Children toilet                 | CSV    |
| South Korea | Emergency Room                | Seoul      | Pediatric night care            | CSV    |
| Japan       | Public Lavatory               | Kaga City  | Infant multi-functional toilets | CSV    |
| Japan       | Medical Institutions          | Kaga City  | Type of insitutions             | CSV    |
| Taiwan      | Public Lavatory               | Taipei     | Childroom, Kindlyroom           | XML    |
| Taiwan      | Medical Institutions          | Taipei     | Type of insitutions             | CSV    |
| Taiwan      | Metro Elevator                | Taipei MRT | Location of Elevator (Exit #)   | CSV    |
| Taiwan      | Metro Elevator,Out of Service | Taipei MRT | Out of Service Information      | CSV    |

## Installation & Run

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9090
npm run dev
```

## To do

- Query speed improvement using GIS engine
- Childcare room search
- Stroller (barrier-free) search