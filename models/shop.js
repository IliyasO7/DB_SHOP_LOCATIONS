const Sequelize = require('sequelize');

const sequelize = require('../util/database');



const Shop = sequelize.define('shop', {
    
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    shopName:{
        type:Sequelize.STRING,
    
    },
    shopLocation:{
        type: Sequelize.STRING,
        allowNull:false
    },

   
});

module.exports = Shop;