const express = require('express')
const path = require('path')
const todosRouter = require('./routes/todos')
const app = express()

app.use(express.json())  // Middleware para interpretar JSON en el body de las solicitudes --
app.use(express.static(path.join(__dirname, '../public'))) // Indica al servidor el uso de archivos estaticos --
app.use('/api/todos', todosRouter) // Indica al servidor, que utilizara las rutas

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server listen on PORT: ${PORT}`)
})






