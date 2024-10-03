const express = require("express")
const http = require("http")
const socketIo = require("socket.io")
const os = require("os")

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

const PORT = process.env.PORT || 3400

app.use(express.static('../frontend/public'))

const getSystemData = () => {
    const platform = os.platform()
    const typeOs = os.type()
    const upTime = os.uptime()
    const arquitecture = os.arch()
    const cpuModel = os.cpus()[0].model;
    const cpuLoad = os.loadavg()
    const ethernetInfo = os.networkInterfaces().Ethernet
    const totalMemory = os.totalmem()
    const freeMemory = os.freemem()
    const diskUsage = 20

    //console.log(ethernetInfo)

    return {
        platform: platform,
        type: typeOs,
        uptime: upTime,
        arch: arquitecture,
        ip: ethernetInfo[1].address,
        cpumodel: cpuModel,
        cpuLoad: cpuLoad[0],
        totalMemory,
        freeMemory,
        diskUsage
    }
}

setInterval(() => {
    io.emit('systemData', getSystemData())
}, 2000)

io.on('connection', (socket) => {
    console.log('Cliente conectado')
})

server.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))