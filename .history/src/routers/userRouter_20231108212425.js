const express = require('express');
const { Router } = require ('express');
const UserDao = require("../DAOs/userDao");
const router = express.Router();


router.get('/users', async (req, res) => {
  const users = await UserDao.getAll();
  return users;
});

module.exports = userRouter;