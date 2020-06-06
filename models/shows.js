'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shows = sequelize.define('Shows', {
    showNumber: DataTypes.INTEGER,
    airDate: DataTypes.STRING
  }, {});
  Shows.associate = function(models) {
    Shows.hasMany(models.Questions);
  };
  return Shows;
};