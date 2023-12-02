const express = require('express');
import { Router } from 'express';
const UserDao = require("../DAOs/userDao");
const router = express.Router();


router.get('/users', async (req, res) => {
  const users = await UserDao.getAll();
  return users;
});

module.exports = userRouter;