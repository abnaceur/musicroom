const userService = require('../services/userServices/index');

createNewAccount = (req, res, next) => {
    userService.createNewAccountService.addNewUser(req, req.body, res);
}

loginUser = (req, res, next) => {
    console.log("Res bo :", req.body);
    userService.userLoginService.userLogin(req.body, res);
}

module.exports = {
    createNewAccount,
    loginUser
}