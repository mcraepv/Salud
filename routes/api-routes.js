const db = require('../models');
const sequelize = require('sequelize');
const passport = require('passport');

require('../config/passport')(passport);

module.exports = function (app) {
  //Auth
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
            email: user.email,
            id: user.id,
          });
        } else {
          res.status(401).json({ success: false, msg: 'wrong password' });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.get('/api/cocktail', function (req, res) {
    db.Cocktail.findAll({}).then(function (result) {
      res.json(result);
    });
  });

  app.get('/api/ingredient', function (req, res) {
    db.Ingredient.findAll({}).then(function (result) {
      res.json(result);
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

  //Home Page
  app.get('/api/random', function (req, res) {
    const randomArr = [];
    while (randomArr.length < 8) {
      const random = Math.floor(Math.random() * Math.floor(51)) + 1;
      if (randomArr.indexOf(random) === -1) {
        randomArr.push(random);
      }
    }
    const randomQuery = [];
    randomArr.forEach((num) => {
      randomQuery.push({ id: num });
    });
    db.Cocktail.findAll({
      where: {
        [sequelize.Op.or]: randomQuery,
      },
    }).then(function (results) {
      res.json(results);
    });
  });

  //New Advanced search query
  app.get('/api/advanced-search/:ingredients', function (req, res) {
    const selectedIngredients = req.params.ingredients.split(',');
    const queryParams = [];
    selectedIngredients.forEach((ing) => {
      queryParams.push({ ingredientId: ing });
    });
    db.CocktailIngredient.findAll({
      include: [db.Ingredient, db.Cocktail],
      where: {
        [sequelize.Op.or]: queryParams,
      },
    }).then(function (results) {
      const cocktails = {};
      const count = {};
      results.forEach((result) => {
        const cocktail = result.Cocktail;
        if (!cocktails[cocktail.name]) {
          cocktails[cocktail.name] = {
            name: cocktail.name,
            id: cocktail.id,
            instructions: cocktail.instructions,
            imageUrl: cocktail.imageUrl,
            source: cocktail.source,
          };
        }
        if (count[cocktail.name]) {
          count[cocktail.name] += 1;
        } else {
          count[cocktail.name] = 1;
        }
      });
      for (cocktail in count) {
        if (count[cocktail] < selectedIngredients.length) {
          delete cocktails[cocktail];
        }
      }
      const final = [];
      for (cocktail in cocktails) {
        final.push(cocktails[cocktail]);
      }
      res.send(final);
    });
  });

  // Cocktail Search
  app.get('/api/cocktail-search/:cocktail', function (req, res) {
    db.Cocktail.findAll({
      attributes: ['id', 'name', 'imageUrl'],
      where: {
        name: {
          [sequelize.Op.like]: req.params.cocktail + '%',
        },
      },
    }).then(function (result) {
      res.json(result);
    });
  });

  // Recipe Page
  app.get('/api/results/:cocktail', function (req, res) {
    db.Cocktail.findAll({
      attributes: ['name', 'instructions', 'imageUrl', 'source', 'id'],
      include: [
        {
          model: db.CocktailIngredient,
          attributes: ['amount'],
          include: [
            {
              model: db.Ingredient,
              attributes: ['name', 'measure'],
              required: true,
            },
          ],
          required: true,
        },
      ],
      where: {
        name: req.params.cocktail,
      },
    })
      .then(function (result) {
        console.log(result);
        res.json(result);
      })
      .catch((err) => {
        throw err;
      });
  });

  // User Favorite Cocktail
  app.get('/api/favorites/:username', (req, res) => {
    console.log(req);
    db.Cocktail.findAll({
      attributes: ['name', 'instructions', 'imageUrl'],
      include: [
        {
          model: db.User,
          attributes: [],
          required: true,
        },
      ],
      where: {
        '$Users.email$': req.params.username,
      },
    }).then(function (result) {
      if (result) {
        res.json(result);
      } else res.send('No favorites');
    });
  });

  // Add Favorite Cocktail
  app.post('/api/favorite', function (req, res) {
    db.FavoriteRecipe.create({
      CocktailId: req.body.cocktailID,
      UserId: req.body.userID,
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
        UserId: req.body.UserId,
      },
    })
      .then(() => {
        res.status(200);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });
};
