/*
var sumaDeDosNumeros =2 + 2;
//asdjlkasj
var texto = prompt();
document.write (texto);

var primerBotom =document.getElementById("botom1");
var segundoBotom =document.getElementById("botom2");

//funciones
function saludo(){
    console.log ("soy el botom 1")
};
function saludo2(){
document.write("soy un botom 2")

};*/

$("document").ready(function(){
    var buttom = $("#botom1");
    var buttomDos = $("#botom2");

    buttom.click(function(){
        console.log("hola soy un botom")
    });
    buttomDos.click(function(){
//$("a").attr("href","https://www.google.cl/") redireccion
buttom.addClass("purple darken-4")
    });
});
