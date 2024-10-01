const express = require('express')
const path = require('path')
const app = express()


const PORT = 3000

app.use(express.json())  // Middleware para interpretar JSON en el body de las solicitudes

let tasks = []


// Main Route

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public' ,'index.html')) // configuracion de la ruta del directorio
})

// Añadir tarea (POST)

app.post('addTask', (req, res) => {
    const {id, description } = req.body // Obtener info del cuerpo del documento
    const newTask = { id, description, complete: false }; 
    tasks.push(newTask)
    res.status(201).json( { mensaje: 'Taks create with exit!', tarea: newTask} )
})

// Obtener todas las tareas (GET)

app.get('/getTasks', (req, res) => {
    res.json(tasks);
})

// Obtener una tarea (GET)

app.get('/getTask/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id))
    if (!task){
        return res.status(404).json({ mensaje: 'Task not found'})
    }

    res.json(task)

})

// Actualizacion de tarea (PUT)

app.put('/task/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id))
    if(!task){
        return res.status(404).json({ mensaje: 'Task not found to change ...'})
    } 

    const { description, complete } = req.body
    task.description = description !== undefined ? description : task.description
    task.complete = complete !== undefined ? complete : task.complete
    
    res.json({ mensaje: 'Exit task Update!'})
})



app.listen(PORT, () => {
    console.log(`Server listen on PORT: ${PORT}`)
})