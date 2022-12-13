document.getElementById("video").addEventListener('click', star, false);
document.getElementById("ventanavideo").addEventListener('dblclick', out, false);
document.getElementById("latest").addEventListener('load', latest, false);
document.getElementById("menu").addEventListener('click', ver, false);
document.getElementById("lupa").addEventListener('click', mostrar, false);




/* --------------LATEST--------------- */
let myVar = setInterval(latest ,1500);
var arry = ["5 Reasons The NCAR Popular", "Brand New Classic Car Club", "Look Back At the Original Jeep"]
function latest() {
    var selec = Math.floor(Math.random() * 3);
    document.getElementById("latest").innerHTML = arry[selec];

}


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

/* ---------------ROTAR FOTOS--------------- */
let mySet = setInterval(move , 2000);
var photos = ["img/mercedesnegro.jpg", "img/interiorblanco.jpg", "img/alfaromeo.jpg"];
var change = 0;
function move(){
    if(change == 0){
        document.getElementById("img1-1").src = photos[0];
        document.getElementById("img1-2").src = photos[1];
        document.getElementById("img1-3").src = photos[2];
        change++;
    }
    else if(change == 1){
        document.getElementById("img1-1").src = photos[1];
        document.getElementById("img1-2").src = photos[2];
        document.getElementById("img1-3").src = photos[0];
        change++;
    }
    else{
        document.getElementById("img1-1").src = photos[2];
        document.getElementById("img1-2").src = photos[0];
        document.getElementById("img1-3").src = photos[1];
        change = 0;
    }
}

/* ---------------VIDEO--------------- */
function star(){
    document.getElementById("ventanavideo").style.display = "unset";
    document.querySelector('#ventanavideo>video').play();
}

function out(){
    document.querySelector('#ventanavideo>video').pause();
    document.getElementById("ventanavideo").style.display = "none";
}