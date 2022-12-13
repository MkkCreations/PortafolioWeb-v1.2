document.getElementById("iniciar").addEventListener("click", iniciar, false);
document.getElementById("darck").addEventListener("change", darck, false);
document.getElementById("menu").addEventListener("click", menu, false);
document.getElementById("search").addEventListener("change", search, false);

function search(){
    var busqueda = document.getElementById("search").value;

    if(busqueda == 'interes' | busqueda == 'intereses' | busqueda == 'compuesto'){
        window.location.href = "interescompuesto.html";
    }
    else if(busqueda == 'dividendos' | busqueda == 'dividendo' | busqueda == 'divid'){
        window.location.href = "dividendos.html";
    }
    else if(busqueda == 'cryptos' | busqueda == 'cripto' | busqueda == 'criptos' | busqueda == 'crypto'){
        window.location.href = "cryptos.html";
    }
}

var check = document.getElementById("darck");

if(localStorage.getItem('oscuro') === 'true'){
    check.checked = true;
    darck1();
}else{
    console.log("'0'");
}

var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

if(width <= 820){
    const fragment = document.createDocumentFragment();
    fragment.appendChild(document.getElementById("swit"));
    document.getElementById("listar").appendChild(fragment);
}

function menu(){
    document.getElementById("nav").style.position = 'relative';
    document.getElementById("nav").style.animation = 'navanimation 1.4s'
    document.getElementById("nav").style.display = 'unset';
}

function menuout(){
    document.getElementById("nav").style.display = 'none';
    document.getElementById("nav").style.position = 'relative';
}

function darck(){
    check = document.getElementById("darck").checked;
    
    if(check === true){
        document.getElementById("url").setAttribute("href","estilososcuro1.css");
        document.getElementById("logo").setAttribute("src", "img/logoEDZZO6.png");
        localStorage.oscuro = 'true';
        localStorage['oscuro'] = 'true';
        localStorage.setItem('oscuro', 'true');
    }else{
        document.getElementById("url").setAttribute("href","estilo1.1.css");
        document.getElementById("logo").setAttribute("src", "img/logoEDZZO4-removebg-preview.png");
        localStorage.clear();
    }
}
function darck1(){
    document.getElementById("url").setAttribute("href","estilososcuro1.css");
    document.getElementById("logo").setAttribute("src", "img/logoEDZZO6.png");

}


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("in212").setAttribute("max", today);



var datos =[];
var datos2 =[];
var timepoTranscurrido = Date.now();
var hoy = new Date(timepoTranscurrido)
var simbolo;
var valor = 0;

function iniciar(){
    simbolo = document.getElementById("in211").value;
    var fecha = document.getElementById("in212").value;
    fetch("https://api.nomics.com/v1/currencies/sparkline?key=9f32a0ad7255c690ccc4ed00d158446aaf6f60a5&ids="+simbolo+"&start="+fecha+"T00%3A00%3A00Z&end="+fecha+"T00%3A00%3A00Z")
        .then(response => response.json())
        .then(data => datos = data)

    precioactual();

    var inversion = document.getElementById("in213").value;

    valor = (inversion/(datos[0].prices[0]) * (datos2[0].prices[0]));

    document.getElementById("box4").style.display = "block";
    document.getElementById("precompra").value = datos[0].prices[0];
    document.getElementById("preactual").value = datos2[0].prices[0];
    document.getElementById("total").value = valor.toFixed("2");
}


function precioactual(){

    fetch("https://api.nomics.com/v1/currencies/sparkline?key=9f32a0ad7255c690ccc4ed00d158446aaf6f60a5&ids="+simbolo+"&start="+today+"T00%3A00%3A00Z&end="+today+"T00%3A00%3A00Z")
        .then(response => response.json())
        .then(data2 => datos2 = data2)
}