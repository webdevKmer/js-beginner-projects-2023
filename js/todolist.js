const todoInput = document.getElementById('todo-input')
const addTodoBtn = document.getElementById('todo-btn')
const clearBtn = document.getElementById('clear-btn')
const todolistElt = document.querySelector('.todolist')
const todosNumberElt = document.getElementById('todos-nbr')

let todoList = []

addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (todoInput.value){
        todoList.push(todoInput.value)
        todosNumberElt.innerText = todoList.length
    }
    todolistElt.innerHTML = todoList.map((elt) => {
        return `<li>${elt}</li>`
    })
    todoInput.value = ""
    
    console.log(todoList);
})

clearBtn.addEventListener('click', () => {
    console.log('clear...');
    todoList = []
    todolistElt.innerHTML = '<h5>No Todos to show...</h5>'
    todosNumberElt.innerText = todoList.length
})