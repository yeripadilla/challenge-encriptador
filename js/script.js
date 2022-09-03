//Llamando a los selectores del DOM
var buttonEncrypt = document.querySelector(".encrypt");
var buttonDecrypt = document.querySelector(".decrypt");
var buttonCopy = document.querySelector(".copy");
var inputUser = document.querySelector(".user");
var textEncrypt = document.querySelector(".textEncrypt");

//Definiendo funcion de encriptado
function encrypt() {
    var text = inputUser.value;
    var key1 = ["e", "i", "a", "o", "u"];
    var key2 = ["enter", "imes", "ai", "ober", "ufat"];
        
        for (var i = 0; i<key1.length; i++) {
            text = text.replaceAll((key1[i]),(key2[i]));
        }
    
    inputUser.value = "";
    textEncrypt.value = text;
    document.querySelector(".dollbox").style.display = "none";
    document.querySelector(".textEncrypt").style.display = "flex";
    console.log(text);
}

//Definiendo funcion de desencriptado
function decrypt() {
    var text = inputUser.value;
    var key1 = ["e", "i", "a", "o", "u"];
    var key2 = ["enter", "imes", "ai", "ober", "ufat"];
        
        for (var i = 0; i<key1.length; i++) {
            text = text.replaceAll((key2[i]),(key1[i]));
        }
    
    inputUser.value = "";
    textEncrypt.value = text;
    document.querySelector(".dollbox").style.display = "none";
    document.querySelector(".textEncrypt").style.display = "flex";
    console.log(inputUser.value);
}

//Definiendo funcion de copiado
function copy() {
    textEncrypt.select
    textEncrypt.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textEncrypt.value);
      
    textEncrypt.value = "";
    document.querySelector(".dollbox").style.display = "flex";
    document.querySelector(".textEncrypt").style.display = "none";
    console.log("it works");
    }

//Asignando evento click a los botones
buttonEncrypt.onclick = encrypt;
buttonDecrypt.onclick = decrypt;
buttonCopy.onclick = copy;