const User = require("../Models/User");
const jwt = require("jsonwebtoken");
require("../middleware/passport");

genToken = (user) => {
  return jwt.sign(
    {
      iss: "wael&&@rous",
      sub: user.id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1),
    },
    "wael&&@rous"
  );
};
const authController = {
  register: async (req, res, next) => {
    const { email, password } = req.body;
    let foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(403).json({ error: "Email is already in use" });
    }
    const newUser = new User({ email, password });
    await newUser.save();
    const token = genToken(newUser);
    res.status(200).json({ token });
  },
};

module.exports = authController;
