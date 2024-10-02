document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    // Cargar tareas al inicio
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => renderTodos(data));
  
    // Enviar nueva tarea
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value.trim();
  
      if (text) {
        fetch('/api/todos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text })
        })
        .then(response => response.json())
        .then(newTodo => {
          renderTodos([newTodo], true);
          input.value = '';
        });
        
      }
    });
  
    // Renderizar lista de tareas
    function renderTodos(todos, append = false) {
      if (!append) todoList.innerHTML = '';  // Limpiar la lista si no se agrega
  
      todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.description;
        li.style.textDecoration = todo.completed ? 'line-through' : 'none';
        li.addEventListener('click', () => toggleComplete(todo.id, li));
        todoList.appendChild(li);
      });
    }
  
    // Alternar estado de completado
    function toggleComplete(id, li) {
      fetch(`/api/todos/${id}`, { method: 'PATCH' })
        .then(response => response.json())
        .then(updatedTodo => {
          li.style.textDecoration = updatedTodo.completed ? 'line-through' : 'none';
        });
    }
  });
  