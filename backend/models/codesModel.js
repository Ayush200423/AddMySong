const mongoose = require('mongoose')

const codesSchema = mongoose.Schema({
    playlistCode: {
        type: String,
        unique: true,
        required: true
    }
}, 
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('playlisturls', codesSchema)