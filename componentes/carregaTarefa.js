
import { ordenaDatas, removeDatasRepetidas } from "../service/data.js"
import { carregaDataTopo } from "./carregaItensTarefa.js"

export const carregaTarefa = () => {
  const lista = document.querySelector('[data-list]')
  const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []

  lista.innerHTML = " "
  
  const datasUnicas = removeDatasRepetidas(tarefasCadastradas) //função encontra datas Unicas
  ordenaDatas(datasUnicas)  //função ordena as datas Unicas encontradas

  datasUnicas.forEach((data) => {  
    lista.appendChild(carregaDataTopo(data))
  }) //funçao arrow que para cada data, cria os itens de data correspondente
}

