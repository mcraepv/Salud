module.exports = function (sequelize, DataTypes) {
  var Cocktail = sequelize.define('Cocktail', {
    freezeTableName: true,
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    freezeTableName: true,
  });

  Cocktail.associate = function (models) {

    Cocktail.hasMany(models.CocktailIngredient, {
      onDelete: 'cascade',
      foreignKey: {
        allowNull: false,
      }
    });
  };

  return Cocktail;
};