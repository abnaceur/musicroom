const playListDao = require('../../daos/playListDao/playListDao');
const certificateDao = require('../../daos/certificateDao/certificateDao')

async function createPlaylist(res, data) {
    if (!data || data.public === undefined || !data.name || !data.creator) {
        res.status(200).json({
            success: false,
            data: {
                msg: 'Eror on data'
            },
            code: 406
        })
    } else {
        playListDao.createPlaylist(data).then(playList => {
            certificateDao.newCertificate(data.creator, playList.id).then(
                res.status(200).json({
                    success: true,
                    data: {
                        playlist: playList
                    },
                    code: 200
                })
            ).catch(err => {
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