module.exports = function (sequelize, DataTypes) {
  var Ingredient = sequelize.define(
    'Ingredient',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Other',
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Ingredient.associate = function (models) {
    Ingredient.belongsToMany(models.Cocktail, {
      through: 'CocktailIngredient',
      onDelete: 'cascade',
      foreignKey: 'IngredientId'
    });
    Ingredient.belongsToMany(models.Measure, {
      through: 'CocktailIngredient',
      onDelete: 'cascade',
      foreignKey: 'IngredientId'
    });
  };

  return Ingredient;
};
