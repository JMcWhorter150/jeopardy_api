module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Questions', // name of Source table
      'roundId', // name of the key we're adding
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Rounds', // name of Target table
          key: 'id', // key in Target table
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },
 
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Questions', // name of Source table
      'roundId' // key we want to remove
    );
  }
 };