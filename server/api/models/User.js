let mongoose = require('mongoose');

// User schema
let userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname: {
        type: String,
        default: "",
    },
    lastname: {
        type: String,
        default: "",
    },
    username: {
        type: String,
        require: true,
    },
    email: String,
    password: {
        type: String,
        require: true,
    },
    dateOfCreation: {
        type: Date,
        default: Date.now,
    },
    blocked: {
        type: Boolean,
        default: false,
    },
    dateOfLastUpdate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', userSchema);