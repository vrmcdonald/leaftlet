var mymap = L.map('mapid').setView([27.800, -82.040,], 7);
L.tileLayer('https://api.mapbox.com/styles/v1/vrmcdonald/cjp4s7p5x0ent2sn2sxpkdhmh/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidnJtY2RvbmFsZCIsImEiOiJjanA0cnNoYTEwMG02M3dxc3ppaXlrZHB3In0.Ag2vI36B_m31ls99BSsofw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

let marker1 = L.marker([29.644495, -82.352541,]).addTo(mymap);
let marker2 = L.marker([27.272878, -80.358487,]).addTo(mymap);
let marker3 = L.marker([26.134128, -80.240775,]).addTo(mymap);
let marker4 = L.marker([25.852740, -80.272853,]).addTo(mymap);

marker1.bindPopup("Here's my college town.");
marker2.bindPopup("Here's my parents' house.");
marker3.bindPopup("Here's my elementary school.");
marker4.bindPopup("Here's my grandma's house.");
