'use strict';

const data = require('./JEOPARDY_QUESTIONS1 (1).json');

data.sort((a, b) => parseInt(a.show_number) - parseInt(b.show_number));

const Rounds = {};
data.forEach((question) => {
    if(!Rounds[question.round]) {
        Rounds[question.round] = true;
    }
})

const roundArr = Object.keys(Rounds).map(round => {return {name: round, createdAt: new Date(), updatedAt: new Date()}})

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Rounds', roundArr, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Rounds', null, {});
  }
};
