const User = require('../../models/User');
const UserClass = require("../../class/UserClass"); 
const utils = require('../../utils/utils');
const userEmailsTemplate = require('../../emails/userEmails/accountValidationEmail');
const emailSender = require('../../utils/emailSender');

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


saveNewUserAccount = (data) => {
    return new Promise(async (resolve, reject) => {
        let user = new User(await UserClass.CreateNewUser(data));
        user.save().then(res => {
            let msg = userEmailsTemplate.accountValidation();
            emailSender.sendEmail("MUSICROOM TEAM", data.email, "Account validation", msg);
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