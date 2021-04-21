const { User } = require("../models");

exports.createUsers = async ({ name, phone, rep_manager }) => {
  try {
    const user = await User.create({ name, phone, rep_manager });
    return user;
  } catch (err) {
    console.log(err);
  }
};

exports.getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

exports.getUser = async (id) => {
  try {
    const user = await User.findOne({
      where: { id },
    });

    return user;
  } catch (err) {
    console.log(err);
  }
};

exports.updateUser = async (id, { name, phone, rep_manager }) => {
  try {
    const user = await User.update(
      { name, phone, rep_manager },
      {
        where: {
          id,
        },
      }
    );
    return user;
  } catch (err) {
    console.log(err);
  }
};

exports.deleteUser = async (id) => {
  try {
    const user = await User.destroy({
      where: { id },
    });

    return user;
  } catch (err) {
    console.log(err);
  }
};
