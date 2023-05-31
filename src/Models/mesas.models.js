const { DataTypes } = require("sequelize");
const db = require("../Utils/database");

const Tables = db.define("mesas", {
      table_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
      },
      capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
      },
      status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
      },
      location: {
            type: DataTypes.STRING,
            allowNull: false,
      },
});

module.exports = Tables;
