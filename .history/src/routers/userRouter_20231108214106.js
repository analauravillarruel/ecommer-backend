const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const userDao = require("../DAOs/userDao");

const userDao = new UserDao()

router.get('/users', async (req, res) => {
  const users = await UserDao.getAll();
  return users;
});

module.exports = router;