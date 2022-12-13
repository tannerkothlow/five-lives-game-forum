const { Game } = require('../models');

const gameData = [
    {
        title: "Test Game",
        description: "Placeholder game until the feature is complete",
        year: 2000,
        genre_id: 1,
    }
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;