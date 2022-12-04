'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'nguyentrongnhan04072000@gmail.com',
      password: '1234567890',
      firstName: 'Nguyen',
      lastName: 'Nhan',
      address: 'HCMC, Vietnam',
      phoneNumber: '0356035625',
      gender: 1,  //0: Male || 1: Female
      image: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-1/290177127_722246912360977_9066319937003930434_n.jpg?stp=c179.0.972.972a_dst-jpg_s160x160&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=OfJqyksaVfYAX_E5e07&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDZWbNVgsykfkvAF2GZknk4HmO4jsTeShvsy0fu6f5C0g&oe=6391DBCE',
      roleId: 'R1',
      positionId: 'P1',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
