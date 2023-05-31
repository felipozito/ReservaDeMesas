const tablesServices = require("./mesa.services");
const router = require("express").Router();

router.route("/").get(tablesServices.getAllTables).post(tablesServices.createTable);

router.route("/:id").get(tablesServices.getTableByNumber).patch(tablesServices.patchTable).delete(tablesServices.deleteTable);

router.route("/status/:status").get(tablesServices.getTableByStatus);

module.exports = router;
