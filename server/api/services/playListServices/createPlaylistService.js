const playListDao = require('../../daos/playListDao/playListDao');
const certificateDao = require('../../daos/certificateDao/certificateDao')

async function createPlaylist(req, res, data, user) {
    if (!data || data.public === undefined || !data.name || !user || !user.id) {
        res.status(200).json({
            success: false,
            data: {
                msg: 'Eror on data'
            },
            code: 406
        })
    } else {
        playListDao.createPlaylist(data.public, data.name, user.id).then(playList => {
            certificateDao.newCertificate(user.id, playList.id).then(certificate => {
                req.app.io.emit('newPlaylist', playList)
                req.app.io.emit('newCertificate', certificate)
                res.status(200).json({
                    success: true,
                    data: {
                        playlist: playList
                    },
                    code: 200
                })
            }).catch(err => {
                res.status(200).json({
                    success: false,
                    data: {
                        msg: "Error Unknow Certificate " + err
                    },
                    code: 444
                })
            })
        }).catch(err => {
            res.status(200).json({
                success: false,
                data: {
                    msg: "Error Unknow Playlist" + err
                },
                code: 444
            })
        })
    }
}


module.exports = {
    createPlaylist
}