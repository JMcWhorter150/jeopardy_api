const db = require('../models');
async function getRounds() {
    let resultingObj = {};
    db.Rounds.findAll()
    .then(results => {
        results.forEach(result => {
            resultingObj[result.dataValues.name] = result.dataValues
        })
        return resultingObj;
    });
}

async function getCategories() {
    let resultingObj = {};
    db.Categories.findAll()
    .then(results => {
        results.forEach(result => {
            resultingObj[result.dataValues.name] = result.dataValues
        })
        return resultingObj;
    });
}

async function getShows() {
    let resultingObj = {};
    db.Shows.findAll()
    .then(results => {
        results.forEach(result => {
            resultingObj[result.dataValues.showNumber] = result.dataValues
        })
        return resultingObj;
    });
}