const userControllers = require("./users.controllers");

const getAllUsers = (req, res) => {
      userControllers
            .getAllUsers()
            .then((data) => {
                  res.status(200).json(data);
            })
            .catch((err) => {
                  res.status(400).json({ message: err.message });
            });
};
const getUserById = (req, res) => {
      const id = req.params.id;
      userControllers
            .getUserById(id)
            .then((data) => {
                  res.status(200).json(data);
            })
            .catch((err) => {
                  res.status(404).json({ message: err.message });
            });
};
const createUser = (req, res) => {
      const { name, lastName, age, identity_card, phone } = req.body;
      if ((name & lastName & identity_card, phone)) {
            userControllers
                  .createUser({
                        name,
                        lastName,
                        age,
                        identity_card,
                        phone,
                  })
                  .then((data) => {
                        res.status(201).json(data);
                  })
                  .catch((err) => {
                        res.status(400).json(err.errors[0].message);
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

const patchUser = (req, res) => {
      const id = req.params.id;
      const { name, lastName, age, identity_card, phone } = req.body;
      userControllers
            .editUser(id, { name, lastName, age, identity_card, phone })
            .then((result) => {
                  if (result[0]) {
                        res.status(200).json({ message: `User with ID: ${id}, edited succesfully!` });
                  } else {
                        res.status(404).json({ message: "Invalid ID" });
                  }
            })
            .catch((err) => {
                  res.status(400).json({ message: err.message });
            });
};
const deleteUser = (req, res) => {
      const id = req.params.id;
      userControllers
            .deleteUser(id)
            .then((data) => {
                  if (data) {
                        res.status(200).json({ message: "delete complete" });
                  } else {
                        res.status(404).json({ message: "Invalid ID" });
                  }
            })
            .catch((err) => {
                  res.status(400).json({ message: err.message });
            });
};

module.exports = {
      getAllUsers,
      getUserById,
      createUser,
      patchUser,
      deleteUser,
};
