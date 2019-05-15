const login     = require('./login');
const chat      = require('./chat');

const rootResolver = {
    ...login,
    ...chat
}

module.exports = rootResolver;