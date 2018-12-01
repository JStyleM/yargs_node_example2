const colors = require('colors');
const argv = require('./config/yargs').argv;
const tarea = require('./tareas/tareas');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tareaCreada = tarea.crear(argv.descripcion);
        console.log(tareaCreada);
        console.log('La tarea se creo correctamente');

        break;
    case 'listar':

        let listado = tarea.getListado();

        for (const tarea of listado) {
            console.log('=========Tarea========='.green);
            console.log(tarea.descripcion);
            console.log('Estado : ', tarea.completado);
            console.log('======================='.green);
        }

        break;
    case 'actualizar':

        tarea.actualizar(argv.descripcion, argv.completado);
        break;

    case 'borrar':
        tarea.borrar(argv.descripcion);
        break;

    default:
        console.log('Comando no encontrado');

        break;
}