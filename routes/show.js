const db = require('../models');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    db.Shows.findAll()
        .then(Shows => {
            res.json(Shows);
        })
})

router.get('/:id', (req, res) => {
    db.Shows.findByPk(parseInt(req.params.id))
        .then(show => {
            res.json(show);
        })
})

router.post('/', (req, res) => {
    db.Shows.create(req.body)
        .then(show => {
            res.json(show.dataValues);
        })
})

router.put('/:id', (req, res) => {
    db.Shows.update(req.body, {
        where: {
            id: parseInt(req.params.id)
        }
    })
        .then(show => {
            res.json(show);
        })
})

router.delete('/:id', (req, res) => {
    db.Shows.findByPk(parseInt(req.params.id))
        .then(show => {
            show.destroy();
            res.json({
                message: "Show was deleted successfully"
            })
        })
})

module.exports = router;