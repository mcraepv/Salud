const db = require('../models');
const sequelize = require('sequelize');
// const passport = require('passport');

module.exports = function (app) {
  app.post('/api/login', (req, res) => {
    console.log(req.body);
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
    db.Cocktail.findAll({
      include: [db.Ingredient, db.Measure],
    }).then(function (result) {
      res.json(result);
    });
  });

  app.get('/recipe/:cocktailname', function (req, res) {
    db.Cocktail.findOne({
      include: [db.Ingredient, db.Measure],
      where: {
        name: req.params.cocktailname,
      },
    }).then(function (result) {
      res.json(result);
    });
  });

  app.get('/api/ingredient', function (req, res) {
    db.Ingredient.findAll({}).then(function (result) {
      res.json(result);
    });
  });

  app.get('/api/measure', function (req, res) {
    db.Measure.findAll({}).then(function (result) {
      res.json(result);
    });
  });

  // Results Page
  app.get('/api/advanced-search/:cocktail', function (req, res) {
    let selectedCategories = [];
    const hasCategories = selectedCategories.length === 0;
    db.Cocktail.findAll({
      attributes: ['id', 'name', 'imageUrl'],
      include: [db.Ingredient, db.Measure],
      where: {
        name: {
          [sequelize.Op.like]: req.params.cocktail + '%',
        },
        [sequelize.Op.or]: [
          { '$Ingredients.category$': selectedCategories },
          sequelize.literal('TRUE = ' + hasCategories),
        ],
      },
    }).then(function (result) {
      res.json(result);
    });
  });
};
