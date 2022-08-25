import { carregaTarefa } from './carregaTarefa.js'
 
export const criarNovaTarefa = (evento) => {
    evento.preventDefault()
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)
    const horario = data.format('HH:mm')
    const dataFormatada = data.format('DD/MM/YYYY')

    const concluida = false

    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida
    }

    const tarefasAtualizadas = [ ...tarefas, dados]
    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas))
    input.value = " "
    carregaTarefa()
}



// export default handleNovoItem
  