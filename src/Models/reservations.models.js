const { DataTypes } = require("sequelize");
const Users = require("./users.models");
const Tables = require("./mesas.models");
const db = require("../Utils/database");

const Reservations = db.define("reservation", {
      id_reservation: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
      },
      date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
      },
      hour: {
            type: DataTypes.STRING,
            allowNull: false,
      },
      persons: {
            type: DataTypes.INTEGER,
            allowNull: false,
      },
      table_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                  key: "table_id",
                  model: Tables,
            },
      },
      user_id: {
            type: DataTypes.UUID,
            references: {
                  key: "user_id",
                  model: Users,
            },
      },
      status: {
            type: DataTypes.STRING,
            defaultValue: "Reserved",
      },
});

module.exports = Reservations;
