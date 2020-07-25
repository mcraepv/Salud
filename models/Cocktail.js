module.exports = function (sequelize, DataTypes) {
  var Cocktail = sequelize.define(
    'Cocktail',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Cocktail.associate = function (models) {
    Cocktail.belongsToMany(models.Ingredient, {
      through: 'CocktailIngredient',
      onDelete: 'cascade',
      foreignKey: 'CocktailId'
    });
    Cocktail.belongsToMany(models.Measure, {
      through: 'CocktailIngredient',
      onDelete: 'cascade',
      foreignKey: 'CocktailId'
    });
    Cocktail.belongsToMany(models.User, {
      through: 'FavoriteRecipe',
      onDelete: 'cascade',
      foreignKey: 'CocktailId'
    });
  };

  return Cocktail;
};
