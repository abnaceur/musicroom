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

module.exports = {
    CreateNewUser
}