'use strict';

const data = require('./JEOPARDY_QUESTIONS1 (1).json');

data.sort((a, b) => parseInt(a.show_number) - parseInt(b.show_number));

const Shows = {};
data.forEach((question) => {
    if(!Shows[question.show_number]) {
        Shows[question.show_number] = question.air_date;
    }
})

const showArr = Object.keys(Shows).map(show => {return {showNumber: parseInt(show), airDate: Shows[show], createdAt: new Date(), updatedAt: new Date()}})

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Shows', showArr, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Shows', null, {});
  }
};
