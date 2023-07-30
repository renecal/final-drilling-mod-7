import sequelize from "./app/config/db.config.js";

const main = async () => {
    await sequelize.authenticate();
    await sequelize.sync({force: true, alter: true });

}

main();