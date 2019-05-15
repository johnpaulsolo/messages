const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type AuthData {
        username: String
        token: String
    }

    type AllQueries {
        login(Username: String, Password: String): AuthData
        chat(uid: String): AuthData
    }

    schema {
        query: AllQueries
    }
`)