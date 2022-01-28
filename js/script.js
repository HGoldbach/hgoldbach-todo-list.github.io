const button = document.querySelector("#btn");
const input = document.querySelector("#user-input");
const fazer = document.querySelector(".fazer");
const fazendo = document.querySelector(".fazendo");
const concluida = document.querySelector(".concluido");

button.addEventListener("click", e => {
    e.preventDefault();
    if (input.value) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        fazer.appendChild(li);
        input.value = "";

        li.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            li.remove();
        })
        
        fazer.addEventListener("click", (e) => {
            const fazerTarget = e.target;
            if (fazerTarget.tagName.toUpperCase() === "LI") {
              fazendo.appendChild(fazerTarget);
            }
        
            fazendo.addEventListener("click", (e) => {
                const fazendoTarget = e.target;
                if (fazendoTarget.tagName.toUpperCase() === "LI") {
                    concluida.appendChild(fazendoTarget);
                }
            })
        });
    }
})





