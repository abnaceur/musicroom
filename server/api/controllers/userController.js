const userService = require('../services/userServices/index');

createNewAccount = (req, res, next) => {
    userService.createNewAccountService.addNewUser(req, req.body, res);
}

loginUser = (req, res, next) => {
    userService.userLoginService.userLogin(req.body, res);
}


validateAccount = (req, res, next) => {
    let token = req.params.token;
    userService.userAccountValidationService.validateEmailAddress(res, token);
}

resetPassword = (req, res, next) => {
    let email = req.body.email.email;
    userService.resetPwdService.resetPwd(email, res);
}

module.exports = {
    createNewAccount,
    validateAccount,
    resetPassword,
    loginUser
}