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
  })
  
  .get('/:id', async (req, res, next) => {
    try {
      const energy = await Energy.getById(req.params.id);
      res.json(energy);
    } catch(e) {
      next(e);
    }
  })
  
  .post('/', async (req, res, next) => {
    try {
      const energy = await Energy.insert(req.body);
      res.json(energy);
    } catch(e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const energy = await Energy.updateById(req.params.id, req.body);
      res.json(energy);
    } catch(e) {
      next(e);
    }
  })
;
