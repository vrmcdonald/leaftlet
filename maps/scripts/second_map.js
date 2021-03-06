var mymap = L.map('mapid').setView([40.272, -97.174], 4);
L.tileLayer('https://api.mapbox.com/styles/v1/vrmcdonald/cjp4tv4yg1q9c2rqz6ia28yli/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidnJtY2RvbmFsZCIsImEiOiJjanA0cnNoYTEwMG02M3dxc3ppaXlrZHB3In0.Ag2vI36B_m31ls99BSsofw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

var places =
    [{"placeName":"Los Angeles, California","description":"Spotted in 1942.","latitude":34.05,"longitude":-118.25},
    {"placeName":"Maury Island, Washington","description":"Spotted in 1947.","latitude":47.376944,"longitude":-122.429722},
    {"placeName":"Akron, Ohio","description":"Spotted in 1966.","latitude":41.073056,"longitude":-81.517778},
    {"placeName":"Leary, Georgia","description":"Spotted in 1969.","latitude":31.485556,"longitude":-84.513333},
    {"placeName":"Pascagoula, Mississippi","description":"Spotted in 1973.","latitude":30.363611,"longitude":-88.541944},
    {"placeName":"North Bergen, New Jersey","description":"Spotted in 1975.","latitude":40.794175,"longitude":-74.02496},
    {"placeName":"Snowflake, Arizona","description":"Spotted in 1975.","latitude":34.522222,"longitude":-110.091389},
    {"placeName":"Allagash, Maine","description":"Spotted in 1976","latitude":47.093056,"longitude":-69.058333},
    {"placeName":"Stephen, Minnesota","description":"Spotted in 1979.","latitude":48.45,"longitude":-96.8725},
    {"placeName":"Dayton, Texas","description":"Spotted in 1980.","latitude":30.056389,"longitude":-94.895556},
    {"placeName":"Gulf Breeze, Florida","description":"Spotted in 1987.","latitude":30.357144,"longitude":-87.163857},
    {"placeName":"Phoenix, Arizona","description":"Spotted in 1997.","latitude":33.45,"longitude":-112.066667},
    {"placeName":"Highland, Ilinois","description":"Spotted in 2000.","latitude":38.743889,"longitude":-89.677222},
    {"placeName":"Chicago, Illinois","description":"Spotted in 2006.","latitude":41.836944,"longitude":-87.684722},
    {"placeName":"Van Buren, Arkansas","description":"Spotted in 2007.","latitude":35.444444,"longitude":-94.346667},
    {"placeName":"Charlotte, North Carolina","description":"Spotted in 2007","latitude":35.227222,"longitude":-80.843056},
    {"placeName":"Stephenville, Texas","description":"Spotted in 2008.","latitude":32.220278,"longitude":-98.213611},
    {"placeName":"Morristown, New Jersey","description":"Spotted in 2009.","latitude":40.796562,"longitude":-74.477318},
    {"placeName":"Houston, Texas","description":"Spotted in 2014.","latitude":29.762778,"longitude":-95.383056},
    {"placeName":"Desert in Arizona","description":"Spotted in 2018.","latitude":34,"longitude":-112}]

for ( let i = 0; i < places.length; i++ ) {
  L.marker( [ places[i].latitude, places[i].longitude ] )
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].description + '<p>')
  .addTo(mymap);
}
