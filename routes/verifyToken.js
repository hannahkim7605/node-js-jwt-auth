const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    const token = req.header("auth-token");
    // The HTTP 401 Unauthorized client error status response code indicates that 
    // the request has not been applied because it lacks valid authentication credentials for the target resource.
    if (!token) return res.status(401).send("Access Denied");
    
    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        // Returns the payload decoded if the signature is valid and optional expiration, audience, or issuer are valid.
        // If not, it will throw the error.
        req.user = verified;
        next();
    } catch(erorr) {
        res.status(400).send("Invalid Token");
    }
}