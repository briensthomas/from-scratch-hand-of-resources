const { Router } = require('express');
const { Oatmealbar } = require('../models/Oatmealbar');


module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const oatmealbar = await Oatmealbar.getById(req.params.id);
      res.json(oatmealbar);
    } catch(error) {
      next(error);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const oatmealbar = await Oatmealbar.getAll();
      res.json(oatmealbar);
    } catch(error) {
      next(error);
    }
  })
  
  .post('/', async (req, res, next) => {
    try {
      const oatmealbar = await Oatmealbar.insert(req.body);
      res.json(oatmealbar);
    } catch(error) {
      next(error);
    }
  })
;
