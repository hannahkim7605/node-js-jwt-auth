const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../model/User")

router.get('/', verify, async (req, res) => {
    // retrieves the user information using token
    const user = await User.findById(req.user._id);
    res.send(user);
    console.log(user);
});

module.exports = router;