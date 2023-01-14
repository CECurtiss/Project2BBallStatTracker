const router = require('express').Router();
const gamePlayersRoutes = require('./gameplayers')
const homepageRoutes = require('./homepage');
const singlePlayerRoutes = require('./singleplayer')
const addGameRoutes = require('./addgame')

router.use('/', homepageRoutes);
router.use('/gameplayers', gamePlayersRoutes )
router.use('/singleplayer', singlePlayerRoutes)
router.use('/addgame', addGameRoutes)


module.exports = router;