const { Genre } = require('../models');

const genreData = [
    {
        name: 'Sandbox',
        description: '',
    },
    {
        name: 'RTS',
        description: 'Real-time strategy',
    },
    {
        name: 'FPS',
        description: 'First person shooter.',
    },
    {
        name: 'TPS',
        description: 'Third person shooter.',
    },
    {
        name: 'MOBA',
        description: 'Multiplayer online battle arena.',
    },
    {
        name: 'RPG',
        description: 'General role-playing game',
    },
    {
        name: 'WRPG',
        description: 'Western role-playing game. (Ex. Fallout series)',
    },
    {
        name: 'JRPG',
        description: 'Japanese role-playing game. (Ex. Final Fantasy series)',
    },
    {
        name: 'Sports',
        description: '',
    },
    {
        name: 'Party',
        description: '',
    },
    {
        name: 'Simulation',
        description: '',
    },
    {
        name: 'Action Adventure',
        description: '',
    },
    {
        name: 'Horror',
        description: '',
    },
    {
        name: 'Survival',
        description: '',
    },
    {
        name: 'Platformer',
        description: '',
    }
];

const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = seedGenres;