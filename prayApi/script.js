document.getElementById("location").addEventListener("change", searchlocation, false);

window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
);


async function lugar(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
        
    }else{
        document.getElementById("infogeo").style.display = 'unset';

        /* document.getElementById("location").addEventListener("change", searchlocation, false); */
    }
        
}lugar();

var direction = [];
var datos = [];
var today = new Date();
var prays = [];
var rezos = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
var nextpray = [];


async function showPosition(position){
   /*  var latit = position.coords.latitude;
    var longi = position.coords.longitude; */
    
    /* console.log('latitude:' + position.coords.latitude + 'longitude:' + position.coords.longitude); */

    let city = await fetch("https://www.mapquestapi.com/geocoding/v1/reverse?key=JxmscBjtsWG0Ap8aDeMG9ttuqbdMAK0z&location=" + position.coords.latitude + "," + position.coords.longitude + "&includeRoadMetadata=true&includeNearestIntersection=true", {method: 'GET'});
    
    console.log(city);

        direction = await city.json();
        console.log(direction);

    document.getElementById("city").innerHTML = direction.results[0].locations[0].adminArea5 + " - " + direction.results[0].locations[0].postalCode;

    let response = await fetch("https://api.aladhan.com/v1/timings/:date_or_timestamp?latitude=" + position.coords.latitude  + "&longitude=" + position.coords.longitude + "&method=15")
    console.log(response);

        datos = await response.json();
        console.log(datos)

    document.getElementById("time").innerHTML = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes();
    
    prays = [datos.data.timings.Fajr, datos.data.timings.Dhuhr, datos.data.timings.Asr, datos.data.timings.Maghrib, datos.data.timings.Isha];


    for (let r in prays){

        var hora = 0;
        var min = 0;
        hora = prays[r][0] + prays[r][1];
        min = prays[r][3] + prays[r][4];

        if(today.getHours() < Number(hora)){
            nextpray = prays[r];

            document.getElementById("box2").innerHTML = rezos[r];
            document.getElementById("box31").innerHTML = prays[r][0];
            document.getElementById("box32").innerHTML = prays[r][1];
            document.getElementById("box33").innerHTML = prays[r][3];
            document.getElementById("box34").innerHTML = prays[r][4];

            break
        }else if(today.getHours() >= prays[4][0] + prays[4][1]){
            document.getElementById("box2").innerHTML = rezos[0];
            document.getElementById("box31").innerHTML = prays[0][0];
            document.getElementById("box32").innerHTML = prays[0][1];
            document.getElementById("box33").innerHTML = prays[0][3];
            document.getElementById("box34").innerHTML = prays[0][4];
        }
        console.log(nextpray);
    }

    document.getElementById("infogeo").style.display = 'none';

    document.getElementById("lista11").innerHTML = rezos[0];
    document.getElementById("lista12").innerHTML = prays[0];

    document.getElementById("lista21").innerHTML = rezos[1];
    document.getElementById("lista22").innerHTML = prays[1];

    document.getElementById("lista31").innerHTML = rezos[2];
    document.getElementById("lista32").innerHTML = prays[2];

    document.getElementById("lista41").innerHTML = rezos[3];
    document.getElementById("lista42").innerHTML = prays[3];

    document.getElementById("lista51").innerHTML = rezos[4];
    document.getElementById("lista52").innerHTML = prays[4];

    document.getElementById("location").addEventListener("change", searchlocation, false);
}showPosition();




function searchlocation(){

    async function search(){
        var ciudad = document.getElementById("location").value;
    
        let response = await fetch("https://api.aladhan.com/v1/timingsByAddress?address=" + ciudad)
        console.log(response);
    
        datos = await response.json();
        console.log(datos)
    
        document.getElementById("time").innerHTML = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes();
        
        prays = [datos.data.timings.Fajr, datos.data.timings.Dhuhr, datos.data.timings.Asr, datos.data.timings.Maghrib, datos.data.timings.Isha];
    
    
        for (let r in prays){
    
            var hora = 0;
            hora = prays[r][0] + prays[r][1];
    
            if(today.getHours() < Number(hora)){
                nextpray = prays[r];
    
                document.getElementById("box2").innerHTML = rezos[r];
                document.getElementById("box31").innerHTML = prays[r][0];
                document.getElementById("box32").innerHTML = prays[r][1];
                document.getElementById("box33").innerHTML = prays[r][3];
                document.getElementById("box34").innerHTML = prays[r][4];
    
                break
            }
            console.log(nextpray);
        }

        document.getElementById("city").innerHTML = ciudad;
    
        document.getElementById("lista11").innerHTML = rezos[0];
        document.getElementById("lista12").innerHTML = prays[0];
    
        document.getElementById("lista21").innerHTML = rezos[1];
        document.getElementById("lista22").innerHTML = prays[1];
    
        document.getElementById("lista31").innerHTML = rezos[2];
        document.getElementById("lista32").innerHTML = prays[2];
    
        document.getElementById("lista41").innerHTML = rezos[3];
        document.getElementById("lista42").innerHTML = prays[3];
    
        document.getElementById("lista51").innerHTML = rezos[4];
        document.getElementById("lista52").innerHTML = prays[4];
        
    }search();
}

