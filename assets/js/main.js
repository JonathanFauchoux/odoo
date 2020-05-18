//todo
let taskUl = document.querySelector('ul#tasks');
let taskInput = document.querySelector('input#task');
let form = document.querySelector('form#taskForm');
let tasksArray = [];


populateTasksArray();
getTasks();
addRemoveTaskClickEvents();
addInputDblClickEvents();


form.addEventListener('submit', function(e){
  e.preventDefault();
  
  if(taskInput.value !== "")tasksArray.push(taskInput.value);
  
  taskInput.value = "";
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
  getTasks();
  addRemoveTaskClickEvents();
  addInputDblClickEvents();
  

})

function getTasks(){
  if(tasksArray.length > 0){
    taskUl.innerHTML ="";
    tasksArray.forEach((task, index) => {
      let li = document.createElement('li');
      li.innerHTML =`
      <input type="checkbox" />
      <span class="checkmark"></span>
      <input type="text" value=${task} readonly />
          
    
      <button class="removeTask" ><i class="fas fa-trash"></i></button>
  `;
      li.classList.add('list-group-item');
      li.setAttribute('data-id', index);
      taskUl.appendChild(li);
    });
  }
 
}

function populateTasksArray(){
  if(localStorage.getItem("tasks") !== null){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(task => {
      tasksArray.push(task);
    })
  }
}
function addInputDblClickEvents(){
  let inputs = document.querySelectorAll('ul#tasks input[type="text"]');
  //console.log(inputs);

  inputs.forEach(input => {
    input.addEventListener('dblclick', function(e){
      e.target.removeAttribute('readonly')
      
    });
    input.addEventListener('blur', function(e){
      e.target.setAttribute('readonly', true)
    });
    input.addEventListener('change', function(e){
      let index = e.target.parentElement.dataset.id;
      //console.log( index )
      tasksArray[index] = e.target.value;
      localStorage.setItem('tasks', JSON.stringify(tasksArray));
    })
  })

}

function addRemoveTaskClickEvents(){
  let spans = document.querySelectorAll('ul#tasks button.removeTask');
  
  spans.forEach(span => {
    span.addEventListener('click', function(e){
      console.log(span);
        let removeSpan = e.target.parentElement;
        let index = e.target.parentElement.dataset.id;
        tasksArray.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
        removeSpan.parentElement.remove();

    })
  })
}


