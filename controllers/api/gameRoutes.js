const router = require("express").Router();
const Game = require("../../models/game");


router.get("/:id", async (req, res) => {
  try {
    const findGameData = await Game.findByPk(req.params.id, {});
    res.status(200).json(findGameData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newGame = await Game.create({
      date: req.body.date,
      season: req.body.season,
      homeTeam: req.body.homeTeam,
      awayTeam: req.body.awayTeam,
      homeScore: req.body.homeScore,
      awayScore: req.body.awayScore,
      fouls: req.body.fouls,
      turnovers: req.body.turnovers,
      rebounds: req.body.rebounds,
      steals: req.body.steals,
      blocks: req.body.blocks,
      assists: req.body.assists,
    });
    

    res.status(200).json(newGame);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const gameData = await Game.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!gameData) {
      res.status(404).json({ message: "Game Data not found" });
      return;
    }

    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
