const Reservation = require("../Models/reservations.models");
const uuid = require("uuid");

const getAllReservation = async () => {
      const data = await Reservation.findAll();
      return data;
};
const doReservation = async () => {
      const response = await Reservation.create({
            id_reservation: uuid.v4(),
            date: data.date,
            hour: data.hour,
            persons: data.persons,
            table_id: data.table_id,
            user_id: data.user_id,
            status: data.status,
      });
      return response;
};

const updateReservation = async (id, data) => {
      const result = await Reservation.update(data, {
            where: {
                  id_reservation: id,
            },
      });
      return result;
};

module.exports = {
      getAllReservation,
      doReservation,
      updateReservation,
};
