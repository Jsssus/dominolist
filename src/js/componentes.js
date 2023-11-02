import { PuntajeList, Tabla } from "../clases";
import {puntajeList} from '../index';

//Referencias al html
const divTablaPuntaje = document.querySelector('.TablaPuntaje');
const numInput = document.querySelector('.equipo2');
const trElement = document.querySelector("tbody")

export const crearPuntajeHtml = (Tabla) =>{

    const htmlPuntaje = `<tr>
        <th scope="row" class="text-center">1</th>
        <td class="text-center">0</td>
        <td class="text-center">${Tabla.numero}</td>
        <td class="text-center"><button id="${Tabla.id}">x</button></td>
    </tr>
    `;

    const div = document.createElement('tr');
    div.innerHTML = htmlPuntaje;
    divTablaPuntaje.append(div);

    return div;
}

//Eventos
numInput.addEventListener('keyup',(event) =>{

    if(event.keyCode === 13 && numInput.value.length > 0){

        console.log(numInput.value)
        const nuevaTabla = new Tabla(numInput.value);
        puntajeList.NuevoPunto(nuevaTabla);

        crearPuntajeHtml(nuevaTabla); //borrar el numero

    }
})




trElement.addEventListener('click',(event) => {

    const dataId = trElement.getAttribute("data-id");
    console.log(dataId);

})
