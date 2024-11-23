
const checkbox = document.getElementById("modo");
const body = document.body;


checkbox.addEventListener("change", () => {
    body.classList.toggle("escuro", checkbox.checked);
});
