const btn = document.querySelector("#btn");
const userInput = document.querySelector("#user-input");
const fazer = document.querySelector(".fazer");
const fazendo = document.querySelector(".fazendo");
const concluida = document.querySelector(".concluido");
let iconsRemover = document.querySelectorAll('.bi');
const erroInput = document.querySelector('.user-input-erro');


const criaTarefa = function(){
    if (userInput.value) {

        userInput.style.border = 'none';
        erroInput.textContent = "";
        erroInput.style.opacity = '0';
        const li = document.createElement("li");
        const icon = document.createElement('i');
        icon.classList.add('bi');
        icon.classList.add('bi-trash3-fill');

        li.appendChild(document.createTextNode(userInput.value));
        li.append(icon);

        fazer.insertAdjacentElement('afterbegin', li);
     
        userInput.value = "";

        iconsRemover = document.querySelectorAll('.bi');
        atualizarIconsRemover();
    } 
    else {
        userInput.style.border = '3px solid red';
        erroInput.textContent = "Você precisa inserir uma tarefa antes de adicionar";
        erroInput.style.opacity = '1';
    }
}

userInput.addEventListener('keypress', e => {
    if (e.key === "Enter") {
        criaTarefa();
    }
})

btn.addEventListener("click", criaTarefa);


fazer.addEventListener("click", e => {
    fazendo.appendChild(e.target);
});


fazendo.addEventListener("click", e => {
    concluida.appendChild(e.target);
})

const atualizarIconsRemover = () => {
    iconsRemover.forEach(icon => {
        icon.addEventListener('click', (e) => {
            const liTarget = e.target.closest('li');
            liTarget.remove();
            e.stopPropagation();
        })
    })
};






