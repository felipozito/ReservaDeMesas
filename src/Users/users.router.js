const userServices = require("./users.services");
const router = require("express").Router();

router.route("/").get(userServices.getAllUsers).post(userServices.createUser);

router.route("/:id").get(userServices.getUserById).patch(userServices.patchUser).delete(userServices.deleteUser);

module.exports = router;
