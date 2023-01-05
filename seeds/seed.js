const sequalize = require('../config/connection');


const seedAll = async () => {
    await sequalize.sync({ force: true });
    console.log('Database synced!');
    process.exit(0);
};

seedAll();