
import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'

export const carregaDataTopo = (dataTopo) => {
  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  const dataTopoFormatada = moment(dataTopo, 'DD/MM/YYYY').format('DD/MM/YYYY');
  const dataHTML = document.createElement('li');
  const conteudo = `<p class= "content-data">${dataTopoFormatada}</p>`;
  dataHTML.innerHTML = conteudo;

  tarefas.forEach((tarefa, id) => {
    const dataItem = moment(tarefa.dataFormatada, 'DD/MM/YYYY')
    const dataTopoItem = moment(dataTopoFormatada, 'DD/MM/YYYY')
    const diff = dataTopoItem.diff(dataItem) //compara dataTopoMoment com cada data no tarefas
    
    if(diff == 0){
      dataHTML.appendChild(carregaItens(tarefa, id))
    }
  })

  return dataHTML
}

export const carregaItens = ({ valor, horario, concluida}, id) => {
  const tarefa = document.createElement('li');
  const conteudo = `<p class="content">${horario} * ${valor}</p>`;
  if (concluida){
      tarefa.classList.add('done');
  }
  tarefa.classList.add('task');
  tarefa.innerHTML = conteudo;
  tarefa.appendChild(BotaoConclui(id));
  tarefa.appendChild(BotaoDeleta(id));
  return tarefa;
}