function Guerrero(nombre, ataque, defensa) {
    this.vida = 100;

    this.nombre = nombre;
    this.ataque = ataque;
    this.defensa = defensa;

    this.saludar = (otro_guerrero) => {
        console.log(this.nombre + ' saluda a ' + otro_guerrero.nombre + '.')
    }
}

Guerrero.prototype.atacar = (otro_guerrero) => {    // Esta función no tiene acceso al prototype Guerrero ya que su scope léxico no es ese.
    var danio = this.ataque - otro_guerrero.defensa;

    if (danio > 0) {
        otro_guerrero.vida -= danio;
    }

    console.log(this.nombre + ' ataca a ' + otro_guerrero.nombre + '.')
    console.log(otro_guerrero.nombre + ' pierde ' + danio + ' vidas.')
    console.log(otro_guerrero.nombre + ' ahora tiene ' + otro_guerrero.vida + ' vidas.')
}

var guerrero1 = new Guerrero('Montoto', 75, 40);
var guerrero2 = new Guerrero('Tito', 50, 60);

console.log(guerrero1, guerrero2);
