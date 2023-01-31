/*
    Abstraccion:
    - Personaje
        id
        nombre
        poder
        velocidad

    - Heroe
        traje
        debilidad
        villano_id

    - Villano
        porcentaje maldad
        locura
*/  

class Personaje {

    id = null;
    nombre = '';
    poder = '';
    velocidad = 0;
    // encapsulacion ...
    #habilidadEspecial = "";

    constructor(id, nombre, poder, habilidadEspecial) {
        this.id = !id ? this.id : id; // validacion ternaria
        this.nombre = nombre;
        this.poder = poder;
        this.#habilidadEspecial = habilidadEspecial;
    }

    // encapsulacion ...
    #usarHabilidadEspecial() {
        console.log(this.#habilidadEspecial);
    }

    volar() {
        this.velocidad = this.velocidad + 5;
        this.#usarHabilidadEspecial();
    }

    run() {
        this.velocidad = this.velocidad + 1;
    }

}

// Herencia
class Heroe extends Personaje {

    traje = '';
    debilidad = '';
    villano_id = null;

    constructor(
        id,
        nombre, 
        poder,
        habilidadEspecial,
        traje,
        debilidad,
        villano_id
    ) {
        super(id, nombre, poder, habilidadEspecial);
        this.debilidad = debilidad;
        this.traje = traje;
        this.villano_id = villano_id
    }

    // polimorfismo
    volar() {
        this.velocidad = this.velocidad + 10;
    }

}

// herencia 
class Villano extends Personaje {

    porcentaje_maldad = 50;
    porcentaje_locura = 50;

    constructor(
        id,
        nombre,
        poder,
        habilidadEspecial,
        porcentaje_maldad,
        porcentaje_locura
    ) {
        super(id, nombre, poder, habilidadEspecial);
        this.porcentaje_locura = porcentaje_locura;
        this.porcentaje_maldad = porcentaje_maldad;
    }

    // Polimorfismo
    volar() {
        this.velocidad = this.velocidad + 8;
    }

}

const majinbu = new Villano(1, 'Majinbu', 'Dormir', 80, 80);
const goku = new Heroe(1, "Goku", 'HameHameHa', "Henkidama", "kimono", 'Milk', 1);

majinbu.volar()
goku.volar()