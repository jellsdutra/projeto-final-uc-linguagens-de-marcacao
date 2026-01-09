// SELEÇÃO DE ELEMENTOS NO HTML 
// const corpo = document.body
//corpo.style.backgroundColor = "red"

// const h1 = document.querySelector("h1")
// h1.style.color = 'Grey'

// const text = document.querySelector(".text")
// text.style.color = 'Grey'
// MUDAR TEXTO H1 - PARA MODIFICAR O QUE ESTÁ ESCRITO 
// h1.innerText = "DESENVOLVIMENTO DE SISTEMAS"

// FUNÇÕES E EVENTOS NO JS DOM - MUDAR TEMA FUNDO SITE
// const tema = () => {
//     const corpo = document.body
//     corpo.style.backgroundColor = "green"

// }

// ATIVIDADE
// DESENVOLVER AÇÕES ARTRAVÉS DE BOTÕES NA PÁGINA


// // BOTÃO PARA MUDAR A COR DA FONTE DO TEXTO
// const CorFonte = () => {
//     const text = document.querySelector(".text")
//     const h1 = document.querySelector("h1")
//     h1.style.color = 'blue'
//     text.style.color = 'silver'
// }

// // BOTÃO PARA MUDAR O BACKGRAUND DE UMA DIV
// const CorDiv = () => {
//     const corpo = document.querySelector(".text")
//     text.style.backgroundColor = 'yellow'
// }

// // BOTÃO PARA ALTERAR O TITULO
// const MudarTitulo = () => {
//     const corpo = document.body
//     h1.innerText = "Programador WEB - 2025/2026"
// }

// // BOTÃO PARA ALTERAR O TEXTO
// const MudarTexto = () => {
//     document.querySelector(".text")
//     text.innerText = "Jefferson Dutra"
// }

// // BOTÃO PARA ALTERNAR O TEMA DA PÁGINA
// const tema = () => {
//     const corpo = document.body
//     if (corpo.style.backgroundColor === "black") {
//         corpo.style.backgroundColor = "white";
//     } else {
//         corpo.style.backgroundColor = "black";
//     }
// }}


// const exibirNome = () => {
//     const texto = document.querySelector("#texto")
//     const meuNome = document.querySelector("#nome").value
//     return texto.innerHTML = meuNome;
// }

// const exibirSenha = () => {
//     const senha = document.querySelector("#senha")
//     // senha.setAttribute("type","text")

//     if(senha.type === "password") {
//         senha.type = "text"
//     }else{
//         senha.type = "password"
//     }

// }

// const card = document.querySelector("#card")
// const logEventos = document.querySelector("#logEventos")
// card.style.backgroundColor =  "green"

// // AO CLICAR
// card.addEventListener("click", () => {
//     return logEventos.innerHTML += "<br><b>Clicou</b>"
// })

// // AO APROXIMAR DO ELEMENTO
// card.addEventListener("mouseenter", () => {
//     return logEventos.innerHTML += "<br><b>Você aproximou</b>"
// })

// // SAIR DO ELEMENTO
// card.addEventListener("mouseleave", () => {
//     return logEventos.innerHTML += "<br><b>Você saiu</b>"
// })

// const limparLog = () => {
//     logEventos.innerHTML = "Eventos serão exibidos aqui..."
// }



alert("Bem vindo ao JD PLAY!!");

// FUNÇÃO TROCAR TEMA CLARO E ESCURO
const TemaClaro = () => {
    const corpo = document.body
    corpo.classList.toggle("fundoclaro");
};


// FUNÇÃO OCULTAR BANNER
function OcultarBanner() {
    const banner = document.getElementById("banner");

    if (banner.style.display === "none") {
        banner.style.display = "block";
    } else {
        banner.style.display = "none";
    }
}


// FUNÇÃO BOTÃO TOPO

function topo() {
    window.scrollTo({
        top: 0,

    });
    // const exibirNome = () => {
    //     const texto = document.querySelector("#texto")
    //     const meuNome = document.querySelector("#nome").value
    //     return texto.innerHTML = meuNome;
    // }

    // FORMULÁRIO DE CONTATO - VALIDAÇÃO SIMPLES

    const form = document.getElementById("formContato");
    const mensagem = document.getElementById("mensagem");
    // Adiciona um ouvinte de evento para o envio do formulário

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtém os valores dos campos do formulário
        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;
        const endereco = document.getElementById("endereco").value;

        if (nome === "" || telefone === "" || endereco === "") {
            return mensagem.innerText = "X-X Preencher todos os campos!";

        } else {
            return mensagem.innerText = "Dados enviados com sucesso! ✓";
        }
    });
}

// MUDAR TEMA FUNDO QUANDO PASSAR MOUSE
const beneficios = document.querySelector("#beneficios")
// const logEventos = document.querySelector("#logEventos")