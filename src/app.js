const express = require("express");
const { port } = require("./config");
const db = require("./Utils/database");
const initModels = require("./Models/initModels");
const TableRoute = require("./Mesas/mesa.router");
const UserRoute = require("./Users/users.router");
const ReservationRoute = require("./Reservations/reservation.router");

const app = express();

db.authenticate()
      .then(() => {
            console.log("Database Authenticated");
      })
      .catch((err) => {
            console.log(err);
      });

db.sync()
      .then(() => {
            console.log("Database Synced");
      })
      .catch((err) => {
            console.log(err);
      });

initModels();

app.use(express.json());
app.get("/", (req, res) => {
      res.status(200).json({
            message: "Server it's OK!",
      });
});

app.use("/api/v1/table", TableRoute);
app.use("/api/v1/users", UserRoute);
app.use("/api/v1/reservation", ReservationRoute);

app.listen(port, () => {
      console.log(`Server started at port ${port}`);
});
