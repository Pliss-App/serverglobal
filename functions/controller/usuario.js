const connection = require('../mysql');

const getServices = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM Servicios WHERE 1", (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};


const getIdDispositivo = (id) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT  identity,  visitas FROM vistas WHERE identity = ? ",[id], (err, rows) => {
                if (err) reject(err)
                resolve(rows[0])
            });
    });
};

const addDispositivo = (id, json, count) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO vistas (identity, dispositivo, visitas) VALUES
        ( '${id}','${json}', ${count} );`, (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
};

const updateDispositivo = (id, count) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `update vistas SET visitas = ? where identity = ? `,[count, id], (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
};
module.exports = {
    getServices,
    getIdDispositivo,
    addDispositivo,
    updateDispositivo
}