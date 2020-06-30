const userService = require('../services/userServices/index');
const createNewAccount = (req, res, next) => {
    userService.createNewAccountService.addNewUser(req, req.body, res);
};
const loginUser = (req, res, next) => {
    userService.userLoginService.userLogin(req.body, res);
};
module.exports = {
    createNewAccount,
    loginUser
};
