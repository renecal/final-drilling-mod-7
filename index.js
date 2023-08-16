import sequelize from "./app/config/db.config.js";
import app from "./server.js";

const main = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({force: true, alter: true });
        console.log("conectado a la base de datos");
        app.listen(3000, () => {
            console.log("Servidor escuchando en puerto 3000");
        });
    } catch (error) {
        console.log("error al inicial la aplicacion");
    }

}

main();