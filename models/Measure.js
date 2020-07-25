module.exports = function (sequelize, DataTypes) {
  var Measure = sequelize.define(
    'Measure',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Measure.associate = function (models) {
    Measure.hasMany(models.CocktailIngredient, {
      onDelete: 'cascade',
      foreignKey: 'MeasureId'
    });

    // Uncomment Below After Creating the Database

    Measure.belongsToMany(models.Cocktail, {
      through: 'CocktailIngredient',
      onDelete: 'cascade',
      foreignKey: 'MeasureId'
    });
    Measure.belongsToMany(models.Ingredient, {
      through: 'CocktailIngredient',
      onDelete: 'cascade',
      foreignKey: 'MeasureId'
    });
  };

  return Measure;
};
