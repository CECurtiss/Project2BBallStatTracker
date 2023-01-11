const router = require("express").Router();
const withAuth = require("../../utils/auth");
const Game = require("../../models/game");

router.get("/", withAuth, async (req, res) => {
  const allGames = await Game.findAll()
  const games = allGames.map((game) => game.get({ plain: true }));
  res.render("homepage", { games, 
    user: { user_id: req.session.user_id, logged_in: req.session.logged_in },
  });
});

router.get("/login", (req, res) => {
  res.render("login");
});
module.exports = router;
