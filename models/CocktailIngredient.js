var CocktailIngredient = sequelize.define('CocktailIngredient', {
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
