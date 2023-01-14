const router = require("express").Router();
const Playerbio  = require("../../models/playerbio");
    


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
