const getPlaylistService = require('./getPlaylistService')
const createPlaylistService = require('./createPlaylistService')
const updatePlaylistService = require('./updatePlaylistService')
const getListPlaylistService = require("./getListPlaylistService");

module.exports = {
    getPlaylistService,
    getListPlaylistService,
    createPlaylistService,
    updatePlaylistService
}