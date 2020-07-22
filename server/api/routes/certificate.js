var express = require('express');
const router = express.Router();

const certificateController = require('../controllers/certificateController');

const checkAuth = require("../middleware/check-auth");

// @desc    create certificate
// @route   POST /api/v1/certificate/new
// @access  private
router.post('/new', checkAuth, certificateController.newCertificate)

// @desc    Delete certificate
// @route   POST /api/v1/certificate/delete
// @access  private
router.post('/delete', checkAuth, certificateController.deleteCertificate)

// @desc    Get if i have a certificate for playlist
// @route   Get /api/v1/certificate/myCertificate/
// @access  private
router.get('/myCertificate', checkAuth, certificateController.myCertificate)


module.exports = router;