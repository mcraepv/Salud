module.exports = function (sequelize, DataTypes) {
  var Cocktail = sequelize.define(
    'Cocktail',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
<<<<<<< HEAD
<<<<<<< HEAD
  },
  {
    freezeTableName: true,
    timestamps: false
  }
=======
>>>>>>> 534859160f8b12941c69770ef0af278324b67096
=======
>>>>>>> 9cd1771d170ab0c3d64d99b8ffe34480a7c35da2
  );

  Cocktail.associate = function (models) {
    Cocktail.belongsToMany(models.Ingredient, {
      through: 'CocktailIngredient',
      onDelete: 'cascade',
      foreignKey: 'CocktailId'
    });
    Cocktail.belongsToMany(models.Measure, {
      through: 'CocktailIngredient',
      onDelete: 'cascade',
      foreignKey: 'CocktailId'
    });
  };

  return Cocktail;
};
