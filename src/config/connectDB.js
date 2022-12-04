const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nhannt', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Ket noi DB thanh cong!');
      } catch (error) {
        console.error('Khong the ket noi den DB,. Vui long kiem tra:', error);
      }
}

module.exports = connectDB