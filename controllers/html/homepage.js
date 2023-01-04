const router = require("express").Router();
const withAuth = require("../../utils/auth");

router.get("/", withAuth, (req, res) => {
  res.render("homepage", {
    user: { user_id: req.session.user_id, logged_in: req.session.logged_in },
  });
});
router.get("/login", (req, res) => {
  res.render("login");
});
module.exports = router;
