
const accountValidation = () => {
    let msg = `Hello ! \n  \
    \n Here is your activation link : \
    \n  ${process.env.URL_BACKEND + ":" + process.env.URL_BACKEND_PORT} \
    \n MUSICROOM TEAM`

    return msg
}

module.exports = {
    accountValidation
}