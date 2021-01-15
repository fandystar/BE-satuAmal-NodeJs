const {tokenVerifier} = require('../helpers/jwt');

exports.Authentication = (req, res, next)=>{
    const token = req.headers.access_token;    
    if(!token) {
        res.status(400).json({
            success: false,
            message: "Token is not found",
        });        
    } else {
        try{
            const decoded = tokenVerifier(token);           
            res.userData = decoded;
            next()
        } catch(err) {
            next(err);
        }
    }
}
