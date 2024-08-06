const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Seu filho está indo para o ensino médio e vocês recebem a noticia de que ele teria que fazer o novo estilo de e.m, o que você faria?",
        alternativas: [
            {
                texto: "Acharia outra escola sem o novo ensino médio!",
                afirmacao: "No início ficou com medo de como isso pode afetar os estudos dele. "
            },
            {
                texto: "Pode ser ótimo, vou manter ele na escola em que está!",
                afirmacao: "Acreditou que isso foi pensado prezando os estudos do seu filho e confiou no governo."
            }
        ]
    },
    {
        enunciado: "A professora do seu filho organizou uma reunião para que os pais dessem sua opinião, o que você diria?",
        alternativas: [
            {
                texto: "Sou totalmente contra!",
                afirmacao: "Seguiu com a ideia de retirar seu filho do colégio."
            },
            {
                texto: "Sou totalmente a favor!",
                afirmacao: "Apoiou a decisão do colégio e manteve seu filho nele."
            }
        ]
    },
    {
        enunciado: "Te convidaram para um protesto contra o novo e.m.,você decidiu?",
        alternativas: [
            {
                texto: "Participar do protesto.",
                afirmacao: "Você não conseguiu aceitar essa nova forma de ensino e protestou contra."
            },
            {
                texto: "Não participar!",
                afirmacao: "Você aceitou essa nova forma de ensino e protestou a favor."
            }
        ]
    },
    {
        enunciado: "Você acha que o novo ensino médio pode ajudar seu filho a ingressar no mundo do trabalho?",
        alternativas: [
            {
                texto: "Não",
                afirmacao: "Está com medo de que o ensino não cumpra com o que prometeu."
            },
            {
                texto: "Sim.",
                afirmacao: "Acredita que é um bom investimento para o futuro."
            }
        ]
    },
    {
        enunciado: "As notas do seu filho... ",
        alternativas: [
            {
                texto: "Pioraram.",
                afirmacao: "Ele não conseguiu se adaptar ao novo ensino médio e andou tendo dificuldades, fez a decisão certa de tirar ele do colégio."
            },
            {
                texto: "Se mantiveram as mesmas ou até melhoraram.",
                afirmacao: "Ele se adaptou ao novo ensino médio e evoluiu, fez a decisão certa em manter ele no colégio. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
