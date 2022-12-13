document.getElementById("iniciar").addEventListener("click", iniciar, false);
document.body,addEventListener("load", read, false);
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

function iniciar(){
    var cantid = document.getElementById("in211").value;
    var renta = document.getElementById("in212").value;
    var años = document.getElementById("in213").value;
    var rotar = 0;
    var resultado = 0;
    var suma = 0;
    var cantrimestral = cantid * 4;
    var veces = años * 3;
    
    if(cantid == 0 ){
        document.getElementById("box5").style.display = "block";
    }else{

        do{
            suma = resultado + cantrimestral;
            resultado = suma * (1+ (renta/100));

            rotar ++;
        }while(veces != rotar);
    }
        document.getElementById("box4").style.display = "block";
        document.getElementById("invertido").value = veces * cantid * 4 ;
        document.getElementById("total").value = resultado.toFixed("2");
    
}


var listarray = ["AAPL","AXP","BA","CAT","CRM","CSCO","CVX","DIS","DOW","GS","AMGN","HD","HON","IBM","INTC","JNJ","JPM","KO","MCD","MMM","MRK","MSFT","NKE","PG","TRV","UNH","V","VZ","WBA","WMT"];
var datarray = [];
var arraypos = 0;
var list = 0;
var random = Number();
/* API Key (AlphaAvantage)= F8S69FTYENUXK3NQ */
var listNums = [];
function read(){
    
    async function stocks() {
        
        do{
            
            randomNum();
            if(listNums.indexOf(random) === -1){
                listNums.push(random);
            }else{
                randomNum();
            }

            let response = await fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+listarray[random]+"&interval=5min&apikey=F8S69FTYENUXK3NQ")
            console.log(response);

            let stockData = await response.json();
            console.log(stockData)  

            datarray[arraypos]  = stockData["Global Quote"];
            arraypos++;  

            if(datarray.length == 4){
                do{
                    console.log(datarray[list]);
                    document.getElementById(`lista${list}`).innerHTML = "<h4>"+datarray[list]["01. symbol"]+"</h4><p>+"+datarray[list]["05. price"]+"</p>";
                    list++;
                }while(list < datarray.length);
            }       
            }while(datarray.length <= 3);
              
    }
    stocks();
    
}

function randomNum(){

    random = Math.floor(Math.random()*29);
    

}






   


