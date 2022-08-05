const { Router } = require('express');
const { Smoothie } = require('../models/Smoothie');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const smoothie = await Smoothie.getById(req.params.id);
      res.json(smoothie);
    } catch(e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const smoothie = await Smoothie.getAll();
      res.json(smoothie);
    } catch(e) {
      next(e);
    }

  })

  .post('/', async (req, res, next) => {
    try {
      const smoothie = await Smoothie.insert(req.body);
      res.json(smoothie);
    } catch(e) {
      next(e);
    }
  })
;
