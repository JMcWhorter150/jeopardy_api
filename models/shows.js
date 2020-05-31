'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shows = sequelize.define('Shows', {
    show_number: DataTypes.INTEGER,
    air_date: DataTypes.STRING
  }, {});
  Shows.associate = function(models) {
    // associations can be defined here
  };
  return Shows;
};