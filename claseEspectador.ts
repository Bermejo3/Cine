export class Espectador{
    //Atributos
    public nombre: string
    public edad: number
    public dinero: number

    //Constructor
    constructor (){
        this.nombre = this.nombreAleatorio()
        this.edad = Math.floor(Math.random()*50)
        this.dinero = Math.floor(Math.random()*100)
    }

    //Metodos publicos
    public showInfo():string{
        return `· Nombre: ${this.nombre}\n· Edad: ${this.edad}\n· `
    }
    //Metodos privados para generar
    private nombreAleatorio():string{
        let nombres: string[] = ["Alberto", "Manuel", "Natalia", "Jose", "Jorge", "Helena", "Lucia", "Victor", "Lourdes", "David", "Obama"]
        return nombres[Math.floor(Math.random()*nombres.length)]
    }
}