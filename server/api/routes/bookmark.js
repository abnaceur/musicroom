var express = require('express');
const router = express.Router();

const bookmarkController = require('../controllers/bookmarkController');

const checkAuth = require("../middleware/check-auth");

// @desc    create bookmark
// @route   POST /api/v1/bookmark/new
// @access  private
router.post('/new', checkAuth, bookmarkController.newbookmark)

// @desc    Delete bookmark
// @route   POST /api/v1/bookmark/delete
// @access  private
router.post('/delete', checkAuth, bookmarkController.deletebookmark)

// @desc    Get if i have a bookmark for playlist
// @route   Get /api/v1/bookmark/mybookmark/
// @access  private
router.get('/mybookmark', checkAuth, bookmarkController.mybookmark)

// @desc    Get if i have a bookmark for playlist
// @route   Get /api/v1/bookmark/mybookmark/
// @access  private
router.post('/mybookmarkbyplaylist', checkAuth, bookmarkController.mybookmarkbyplaylist)


module.exports = router;