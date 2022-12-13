const seedPosts = require('./postData');
const seedUsers = require('./userData');
const seedComments = require('./commentData');
const seedGenres = require('./genreData');
const seedGames = require('./gameData');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedGenres(); // Works

    await seedGames();

    // await seedUsers(); // Works

    // await seedPosts();

    // await seedComments();

    process.exit(0);
};

seedAll();