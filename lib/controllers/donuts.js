const { Router } = require('express');
const { Donut } = require('../models/Donut');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const donuts = await Donut.getAll();
      res.json(donuts);
    } catch(e) {
      next(e);
    }

  });
