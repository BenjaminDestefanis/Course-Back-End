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
    const cpuLoad = os.loadavg()
    const totalMemory = os.totalmem()
    const freeMemory = os.freemem()
    const diskUsage = 20

    return {
        platform: platform,
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