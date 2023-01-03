const router = require('express').Router();
const gameRoutes = require('./gameRoutes');
const playerRoutes = require('./playerRoutes');
const userRoutes = require('./userRoutes');

router.use('/gamestats', gameRoutes)
router.use('/playerstats', playerRoutes)
router.use('/users', userRoutes)

module.exports = router;