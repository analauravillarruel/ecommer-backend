const express = require('express');
const router = express.Router();
const 



router.get('/users', async (req, res) => {
  const users = await UserDao.getAll();
  return users;
});

module.exports = router;