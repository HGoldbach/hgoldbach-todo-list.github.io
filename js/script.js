const btn = document.querySelector("#btn");
const userInput = document.querySelector("#user-input");
const fazer = document.querySelector(".fazer");
const fazendo = document.querySelector(".fazendo");
const concluida = document.querySelector(".concluido");

btn.addEventListener("click", e => {
    if (userInput.value) {
        const li = document.createElement("li");
        let icon = document.createElement('i');
        icon.classList.add('bi');
        icon.classList.add('bi-trash3-fill');

        li.appendChild(document.createTextNode(userInput.value));
        li.append(icon);

        // li.appendChild(document.createTextNode(`${userInput.value} ${<i class="bi bi-trash3-fill"></i>}`));
        fazer.insertAdjacentElement('afterbegin', li);
     
        userInput.value = "";

        li.addEventListener('contextmenu', e => {
            e.preventDefault();
            li.remove();
        })
        
        fazer.addEventListener("click", e => {
            fazendo.appendChild(e.target);

            fazendo.addEventListener("click", e => {
                concluida.appendChild(e.target);

            })
        });
    } 
})





