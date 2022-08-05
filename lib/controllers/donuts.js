const { Router } = require('express');
const { Donut } = require('../models/Donut');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const donut = await Donut.getById(req.params.id);
      if (!donut) {
        next();
      }
      res.json(donut);
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
  })

  .put('/:id', async (req, res, next) => {
    try {
      const donut = await Donut.updateById(req.params.id, req.body);
      res.json(donut);
    } catch(e) {
      next(e);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const donut = await Donut.deleteDonut(req.params.id);
      res.json(donut);
    } catch(e) {
      next(e);
    }
  });


