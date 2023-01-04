const router = require('express').Router();

const homepageRoutes = require('./homepage');
router.use('/', homepageRoutes);


module.exports = router;