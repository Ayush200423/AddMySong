const express = require('express')
const router = express.Router()
var ObjectID = require('mongodb').ObjectID;
const Code = require('../models/codesModel')

// get array of hosted rooms' playlist ids with specified field id
router.get('/rooms', (req, res) => {
    try {
        let fieldId = ObjectID(req.headers.id)
        Code.findById(fieldId, (err, results) => {
            if (err) {
                res.json(err)
            } else {
                res.json(results)
            }
        })
    } catch {
        res.json('An error occurred - Invalid ID')
    }
})

// create new room with playlist uri
router.post('/rooms', (req, res) => {
    let data = new Code({"playlistCode": req.params.id})
    data.save()
    .then((item) => {
        res.send(item)
    })
    .catch(() => {
        res.status(200).send('Error - Something went wrong')
    })
})

module.exports = router