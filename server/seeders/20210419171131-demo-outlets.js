"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("outlets", [
      {
        name: "Walmart",
        phone: 987654321,
        address: "Manglore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "More",
        phone: 987456321,
        address: "Banglore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "7/11",
        phone: 987321654,
        address: "Mysore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Walgreens",
        phone: 987123456,
        address: "Delhi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Village",
        phone: 987789456,
        address: "Banglore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("outlets", null, {});
  },
};
