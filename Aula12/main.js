const imprimir = () => { // arrow function
    window.print();
}
// DOM = Document Object Model
const btn2 = document.querySelector("#botaoDialogo"); // # é id
btn2.addEventListener("click", () => {
    window.prompt("Digite seu nome:"); 
});