module.exports = function (sequelize, DataTypes) {
  var CocktailIngredient = sequelize.define(
    'CocktailIngredient',
    {
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  CocktailIngredient.associate = function (models) {
    CocktailIngredient.belongsTo(models.Cocktail, {
      onDelete: 'cascade',
      foreignKey: {
        allowNull: false,
      },
    });

    CocktailIngredient.belongsTo(models.Ingredient, {
      onDelete: 'cascade',
      foreignKey: {
        allowNull: false,
      },
    });

    CocktailIngredient.belongsTo(models.Measure, {
      onDelete: 'cascade',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return CocktailIngredient;
};
