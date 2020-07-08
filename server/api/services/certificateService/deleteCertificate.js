const certificateDao = require('../../daos/certificateDao/certificateDao')

const deleteCertificate = (req, res, user, data) => {
    if (!data || !data.playlist || !data.user) {
        res.status(200).json({
            success: false,
            data: {
                msg: 'Eror on data'
            },
            code: 406
        })
    } else
        certificateDao.testCertificate(user.id, data.playlist.id)
            .then(haveCertificate => {
                if (haveCertificate) {
                    certificateDao.deleteCertificate(data.user.id, playList.id).then(certificate => {
                        req.app.io.emit('deleteCertificate', certificate)
                        res.status(200).json({
                            success: true,
                            data: {
                                certificate: certificate
                            },
                            code: 200
                        })
                    })
                } else {
                    res.status(200).json({
                        success: false,
                        data: {
                            msg: 'Error you dont have certificate'
                        },
                        code: 406
                    })
                }
            })
}

module.exports = {
    deleteCertificate
}