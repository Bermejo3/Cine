import { Cine } from "./claseCine";
import { Espectador } from "./claseEspectador";
import { Pelicula } from "./clasePelicula";

let sala: Cine = new Cine()

var espectadores = []
for (let i=0; i<80; i++){
    espectadores.push(new Espectador())
}

var cartelera: Pelicula[] = []
for (let i=0; i<5; i++){
    cartelera.push(new Pelicula())
}

sala.cambiarCartelera(cartelera[Math.floor(Math.random()*cartelera.length)])
console.log(sala.getInfo());
sala.sentar(espectadores)