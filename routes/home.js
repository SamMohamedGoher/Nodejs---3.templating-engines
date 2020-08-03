const express = require(`express`);
const path = require(`path`);
const router = express.Router();

let data = [
  {id: 1, name: `sam`, age: 24},
  {id: 2, name: `abdo`, age: 19},
  {id: 3, name: `morad`, age: 23},
  {id: 4, name: `ahmed`, age: 35}
]

router.get(`/`, (req, res) => {
  res.render(`home`, {
    title: `ejs - home`,
    data: data
  });
});

module.exports = router;