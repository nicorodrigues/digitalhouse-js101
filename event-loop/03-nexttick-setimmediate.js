// nextTick siempre se ejecuta inmediatamente termine la tarea actual, es decir, al inicio de la próxima iteración del evento loop, incluso antes de los timer loops
// setTimeout se ejecuta primero en la siguiente iteración del event loop
// setImmediate se ejecuta en el primer instante del check queue

function carrera() {
    setImmediate(() => console.log('Callback: setImmediate ------- Check queue'));
    setTimeout(() => console.log('Callback: setTimeout ------- Timers queue'), 0);
    process.nextTick(() => console.log('Callback: nextTick ------- Antes de entrar a la queue de timers'));
};

carrera();