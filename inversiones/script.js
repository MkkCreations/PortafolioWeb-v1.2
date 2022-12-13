document.getElementById("darck").addEventListener("change", darck, false);
document.getElementById("menu").addEventListener("click", menu, false);
document.getElementById("search").addEventListener("change", search, false);
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


var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if(width <= 820){
    const fragment = document.createDocumentFragment();
    fragment.appendChild(document.getElementById("swit"));
    document.getElementById("listar").appendChild(fragment);
}

var mostrarmenu = 0;
function menu(){
    if( mostrarmenu == 0){
        document.getElementById("nav").style.position = 'relative';
        /* document.getElementById("nav").style.animation = 'navanimation 1.4s' */
        document.getElementById("nav").style.display = 'unset';
        mostrarmenu ++;
    }else if(mostrarmenu == 1){
        menuout();
    }
}

function menuout(){
    document.getElementById("nav").style.display = 'none';
    document.getElementById("nav").style.position = 'relative';
    mostrarmenu --;
}


var check = document.getElementById("darck");

if(localStorage.getItem('oscuro') === 'true'){
    check.checked = true;
    darck1();
}else{
    console.log("'0'");
}
function darck(){
    check = document.getElementById("darck").checked;
    
    if(check === true){
        document.getElementById("url").setAttribute("href","estilososcuro.css");
        document.getElementById("logo").setAttribute("src", "img/logoEDZZO6.png");
        document.getElementById("logo1").setAttribute("src", "img/logoEDZZO6.png");
        localStorage.oscuro = 'true';
        localStorage['oscuro'] = 'true';
        localStorage.setItem('oscuro', 'true');
    }else{
        document.getElementById("url").setAttribute("href","estilo.css");
        document.getElementById("logo").setAttribute("src", "img/logoEDZZO4-removebg-preview.png");
        document.getElementById("logo1").setAttribute("src", "img/logoEDZZO4-removebg-preview.png");
        localStorage.clear();
    }
}
function darck1(){
    document.getElementById("url").setAttribute("href","estilososcuro.css");
    document.getElementById("logo").setAttribute("src", "img/logoEDZZO6.png");
    document.getElementById("logo1").setAttribute("src", "img/logoEDZZO6.png");

}

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