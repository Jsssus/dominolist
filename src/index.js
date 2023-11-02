import {PuntajeList, Tabla} from './clases' //automaticamente busca el index.js
import { crearPuntajeHtml } from './js/componentes';

export const puntajeList = new PuntajeList();

const tarea = new Tabla('80');
puntajeList.NuevoPunto(tarea);
console.log(puntajeList);

crearPuntajeHtml(tarea);