const router = require("express").Router();
const withAuth = require("../../utils/auth");
const PlayerStats = require("../../models/playerstats");
const PlayerBio = require("../../models/playerbio");

router.get("/:id", withAuth, async (req, res) => {
  const gamePlayers = await PlayerStats.findAll({
    where: {
      player_id: req.params.id,
    },
  });
  const allGamePlayers = gamePlayers.map((aGPlayers) =>
    aGPlayers.get({ plain: true })
  );

  const bioPlayer = await PlayerBio.findOne({
    where: {
      id: req.params.id,
    },
    raw: true
  })
console.log(bioPlayer)
console.log(allGamePlayers)
  res.render("singleplayer", { bioPlayer,
    allGamePlayers,
    user: { user_id: req.session.user_id, logged_in: req.session.logged_in },
  });
});
module.exports = router;
