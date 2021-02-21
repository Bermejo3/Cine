export class Asiento {
    //Atributos
    public fila: string
    public columna: string
    public ocupado: boolean

    //Constructor
    constructor(fila: string, columna: string){
        this.fila = fila
        this.columna = columna
        this.ocupado = false
    }
}