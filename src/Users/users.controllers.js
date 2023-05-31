const Users = require("../Models/users.models");
const uuid = require("uuid");

const getAllUsers = async () => {
      const data = await Users.findAll();
      return data;
};
const getUserById = async (id) => {
      const data = await Users.findOne({
            where: {
                  user_id: id,
            },
      });
      return data;
};
const createUser = async (data) => {
      const res = await Users.create({
            user_id: uuid.v4(),
            name: data.name,
            last_name: data.lastName,
            age: data.age,
            identity_card: data.identity_card,
            phone: data.phone,
      });
      return res;
};

const editUser = async (id, data) => {
      const res = await Users.update(data, {
            where: {
                  user_id: id,
            },
      });
      return res;
};
const deleteUser = async (id) => {
      const data = await Users.destroy({
            where: {
                  user_id: id,
            },
      });
      return data;
};

module.exports = {
      getAllUsers,
      createUser,
      editUser,
      deleteUser,
      getUserById,
};
