var express = require('express');
const router = express.Router();
const multer = require('../middleware/FileUpload');
//=> End of declared dependencies

// @desc    Signup new user
// @route   POST /api/v1/users/signup
// @access  Public
// router.post('/signup', multer.upload.any(), userController.createNewAccount)


module.exports = router;