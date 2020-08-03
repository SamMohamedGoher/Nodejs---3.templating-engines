const express = require(`express`);
const path = require(`path`);
const router = express.Router();

router.get(`/404`, (req, res) => {
  res
    .status(404)
    .render(`404`, {
      title: `ejs - 404`
    });
});

module.exports = router;