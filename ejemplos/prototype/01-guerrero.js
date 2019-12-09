function Guerrero (nombre, ataque, defensa) {
    this.vida = 100;

    this.nombre = nombre;
    this.ataque = ataque;
    this.defensa = defensa;
}

var guerrero1 = new Guerrero('Montoto', 75, 40);
var guerrero2 = new Guerrero('Tito', 50, 60);

console.log(guerrero1, guerrero2);