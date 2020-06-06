'use strict';

const data = require('./JEOPARDY_QUESTIONS1 (1).json');

data.sort((a, b) => parseInt(a.show_number) - parseInt(b.show_number));

let categories = {};
data.forEach((question) => {
    if(!categories[question.category]) {
        categories[question.category] = true;
    }
})

let categoryArr = Object.keys(categories).map(category => {return {name: category, createdAt: new Date(), updatedAt: new Date()}})

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Categories', categoryArr, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Categories', null, {});
  }
};
