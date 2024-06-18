const connection = require('../../mysql');

const getMenu = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM menu WHERE 1", (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};


const getOpcionMenu = (item) => { 
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM ${item} WHERE 1;`, (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const getPortadaId= (id) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM banner WHERE id = ?;", [id], (err, rows) => {
                if (err) reject(err)
                resolve(rows[0])
            });
    });
};


const getOpcionTableId = (tabla, id) => { 
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM ${tabla} WHERE id=${id};`, (err, rows) => {
                if (err) reject(err)
                resolve(rows[0])
            });
    });
};


const getCodigoPais = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM CodigoPais WHERE 1", (err, rows) => {
                if (err) reject(err);
                else
                resolve(rows)
            });
    });
};

const getServiciosSocios = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM TipoSocios WHERE 1", (err, rows) => {
                if (err) reject(err);
                else
                resolve(rows)
            });
    });
};
module.exports = {
    getMenu,
    getOpcionMenu,
    getPortadaId,
    getOpcionTableId
}