const router = require("express").Router();
const Game = require("../../models/game");

router.get("/", async (req, res) => {
  try {
  const allGames = await Game.findAll()
   
    res.render('homepage')
  } catch {
    res.status(500).json(err);
}});

router.get("/:id", async (req, res) => {
  try {
    const findGameData = await Game.findByPk(req.params.id, {
      
    });
    const gameData = findGameData.get({ plain: true });
    res.render("playerstats", { gameData });
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
        user_id: req.session.user_id,
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
