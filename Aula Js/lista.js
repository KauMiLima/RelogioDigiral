
const inputTarefa = document.getElementById("tarefa");
const botaoCriar = document.getElementById("criar");
const lista = document.getElementById("lista");


botaoCriar.addEventListener("click", () => {
    const tarefa = inputTarefa.value.trim();

    if (tarefa !== "") {
    
        const itemLista = document.createElement("li");
        itemLista.textContent = tarefa;

        lista.appendChild(itemLista);

        inputTarefa.value = "";
    } else {
        alert("Digite uma tarefa.");
    }
});
