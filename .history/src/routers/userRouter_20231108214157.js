const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const user = require("../DAOs/userDao");

const user = new UserDao()

router.get('/users', async (req, res) => {
  const users = await UserDao.getAll();
  return users;
});

module.exports = router;