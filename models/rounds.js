'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rounds = sequelize.define('Rounds', {
    name: DataTypes.STRING
  }, {});
  Rounds.associate = function(models) {
    Rounds.hasMany(models.Questions);
  };
  return Rounds;
};