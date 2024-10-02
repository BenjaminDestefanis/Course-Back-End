const express = require("express")
const router = express.Router()


let listTasks = []

// Obtener todas las tareas (GET) --

router.get('/', (req, res) => {
    res.json(listTasks);
})


// Main Route --

/* app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public' ,'index.html')) // configuracion de la ruta del directorio
}) */

// Añadir tarea (POST) --

router.post('/', (req, res) => {

    const newTask = {
        id: Date.now(),
        description: req.body.text,
        completed: false
    }
    
    tasks.push(newTask)
    res.status(201).json( { mensaje: 'Taks create with exit!', tarea: newTask} )
})

// Funcion completar tarea

router.patch('/:id', (req, res) => {
    const todoId = Number(req.params.id)
    const todoFound = listTasks.find(t => t.id === todoId)

    if(todoFound){
        todoFound.completed = !todoFound.completed
        res.status(201).json({ message: 'Tarea Actualizada', Completada: todoFound.completed})
    } else {
        res.status(404).json({ message : 'Tarea no encontrada'})
    }
})

// Obtener una tarea (GET)

/* app.get('/getTask/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id))
    if (!task){
        return res.status(404).json({ mensaje: 'Task not found'})
    }

    res.json(task)

}) */

// Actualizacion de tarea (PUT)

/* app.put('/task/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id))
    if(!task){
        return res.status(404).json({ mensaje: 'Task not found to change ...'})
    } 

    const { description, complete } = req.body
    task.description = description !== undefined ? description : task.description
    task.complete = complete !== undefined ? complete : task.complete
    
    res.json({ mensaje: 'Exit task Update!'})
}) */

// Eliminar una tarea (DELETE)

router.delete('/:id', (req, res) => {
    const idToEliminated = listTasks.find(t => t.id === parseInt(req.params.id))
    if(idToEliminated === -1){
        return res.status(404).json({ mensaje: 'Task not found to delete ...'})
    }

    tasks.splice(idToEliminated, 1)
    res.json({ mensaje: 'Task Eliminated !'})
})