const express = require('express');
const UserDao = require("../DAOs/userDao");
const router = express.Router();


router.get('/users', async (req, res) => {
  const users = await UserDao.get();
  return users;
});

module.exports = userRouter;