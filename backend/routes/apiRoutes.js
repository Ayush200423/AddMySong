const express = require('express')
const router = express.Router()
const Code = require('../models/codesModel')

// get list of id's
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    Code.find({}, (err, results) => {
        if (err) {
            res.json(err)
        } else {
            res.json(results)
        }
    })
})

// create new id
router.post('/:id', (req, res) => {
    res.status(200).json({message: `get ${req.params.id}`})
})

module.exports = router