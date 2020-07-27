const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
require('dotenv').config();
const pathToKey = path.join(__dirname, '..', 'id_rsa_priv.pem');
//const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');
const PRIV_KEY = process.env.SSH_KEY || fs.readFileSync(pathToKey, 'utf8');

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  User.associate = function (models) {
    User.belongsToMany(models.Cocktail, {
      through: 'FavoriteRecipe',
      foreignKey: 'UserId',
    });
  };

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.prototype.issueJWT = function (user) {
    const id = user.id;

    const expiresIn = '1d';

    const payload = {
      sub: id,
      iat: Date.now(),
    };

    const signedToken = jwt.sign(payload, PRIV_KEY, {
      expiresIn: expiresIn,
      algorithm: 'RS256',
    });

    return {
      token: 'Bearer ' + signedToken,
      expires: expiresIn,
    };
  };

  User.addHook('beforeCreate', function (user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
