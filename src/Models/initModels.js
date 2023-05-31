const Users = require("./users.models");
const Tables = require("./mesas.models");
const Reservations = require("./reservations.models");

const initModels = () => {
      //* Users 1:M reservaciones
      Reservations.belongsTo(Users);
      Users.hasMany(Reservations);

      //* reservacion 1:M mesas
      Tables.belongsTo(Reservations);
      Reservations.hasMany(Tables);
};

module.exports = initModels;
