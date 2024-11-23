let contador = 0;


const botao = document.getElementById("botao");
const contadorDiv = document.getElementById("contador");


botao.addEventListener("click", () => {
    contador++; 
    contadorDiv.textContent = `Cliques: ${contador}`; 
});

