// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get('/api/cocktail', function(req, res) {
    db.Cocktail.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  app.get('/api/ingredient', function(req, res) {
    db.Ingredient.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  app.get('/api/measure', function(req, res) {
    db.Measure.findAll({}).then(function(result) {
      res.json(result);
    });
  });
};
