let frase = "Seja Bem Vindo(a)!"

alert(frase);
console.log(frase)


function abacate(){
    console.log("Estou na função")
}

abacate()

let formulario = document.querySelector(".formulario")

console.log(formulario)

function form_appear(){
    formulario.style.left = "50%"
}

function form_disappear(){
    formulario.style.left = "-50%"
}