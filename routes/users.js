const { genSalt } = require("bcrypt");
const express = require("express");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const router = express.Router();

const User = require("../models/User");

// @route POST api/users
// desc register a user
// access public
router.post(
  "/",
  [
    check("name", "Please add a name").not().isEmpty(),
    check("email", "Add a valid email address").isEmail(),
    check(
      "password",
      "Please add a password with six or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Let's hashh passwords
    const { name, email, password } = req.body;

    try {
      //check if user exists
      let user = await User.findOne({ email: email });

      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      user = new User({
        name,
        email,
        password,
      });

      //hash password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      res.send("User saved");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
