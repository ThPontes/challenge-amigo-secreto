// cria a lista de amigos participantes do amigo secreto
let listaDeNomesParticipantes = [];

//função para adicionar os amigos ao digitar e clicar em 'adicionar'
function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert ('Por favor, insira um nome.')
    } else {
        listaDeNomesParticipantes.push(amigo)
        console.log(listaDeNomesParticipantes)
        limparCampo()
        atualizarLista()
        }
}

// função para limpar o campo após clicar em adicionar
function limparCampo() {
    document.getElementById('amigo').value = '';
}

// função para atualizar a lista dos amigos participantes na tela (html)
function atualizarLista() {
    // obter os elementos da lista
    let lista = document.getElementById('listaAmigos');
    
    //limpa a lista do html
    lista.innerHTML = '';

    //array sendo percorrida e adicionando cada amigo na lista previamente limpa
    for (i = 0; i < listaDeNomesParticipantes.length; i++) {
        let amigo = listaDeNomesParticipantes[i]; //pega o amigo atual
        let item = document.createElement('li'); //cria uma linha no html
        item.textContent = amigo; //adiciona o nome do amigo na lista
        lista.appendChild(item); //adiciona a linha da lista na lista completa
    }
}

function sortearAmigo() {
    //verifica se está vazio
    if (listaDeNomesParticipantes.length === 0) {
        alert("Não há amigos para sortear :(");
        return; //finaliza a função
    }

    // gera um numero aleatorio de minimo zero e maximo a lista de amigos
    let numeroAleatorio = Math.floor(Math.random() * listaDeNomesParticipantes.length);

    // pega o nome com base no numero
    let amigoSorteado = listaDeNomesParticipantes[numeroAleatorio];

    // mostra na tela o nome sorteado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`; 

    // Remover o amigo sorteado da lista
    listaDeNomesParticipantes.splice(numeroAleatorio, 1);

    //atualiza novamente a lista
    atualizarLista()
}