
document.getElementById("latest").addEventListener('load', latest, false);
document.getElementById("menu").addEventListener('click', ver, false);

document.getElementById("lupa").addEventListener('click', mostrar, false);



/* ----------------MENU--------------- */
var clik = 0;
function ver(){
    clik++;
    if(clik%2 == 0){
        document.getElementById("men").style.display = "none";
    }else{
        document.getElementById("men").style.display = "block";
        document.getElementById("men").style.animationName = "run";
        document.getElementById("men").style.animationDuration = "1s";
    }
    
}

/* ----------------BUSQUEDA--------------- */
var clicklupa = 0;
function mostrar(){
    clicklupa++;
    if(clicklupa%2 == 0){
        document.getElementById("search").style.display = "none";
    }else{
        document.getElementById("search").style.display = "block";
        
    }
}

/* --------------LATEST--------------- */
let myVar = setInterval(latest ,1500);
var arry = ["5 Reasons The NCAR Popular", "Brand New Classic Car Club", "Look Back At the Original Jeep"]
function latest() {
    var selec = Math.floor(Math.random() * 3);
    document.getElementById("latest").innerHTML = arry[selec];

}


document.getElementById("submitbutton").addEventListener('click', send, false);


function send(){
    var nombre = document.getElementById("nombre").value;
    document.getElementById("form").innerHTML = "";
    document.getElementById("form").innerHTML = "<h3>Gracias por contactar con nosotros Sr/Sra: <br/><b>" + nombre + "</b><br />" + "Recibirá respuesta en breves instantes. </h3>";
}