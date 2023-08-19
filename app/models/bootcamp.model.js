import { DataTypes } from 'sequelize';
import sequelize from "../config/db.config.js";

const Bootcamp = sequelize.define('Bootcamp', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
        notEmpty: true,
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
  tableName: 'bootcamps',  
  timestamps: false

});


export default Bootcamp;