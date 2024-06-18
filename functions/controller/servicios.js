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


const getContacto = () => { 
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM contacto WHERE 1;", (err, rows) => {
                if (err) reject(err)
                resolve(rows)
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
    getServices,
    getContacto,
    getServiciosSocios,
    getCodigoPais
}