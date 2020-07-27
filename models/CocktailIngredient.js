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
        allowNull: true
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  CocktailIngredient.associate = function (models) {
    CocktailIngredient.belongsTo(models.Cocktail);
    CocktailIngredient.belongsTo(models.Ingredient);
  };

  return CocktailIngredient;
};
