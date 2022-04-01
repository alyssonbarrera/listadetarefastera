/* console.log('mensagem')

let tarefa1 = "Ir ao supermercado"
let tarefa2 = "Estudar programação"
let tarefa3 = "Atualizar o LinkedIn"

console.log(`Minhas tarefas são: ${tarefa1}, ${tarefa2}, ${tarefa3}`)

let tarefas = []

tarefas.push(tarefa1, tarefa2, tarefa3)

console.log(tarefas)

let novaTarefa = "Regar plantas"
alert(`Sua nova tarefa é: ${novaTarefa}`)

tarefas.push(novaTarefa)
function exibirTarefa(){
    for (let i = 0; i < tarefas.length; i++) {
        console.log(`Minha tarefa é: ${tarefas[i]}`)
    }
}

exibirTarefa()

let NovaTarefa = {
    id: 1,
    título: 'Calibrar pneu da bicicleta',
    descrição: 'Levar a bicicleta vermelha ao posto e calibrar o pneu traseiro com 32 psi'
}

console.log('---------------------------')
let Tarefas = [NovaTarefa]
console.log(Tarefas)


function ExibirTarefas(i) {

    if (i > Tarefas.length || i <= 0) {
        alert('Selecione um número entre 0 e ' + Tarefas.length)
    } else {
        console.log('Sua Tarefa é: ' + Tarefas[i-1].título)
        console.log('id: ' + Tarefas[i-1].id)
        console.log('título: ' + Tarefas[i-1].título)
        console.log('descrição: ' + Tarefas[i-1].descrição)
        
    }
}

function NewTar(título, descrição) {
    let number = Tarefas.length + 1
    id = number
    Tarefas.push({id, título, descrição})
}
let number = Tarefas.length + 1
let Nid = number - 1
NewTar('Estudar JavaScript', 'Estudar JavaScript')
NewTar('Fazer batatas fritas', 'Fritar Batatas')
NewTar('Batatas', 'Fritar Batatas')

console.log('--------------------------')

//ExibirTarefas(1)
console.log('----------- Antes da nova tarefa -----------')
console.log(Tarefas)
NewTar('Fritar ovos', 'Pegar os ovos, quebrar e fritar')
console.log('----------- Depois da nova tarefa -----------')

console.log(Tarefas)
ExibirTarefas(5)
*/

let inputNovaTarefa = document.querySelector('#inputNovaTarefa')
let button = document.querySelector('#btnNovaTarefa')
let li = document.querySelector('li')
let lixeira = document.querySelector('.lixeira')
let ul = document.querySelector('ul')
let tarefas = ['Ir ao supermercado', 'Estudar programação', 'Atualizar o linkedIn']

mostrarTarefas()

function mostrarTarefas () {

    inputNovaTarefa.value = ''

    for(título of tarefas) {
        
        let elementoTarefa = document.createElement('li')
        let títuloTarefa = document.createTextNode(título)

        let btnLixeira = document.createElement('input')
        btnLixeira.setAttribute('type', 'button')
        btnLixeira.setAttribute('class', 'button')
        let position = tarefas.indexOf(título)

        btnLixeira.setAttribute('onclick', `deletar(${position})`)

        elementoTarefa.appendChild(títuloTarefa);
        ul.appendChild(elementoTarefa)
        elementoTarefa.appendChild(btnLixeira)


    }
}

function addNovaTarefa () {
    let títuloTarefa = inputNovaTarefa.value

    if(títuloTarefa === " ") {
        títuloTarefa === ""
    }else if (títuloTarefa != "") {
        tarefas.push(títuloTarefa)
        inputNovaTarefa.value = ''
    } else {títuloTarefa === ""}
    
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }

    mostrarTarefas()
}

console.log(tarefas)

function clean () {
    inputNovaTarefa.value = ""
}

button.addEventListener ('click', addNovaTarefa)
button.addEventListener('click', clean)

function deletar (position) {

    tarefas.splice(position, 1)
    ul.innerHTML = ''
    mostrarTarefas()
}