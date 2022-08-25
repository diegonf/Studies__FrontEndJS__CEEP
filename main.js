
import {criarNovaTarefa} from "./componentes/criarNovaTarefa.js";
import {carregaTarefa} from "./componentes/carregaTarefa.js";

carregaTarefa();
const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', criarNovaTarefa);


