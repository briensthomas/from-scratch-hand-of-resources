const { Router } = require('express');
const { Oatmealbar } = require('../models/Oatmealbar');


module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const oatmealbar = await Oatmealbar.getAll();
      res.json(oatmealbar);
    } catch(error) {
      next(error);
    }
  })
  
;
