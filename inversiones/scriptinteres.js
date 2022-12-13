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

var resultado = 0;
var veces = 0;


function iniciar(){
    var cantidad = document.getElementById("in211").value;
    var renta = document.getElementById("in212").value;
    var años = document.getElementById("in213").value;
    var select = document.getElementById("rentabilidad").value;
    
    if(cantidad == 0 ){
        document.getElementById("box5").style.display = "block";
    }
    else if(select == 'diaria'){
        veces = años * 365;

        resultado = cantidad * (1+ (renta/100))**veces;

        document.getElementById("box4").style.display = "block";
    }
    else if(select == 'mensual'){
        veces = años * 12;

        resultado = cantidad * (1+ (renta/100))**veces;

        document.getElementById("box4").style.display = "block";
    }
    else if(select == 'trimestral'){
        veces = años * 4;

        resultado = cantidad * (1+ (renta/100))**veces;

        document.getElementById("box4").style.display = "block";
    }
    else if (select == 'anual'){
        veces = años;

        resultado = cantidad * (1+ (renta/100))**veces;

        document.getElementById("box4").style.display = "block";
    }
        document.getElementById("total").value = resultado.toFixed("2");
    
}