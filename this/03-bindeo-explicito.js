function saludar() {
    console.log('Hola, ' + this.name);
}

var persona = {
    name: 'Montoto'
}

saludar.call(persona); // Al aplicar la función call a la función saludar, nos permite explicitar el entorno de ejecución, por lo tanto this pasa a ser el objeto persona.

function otroSaludo() {
    console.log('Hola, ' + this.name);
}

var persona2 = {
    name: 'Tito'
};

var otroSaludoPersona2 = otroSaludo.bind(persona2); // Al hacer esto, generamos una copia de la función original y le aplicamos el scope persona2.

otroSaludoPersona2();
