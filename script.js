const areadetextear= document.querySelector(".areadetextear");
const btnEncriptar= document.getElementById("btnEncriptar");
const btnDesencriptar= document.getElementById("btnDesencriptar");
const btnCopiar= document.getElementById("btnCopiar");
const mensajeFinal= document.getElementById("mensajeFinal");
const muneco= document.getElementById("muneco");
const textoInformativo= document.getElementById("textoInformativo");
const ladoderecho= document.getElementById("ladoderecho");

let reemplazar= [
    ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]
]

const remplace= (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    muneco.style.display= "none";
    textoInformativo.style.display= "none";
    btnCopiar.style.display= "block";
    ladoderecho.classList.add("ajustado");
    mensajeFinal.classList.add("ajustado");

    areadetextear.value= "";
};

btnEncriptar.addEventListener("click", ()=> {
    const texto= areadetextear.value.toLowerCase()
    function encriptar (newText){
        for (let i = 0; i< reemplazar.length; i++){
            if (newText.includes(reemplazar[i][0])){
                newText= newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
            }
        }
        return newText;
    }
    remplace(encriptar(texto));
}) 

btnDesencriptar.addEventListener("click", ()=>{
    const texto= areadetextear.value.toLowerCase()
    function desencriptar(newText){
        for (let i = 0; i < reemplazar.length; i++){
            if (newText.includes(reemplazar[i][1])){
                newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
            }
        }
        return newText;
    }

    remplace(desencriptar(texto));
})

btnCopiar.addEventListener("click", ()=>{
    let texto = mensajeFinal;
    texto.select();
    document.execCommand('copy')
    alert("Texto copiado!");

    mensajeFinal.innerHTML = "";

    muneco.style.display= "block";
    textoInformativo.style.display= "block";
    btnCopiar.style.display= "none";

    ladoderecho.classList.add("remove");
    mensajeFinal.classList.add("remove");
})
