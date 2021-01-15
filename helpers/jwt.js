const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

const tokenGenerator = (donatur)=>{
    const { _id, email } = donatur;

    return jwt.sign(
        {
            _id,
            email,
        },
        secretKey
    );
}

const tokenVerifier = (token) => {
    return jwt.verify(token, secretKey);
}

module.exports = {
    tokenGenerator,
    tokenVerifier
}
