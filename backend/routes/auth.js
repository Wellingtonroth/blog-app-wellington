const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Register
router.post("/registrar", async(req, res) => {
  try{

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    })

    const user = await newUser.save();
    res.status(200).json(user);
  } catch(err) {
    res.status(500).json(err);
  }
})
//Login
// 29:55  https://www.youtube.com/watch?v=OML9f6LXUUs
module.exports = router;