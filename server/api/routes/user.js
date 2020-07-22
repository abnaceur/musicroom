var express = require('express');
const router = express.Router();
const multer = require('../middleware/FileUpload');
const userController = require('../controllers/userController');

const checkAuth = require("../middleware/check-auth");

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

// @desc    validateAccount
// @route   POST /api/v1/users/validation/:token
// @access  Public
router.get('/validation/:token', userController.validateAccount)

// @desc    resetPassword
// @route   POST /api/v1/users/resetpwd
// @access  Public
router.post('/resetpwd', userController.resetPassword)

// @desc    getUserById
// @route   GET /api/v1/users/id/:id
// @access  Private
router.get('/id/:id', checkAuth, userController.getUserById)

// @desc    deleteUserById
// @route   POST /api/v1/users/delete/
// @access  Private / Token
router.post('/delete', checkAuth, userController.deleteUserById)

// @desc    update
// @route   POST /api/v1/users/update/
// @access  Private / Token
router.post('/update', checkAuth, userController.updateUser)


// @desc    updatePassword
// @route   POST /api/v1/users/update/
// @access  Private / Token
router.post('/updatePassword', checkAuth, userController.updateUserPassword)

// @desc    get contributor
// @route   POST /api/v1/users/contributor/
// @access  Private / Token
router.post('/contributor', checkAuth, userController.getContributor)

module.exports = router;