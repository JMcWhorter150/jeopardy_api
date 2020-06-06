const db = require('../models');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    db.Questions.findAll()
        .then(questions => {
            res.json(questions);
        })
})

router.get('/:id', (req, res) => {
    db.Questions.findByPk(parseInt(req.params.id))
        .then(question => {
            res.json(question);
        })
})

router.post('/', (req, res) => {
    db.Questions.create(req.body)
        .then(question => {
            res.json(question.dataValues);
        })
})

router.put('/:id', (req, res) => {
    db.Questions.update(req.body, {
        where: {
            id: parseInt(req.params.id)
        }
    })
        .then(question => {
            res.json(question);
        })
})

router.delete('/:id', (req, res) => {
    db.Questions.findByPk(parseInt(req.params.id))
        .then(question => {
            question.destroy();
            res.json({
                message: "Question was deleted successfully"
            })
        })
})

module.exports = router;