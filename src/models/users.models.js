// {
//   "first_name": "string",
//   "last_name": "string",
//   "email": "string",
//   "password": "string",
//   "birthday": "date"
// }

const { DataTypes, Sequelize } = require('sequelize')
const db = require('../utils/database')

const Users = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  last_name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, Infinity]
    }
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
}, {
  timestamps: false
})

module.exports = Users