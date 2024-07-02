const os = require('os');
console.log('Espacio libre inicial:', os.freemem());
const vector = [];
for (let i = 0; i < 1000000; i++) {
    vector.push(i);
}
console.log('Espacio libre después de cargar el vector:', os.freemem());
