const jwt = require('jsonwebtoken')

const jwtAuthMiddleware = (req, res, next) => {
    // extract token from request
    const token = req.headers.authorization.split(' ')[1]
    if(!token){
        res.status(401).json({
            success : false,
            message : "Unauthorized!"
        })
    }
    
    try{
        // verify the JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECREAT);
        req.user = decoded;
        next();
    }
    catch(err){
        console.log(err);
        res.status(401).json({error: 'Invalid token!'})
    }
}

const generateJwtToken = (userData) => {
    return jwt.sign(userData, process.env.JWT_SECREAT);    
}


module.exports = {jwtAuthMiddleware, generateJwtToken}