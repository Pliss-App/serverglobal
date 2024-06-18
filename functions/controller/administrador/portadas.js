const connection = require('../mysql');

const getPortadas = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM  WHERE 1", (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

module.exports = {
    getServices
}