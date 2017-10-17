const tvShowService = require('./tvShowService');
const express = require('express');
const TvShow = require('./TvShow');

const tvShowRouter = express.Router();

tvShowRouter.get('/', (req, res) => {
  res.json(tvShowService.getAll());
});

tvShowRouter.route('/:tvShowId').get((req, res) => {
  const tvShowId = req.params.tvShowId;
  console.log(`Fetching TV Show with id: {${tvShowId}}`);
  res.send(tvShowService.getById(tvShowId));
});


module.exports = tvShowRouter;
