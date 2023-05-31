const { DataTypes } = require("sequelize");
const db = require("../Utils/database");

const Users = db.define("users", {
      user_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
      },
      name: {
            type: DataTypes.STRING,
            allowNull: false,
      },
      last_name: {
            type: DataTypes.STRING,
            allowNull: false,
      },
      age: {
            type: DataTypes.INTEGER,
      },
      identity_card: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
      },
      phone: {
            type: DataTypes.STRING,
            allowNull: false,
      },
});

module.exports = Users;
