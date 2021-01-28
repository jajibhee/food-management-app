const express = require("express");

const router = express.Router();

// @route GET api/contacts
// desc get all contacts for a user
// access private
router.get("/", (req, res) => {
  res.send("get all contacts for a user ");
});

// @route POST api/contacts
// desc add a contact
// access private
router.post("/", (req, res) => {
  res.send("Add a contact");
});

// @route PUT api/contacts/:id
// desc update a contact
// access private
router.put("/:id", (req, res) => {
  res.send("update a contact");
});

// @route DELETE api/contacts/:id
// desc delete a contact
// access private
router.delete("/:id", (req, res) => {
  res.send("delete a contact");
});

module.exports = router;
