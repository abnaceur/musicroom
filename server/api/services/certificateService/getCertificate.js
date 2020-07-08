const certificateDao = require('../../daos/certificateDao/certificateDao')
const certificate = require('../../models/certificate')

const getMyCertificate = (user, res) => {
    if (!user || !data.playlist || !data.user) {
        res.status(200).json({
            success: false,
            data: {
                msg: 'Eror on data'
            },
            code: 406
        })
    } else
        certificateDao.getMyCertificate(user.id)
            .then(certificate => {
                res.status(200).json({
                    success: true,
                    data: {
                        certificateArray: certificate
                    },
                    code: 406
                })

            })
}

module.exports = {
    getMyCertificate
}