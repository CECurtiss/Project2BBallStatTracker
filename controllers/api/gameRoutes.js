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
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newGame);
  } catch (err) {
    res.status(400).json(err);
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
