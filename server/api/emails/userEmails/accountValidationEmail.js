
const accountValidation = (token) => {
    let msg = `Hello ! \n  \
    \n Here is your activation link : \
    \n  ${process.env.URL_BACKEND + ":" + process.env.URL_BACKEND_PORT + "/api/v1/users/validation/" + token} \
    \n MUSICROOM TEAM`

    return msg
}

module.exports = {
    accountValidation
}