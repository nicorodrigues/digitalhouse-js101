/**
 * Bindeo implícito
 */

function ejemplo3() {
    console.log(this.a);
}

var obj = {
    a: 2,
    ejemplo: ejemplo3
};

obj.ejemplo();

/**
 * Bindeo implícito 2
 */

var montoto = {
    nombre: 'Montoto',
    greet: function (person) {
        console.log("Hola " + person + ", mi nombre es " + this.nombre + '.');
    }
}

montoto.greet("Tito"); // Hola Tito, mi nombre es Montoto.

var fx = montoto.greet; // En este caso, "this" pasa a ser del scope de la función greet del objeto montoto, por lo tanto no tiene acceso al nombre.
fx("Tito"); // Hola Tito, mi nombre es undefined.
