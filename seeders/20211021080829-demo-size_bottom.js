'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Size_bottoms', [
      {
        id: 1,
        product_id: 5,
        size: 'M',
        waist: '70~78',
        hip: 105,
        rise: 32.5,
        inseam: 68,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        product_id: 5,
        size: 'L',
        waist: '73~82',
        hip: 108,
        rise: 33.5,
        inseam: 70,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        product_id: 10,
        size: 'M',
        waist: '74~82',
        hip: 110,
        rise: 30,
        inseam: 70,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        product_id: 10,
        size: 'L',
        waist: '80~96',
        hip: 118,
        rise: 34,
        inseam: 74,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Size_bottoms', null, {});
  }
};
