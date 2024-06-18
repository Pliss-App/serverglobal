const connection = require('../mysql');

const insertInteres = (data) => { //
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO interesados SET ?`, [data], (err, result) => {
            if (err) reject(err)
            resolve(result)
        })
    });
}




module.exports = {
    insertInteres
}