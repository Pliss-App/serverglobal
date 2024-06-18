const connection = require('../mysql');
const bcrypt = require('bcrypt');


const getComercio = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM nosotros WHERE 1", (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

module.exports = {
    getComercio 
}