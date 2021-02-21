import { Asiento } from "./claseAsiento";
import { Espectador } from "./claseEspectador";
import { Pelicula } from "./clasePelicula";


//Clase creado utilizando la clase Asiento para solucionar el reto
export class CineObj{
    //Atributos
    public pelicula: Pelicula
    public precio: number
    public sala: Asiento[][]

    //Constructor
    constructor (precio: number = 10){
        this.precio = precio
        this.sala = this.creacionSala()
    }

    //Metodo publico
    public getSala(): Asiento[][]{
        return this.sala
    }

    public getPelicula(): Pelicula{
        return this.pelicula
    }

    public getPrecio(): number{
        return this.precio
    }

    public getInfo(): string{
        return `La pelicula ${this.pelicula.titulo} cuesta ${this.precio}€`
    }

    public cambiarCartelera(pelicula: Pelicula){
        this.pelicula = pelicula
        this.sala = this.creacionSala() // Para vaciar la sala
    }

    public sentar(espectadores: Espectador[]){
        let count: number = 0
        for (let i=0; i<espectadores.length && count < 72; i++){
            if (espectadores[i].dinero > this.precio && espectadores[i].edad > this.pelicula.edadMinima){
                let seated: boolean = false
                while (seated == false && count < 72 ){
                    let fila: number = Math.round(Math.random()*7)
                    let asiento: number = Math.round(Math.random()*8)
                    if (this.sala[fila][asiento].ocupado == false){
                        seated = true
                        this.sala[fila][asiento].ocupado = true
                        count++
                    }
                }
                if (count == 72){
                    console.log("La sala está llena")
                    console.log(this.getSala())
                }
            }
        }
        if (count <72){
            console.log(this.getSala())
        }
    }

    //Metodo Privado
    private creacionSala(){
        let sala: Asiento[][] = []
        let asientos: string[] = ["A","B","C","D","E","F","G","H","I"]
        
        for (let i=0; i<8;i++){
            sala[i] = []
            for (let j=0; j<9;j++){
                sala[i][j] = new Asiento((i+1).toString(),asientos[j] )
            }
        }
        sala = sala.reverse()
        return sala
    }
}