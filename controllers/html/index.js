const router = require('express').Router();
const gamePlayersRoutes = require('./gameplayers')
const homepageRoutes = require('./homepage');
const singlePlayerRoutes = require('./singleplayer')
const addGameRoutes = require('./addgame')
const createNewPlayerRoutes = require ('./createnewplayer')
const addPlayerStatsRoutes = require('./addplayerstats')
const allPlayersRoute = require('./allplayers')

router.use('/', homepageRoutes);
router.use('/gameplayers', gamePlayersRoutes )
router.use('/singleplayer', singlePlayerRoutes)
router.use('/addgame', addGameRoutes)
router.use('/createnewplayer', createNewPlayerRoutes)
router.use('/addplayerstats', addPlayerStatsRoutes)
router.use('/allplayers', allPlayersRoute)


module.exports = router;