var texto = "hola como estas";

function pasarArray(palabra) {
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
    console.log(arr.join(""));
}

let textoEncriptado = pasarArray(texto);

// La letra "a" es convertida para "ai"
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function desencriptador(texto) {
    if (texto.includes("ai")) {
        texto.replace("ai", "a");
    }
    if (texto.includes("enter")) {
        texto.replace("enter", "e");
    }
    if (texto.includes("imes")) {
        texto.replace("imes", "i");
    }
    if (texto.includes("ober")) {
        texto.replace("ober", "o");
    }
    if (texto.includes("ufat")) {
        texto.replace("ufat", "u");
    }
    return texto;
}

let tee = "hoberlai cobermober enterstais";

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
}

conv(tee);

// let textoObtenido = document.getElementById(texto-captuado).value;






