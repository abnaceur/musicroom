var express = require('express');
const router = express.Router();
const playListController = require('../controllers/playListController');

const passport = require('passport')
const checkIfUserIsLog = passport.authenticate('jwt', { session: false });
//=> End of declared dependencies

// @desc    getPlaylistById
// @route   POST /api/v1/playlist/id/:id
// @access  Private
router.get('/id/:id', checkIfUserIsLog, playListController.getPlaylistById)

// @desc    getAllPublicPlaylist
// @route   POST /api/v1/playlist/getAllPublic
// @access  Private
router.get('/getAllPublic', checkIfUserIsLog, playListController.getAllPublicPlaylist)

// @desc    createPlaylist
// @route   POST /api/v1/playlist/new
// @access  Private
router.post('/new', checkIfUserIsLog, playListController.createPlaylist)

// @desc    getMine = get playlist who i'm creator
// @route   GET /api/v1/playlist/mine
// @access  Private
router.get('/mine', checkIfUserIsLog, playListController.getMine)

// @desc    updatePlaylist
// @route   POST /api/v1/playlist/update
// @access  Private
router.post('/update', checkIfUserIsLog, playListController.updatePlaylist)

// @desc    deletePlaylist
// @route   POST /api/v1/playlist/delete
// @access  Private
router.post('/delete', checkIfUserIsLog, playListController.deletePlaylist)

module.exports = router;