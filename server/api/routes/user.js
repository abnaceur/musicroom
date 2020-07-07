var express = require('express');
const router = express.Router();
const multer = require('../middleware/FileUpload');
const userController = require('../controllers/userController');
//=> End of declared dependencies

// @desc    Signup new user
// @route   POST /api/v1/users/signup
// @access  Public
// router.post('/signup', multer.upload.any(), userController.createNewAccount)


// @desc    Signup new user
// @route   POST /api/v1/users/signup 
// @access  Public
router.post('/signup', userController.createNewAccount)

// @desc    Signin  user
// @route   POST /api/v1/users/signin
// @access  Public
router.post('/signin', userController.loginUser)


// @desc    Signin  user
// @route   POST /api/v1/users/validation/:token
// @access  Public
router.get('/validation/:token', userController.validateAccount)


// @desc    Signin  user
// @route   POST /api/v1/users/resetpwd
// @access  Public
router.post('/resetpwd', userController.resetPassword)

// @desc    Get user by id
// @route   GET /api/v1/users/id/:id
// @access  Public
router.get('/id/:id', userController.getUserById)

// @desc    Get user by id
// @route   POST /api/v1/users/delete/
// @access  Private / Token
router.post('/delete', userController.deleteUserById)


module.exports = router;