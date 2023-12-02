const express = require('express');
const router = express.Router();
const userDao= require("../DAOs/userDao")



router.get('/users', async (req, res) => {
  const users = await UserDao.getAll();
  return users;
});

module.exports = router;