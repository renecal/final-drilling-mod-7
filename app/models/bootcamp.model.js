import { DataTypes } from 'sequelize';
import sequelize from "../config/db.config.js";

const Bootcamp = sequelize.define('Bootcamp', {
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING(150),
    allowNull: false,
    validate: {
        notEmpty: true,
    }
  },
  cue: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
        notEmpty: true,
    }
  },  
  description: {
    type: DataTypes.STRING(500),
    allowNull: false,
    validate: {
        notEmpty: true,
    }
  }
}, {
  // Other model options go here
  tableName: 'bootcamps',  
  timestamps: false

});


export default Bootcamp;