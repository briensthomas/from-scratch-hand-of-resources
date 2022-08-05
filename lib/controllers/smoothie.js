const { Router } = require('express');
const { Smoothie } = require('../models/Smoothie');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const smoothie = await Smoothie.getAll();
      res.json(smoothie);
    } catch(e) {
      next(e);
    }
  });
