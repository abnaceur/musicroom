const Playlist = require('../../models/Playlist');
const PlaylistClass = require("../../class/PlaylistClass");

const getPlayListById = (id) => {
    return new Promise((resolve, reject) => {
        Playlist.findById(id).exec()
            .then(response => {
                resolve(response);
            }).catch(err => {
                console.log("getPlayListById ERR :", err)
                reject(err)
            });
    })
}

const getAllPublic = () => {
    return new Promise((resolve, reject) => {
        Playlist.find({ public: true }).exec()
            .then(response => {
                resolve(response);
            }).catch(err => {
                console.log("getPlayListById ERR :", err)
                reject(err)
            });
    })
}

const createPlaylist = (data) => {
    return new Promise(async (resolve, reject) => {
        let playList = new Playlist(await PlaylistClass.CreateNewPlaylist(data));
        playList.save().then(res => {
            resolve(playList);
        }).catch(err => {
            console.log("createPlaylist ERR :", err);
            reject(err);
        })
    })
}

module.exports = {
    getPlayListById,
    createPlaylist,
    getAllPublic
}