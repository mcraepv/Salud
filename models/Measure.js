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
    Measure.hasMany(models.Ingredient);
  };
  return Measure;
};
