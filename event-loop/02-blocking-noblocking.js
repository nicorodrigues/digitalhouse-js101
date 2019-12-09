// Bloqueante -> algunas funciones de fs (específicamente las sync) bloquean el I/O hasta que terminan de ejecutarse.
// Es por esto que cada función tu su versión sync y su versión con callback
const fs = require('fs');

console.log('------- I/O Bloqueado -------');

const data = fs.readFileSync('./01-sync-async.js'); // blocks here until file is read
console.log(data);
console.log('Terminé de leer...');

// No bloqueante
console.log('------- I/O No Bloqueado -------');

fs.readFile('./01-sync-async.js', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log('Terminé de leer...?');