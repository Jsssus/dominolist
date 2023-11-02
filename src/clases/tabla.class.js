export class Tabla{

    constructor(numero){

        this.numero = numero;
        this.id = new Date().getTime(); //codigo segun el tiempo en el que se puso
        this.creado = new Date();
    }

}