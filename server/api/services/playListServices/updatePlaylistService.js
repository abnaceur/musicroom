const playListDao = require('../../daos/playListDao/playListDao');
const certificateDao = require('../../daos/certificateDao/certificateDao');

async function updatePlaylist(req, res, data, user) {
    if (!data.playlist) {
        res.status(200).json({
            success: false,
            data: {
                msg: 'Error no playlist'
            },
            code: 407
        })
    } else
        certificateDao.testCertificate(user.id, data.playlist.id)
            .then(haveCertificate => {
                if (haveCertificate) {
                    playListDao.updatePlaylist(data.playlist).then(
                        newPlaylist => {
                            req.app.io.emit('updatePlaylist', newPlaylist)
                            res.status(200).json({
                                success: true,
                                data: {
                                    playlist: playList
                                },
                                code: 200
                            })
                        }
                    )
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

async function deletePlaylist(req, res, data, user) {
    playListDao.getPlayListById(data.playlistId)
        .then(playlist => {
            if (playlist.creator === user.id) {
                playListDao.deletePlaylist(playlist.id)
                    .then(removedPlaylist => {
                        req.app.io.emit('deletePlaylist', removedPlaylist)
                        res.status(200).json({
                            success: true,
                            data: {
                                playlist: playList
                            },
                            code: 200
                        })
                    })
            } else {
                res.status(200).json({
                    success: false,
                    data: {
                        msg: 'Error you are not creator'
                    },
                    code: 406
                })
            }
        }).catch(err => { return err })
}


module.exports = {
    updatePlaylist,
    deletePlaylist
}