const db = require('../models');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    db.Categories.findAll()
        .then(Categories => {
            res.json(Categories);
        })
})

router.get('/:id', (req, res) => {
    db.Categories.findByPk(parseInt(req.params.id))
        .then(category => {
            res.json(category);
        })
})

router.post('/', (req, res) => {
    db.Categories.create(req.body)
        .then(category => {
            res.json(category.dataValues);
        })
})

router.put('/:id', (req, res) => {
    db.Categories.update(req.body, {
        where: {
            id: parseInt(req.params.id)
        }
    })
        .then(category => {
            res.json(category);
        })
})

router.delete('/:id', (req, res) => {
    db.Categories.findByPk(parseInt(req.params.id))
        .then(category => {
            category.destroy();
            res.json({
                message: "Category was deleted successfully"
            })
        })
})

module.exports = router;