const textoObtenido = document.querySelector(".main__textarea");
const botonDesencriptado = document.querySelector(".main__btn-desencriptar");
const botonEncriptado = document.querySelector(".main__btn-encriptar");

function pasarPalabraArray(texto) {
    var arr = [];
    for (let letra of texto) {
        if (letra == "a") {
            letra = "ai";
            arr.push(letra);
        } else if (letra == "e") {
            letra = "enter";
            arr.push(letra);
        } else if (letra == "i") {
            letra = "imes";
            arr.push(letra);
        } else if (letra == "o") {
            letra = "ober";
            arr.push(letra);
        } else if (letra == "u") {
            letra = "ufat";
            arr.push(letra);
        } else {
            arr.push(letra);
        }
    }
    var textoconvertido = arr.join("");
    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = textoconvertido;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

    console.log(textoconvertido);
}

// La letra "a" es convertida para "ai"
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function conv(text) {
    while (
        text.includes("ai") ||
        text.includes("enter") ||
        text.includes("imes") ||
        text.includes("ober") ||
        text.includes("ufat")
    ) {
        let a = text.replace("ai", "a");
        let e = a.replace("enter", "e");
        let i = e.replace("imes", "i");
        let o = i.replace("ober", "o");
        let u = o.replace("ufat", "u");
        text = u;
    }
    console.log(text);
    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = text;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

// addEventListener

botonEncriptado.addEventListener("click", (e) => {
    console.log(textoObtenido.value);
    pasarPalabraArray(textoObtenido.value);
});

botonDesencriptado.addEventListener("click", (e) => {
    console.log(textoObtenido.value);
    conv(textoObtenido.value);
});

function copy(palabra){
    document.getElementById("texto2").innerHTML = palabra;

}
