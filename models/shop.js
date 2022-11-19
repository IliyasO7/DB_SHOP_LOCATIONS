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
    lon:{
        type: Sequelize.DOUBLE,
        allowNull:false
    },
    lat:{
        type:Sequelize.DOUBLE,
        allowNull:false
    }

   
});

module.exports = Shop;