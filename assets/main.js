// VARIABLES
let btn_encri = document.querySelector(".btnEncri");
let btn_descrip = document.querySelector(".btnDesencri");
let boton_copiar = document.getElementById("copy");

// FUNCION ENCRIPTAR
function encriptar() {
  let texto = document.querySelector("#mensaje").value;
  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  document.querySelector(".showMsg").value = textoCifrado;
  document.querySelector("#mensaje").value;
}

// FUNCION DESENCRIPTAR
function desencriptar() {
  let texto = document.querySelector("#mensaje").value;
  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  document.querySelector(".showMsg").value = textoCifrado;
  document.querySelector("#mensaje").value;
}

// FUNCION COPIAR
function copiar() {
  const resultado = document.querySelector(".showMsg");
  resultado.select();
  navigator.clipboard.writeText(resultado.value);
}

// EJECUCION DE FUNCIONES
btn_encri.onclick = encriptar;
btn_descrip.onclick = desencriptar;
boton_copiar.onclick = copiar;
