module.exports = function (sequelize, DataTypes) {
  var CocktailIngredient = sequelize.define(
    'CocktailIngredient',
    {
      amount: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
<<<<<<< HEAD
=======
    },
    {
      freezeTableName: true,
      timestamps: false,
>>>>>>> f9f39b3960a2596726e3dfba23b33864a058c42d
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
