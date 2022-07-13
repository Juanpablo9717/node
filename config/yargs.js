const argv = require('yargs')
  .options('b', {
    alias: 'base',
    type: 'number',
    demandOptions: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .options('l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'Muestra la lista en consola'
  })
  .options('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Cantidad de veces a multiplicar',
    demandOptions: true
  })
  .check((argv, opts) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un numero';
    }
    return true;
  }).argv;

  module.exports = argv;