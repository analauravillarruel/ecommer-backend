const express = require('express');
const router = express.Router();
const UserDao= require("../DAOs/userDao")



router.get('/users', async (req, res) => {
  const users = await UserDao();
  return users;
});

module.exports = router;