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


getUserById = (req, res, next) => {
    let id = req.params.id
    userService.getUserService.getUserById(res, id);
}

module.exports = {
    createNewAccount,
    validateAccount,
    resetPassword,
    getUserById,
    loginUser
}