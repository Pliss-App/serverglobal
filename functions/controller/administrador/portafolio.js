const connection = require('../mysql');

const getPortafolio = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM portafolio WHERE 1", (err, rows) => {
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
    getPortafolio
}