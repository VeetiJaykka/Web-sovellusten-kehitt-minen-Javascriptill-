
// This script can be added to the Todo-list project for localStorage persistence.

function saveTodoData(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodoData() {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

// Example usage in a Todo-list application
function addTodo() {
    const todoInput = document.getElementById("todoInput").value;
    if (!todoInput) return;

    const todos = loadTodoData();
    todos.push(todoInput);
    saveTodoData(todos);

    displayTodos();
}

function displayTodos() {
    const todos = loadTodoData();
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = todos.map(todo => `<li>${todo}</li>`).join("");
}

// Initialize the Todo list on page load
document.addEventListener("DOMContentLoaded", displayTodos);
    