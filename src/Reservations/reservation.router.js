const router = require("express").Router();
// const passport = require("passport");
// require("../middlewares/auth.middleware")(passport);
const reservationServices = require("./reservations.services");
const tableServices = require("../Mesas/mesa.services");

router.route("/:conversation_id/reservation").get(reservationServices.getAllReservation);

module.exports = router;
