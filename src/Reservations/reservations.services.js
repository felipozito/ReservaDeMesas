const reservationController = require("./reservations.controllers");
const userController = require("../Users/users.controllers");
const tableController = require("../Mesas/mesa.controllers");

const getAllReservation = (req, res) => {
      const user_id = req.params.user.id;
      userController
            .getUserById(user_id)
            .then((data) => {
                  console.log(data);
                  if (data) {
                        reservationController
                              .getAllReservation()
                              .then((data) => {
                                    res.status(200).json(data);
                              })
                              .catch((err) => {
                                    res.status(400).json({ message: err.message });
                              });
                  } else {
                        res.status(400).json({ message: "this user doesnt Reservations" });
                  }
            })
            .catch((e) => {
                  res.status(400).json({ message: "this user doesnt exits" });
            });
};

module.exports = { getAllReservation };
