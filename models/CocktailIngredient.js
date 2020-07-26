module.exports = function (sequelize, DataTypes) {
  const CocktailIngredient = sequelize.define(
    'CocktailIngredient',

    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  CocktailIngredient.associate = function (models) {
    CocktailIngredient.belongsTo(models.Cocktail);
    CocktailIngredient.belongsTo(models.Ingredient);
    // models.Cocktail.belongsToMany(models.Ingredient, {
    //   through: 'CocktailIngredient',
    //   foreignKey: 'cocktail_id',
    // });
    // models.Ingredient.belongsToMany(models.Cocktail, {
    //   through: 'CocktailIngredient',
    //   foreignKey: 'ingredient_id',
    // });
    //   //   // CocktailIngredient.belongsTo(models.Cocktail, {
    //   //   //   onDelete: 'cascade',
    //   //   //   foreignKey: {
    //   //   //     allowNull: false,
    //   //   //   },
    //   //   // });
    //   //   // CocktailIngredient.belongsTo(models.Ingredient, {
    //   //   //   onDelete: 'cascade',
    //   //   //   foreignKey: {
    //   //   //     allowNull: false,
    //   //   //   },
    //   //   // });
    //   //   // CocktailIngredient.belongsTo(models.Measure, {
    //   //   //   onDelete: 'cascade',
    //   //   //   foreignKey: {
    //   //   //     allowNull: false,
    //   //   //   },
    //   //   // });
  };

  return CocktailIngredient;
};
