import { carregaTarefa } from "./carregaTarefa.js"

const concluirTarefa = (id) => {
    const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    tarefaCadastradas[id].concluida=!tarefaCadastradas[id].concluida
    localStorage.setItem('tarefas', JSON.stringify(tarefaCadastradas))

    carregaTarefa();
}

const BotaoConclui = (id) => { 
    const botaoConclui = document.createElement('button')  
    
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', ()=> concluirTarefa(id))

    return botaoConclui

}

export default BotaoConclui

