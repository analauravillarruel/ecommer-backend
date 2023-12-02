const express = require('express');
const router = express.Router();
const UserDao = require("../DAOs/userDao");

router.get('/', (req, res) => {
  let result = await userServicesDataBase.get();
  res.send({ statu });
});

module.exports = userRouter;