const userDao = require('../../daos/userDao/userDao');

async function addNewUser(req, data, res) {
    //check password length
    // TODO ADD INPUT VALIDATION
    if (data.password && data.password.length > 8) {
        // check if email exist
        if (await userDao.ifExistUserAccount(data.email) === 0) {
            if (await userDao.saveNewUserAccount(data)) {
                res.status(200).json({
                    success: true,
                    data: {
                        msg: "Account created with success."
                    },
                    code: 200
                })
            } else { 
                res.status(500);
            }
        } else {
            res.status(200).json({
                success: true,
                data: {
                    valid: false,
                    msg: "This account already exists"
                },
                code: 406
            })
        }
    } else {
        res.status(200).json({
            success: true,
            data: {
                valid: false,
                msg: "Password must include more than 08 characters"
            },
            code: 407
        })
    }
}

module.exports = {
    addNewUser
}