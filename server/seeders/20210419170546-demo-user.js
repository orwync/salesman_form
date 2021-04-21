"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "John",
        phone: 9876543215,
        rep_manager: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jane",
        phone: 9876543214,
        rep_manager: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bruce",
        phone: 9876543216,
        rep_manager: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Clark",
        phone: 9876543214,
        rep_manager: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Barry",
        phone: 9874758963,
        rep_manager: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
