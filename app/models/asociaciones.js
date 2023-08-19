import User from "./user.model.js";
import Bootcamp from "./bootcamp.model.js";

User.belongsToMany(Bootcamp, { 
    through: `user_bootcamp`,
    foreignKey: "user_id",
    as: "bootcamps"
});

Bootcamp.belongsToMany(User, { 
    through: `user_bootcamp`,
    foreignKey: "bootcamp_id",
    as: "alumnos"
});
