const getPlaylistService = require('./getPlaylistService')
const createPlaylistService = require('./createPlaylistService')
const updatePlaylistService = require('./updatePlaylistService')
const getListPlaylistService = require("./getListPlaylistService");
const likePlaylistTrackService = require('./likePlaylistTrackService');
const positionPlaylistTrackService = require('./positionPlaylistTrackService');

module.exports = {
    getPlaylistService,
    positionPlaylistTrackService,
    likePlaylistTrackService,
    getListPlaylistService,
    createPlaylistService,
    updatePlaylistService
}