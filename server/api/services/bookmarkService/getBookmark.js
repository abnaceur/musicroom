const bookmarkDao = require('../../daos/bookmarkDao/bookmarkDao')
const bookmark = require('../../models/bookmark')

const getMyBookmark = (user, res) => {
    if (!user || !data.playlist || !data.user) {
        res.status(200).json({
            success: false,
            data: {
                msg: 'Eror on data'
            },
            code: 406
        })
    } else
        bookmarkDao.getMyBookmark(user.id)
            .then(bookmark => {
                res.status(200).json({
                    success: true,
                    data: {
                        bookmarkArray: bookmark
                    },
                    code: 406
                })

            })
}

module.exports = {
    getMyBookmark
}