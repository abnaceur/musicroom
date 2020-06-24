const bcrypt = require('bcrypt');

hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            resolve(hash);
        })
    })
}

generateRandomPassword = () => {
    return new Promise((resolve, reject) => {
        resolve(Math.random().toString(36).slice(-8));
    })
}

generateRandomNum = (size) => {
    return Math.floor((Math.random() * 99999) + 10000);
}

defaultError = (res, err) => {
    return res.status(500).json({
        error: err
    })
}

module.exports = {
    defaultError,
    generateRandomPassword,
    hashPassword,
    generateRandomNum
}