const loginOauth2UserService = require('../services/userServices/userOauth2GoogleService');
const googleOauth2 = (req, { user }, res, next) => {
    loginOauth2UserService.loginOauth2User(res, req.user);
};
module.exports = {
    googleOauth2
};
