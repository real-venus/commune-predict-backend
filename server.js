const websocekt = require('./ws');
let realTimeTokens;

const getRealData = (data) => {
    realTimeTokens = data;
}

websocekt.getRealTimeData(getRealData);

exports = module.exports = server = (io) => {
    io.on('connection', (socket) => {
        console.log(`--- A socket ${socket.id} connected! ---`);

        setInterval(() => {
            socket.emit('realTimeData', realTimeTokens);
        }, 1000);

        socket.on('disconnect', () => {
            console.log('disconnected');
        });
    });
}