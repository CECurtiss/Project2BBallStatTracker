const router = require('express').Router();
const gamePlayersRoutes = require('./gameplayers')
const homepageRoutes = require('./homepage');

router.use('/', homepageRoutes);
router.use('/gameplayers', gamePlayersRoutes )


module.exports = router;