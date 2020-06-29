const mongoose = require('mongoose');

async function AccountValidate(data, code) {
    return new Promise((resolve, reject) => {
        resolve({
            _id: new mongoose.Types.ObjectId,
            fullname: data.fullname,
            email: data.email,
            validationCode: code
        })
    })

}

module.exports = {
    AccountValidate
}