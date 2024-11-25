
$(document).ready(function () {
  console.log('jQuery toimii!');

  $('#addTask').click(function () {
    console.log('Add Task -nappia klikattiin');
    const taskText = $('#taskInput').val().trim();

    if (taskText) {
      const task = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${taskText}</span>
          <div>
            <button class="btn btn-sm btn-success complete">Complete</button>
            <button class="btn btn-sm btn-danger delete">Delete</button>
          </div>
        </li>`;
      $('#taskList').append(task);
      $('#taskInput').val('');
    } else {
      alert('Please enter a task!');
    }
  });

  $(document).on('click', '.complete', function () {
    $(this).closest('li').toggleClass('completed');
  });

  $(document).on('click', '.delete', function () {
    $(this).closest('li').fadeOut(300, function () {
      $(this).remove();
    });
  });
});
