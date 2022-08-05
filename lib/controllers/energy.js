const { Router } = require('express');
const { Energy } = require('../models/Energy');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const energy = await Energy.getAll();
      res.json(energy);
    } catch(e) {
      next(e);
    }
  });
