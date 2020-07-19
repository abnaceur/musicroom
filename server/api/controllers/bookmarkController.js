const bookmarkService = require('../services/bookmarkService/index');

const newbookmark = (req, res, next) => {
    let user = req.user
    let data = req.body
    bookmarkService.createBookmark.createBookmark(req, res, user, data)
}

const deletebookmark = (req, res, next) => {
    let user = req.user
    let data = req.body
    bookmarkService.deleteBookmark.deleteBookmark(req, res, user, data)
}

const mybookmark = (req, res, next) => {
    let user = req.user
    bookmarkService.getBookmark.getMyBookmark(user, res)
}

module.exports = {
    newbookmark,
    deletebookmark,
    mybookmark
}