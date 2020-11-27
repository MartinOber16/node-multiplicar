// requireds
//const fs = require('fs'); // libreria propia de node
//const fs = require('express'); // paquete instalado no nativo de node
//const fs = require('./fs'); // libreria del proyecto

// const argv = require('yargs')
//   .command('listar', 'Imprime en consola la tabla de multiplicar', {
//     base: {
//       demand: true,
//       alias: 'b'
//     },
//     limite: {
//       alias: 'l',
//       default: 10
//     }
//   })
//   .command('crear', 'Crear un archivo con la tabla de multiplicar', {
//     base: {
//       demand: true,
//       alias: 'b'
//     },
//     limite: {
//       alias: 'l',
//       default: 10
//     }
//   })
//   .help()
//   .argv;
const argv  = require('./config/yargs').argv;
const colors = require('colors');

//const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

  case 'listar':
    console.log('Listar');
    listarTabla(argv.base, argv.limite)
      .then(tabla => console.log(tabla.green))
      .catch(err => console.log(err));
  break;
  case 'crear':
    console.log('Crear');
    crearArchivo(argv.base, argv.limite)
     .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
     .catch(err => console.log(err));
  break;
  default:
    console.log('Comando no reconocido');

}


// VARIABLES DE ENTORNO DE NODE
// console.log(module);
// console.log(process);
//console.log(process.argv);

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

// let nombreArchivo = `tablas/tabla-${base}.txt`;
// let data = '';

// for (let i=1; i<=10; i++) {
//     data += `${base} * ${i} = ${base*i}\n`;
// }

// fs.writeFile(nombreArchivo, data, (err) => {
//     if (err) throw err;

//     console.log(`El archivo ${nombreArchivo} ha sido creado!`);
//   });

//multiplicar.crearArchivo(base)
// crearArchivo(base)
//   .then(archivo => console.log(`Archivo creado: ${archivo}`))
//   .catch(err => console.log(err));

