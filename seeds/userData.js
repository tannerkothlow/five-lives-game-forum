// const sequelize = require('../config/connection');
const {User} = require('../models');

const userData =[
    {
        username: "Derek",
        email: "derek18@gmail.com",
        password: "password123"
    },
    {
        username: "Bob",
        email: "BobbyBob@gmail.com",
        password: "Bobbyismyrealname"   
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;