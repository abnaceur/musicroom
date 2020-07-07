const Certificate = require('../../models/certificate');
const CertificateClass = require("../../class/certificateClass");

const newCertificate = (userId, playListId) => {
    return new Promise(async (resolve, reject) => {
        let certificate = new Certificate(await CertificateClass.CreateNewCertificate(userId, playListId));
        certificate.save().then(res => {
            resolve(certificate);
        }).catch(err => {
            console.log("newCertificate ERR :", err);
            reject(err);
        })
    })
}

const testCertificate = (data) => {
    return new Promise((resolve, reject) => {

    })
}

const deleteCertificate = (data) => {
    return new Promise((resolve, reject) => {

    })
}

module.exports = {
    newCertificate,
    testCertificate,
    deleteCertificate
}