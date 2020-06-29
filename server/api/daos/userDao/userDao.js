const User = require('../../models/User');
const UserClass = require("../../class/UserClass"); 
const utils = require('../../utils/utils');

ifExistUserAccount = (email) => {
    return new Promise((resolve, reject) => {
        User.find({
            email: email
        }).exec()
            .then(response => {
                resolve(response.length);
            }).catch(err => console.log("existEmailToBeValidated ERR :", err));
    })
}

ifExistUserAccountById = (id) => {
    return new Promise((resolve, reject) => {
        User.find({
            _id: id
        }).exec()
            .then(response => {
                resolve(response.length);
            }).catch(err => console.log("ifExistUserAccountById ERR :", err));
    })
}


saveNewUserAccount = (data, photo) => {
    return new Promise(async (resolve, reject) => {
        let user = new User(await UserClass.CreateNewUser(data));
        user.save().then(res => {
            resolve(true);
        }).catch(err => {
            console.log("saveNewUserAccount ERR :", err);
            resolve(false);
        })
    })   
}

module.exports = {
    ifExistUserAccount,
    ifExistUserAccountById,
    saveNewUserAccount
}