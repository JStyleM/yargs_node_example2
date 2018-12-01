const yargs = require('yargs');

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de una tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Establece tarea como completado'
};

const argv = yargs
    .command('crear', 'Crea una tarea por hacer', {
        descripcion: descripcion
    })
    .command('listar', 'Lista las Tareas por Hacer', {})
    .command('actualizar', 'Actualiza una tarea por hacer', {
        descripcion: descripcion,
        completado: completado
    })
    .command('borrar', 'Elimina una Tarea', {
        descripcion: descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}