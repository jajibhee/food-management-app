const express = require("express");

const router = express.Router();

// @route get api/auth
// desc get logged in  user
// access private

router.get("/", (req, res) => {
  res.send(" Get logged in user");
});

// @route post api/auth
// desc authenticate the user and get token
// access public

router.post("/", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
