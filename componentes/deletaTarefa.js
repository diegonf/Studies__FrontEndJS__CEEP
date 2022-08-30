import { carregaTarefa } from "./carregaTarefa.js"

const deletarTarefa = (id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))

    tarefasCadastradas.splice(id,1) 
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
    
    carregaTarefa();
}

const BotaoDeleta = (id) => { 
    const botaoDeleta = document.createElement('button')

    botaoDeleta.classList.add('delete-button')
    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', ()=> deletarTarefa(id))

    return botaoDeleta
}

export default BotaoDeleta