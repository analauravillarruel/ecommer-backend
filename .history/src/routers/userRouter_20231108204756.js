const express = require('express');
const router = express.Router();
const UserDao = require("../DAOs/userDao");

router.get('/', (req, res) => {
  let result = await userModel.find();
  res.send({ status:"success", payload:result });
});

module.exports = userRouter;