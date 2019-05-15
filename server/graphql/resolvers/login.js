const jwt = require('jsonwebtoken');

module.exports = {
    login: (args) => {
        console.log(args);
        const token = jwt.sign({Username: args.Username, Password: args.Password}, 'chatroomsecretkey'    , {
            expiresIn: '1h'
        });

        return {
            username: args.Username,
            token: token,
            expiration: 1
        }
    }
}