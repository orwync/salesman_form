const { Outlet } = require("../models");

exports.createOutlets = async ({ name, phone, address }) => {
  try {
    const outlet = await Outlet.create({ name, phone, address });
    return outlet;
  } catch (err) {
    console.log(err);
  }
};

exports.getAllOutlets = async () => {
  const outlets = await Outlet.findAll();
  return outlets;
};

exports.getOutlet = async (id) => {
  try {
    const outlet = await Outlet.findOne({
      where: { id },
    });

    return outlet;
  } catch (err) {
    console.log(err);
  }
};

exports.updateOutlet = async (id, { name, phone, address }) => {
  try {
    const outlet = await Outlet.update(
      { name, phone, address },
      {
        where: {
          id,
        },
      }
    );
    return outlet;
  } catch (err) {
    console.log(err);
  }
};

exports.deleteOutlet = async (id) => {
  try {
    const outlet = await Outlet.destroy({
      where: { id },
    });

    return outlet;
  } catch (err) {
    throw err;
  }
};
