const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHead = req.get('Authorization');

    if (!authHead) {
        req.isAuth = false;
        return next();
    }

    const token = authHead.split(' ')[1];

    if (!token || token ==='') {
        req.isAuth = false;
        return next();
    }

    let decodedToken;

    try {
        decodedToken = jwt.verify(token, 'chatroomsecretkey');
    } catch (error) {
        req.isAuth = false;
        return next();
    }
}