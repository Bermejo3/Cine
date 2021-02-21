export class Pelicula{
    //Atributos
    public titulo: string
    public duracion: number
    public edadMinima: number
    public director: string

    //Constructor
    constructor (){
        this.titulo = this.tituloAleatorio()
        this.duracion = Math.round(Math.random()*(150-90)+90)
        this.edadMinima = this.edadMinimaAleatorio()
        this.director = this.directorAleatorio()
    }

    //Metodoa Públicos
    public showInfo(){
        let attribute: string = ""
        Object.keys(this).forEach(key => attribute += `${key} - ${this[key]}\n`)
        console.log(attribute);
    }

    //Metodos Privados
    private tituloAleatorio(){
        let peliculas: string[] = ["Star Wars", "El Señor de los Anillos", "Titanic", "Blancanieves", "Saw", "Toy Story", "Mad Max: Fury Road"]
        return peliculas[Math.floor(Math.random()*peliculas.length)]
    }

    private edadMinimaAleatorio(){
        let edades: number[] = [0,7,16,18]
        return edades[Math.floor(Math.random()*edades.length)*Math.round(Math.random())]
    }

    private directorAleatorio(){
        let nombres: string[] = ["Martin Scorsese", "Steven Spielberg", "Tarantino", "Woody Allen", "Walt Disney", "Alex de la Iglesia"]
        return nombres[Math.floor(Math.random()*nombres.length)*Math.round(Math.random())]
    }
}