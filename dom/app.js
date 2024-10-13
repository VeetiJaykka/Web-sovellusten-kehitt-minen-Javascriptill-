document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.querySelector('form');
    const taskInput = document.querySelector('input[type="text"]');
    const taskList = document.querySelector('ul');
    const errorMessage = document.getElementById('error-message');

    // Ladataan tehtävät localStoragesta, jos niitä on
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => addTaskToDOM(task.text, task.completed));

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const taskText = taskInput.value.trim();

        if (validateTask(taskText)) {
            addTaskToDOM(taskText);
            saveTask(taskText);
            taskInput.value = ''; // Tyhjennetään syöttökenttä
        }
    });

    // Lisää tehtävä DOM:iin
    function addTaskToDOM(taskText, isCompleted = false) {
        const li = document.createElement('li');
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        // "Merkitse tehdyksi" painike
        const completeButton = document.createElement('button');
        completeButton.textContent = isCompleted ? 'Tehty' : 'Merkitse tehdyksi';
        completeButton.addEventListener('click', function () {
            li.classList.toggle('completed');
            updateTaskStatus(taskText, li.classList.contains('completed'));
        });

        // "Poista" painike
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Poista';
        deleteButton.addEventListener('click', function () {
            li.remove();
            removeTask(taskText); // Poista tehtävä localStoragesta
        });

        // Lisätään elementit DOM:iin
        li.appendChild(taskContent);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        if (isCompleted) {
            li.classList.add('completed');
        }
        taskList.appendChild(li);
    }

    // Validointi: tarkistetaan syötetty teksti
    function validateTask(taskText) {
        if (taskText === '' || taskText.length < 3) {
            showError('Tehtävän nimi on liian lyhyt (vähintään 3 merkkiä).');
            return false;
        }
        hideError();
        return true;
    }

    // Näytä virheilmoitus
    function showError(message) {
        errorMessage.textContent = message;
    }

    // Piilota virheilmoitus
    function hideError() {
        errorMessage.textContent = '';
    }

    // Tallenna tehtävä localStorageen
    function saveTask(taskText) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ text: taskText, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Poista tehtävä localStoragesta
    function removeTask(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task.text !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Päivitä tehtävän tila (tehty tai ei)
    function updateTaskStatus(taskText, isCompleted) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = tasks.map(task => {
            if (task.text === taskText) {
                return { ...task, completed: isCompleted };
            }
            return task;
        });
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
});
