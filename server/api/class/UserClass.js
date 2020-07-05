const mongoose = require('mongoose');
const utils = require('../utils/utils');

async function CreateNewUser(data, token) {
    return new Promise(async (resolve, reject) => {
        let hashedPwd = await utils.hashPassword(data.password);
        resolve({
            _id: new mongoose.Types.ObjectId,
            username: data.fullname,
            email: data.email,
            validationToken: token,
            password: hashedPwd,
        }) 
    })

}

async function creatNewOauth2User(data) {
    return new Promise(async (resolve, reject) => {
        let hashedPwd = await utils.hashPassword(data.password);
        resolve({
            _id: new mongoose.Types.ObjectId,
            username: data.displayName,
            email: data.emails[0].value,
            googlePhoto: data.photos[0].value,
            validationToken: data.id,
            googleId: data.id,
            active: true,
        }) 
    })

}

module.exports = {
    CreateNewUser,
    creatNewOauth2User
}