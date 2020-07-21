const jwt = require('jsonwebtoken');
const accessTokenDao = require('../class/accessTokenClass');

module.exports = async (req, res, next) => {
    try {
        // const accessToken = new accessTokenDao();
        // if (req.headers.authorization == "") {
        //     res.status(401).json({
        //         message: "Not authorized attempt access, this incedent will be reported!"
        //     })
        // } else {
        //     const token = req.headers.authorization.split(" ")[1];
        //     const getAccessToken = jwt.decode(token);
        //     const tokenInfo = await accessToken.getTokenByAccessToken(getAccessToken.id)
        //     const decode = jwt.verify(tokenInfo, process.env.JWT_KEY);
        //     req.user = decode;
        //     next();
        // }
        req.user =  {id: "5f141ffe90684300473be91c"}
        next();

    } catch (error) {
        res.status(401).json({
            message: "Not authorized attempt access, this incedent will be reported"
        })
    }
}
