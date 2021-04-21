"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("orders", [
      {
        user_id: 1,
        product_id: 1,
        outlet_id: 1,
        quantity: 1,
        cost: 2.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        product_id: 2,
        outlet_id: 2,
        quantity: 2,
        cost: 20.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        product_id: 3,
        outlet_id: 3,
        quantity: 3,
        cost: 6000.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        product_id: 4,
        outlet_id: 4,
        quantity: 4,
        cost: 3000.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        product_id: 5,
        outlet_id: 5,
        quantity: 5,
        cost: 15000.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("orders", null, {});
  },
};
