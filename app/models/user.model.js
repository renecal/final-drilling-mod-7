import { DataTypes } from 'sequelize';
import sequelize from "../config/db.config.js";

const User = sequelize.define("User", {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
        notEmpty: false,
    }
  },
  lastName: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
        notEmpty: true,
    }
  },  
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
    validate: {
        isEmail: true,
    }
  }
}, {
  // Other model options go here
  tableName: "users",  
  timestamps: true

});

export default User;