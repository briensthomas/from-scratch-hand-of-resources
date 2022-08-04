const { Router } = require('express');
const { Donut } = require('../models/Donut');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      res.json();
    } catch(e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const donuts = await Donut.getAll();
      res.json(donuts);
    } catch(e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const donut = await Donut.insert(req.body);
      res.json(donut);
    } catch(e) {
      next(e);
    }
  });

