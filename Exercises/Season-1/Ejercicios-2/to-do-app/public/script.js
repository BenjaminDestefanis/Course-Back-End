const apiURL = 'http://localhost:3000/taks'

document.getElementById('create-task-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const id =          document.getElementById('task-id').value
    const description = document.getElementById('task-description').value
    const completed   = document.getElementById('task-completed')

    fetch(apiURL, {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: parseInt(id), description})
    })

    .then(response => response.json())
    .then(data => {

    })
})



const getTasks = () => {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const taskList = documet.getElementById('list-tasks')
            taskList.innerHTML = ''

            data.foreach(t => {
                const li = document.createElement('li')
                li.textContent = `ID: ${t.id}, Descripcion: ${t.description}, Completada: ${t.completed}`
            })
        })
}