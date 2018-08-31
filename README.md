# Travel With Kids

> The ultimate web application you need when you travel with your kids

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