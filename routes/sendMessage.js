const express = require(`express`);
const path = require(`path`);
const { Router } = require("express");
const router = express.Router();

router.get(`/sendMessage`, (req, res, next) => {
  res.render(`sendMessage`, {
    title: `ejs - sendMessage`
  });
});

router.post(`/sendMessage`, (req, res) => {
  const message = req.body.message;
  console.log(message);
  res.redirect(`/`);
});

module.exports = router;