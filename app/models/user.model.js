import { DataTypes } from 'sequelize';

const User = sequelize.define('Users', {
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
  tableName: 'users',  
  timestamps: true

});
