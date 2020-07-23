module.exports = function (sequelize, DataTypes) {
  var Cocktail = sequelize.define('Cocktail', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  },
  {
    freezeTableName: true,
  }
  );

  Cocktail.associate = function (models) {
    Cocktail.hasMany(models.CocktailIngredient, {
      onDelete: 'cascade',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Cocktail;
};
