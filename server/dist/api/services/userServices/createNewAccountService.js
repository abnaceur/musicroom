var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const userDao = require('../../daos/userDao/userDao');
function addNewUser(req, data, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //check password length
        // TODO ADD INPUT VALIDATION
        if (data.password && data.password.length > 8) {
            // check if email exist
            if ((yield userDao.ifExistUserAccount(data.email)) === 0) {
                if (yield userDao.saveNewUserAccount(data)) {
                    res.status(200).json({
                        success: true,
                        data: {
                            msg: "Account created with success."
                        },
                        code: 200
                    });
                }
                else {
                    res.status(500);
                }
            }
            else {
                res.status(200).json({
                    success: true,
                    data: {
                        valid: false,
                        msg: "This account does not exists"
                    },
                    code: 406
                });
            }
        }
        else {
            res.status(200).json({
                success: true,
                data: {
                    valid: false,
                    msg: "Password must include more than 08 characters"
                },
                code: 407
            });
        }
    });
}
module.exports = {
    addNewUser
};
