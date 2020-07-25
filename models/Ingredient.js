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
    Ingredient.hasMany(models.CocktailIngredient, {
      onDelete: 'cascade',
      foreignKey: 'IngredientId',
    });

    // Uncomment Below After Creating the Database
    Ingredient.belongsToMany(models.Cocktail, {
      through: 'CocktailIngredient',
      onDelete: 'cascade',
      foreignKey: 'IngredientId',
    });
    Ingredient.belongsToMany(models.Measure, {
      through: 'CocktailIngredient',
      onDelete: 'cascade',
<<<<<<< HEAD
      foreignKey: 'IngredientId'
=======
      foreignKey: 'IngredientId',
>>>>>>> f9f39b3960a2596726e3dfba23b33864a058c42d
    });
  };

  return Ingredient;
};
