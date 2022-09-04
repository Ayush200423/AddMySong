const express = require('express')
const router = express.Router()
const Code = require('../models/codesModel')

router.get('/:id', (req, res) => {
    res.status(200).json({message: `get ${req.params.id}`})
})

module.exports = router