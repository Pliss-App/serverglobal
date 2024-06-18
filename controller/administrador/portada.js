const connection = require('../mysql');

const getPortada= (portada) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM banner WHERE modulo = ?;", [portada], (err, rows) => {
                if (err) reject(err)
                resolve(rows[0])
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


module.exports = {
    getPortada,
    getPortadaId
}