const router = require('express').Router();
const apiRoutes = require('./api');
const gameRoutes = require('./gameRoutes');
const playerRoutes = require('./playerRoutes');
const userRoutes = require('./userRoutes');

router.use('/', gameRoutes)
router.use('/', playerRoutes)
router.use('/api', apiRoutes)
router.use('/', userRoutes)

module.exports = router;