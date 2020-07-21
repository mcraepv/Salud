module.exports = function (sequelize, DataTypes) {
    var Ingredient = sequelize.define("Ingredient", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Other'
        }
    }, {
        freezeTableName: true
    });

    Ingredient.associate = function (models) {
        Ingredient.hasMany(models.CocktailIngredient, {
            onDelete: 'cascade',
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Ingredient;
};