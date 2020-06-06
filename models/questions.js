'use strict';
module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define('Questions', {
    question: DataTypes.STRING,
    value: DataTypes.STRING,
    answer: DataTypes.STRING,
  }, {});
  Questions.associate = function(models) {
    Questions.belongsTo(models.Categories);
    Questions.belongsTo(models.Shows);
    Questions.belongsTo(models.Rounds);
  };
  return Questions;
};