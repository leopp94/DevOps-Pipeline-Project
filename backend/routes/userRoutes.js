const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;
