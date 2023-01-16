const router = require("express").Router();
const Playerbio  = require("../../models/playerbio");
    


router.post("/", async (req, res) => {
  try {
    const playerData = await Playerbio.create({
      name: req.body.newPlayerName,
      position: req.body.newPlayerPosition,
      age: req.body.newPlayerAge,
      height: req.body.newPlayerHeight,
      weight: req.body.newPlayerWeight,
      college: req.body.newPlayerCollege,
  });
      res.status(200).json(playerData);
  } catch (err) {
    console.error(err)
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
