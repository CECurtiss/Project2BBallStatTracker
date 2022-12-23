const router = require('express').Router();
const apiRoutes = require('./api');
const gameRoutes = require('./gameRoutes');
const playerRoutes = require('./playerRoutes');

router.use('/', gameRoutes)
router.use('/', playerRoutes)
router.use('/api', apiRoutes)

module.exports = router;