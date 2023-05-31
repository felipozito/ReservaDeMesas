const tablesControllers = require("./mesa.controllers");

const getAllTables = (req, res) => {
      tablesControllers
            .getAllTables()
            .then((data) => {
                  res.status(200).json(data);
            })
            .catch((err) => {
                  res.status(400).json({ message: err.message });
            });
};

const getTableByNumber = (req, res) => {
      const id = req.params.id;
      tablesControllers
            .getTableByNumber(id)
            .then((data) => {
                  res.status(200).json(data);
            })
            .catch((err) => {
                  res.status(404).json({ message: err.message });
            });
};
const getTableByStatus = (req, res) => {
      const status = req.params.status;
      console.log(status);
      tablesControllers
            .getTableAvailable(status)
            .then((data) => {
                  res.status(200).json(data);
            })
            .catch((err) => {
                  res.status(404).json({ data: "se dano", message: err.message });
            });
};

const createTable = (req, res) => {
      const { table_id, capacity, location } = req.body;
      if (table_id && capacity && location) {
            tablesControllers
                  .createTable({
                        table_id,
                        capacity,
                        location,
                  })
                  .then((data) => {
                        res.status(201).json(data);
                  })
                  .catch((err) => {
                        res.status(400).json(err.message);
                  });
      } else {
            res.status(400).json({
                  message: "All fields must be completed",
                  fields: {
                        Number: "number of table",
                        capacity: "number of capacity",
                        location: "description location",
                  },
            });
      }
};

const patchTable = (req, res) => {
      const id = req.params.id;
      const { capacity, status, location } = req.body;
      tablesControllers
            .updateTable(id, { capacity, status, location })
            .then((result) => {
                  console.log(result);
                  if (result[0]) {
                        res.status(200).json({ message: `Table with ID: ${id}, edited succesfully!` });
                  } else {
                        res.status(404).json({ message: "Invalid ID" });
                  }
            })
            .catch((err) => {
                  res.status(400).json({ message: err.message });
            });
};

const deleteTable = (req, res) => {
      const id = req.params.id;
      tablesControllers
            .deleteTable(id)
            .then((data) => {
                  if (data) {
                        res.status(204).json(`complete Delete Table ${id}`);
                  } else {
                        res.status(404).json({ message: "Invalid ID" });
                  }
            })
            .catch((err) => {
                  res.status(400).json({ message: err.message });
            });
};

module.exports = {
      getAllTables,
      getTableByNumber,
      getTableByStatus,
      createTable,
      deleteTable,
      patchTable,
};
