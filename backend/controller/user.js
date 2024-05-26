const express = require("express");
const User = require("../model/user");
const router = express.Router();
const ErrorHandler = require("../utils/ErrorHandler");

// create user
router.post("/create-user", async (req, res, next) => {
  const { name, email, password, avatar } = req.body;
  const userEmail = await User.findOne({ email });

  if (userEmail) {
    return next(new ErrorHandler("User already exists", 400));
  }

  const filename = req.file.filename;
  const fileUrl = path.join(filename);

  const user = {
    name: name,
    email: email,
    password: password,
    avatar: fileUrl,
  };
  console.log(user);
});

module.exports = router;
