const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("template", {});
});

module.exports = router;
