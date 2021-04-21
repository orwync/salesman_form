const { Product } = require("../models");

exports.createProduct = async ({ name, cost }) => {
  try {
    const product = await Product.create({ name, cost });
    return product;
  } catch (err) {
    console.log(err);
  }
};

exports.getAllProducts = async () => {
  const products = await Product.findAll();
  return products;
};

exports.getProduct = async (id) => {
  try {
    const product = await Product.findOne({
      where: { id },
    });

    return product;
  } catch (err) {
    console.log(err);
  }
};

exports.updateProduct = async (id, { name, cost }) => {
  try {
    const product = await Product.update(
      { name, cost },
      {
        where: {
          id,
        },
      }
    );
    return product;
  } catch (err) {
    console.log(err);
  }
};

exports.deleteProduct = async (id) => {
  try {
    const product = await Product.destroy({
      where: { id },
    });

    return product;
  } catch (err) {
    console.log(err);
  }
};
