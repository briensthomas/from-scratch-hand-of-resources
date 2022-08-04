const { Router } = require('express');
const { Coffee } = require('../models/Coffee');

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
      const coffee = await Coffee.getAll();
      res.json(coffee);
    } catch(e) {
      next(e);
    }
  });
