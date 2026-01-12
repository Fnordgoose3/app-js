console.log("JS conectado!");

const input = document.getElementById('taskInput');
const button = document.getElementById('addBtn');
const list = document.getElementById('taskList');

button.addEventListener('click', addTask);

function addTask(){
    const text = input.ariaValueMax.trim();

    if (text === ""){
        alert("Digite alguma tarefa");
        return;
    }

    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);

    input.value = "";

    input.addEventListener('keypress', function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});


}