const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const UserDao = require("../DAOs/userDao");



router.get('/users', async (req, res) => {
  const users = await UserDao.getAll();
  return users;
});

model.ex