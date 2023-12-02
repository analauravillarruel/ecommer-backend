const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const user = require("../DAOs/userDao");

const express = require('express');
const router = express.Router();

// Aquí puedes agregar tus endpoints, como:
router.get('/', (req, res) => {
    // Por ejemplo, devolver una lista de contactos.
    res.json({ message: "Lista de contactos" });
});

router.post('/', (req, res) => {
    // Por ejemplo, añadir un nuevo contacto.
    res.json({ message: "Contacto añadido" });
});

// ... otros endpoints como PUT, DELETE, etc.

module.exports = router;

router.get('/users', async (req, res) => {
  const users = await UserDao.getAll();
  return users;
});

module.exports = router;