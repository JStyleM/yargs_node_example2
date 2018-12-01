const fs = require('fs');

let listadoTareas = [];

const guardarDB = (tarea) => {
    let data = JSON.stringify(listadoTareas);

    fs.writeFile(`db/data.json`, data, err => {

        if (err) {
            throw new Error('El archivo no se ha creado!');
        }

    })
}

const cargardb = () => {

    try {
        listadoTareas = require('../db/data.json');
    } catch (error) {
        listadoTareas = [];
    }

    return listadoTareas;

}

const getListado = () => {
    return cargardb();
}

const actualizar = (descripcion, completado) => {

    cargardb();

    let index = listadoTareas.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoTareas[index].completado = true;
        console.log('La tarea se actualizó correctamente!');
        guardarDB();

    } else {
        console.log('No se encuentra el registro a actualizar');
    }
}

const borrar = (descripcion) => {
    cargardb();

    let index = listadoTareas.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoTareas.splice(index, 1);
        console.log('La tarea se Eliminó correctamente!');
        guardarDB();

    } else {
        console.log('No se encuentra el registro a Eliminar');
    }

}

const crear = (descripcion) => {

    cargardb();

    let tarea = {
        descripcion: descripcion,
        completado: false
    };

    listadoTareas.push(tarea);

    guardarDB();

    return tarea;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}