export class PuntajeList{

    constructor(){
        this.puntos =  []; //arry para guardar los puntos
    }


    NuevoPunto(punto){ // metodo para guardar los puntos en el arry
        this.puntos.push(punto);
    }

    EliminarFila(id){ //para eliminar una fila con la x
        this.puntos = this.puntos.filtrer( punto => punto.id != id)
    }


}