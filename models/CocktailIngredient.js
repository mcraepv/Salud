module.exports = function (sequelize, DataTypes) {
  var CocktailIngredient = sequelize.define(
    'CocktailIngredient',
    {
      amount: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      CocktailId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      IngredientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      MeasureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return CocktailIngredient;
};
