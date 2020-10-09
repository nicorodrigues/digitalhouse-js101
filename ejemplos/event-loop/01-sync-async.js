// Síncrono: 1,2,3
console.log('------- Sync -------');
console.log(1);
console.log(2);
console.log(3);
console.log(4);

console.log('------- Async -------');
// Asíncrono: 1,3,2
console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);
