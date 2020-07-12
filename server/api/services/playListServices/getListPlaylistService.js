const playListDao = require('../../daos/playListDao/playListDao');

async function getListPlaylist(res, user) {
    if (String(user.id).length !== 24)
        res.status(200).json({
            success: false,
            data: {
                msg: "Bad id format"
            },
            code: 406
        })
    else {
        // Get all public playlist
        let publicList = await playListDao.getAllPublic();
        res.status(200).json({
            success: true,
            data: {
                publicList,
            },
            code: 200
        })
        // Get all private playList 'invited'
        // Get all this user private playList
    }
}

module.exports = {
    getListPlaylist,
}