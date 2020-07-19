var express = require('express');
const router = express.Router();

const certificateController = require('../controllers/certificateController');

const passport = require('passport')
const checkIfUserIsLog = passport.authenticate('jwt', { session: false });

// @desc    create certificate
// @route   POST /api/v1/certificate/new
// @access  private
router.post('/new', checkIfUserIsLog, certificateController.newCertificate)

// @desc    Delete certificate
// @route   POST /api/v1/certificate/delete
// @access  private
router.post('/delete', checkIfUserIsLog, certificateController.deleteCertificate)

// @desc    Get if i have a certificate for playlist
// @route   Get /api/v1/certificate/myCertificate/
// @access  private
router.get('/myCertificate', checkIfUserIsLog, certificateController.myCertificate)


module.exports = router;