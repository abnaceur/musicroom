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

getUserById = (req, res, next) => {
    let id = req.params.id
    userService.getUserService.getUserById(res, id);
}

deleteUserById = (req, res, next) => {
    let data = { id: req.body.id, token: req.body.token }
    userService.deleteUserService.deleteUser(res, data);
}

resetPassword = (req, res, next) => {
    userService.resetPwdService.resetPwd(req.body.email.email, res);
}


module.exports = {
    createNewAccount,
    validateAccount,
    deleteUserById,
    resetPassword,
    getUserById,
    loginUser
}