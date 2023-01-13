const sequelize = require('../config/connection');
const { User, Game, PlayerStats, Playerbio } = require('../models')


const gameSeedData = require('./gameSeeds.json')
const playerBioSeedData = require('./playerbioseeds.json')
const playerStatSeedData = require('./playerstatsseeds.json')

const newUserData = [
    {
        "username": "kcwolf",
        "email": "kcwolf@google.com",
        "password": "Robbinbanks"
    }
]

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(newUserData)
    
    await Playerbio.bulkCreate(playerBioSeedData)
    
    await Game.bulkCreate(gameSeedData)
    
    await PlayerStats.bulkCreate(playerStatSeedData)
    console.log('Database synced!');
    process.exit(0);
};

seedAll();