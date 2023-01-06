const router = require('express').Router();
const gameRoutes = require('./gameRoutes');
const playerRoutes = require('./playerRoutes');
const userRoutes = require('./userRoutes');
const singlePlayerRoutes = require('./playerBioRoute')

router.use('/gamestats', gameRoutes)
router.use('/playerstats', playerRoutes)
router.use('/users', userRoutes)
router.use('/singleplayer', singlePlayerRoutes)

module.exports = router;