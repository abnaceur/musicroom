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
const AccessToken = require('../../class/accessTokenClass');
const verifyPwd = require('../../utils/passwordMatchVerification');
function userLogin(userInfo, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const accessTokenDao = new AccessToken();
        User.find({
            "email": userInfo.email
        })
            .exec()
            .then((userData) => __awaiter(this, void 0, void 0, function* () {
            if (userData.length === 0) {
                res.status(200).json({
                    success: true,
                    code: 406,
                    data: {
                        msg: "Account does not exists"
                    }
                });
            }
            else if (yield verifyPwd.passwordMatchVerification(userInfo.password, userData[0].password)) {
                const token = yield accessTokenDao.generateToken(userData[0].email, userData[0]._id);
                const accessTokenValue = yield accessTokenDao.saveTokenAndGetAccessToken(token, userData[0]._id);
                const basedAccesstoken = yield accessTokenDao.generateToken(accessTokenValue, userData[0]._id);
                console.log("userData :", userData);
                res.status(200).json({
                    success: true,
                    code: 200,
                    data: {
                        token: basedAccesstoken,
                        userId: userData[0]._id,
                        username: userData[0].username,
                        email: userData[0].email,
                        dateOfCreation: userData[0].dateOfCreation
                    }
                });
            }
            else {
                res.status(200).json({
                    success: true,
                    code: 407,
                    data: {
                        msg: "Password and/or email is not correct"
                    }
                });
            }
        }))
            .catch(err => utils.defaultError(res, err));
    });
}
module.exports = {
    userLogin
};
