const getPlaylistService = require('./getPlaylistService')
const createPlaylistService = require('./createPlaylistService')
const updatePlaylistService = require('./updatePlaylistService')
const getListPlaylistService = require("./getListPlaylistService");
const likePlaylistTrackService = require('./likePlaylistTrackService');

module.exports = {
    getPlaylistService,
    likePlaylistTrackService,
    getListPlaylistService,
    createPlaylistService,
    updatePlaylistService
}