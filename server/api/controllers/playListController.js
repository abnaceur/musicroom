const playListService = require('../services/playListServices/index');

const getPlaylistById = (req, res, next) => {
    let id = req.params.id
    playListService.getPlaylistService.getPlaylistById(res, id);
}

const getAllPublicPlaylist = (req, res, next) => {
    playListService.getPlaylistService.getAllPublicPlaylist(res);
}

const getMine = (req, res, next) => {
    let user = req.user
    playListService.getPlaylistService.getMine(user, res);
}

const createPlaylist = (req, res, next) => {
    let data = req.body
    let user = req.user
    
    playListService.createPlaylistService.createPlaylist(req, res, data, user);
}

const updatePlaylist = (req, res, next) => {
    let data = req.body
    let user = req.user
    playListService.updatePlaylistService.updatePlaylist(req, res, data, user);
}

const deletePlaylist = (req, res, next) => {
    let data = req.body
    let user = req.user
    playListService.updatePlaylistService.deletePlaylist(req, res, data, user);
}

const getListPlaylist = (req, res, next) => {
    let user = req.user
    playListService.getListPlaylistService.getListPlaylist(res, user);
}

module.exports = {
    getPlaylistById,
    getMine,
    getAllPublicPlaylist,
    getListPlaylist,
    createPlaylist,
    updatePlaylist,
    deletePlaylist
}