'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'nguyentrongnhan04072000@gmail.com',
      password: '1234567890',
      firstName: 'Nguyen',
      lastName: 'Nhan',
      address: 'HCMC, Vietnam',
      gender: 1,  //0: Male || 1: Female
      typeRole: 'ROLE',
      keyRole: 'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
