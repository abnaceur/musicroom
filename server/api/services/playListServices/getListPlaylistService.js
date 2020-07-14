const playListDao = require('../../daos/playListDao/playListDao');

async function getListPlaylist(res, user) {
    let id ="5f0d8d63776306008afdf80e";
    if (String(id).length !== 24)
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
        let myPlaylist = await playListDao.getMine(id);

        console.log("myPlaylist")
        res.status(200).json({
            success: true,
            data: {
                publicList,
                myPlaylist,
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