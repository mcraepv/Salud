module.exports = function (sequelize, DataTypes) {
  var Measure = sequelize.define('Measure', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true
  });

  Measure.associate = function (models) {
    Measure.hasMany(models.CocktailIngredient, {
      onDelete: 'cascade',
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Measure;
};