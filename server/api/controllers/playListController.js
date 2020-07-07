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
    playListService.createPlaylistService.createPlaylist(res, data);
}

const updatePlaylist = (req, res, next) => {
    let data = req.body
    playListService.updatePlaylistService.updatePlaylist(res, data);
}

const deletePlaylist = (req, res, next) => {
    let data = req.body
    playListService.updatePlaylistService.deletePlaylist(res, data);
}

module.exports = {
    getPlaylistById,
    getAllPublicPlaylist,
    createPlaylist,
    updatePlaylist,
    deletePlaylist
}