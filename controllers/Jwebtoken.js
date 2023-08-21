const {sign, verify} = require('jsonwebtoken');

const createToken = (User) => {
    const accessToken = sign(
        {username: User.username, id: User.id}, "SECRETTTT", {
            expiresIn: 60 * 60 * 24,
        }
    )
    return accessToken;
}
const validateToken = (req,res,next) => {
    const accessToken = req.cookies['access-token'];

    if(!accessToken)
    return res.status(400).json({error: "User Not Authenticated"})
try {
    const validToken = verify(accessToken, "SECRETTTT");
    if(validToken){
        req.authenticated = true;
        return next();
    }
} catch (error) {
    return res.status(400).json({error: error})
}
}



module.exports = {createToken, validateToken}