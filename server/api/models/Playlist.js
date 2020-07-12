const Music = require('./music')
let mongoose = require('mongoose');

// Playlist schema
let playlistSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        default: "",
    },
    desctiption: {
        type: String,
        default: "",
    },
    public: {
        type: Boolean,
        default: true,
    },
    creator: {
        type: String,
        default: "",
    },
    trackList: {
        type: Array,
        default: [],
    },
    contributors: {
        type: Array,
        default: []
    },
    dateOfCreation: {
        type: Date,
        default: Date.now,
    },
    dateOfLastUpdate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Playlist', playlistSchema);