const { express }   = require('../../packages/index');
const App           = express();

const server = App.listen(3010 , function() {
    console.log('working');
});

const io = require('socket.io')(server);

io.on('connection', function(socket) {
    console.log(socket.id)
    socket.on('SEND_MESSAGE', function(data) {
        io.emit('MESSAGE', data)
    });
});

module.exports = {
    chat: (args, req) => {
        if (!req.isAuth) {
            throw new Error('Unauthorized')
        }
    }
}