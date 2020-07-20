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

const updatePlaylist = (playlist) => {
    return new Promise(async (resolve, reject) => {
        getPlayListById(playlist.id)
            .then(result => {
                if (result) {
                    result.set({ musics: playlist.musics })
                    result.set({ creator: playlist.creator })
                        .then(newPlaylist => {
                            resolve(newPlaylist)
                        })
                } else {
                    reject()
                }
            })
    })
}

const updatePlaylistTracks = (id, track) => {
    return new Promise(async (resolve, reject) => {
        getPlayListById(id)
            .then(result => {
                result.trackList[track.position] = track;
                Playlist.findByIdAndUpdate(
                    result._id,
                    result,
                    { new: true },
                    (err, newTrackLikes) => {
                        if (err) resolve(false);
                        resolve(newTrackLikes);
                    }
                )
            })
    })
}

const createPlaylist = (data, userId) => {
    return new Promise(async (resolve, reject) => {
        let playList = new Playlist(await PlaylistClass.CreateNewPlaylist(data, userId));
        playList.save().then(res => {
            console.log("res :", res)
            resolve(res);
        }).catch(err => {
            console.log("createPlaylist ERR :", err);
            reject(err);
        })
    })
}

const getMine = (userId) => {
    return new Promise((resolve, reject) => {
        Playlist.find({ creator: userId }).exec()
            .then(response => {
                resolve(response);
            }).catch(err => {
                console.log("getPlayListById ERR :", err)
                reject(err)
            });
    })
}

const deletePlaylist = (id) => {
    return new Promise((resolve, reject) => {
        Playlist.findByIdAndDelete(id).exec()
            .then(response => {
                resolve(response);
            }).catch(err => {
                console.log("getPlayListById ERR :", err)
                reject(err)
            });
    })
}

module.exports = {
    getMine,
    updatePlaylist,
    updatePlaylistTracks,
    getPlayListById,
    createPlaylist,
    getAllPublic,
    deletePlaylist
}