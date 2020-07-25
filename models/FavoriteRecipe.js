module.exports = function (sequelize) {
  var FavoriteRecipe = sequelize.define('FavoriteRecipe', {
  }, {
    freezeTableName: true,
    timestamps: false
  });

  return FavoriteRecipe;
};