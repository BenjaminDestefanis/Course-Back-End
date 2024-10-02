const express = require("express")
const router = express.Router()


let listTasks = [{id: 789, description: 'Tocar muscia', completed: false}]

// Obtener todas las tareas (GET) --

router.get('/', (req, res) => {
    console.log('GET ALL')
    res.json(listTasks);
})


// Main Route --

/* app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public' ,'index.html')) // configuracion de la ruta del directorio
}) */

// Añadir tarea (POST) --

router.post('/', (req, res) => {
    console.log("POST")
    const newTask = {
        id: Date.now(),
        description: req.body.text,
        completed: false
    }
    
    listTasks.push(newTask)
    res.json(newTask)
    console.log(newTask)
})

// Funcion completar tarea

router.patch('/:id', (req, res) => {
    const todoId = Number(req.params.id)
    const todoFound = listTasks.find(t => t.id === todoId)
    if(todoFound){
        todoFound.completed = !todoFound.completed
        res.json({ message: 'Tarea Actualizada', Completada: todoFound.completed})
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
    const todoId = Number(req.params.id)
    listTasks = listTasks.filter(t => t.id !== todoId)
    res.json({message: 'Tarea eliminada'})
})

module.exports = router