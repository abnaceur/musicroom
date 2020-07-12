var express = require('express');
const router = express.Router();
const playListController = require('../controllers/playListController');

// const passport = require('passport')
// const checkAuth = passport.authenticate('jwt', { session: false });
const checkAuth = require("../middleware/check-auth");

//=> End of declared dependencies

// @desc    getPlaylistById
// @route   POST /api/v1/playlist/id/:id
// @access  Private
router.get('/id/:id', checkAuth, playListController.getPlaylistById)

// @desc    getAllPublicPlaylist
// @route   POST /api/v1/playlist/getAllPublic
// @access  Private
router.get('/getAllPublic', checkAuth, playListController.getAllPublicPlaylist)

// @desc    getAllList
// @route   GET /api/v1/playlist/getlist
// @access  Private
router.get('/getlist', checkAuth, playListController.getListPlaylist);

// @desc    createPlaylist
// @route   POST /api/v1/playlist/new
// @access  Private
router.post('/new', checkAuth, playListController.createPlaylist)

// @desc    getMine = get playlist who i'm creator
// @route   GET /api/v1/playlist/mine
// @access  Private
router.get('/mine', checkAuth, playListController.getMine)

// @desc    updatePlaylist
// @route   POST /api/v1/playlist/update
// @access  Private
router.post('/update', checkAuth, playListController.updatePlaylist)

// @desc    deletePlaylist
// @route   POST /api/v1/playlist/delete
// @access  Private
router.post('/delete', checkAuth, playListController.deletePlaylist)

module.exports = router;