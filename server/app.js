//Created By : John Paul Solo
//Description : "Backend/Server for socketed Messages and users"
const { express, parser } = require('./packages/index');

const App = express();

const server = App.listen(3001 , function() {
    console.log('working');
});

const io = require('socket.io')(server);

io.on('connection', function(socket) {
    console.log(socket.id)
    socket.on('SEND_MESSAGE', function(data) {
        io.emit('MESSAGE', data)
    });
});