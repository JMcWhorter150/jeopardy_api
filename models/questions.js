'use strict';
module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define('Questions', {
    category: DataTypes.STRING,
    air_date: DataTypes.DATE,
    question: DataTypes.STRING,
    value: DataTypes.STRING,
    answer: DataTypes.STRING,
    round: DataTypes.STRING,
    show_number: DataTypes.STRING
  }, {});
  Questions.associate = function(models) {
    // associations can be defined here
  };
  return Questions;
};