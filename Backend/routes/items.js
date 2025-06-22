const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// GET all items
router.get('/', async (req, res) => {
  const items = await Item.find().sort({ createdAt: -1 });
  res.json(items);
});

// POST a new item
router.post('/', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json({ message: 'Item saved', item: newItem });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
