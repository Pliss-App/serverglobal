module.exports = {
    hostname: 'myhostname',
    database: {
        host: process.env.DB_HOST || "srv1288.hstgr.io", //traido desde hostinger. para establecer la conexión remota.
        user: process.env.DB_USER || "u614121371_adminglobal",
        password: process.env.DB_PASSWORD || "3z=u4:k6Z",
        database: process.env.DB_DATABASE || "u614121371_globaltech",
    }

  /*  hostname: 'localhost',

    database: {

        host: "localhost", //traido desde hostinger. para establecer la conexión remota.
        port: 3306,
        user: "root",
        password: "Lib49@pz",
        database: "gtch",
    }*/

}
