export default function authHeader(token) {
    console.log("token :", token)
    if (token !== null) {
        if (token.length !== 0) {
            return { "Authorization": "Bearer " + token };
        } else {
            return {};
        }
    }

}