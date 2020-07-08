var express = require('express');
const router = express.Router();
const playListController = require('../controllers/playListController');

const passport = require('passport')
const checkIfUserIsLog = passport.authenticate('jwt', { session: false });
//=> End of declared dependencies

// @desc    Signup new user
// @route   POST /api/v1/playlist/sigvar express = require('express');

// @desc    Get user by id
// @route   POST /api/v1/playlist/id/:id
// @access  Public
router.get('/id/:id', checkIfUserIsLog, playListController.getPlaylistById)

// @desc    Get user by id
// @route   POST /api/v1/playlist/getAllPublic
// @access  Public
router.get('/getAllPublic', checkIfUserIsLog, playListController.getAllPublicPlaylist)

// @desc    Signin  user
// @route   POST /api/v1/playlist/new
// @access  Public
router.post('/new', checkIfUserIsLog, playListController.createPlaylist)

// @desc    Signin  user
// @route   POST /api/v1/playlist/update
// @access  Public
router.post('/update', checkIfUserIsLog, playListController.updatePlaylist)

// @desc    Signin  user
// @route   POST /api/v1/playlist/delete
// @access  Public
router.post('/delete', checkIfUserIsLog, playListController.deletePlaylist)


module.exports = router;