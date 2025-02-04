//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

// Função chamada quando o botão 'Adicionar amigo' é clicado
function adicionarAmigo(){
    //Capta o valor do campo de entrada
    let campoEntrada = document.getElementById('nomeAmigo');
    let nome = campoEntrada.value.trim();

    //Verifica se o campo texto não está vazio
    if (nome) {
        amigos.push(nome);
        atualizarListaAmigos();
        campoEntrada.value = '';
    } else{
        //atualiza array de amigos
        alert ("Por favor, insira um nome.");
    }
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li role="listitem">${amigo}</li>`).join('');
}

function sortearAmigo() {
    if (amigos.length > 1) {
        const index = Math.floor(Math.random() * amigos.length);
        const resultadoSorteio = document.getElementById('resultadoSorteio');
        resultadoSorteio.innerHTML = `<li>O amigo secreto sorteado é: ${amigos[index]}</li>`;
    } else {
        alert("Adicione mais amigos para sortear.");
    }
}