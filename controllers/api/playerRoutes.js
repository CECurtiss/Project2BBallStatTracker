const router = require("express").Router();
const PlayerStats = require("../../models/playerstats");

router.get("/", async (req, res) => {
  const allPlayerStats = await PlayerStats.findAll()
  res.status(200).json(allPlayerStats)
})

router.post("/", async (req, res) => {
  try {
    const newPlayer = await PlayerStats.create({
      player_id: req.body.statsPlayerId,
      firstName: req.body.statsFirstName,
      lastName: req.body.statsLastName,
      gameId: req.body.statsGameId,
      points: req.body.statsPtScored,
      rebounds: req.body.statsRebounds,
      assists: req.body.statsAssists,
      steals: req.body.statsSteals,
      turnovers: req.body.statsTurnovers,
      blocks: req.body.statsBlocks,
      personalFouls: req.body.statsFouls,
    });

    res.status(200).json(newPlayer);
  } catch (err) {
    console.error(err)
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const playerData = await PlayerStats.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!playerData) {
      res.status(404).json({ message: "Player not found" });
      return;
    }

    res.status(200).json(playerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
