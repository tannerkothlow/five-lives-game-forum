const seedPosts = require('./postData');
const seedUsers = require('./userData');
const seedComments = require('./commentData');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequalize.sync({ force: true });

    await seedUsers();

    await seedPosts();

    await seedComments();

    process.exit(0);
};

seedAll();