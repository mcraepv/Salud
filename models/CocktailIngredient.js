module.exports = function (sequelize, DataTypes) {
    var CocktailIngredient = sequelize.define("CocktailIngredient", {

    }, {
        freezeTableName: true
    });

    CocktailIngredient.associate = function (models) {
        CocktailIngredient.belongsTo(models.Cocktail, {
            onDelete: 'cascade',
            foreignKey: {
                allowNull: false
            }
        });

        CocktailIngredient.belongsTo(models.Ingredient, {
            onDelete: 'cascade',
            foreignKey: {
                allowNull: false
            }
        });

        CocktailIngredient.belongsTo(models.Measure, {
            onDelete: 'cascade',
            foreignKey: {
                allowNull: false
            }
        });
    };

    return CocktailIngredient;
};