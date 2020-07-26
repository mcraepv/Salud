const db = require('../models');
const sequelize = require('sequelize');
// const passport = require('passport');

module.exports = function (app) {
  app.post('/api/login', (req, res) => {
    db.User.findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (!user) {
          res.status(401).json({ success: false, msg: 'could not find user' });
        }
        const isValid = user.validPassword(req.body.password);

        if (isValid) {
          const tokenObj = user.issueJWT(user);

          res.status(200).json({
            success: true,
            token: tokenObj.token,
            expiresIn: tokenObj.expires,
          });
        } else {
          res.status(401).json({ success: false, msg: 'wrong password' });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.post('/api/register', (req, res) => {
    console.log(req);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(() => {
        res.status(200);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/cocktail', function (req, res) {
    console.log('called');
    db.Cocktail.findAll({
      include: [{
        model: db.CocktailIngredient,
        attributes: ['id'],
        include: [{
          model: db.Ingredient,
          attributes: ['name'],
          required: true
        },
        {
          model: db.Measure,
          attributes: [],
          required: true,
        }],
        required: true,
      }],
    }).then(function (result) {
      res.json(result);
    });
  });

  // Advanced Search
  app.get('/api/advanced-search/:ingredientids', function (req, res) {
    let selectedIngredients = req.params.ingredientids.split(',').map(id => parseInt(id));
    db.Cocktail.findAll({
      attributes: ['name'],
      include: [{
        model: db.CocktailIngredient,
        attributes: [],
        include: [{
          model: db.Ingredient,
          attributes: [],
          required: true
        }],
        required: true
      }],
      where: {
        '$CocktailIngredients->Ingredient.id$': selectedIngredients
      },
      group: ['Cocktail.name'],
      having: sequelize.literal('count(Cocktail.name) =' + selectedIngredients.length)
    }).then(function (result) {
      res.json(result);
    });
  });

  // Cocktail Search
  app.get('/api/cocktail-search/:cocktail', function (req, res) {
    db.Cocktail.findAll({
      attributes: ['id', 'name', 'imageUrl'],
      where: {
        'name': {
          [sequelize.Op.like]: req.params.cocktail + '%'
        }
      }
    }).then(function (result) {
      res.json(result);
    });
  });

  // Results Page
  app.get('/api/results/:cocktail', function (req, res) {
    db.Cocktail.findAll({
      attributes: ['name', 'instructions', 'imageUrl'],
      include: [{
        model: db.CocktailIngredient,
        attributes: ['amount'],
        include: [{
          model: db.Ingredient,
          attributes: ['name'],
          required: true
        },
        {
          model: db.Measure,
          attributes: ['name'],
          required: true,
        }],
        required: true,
      }],
      where: {
        'name': req.params.cocktail
      }
    }).then(function (result) {
      res.json(result);
    });
  });

  // Add Favorite Cocktail
  app.post('api/favorite', function (req, res) {
    db.FavoriteRecipe.create({
      CocktailId: req.body.CocktailId,
      UserId: req.body.UserId
    })
      .then(() => {
        res.status(200);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  // Remove Favorite Cocktail
  app.delete('api/favorite/:CocktailId', function (req, res) {
    db.FavoriteRecipe.destroy({
      where: {
        CocktailId: parseInt(req.params.CocktailId),
        UserId: req.body.UserId
      }
    })
      .then(() => {
        res.status(200);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });
};
