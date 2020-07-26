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
      measure: {
        type: DataTypes.STRING,
        allowNull: false,
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
    });
    Ingredient.hasMany(models.CocktailIngredient);
  };
  return Ingredient;
};
