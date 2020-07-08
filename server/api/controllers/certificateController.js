const certificateService = require('../services/certificateService/index');

const newCertificate = (req, res, next) => {
    let user = req.user
    let data = req.body
    certificateService.createCertificate.createCertificate(req, res, user, data)
}

const deleteCertificate = (req, res, next) => {
    let user = req.user
    let data = req.body
    certificateService.deleteCertificate.deleteCertificate(req, res, user, data)
}

const myCertificate = (req, res, next) => {
    let user = req.user
    certificateService.getCertificate.getMyCertificate(user, res)
}

module.exports = {
    newCertificate,
    deleteCertificate,
    myCertificate
}