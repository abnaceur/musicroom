const playListService = require('../services/playListServices/index');

const getPlaylistById = (req, res, next) => {
    let id = req.params.id
    playListService.getPlaylistService.getPlaylistById(res, id);
}

const getAllPublicPlaylist = (req, res, next) => {
    playListService.getPlaylistService.getAllPublicPlaylist(res);
}

const createPlaylist = (req, res, next) => {
    let data = req.body
    let user = req.user
    playListService.createPlaylistService.createPlaylist(res, data, user);
}

const updatePlaylist = (req, res, next) => {
    let data = req.body
    let user = req.user
    playListService.updatePlaylistService.updatePlaylist(res, data, user);
}

const deletePlaylist = (req, res, next) => {
    let data = req.body
    let user = req.user
    playListService.updatePlaylistService.deletePlaylist(res, data, user);
}

module.exports = {
    getPlaylistById,
    getAllPublicPlaylist,
    createPlaylist,
    updatePlaylist,
    deletePlaylist
}