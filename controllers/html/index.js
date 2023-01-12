const router = require('express').Router();
const gamePlayersRoutes = require('./gameplayers')
const homepageRoutes = require('./homepage');
const singlePlayerRoutes = require('./singleplayer')

router.use('/', homepageRoutes);
router.use('/gameplayers', gamePlayersRoutes )
router.use('/singleplayer', singlePlayerRoutes)


module.exports = router;