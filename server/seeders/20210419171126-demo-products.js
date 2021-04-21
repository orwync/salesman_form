"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("products", [
      {
        name: "Pencil",
        cost: 2.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pen",
        cost: 10.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Plane",
        cost: 2000.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jeep",
        cost: 1500.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tank",
        cost: 3000.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
