const userDao = require('../../daos/userDao/userDao');
const utils = require('../../utils/utils');

async function getContributorInfo(id, data, res) {
    console.log("data :", data);
    if (await userDao.ifContributorExist(data.contributor)) {
        res.status(200).json({
            success: false,
            data: {
                msg: "Contributor exists"
            },
            code: 200
        })
    } else {
        res.status(200).json({
            success: false,
            data: {
                msg: "Contributor does not exists"
            },
            code: 404
        })
    }
}


module.exports = {
    getContributorInfo
}