const mongoose = require('mongoose');
const utils = require('../utils/utils');

async function CreateNewPlaylist(public, name, userId) {
    return new Promise(async (resolve, reject) => {
        resolve({
            _id: new mongoose.Types.ObjectId,
            name: name,
            public: public,
            creator: userId,
        })
    })
}


module.exports = {
    CreateNewPlaylist
}