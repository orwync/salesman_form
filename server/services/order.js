const { Order } = require("../models");
const { Product } = require("../models");
const { Outlet } = require("../models");
const { User } = require("../models");
const db = require("../models");

exports.createOrder = async ({ user_id, product_id, outlet_id, quantity }) => {
  try {
    const costSingle = await Product.findOne({
      where: { id: product_id },
    });

    console.log(costSingle);

    const cost = costSingle.cost * quantity;

    const order = await Order.create({
      user_id,
      product_id,
      outlet_id,
      quantity,
      cost,
    });
    return order;
  } catch (err) {
    console.log(err);
  }
};

exports.getAllOrders = async () => {
  try {
    const orders = await Order.findAll({
      include: [{ model: User }, { model: Product }, { model: Outlet }],
    });

    return orders;
  } catch (err) {
    console.log(err);
  }
};

exports.getOrder = async (id) => {
  try {
    let order = await Order.findOne({
      where: { id },
    });

    return order;
  } catch (err) {
    console.log(err);
  }
};

exports.updateOrder = async (
  id,
  { user_id, product_id, outlet_id, quantity }
) => {
  try {
    const costSingle = await Product.findOne({
      where: { id: product_id },
    });

    const cost = costSingle.cost * quantity;
    const order = await Order.update(
      { user_id, product_id, outlet_id, quantity, cost },
      {
        where: {
          id,
        },
      }
    );
    return order;
  } catch (err) {
    console.log(err);
  }
};

exports.deleteOrder = async (id) => {
  try {
    const order = await Order.destroy({
      where: { id },
    });

    return order;
  } catch (err) {
    console.log(err);
  }
};

exports.getOrderByUser = async (id, { start_date, end_date }) => {
  try {
    // const user = User.findOne({
    //   where: { id },
    //   include: [{ model: Order,attributes: }],
    // });

    const [user, metadata] = await db.sequelize.query(
      `select users.id,users.name,sum(orders.quantity) as total_quantity,count(orders.product_id) as total_products,sum(orders.cost) as total_cost from users,orders where users.id=orders.user_id and users.id=${id} and orders.createdAt between "${start_date}" and "${end_date}";
      `
      // 2021-04-19
    );

    return user;
  } catch (err) {
    console.log(err);
  }
};

exports.getOrderByProduct = async (id, { start_date, end_date }) => {
  try {
    const [products, metadata] = await db.sequelize.query(
      `select products.id,products.name,sum(orders.quantity) as total_quantity,sum(orders.cost) as total_cost from products,orders where products.id=orders.product_id and products.id=${id} and orders.createdAt between "${start_date}" and "${end_date}";`
    );
    return products;
  } catch (err) {
    console.log(err);
  }
};

exports.getOrderByOutlet = async (id, { start_date, end_date }) => {
  try {
    const [outlets, metadata] = await db.sequelize.query(
      `select outlets.id,outlets.name,sum(orders.quantity) as total_quantity,count(orders.product_id) total_products,sum(orders.cost) total_cost from products,orders,outlets where outlets.id=orders.outlet_id and orders.product_id=products.id and outlets.id=${id} and orders.createdAt between "${start_date}" and "${end_date}";`
    );
    return outlets;
  } catch (err) {
    console.log(err);
  }
};
