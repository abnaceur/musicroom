const userDao = require('../../daos/userDao/userDao');

async function validateEmailAddress(res, token) {
    if (await userDao.accountValidation(token) > 0) {
        console.log("here222");
        res.send("Account validated succesfully, you may login to your account.")
    } else {
        console.log("here111");
        res.sned("This link is not valid, this incident will be repported.");
    }
}


module.exports = {
    validateEmailAddress
}