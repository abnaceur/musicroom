const mongoose = require('mongoose');
const utils = require('../utils/utils');

async function CreateNewUser(data) {
    return new Promise(async (resolve, reject) => {
        let hashedPwd = await utils.hashPassword(data.password);
        resolve({
            _id: new mongoose.Types.ObjectId,
            username: data.fullname,
            email: data.email,
            password: hashedPwd,
        }) 
    })

}

module.exports = {
    CreateNewUser
}