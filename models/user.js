const Sequelize = require('sequelize');

const sequelize = require('../util/database');



const User = sequelize.define('user', {
    
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    username:{
        type: Sequelize.STRING,
        
    },
    email:{
        type: Sequelize.STRING,
        unique: true,
        allowNull:false
    },
    password: {
        type: Sequelize.STRING,
        
    },
    lon:{
        type:Sequelize.DOUBLE,
        allowNull:false
    },
    lat:{
        type:Sequelize.DOUBLE,
        allowNull:false
    }
   

});

module.exports = User;