const Tables = require("../Models/mesas.models");

const getAllTables = async () => {
      const data = await Tables.findAll();
      return data;
};

const getTableByNumber = async (id) => {
      const data = await Tables.findOne({
            where: {
                  table_id: id,
            },
      });
      return data;
};
const getTableAvailable = async (status) => {
      const data = await Tables.findAndCountAll({
            where: {
                  status: status,
            },
      });
      return data;
};

const createTable = async (data) => {
      const newTable = await Tables.create({
            table_id: data.table_id,
            capacity: data.capacity,
            location: data.location,
      });
      return newTable;
};

const updateTable = async (id, data) => {
      const result = await Tables.update(data, {
            where: {
                  table_id: id,
            },
      });
      return result;
};

const deleteTable = async (id) => {
      const data = await Tables.destroy({
            where: {
                  table_id: id,
            },
      });
      return data;
};

module.exports = {
      getAllTables,
      getTableByNumber,
      getTableAvailable,
      createTable,
      updateTable,
      deleteTable,
};
