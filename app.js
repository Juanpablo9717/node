
const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
  .then((name) => console.log(`${name} creado`))
  .catch((err) => console.error(err))