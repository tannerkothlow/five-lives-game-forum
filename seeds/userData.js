const sequelize = require('../config/connection');
const {User} = require('../models');

const userData =[
    {
        "name": "Derek",
        "email": "derek18@gmail.com",
        "password": "password123"
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;