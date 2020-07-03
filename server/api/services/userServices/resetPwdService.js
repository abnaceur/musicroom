const userDao = require('../../daos/userDao/userDao');

async function resetPwd(email, res) {
    if (await userDao.ifExistUserAccount(email) > 0) {
        if (await userDao.resetPassword(email)) {
            res.status(200).json({
                success: true,
                data: {
                    msg: "Password modified with success, check your email."
                },
                code: 200
            })
        } else {
            res.status(200).json({
                success: true,
                data: {
                    msg: "This account is not active or does not exist !"
                },
                code: 500
            })
        }
    } else {
        res.status(200).json({
            success: true,
            data: {
                valid: false,
                msg: "This account does not exists"
            },
            code: 406
        })
    }
}

module.exports = {
    resetPwd
}