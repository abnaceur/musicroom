const mongoose = require('mongoose');
const utils = require('../utils/utils');

async function CreateNewPlaylist(data, userId) {
    console.log("AAAA -> ", data);

    return new Promise(async (resolve, reject) => {
        resolve({
            _id: new mongoose.Types.ObjectId,
            name: data.titlePlayList,
            public: data.isPrivate ? false : true,
            creator: userId,
            desctiption: data.description,
            trackList: data.trackList,
            contributors: data.contributors,
        })
    })
}


module.exports = {
    CreateNewPlaylist
}