var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const User = require('../../models/User');
const utils = require('../../utils/utils');
const userClass = require('../../class/UserClass');
const AccessToken = require('../../class/accessTokenClass');
function loginOauth2User(res, userInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        const accessTokenDao = new AccessToken();
        User.find({
            "email": userInfo.emails[0].value
        })
            .exec()
            .then((usrOne) => __awaiter(this, void 0, void 0, function* () {
            console.log("usrOne :", usrOne);
            // if (usrOne.length === 0) {
            //     let user = new User(await userClass.creatNewOauth2User(userInfo));
            //     user.save()
            //         .then(async usr => {
            //             const token = await accessTokenDao.generateToken(userInfo.googleId !== undefined ? userInfo.googleId : usr._id, usr._id);
            //             const accessTokenValue = await accessTokenDao.saveTokenAndGetAccessToken(token, usr._id);
            //             const basedAccesstoken = await accessTokenDao.generateToken(accessTokenValue, usr._id);
            //             res.redirect("http://localhost:5000/login?token=" + basedAccesstoken +
            //                 "&userId=" + usr._id + "&imageUrl=" + usr.imageUrl + "&givenName=" +
            //                 usr.givenName + "&familyName=" + usr.familyName + "&dateOfCreation=" + usr.dateOfCreation);
            //         })
            //         .catch(err => utils.defaultError(res, err));
            // } else {
            //     const token = await accessTokenDao.generateToken(userInfo.googleId !== undefined ? userInfo.googleId : usrOne[0]._id, usrOne[0]._id);
            //     const accessTokenValue = await accessTokenDao.saveTokenAndGetAccessToken(token, usrOne[0]._id);
            //     const basedAccesstoken = await accessTokenDao.generateToken(accessTokenValue, usrOne[0]._id);
            //     res.redirect("http://localhost:5000/login?token=" + basedAccesstoken +
            //         "&userId=" + usrOne[0]._id + "&imageUrl=" + usrOne[0].imageUrl + "&givenName=" +
            //         usrOne[0].givenName + "&familyName=" + usrOne[0].familyName + "&dateOfCreation=" + usrOne[0].dateOfCreation);
            // }
            // res.status(200).json({
            //     success: 200
            // })
        }))
            .catch(err => utils.defaultError(res, err));
    });
}
module.exports = {
    loginOauth2User
};
