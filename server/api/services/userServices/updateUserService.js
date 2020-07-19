const userDao = require('../../daos/userDao/userDao');

const updateUserData = (id, updateUser, res) => {
    userDao.updateUserData(id, updateUser).then(data => {
        if (data) {
            res.status(200).json({
                success: true,
                data: {
                    user: data
                },
                code: 200
            })
        } else {
            res.status(200).json({
                success: false,
                data: {
                    msg: "User not found"
                },
                code: 202
            })
        }
    }).catch(err => {
        res.status(200).json({
            success: false,
            data: {
                msg: "Error Unknow updateUser " + err
            },
            code: 444
        })
    })
}

const updateUserPassword = (id, updateUser, res) => {
    userDao.updateUserPassword(id, updateUser).then(data => {
        if (data) {
            res.status(200).json({
                success: true,
                data: {
                    user: data
                },
                code: 200
            })
        } else {
            res.status(200).json({
                success: false,
                data: {
                    msg: "User not found"
                },
                code: 202
            })
        }
    }).catch(err => {
        res.status(200).json({
            success: false,
            data: {
                msg: "Error Unknow updateUser " + err
            },
            code: 444
        })
    })
}

module.exports = {
    updateUserData,
    updateUserPassword
}