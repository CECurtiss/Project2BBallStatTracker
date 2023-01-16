const router = require("express").Router();
const withAuth = require("../../utils/auth");
const PlayerStats = require("../../models/playerstats");

router.get("/", withAuth, async (req, res) => {
  
      res.render("addnewplayer", {  
        user: { user_id: req.session.user_id, logged_in: req.session.logged_in },
      });
    })
    module.exports = router;