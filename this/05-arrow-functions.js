const that = this;

const ejemplo = () => {
    console.log(this === that); // this SIEMPRE se refiere al scope léxico en las arrow functions, es decir, a lo que tiene alrededor.
};

ejemplo();

var grupo = {
    nombre: "Los borbotones",
    integrantes: ["Montoto", "Tito"],

    mostrarLista() {
        this.integrantes.forEach((estudiante) => {
            console.log(this.nombre + ': ' + estudiante); // Por más que estemos dentro de 2 funciones (foreach y mostrarLista), el scope léxico de this es el objeto grupo.
        });
    }
};

grupo.mostrarLista();
