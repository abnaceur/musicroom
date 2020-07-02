const User = require('../../models/User');
const UserClass = require("../../class/UserClass");
const utils = require('../../utils/utils');
const userEmailsTemplate = require('../../emails/userEmails/accountValidationEmail');
const emailSender = require('../../utils/emailSender');
const AccessToken = require('../../class/accessTokenClass');

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
        const accessTokenDao = new AccessToken();
        const token = await accessTokenDao.generateToken(data.email, data.username);
        let user = new User(await UserClass.CreateNewUser(data, token));
        user.save().then(res => {
            let msg = userEmailsTemplate.accountValidation(token);
            emailSender.sendEmail("MUSICROOM TEAM", data.email, "Account validation", msg);
            resolve(true);
        }).catch(err => {
            console.log("saveNewUserAccount ERR :", err);
            resolve(false);
        })
    })
}

accountValidation = (token) => {
    return new Promise((resolve, reject) => {
        User.find({
            validationToken: token,
            active: false
        }).exec()
            .then(response => {
                if (response.length > 0) {
                    response[0].active = true;
                    User.findByIdAndUpdate(
                        response[0]._id,
                        response[0],
                        { new: true },
                        (err, updatedUser) => {
                            if (err) resolve(0);
                            console.log("updatedUser :", updatedUser);
                            resolve(response.length);
                        }
                    )
                } else
                    resolve(response.length);
            }).catch(err => console.log("accountValidation ERR :", err));
    })
}

getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        User.find({
            email: email,
            active: true
        }).exec()
            .then(response => {
                resolve(response);
            }).catch(err => console.log("getUserByEmail ERR :", err));
    })
}

resetPassword = async (email) => {
    return new Promise( async(resolve, reject) => {
        //    Generate new pwd
        try {
            const newPwd = await utils.generateRandomPassword();
            // Hash new pawd
            const hashedPwd = await utils.hashPassword(newPwd);
            // Get user
            let user = await getUserByEmail(email);
            user[0].password = hashedPwd;
    
            // update the new password
            User.findByIdAndUpdate(
                user[0]._id,
                user[0],
                { new: true },
                (err, user) => {
                    if (err) resolve(false);
                    console.log("User :", user);
                    let msg = userEmailsTemplate.resetPassword(newPwd);
                    emailSender.sendEmail("MUSICROOM TEAM", email, "Reset password", msg);
                    resolve(true);
                }
            )
        } catch(err) {
            resolve(false)
        }
        
    })
}

module.exports = {
    getUserByEmail,
    ifExistUserAccount,
    accountValidation,
    resetPassword,
    ifExistUserAccountById,
    saveNewUserAccount
}