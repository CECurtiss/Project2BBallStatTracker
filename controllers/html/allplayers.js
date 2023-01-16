const router = require("express").Router();
const withAuth = require("../../utils/auth");
const PlayerBio = require('../../models/playerbio')

router.get("/", withAuth, async (req, res) => {
    const findAllPlayersBio = await PlayerBio.findAll()

    const allPlayers = findAllPlayersBio.map((allPlayersBio) => allPlayersBio.get({ plaine: true }))
  
    res.render("allplayers", {  allPlayers,
      user: { user_id: req.session.user_id, logged_in: req.session.logged_in },
    });
  })
  module.exports = router;