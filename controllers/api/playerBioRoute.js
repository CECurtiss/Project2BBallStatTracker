const router = require("express").Router();
const Playerbio  = require("../../models/playerbio");
const PlayerStats = require("../../models/playerStats")

router.get("/:id", async (req, res) => {
  const getPlayer = await Playerbio.findOne({
    where: {
      id: req.params.id,
    }},{
      include: [
        {
          model: PlayerStats,
          attributes: [
            'points',
            'rebounds',
            'assists',
            'steals',
            'turnovers',
            'blocks',
            "personalFouls",
          ]
        }
      ]
    })
    const allGames = await PlayerStats.findAll().catch((err) => {
      res.json(err);
    });
    const games = allGames.map((game) => game.get({ plain: true }));
  
   
    const player = getPlayer.get({ plain: true })
    res.render('singleplayer', { player, games })
  });
    


router.post("/", async (req, res) => {
  try {
    const playerData = await Playerbio.create(req.body);

    req.session.save(() => {
      req.session.user_id = playerData.id;
      req.session.logged_in = true;

      res.status(200).json(playerData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", (req, res) => {
  Playerbio.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedPlayerbio) => {
      res.json(deletedPlayerbio);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
