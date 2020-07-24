<<<<<<< HEAD
module.exports = function (sequelize, DataTypes) {
  var CocktailIngredient = sequelize.define('CocktailIngredient', {
=======
var CocktailIngredient = sequelize.define('CocktailIngredient', {
>>>>>>> 9cd1771d170ab0c3d64d99b8ffe34480a7c35da2
    amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  return CocktailIngredient;
};
