
document.getElementById("Titulo").innerHTML = "Opa, TA SUAVE?";
document.getElementById("quadrado").innerHTML = "Giovanna <button>"
document.getElementsByClassName("lista")[1].innerHTML = "chavosidade"

document.getElementsByTagName("input")


function verde() {
    document.querySelector("#Gustavo").classList.remove("vermelho")
    document.querySelector("#Gustavo").classList.remove("azul")
    document.querySelector("#Gustavo").classList.add ("verde");

}
function azul() {
    document.querySelector("#Gustavo").classList.add ("azul");
    document.querySelector("#Gustavo").classList.remove ("verde");
    document.querySelector("#Gustavo").classList.remove ("vermelho");

    
}
function vermelho() {
    document.querySelector("#Gustavo").classList.add ("vermelho");
    document.querySelector("#Gustavo").classList.remove("azul")
    document.querySelector("#Gustavo").classList.remove("verde")

 
    

// Aqui é a Segunda parte do módulo; "manipulando Class pt.2"


}
function trocar() {
    if (document.querySelector("button").classList.contains("preto")) {
    document.querySelector("button").classList.remove("preto");
    document.querySelector("button").classList.add("verde");

 } else {
    document.querySelector("button").classList.remove("verde");
    document.querySelector("button").classList.add("preto");
 }
}

var hora = 12;

if (hora == 12 || hora == 18 ) {
    console.log("Ta na hora do rush");
}


function somar (x,y) {
    let total = x + y;

    return total;
}

var resultado = somar(10, 15);

console.log(resultado);


function trocarimagem(filename, imagename) {
    document.querySelector('.imagem').setAttribute('src', 'dist/'+filename);
    document.querySelector('.imagem').setAttribute('data-image', imagename);
}

function pegarimagem() {
    let image = document.querySelector('.imagem').getAttribute('data-image');
    alert("A imagem é: "+image);
}
function subirtela() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:"smooth"

    });
}
function decidebutton() {
    if(window.scrollY === 0) {

        document.querySelector('.scrollbutton').style.display = 'none';
    } else {

        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

window.addEventListener('scroll', decidebutton);
