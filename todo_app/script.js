const taskForm = document.querySelector("#todo-form");
const taskName = document.querySelector("#todo-form input[type='text']");
const taskList = document.querySelector(".tasks");
let taskId = 0;

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (taskName.value != "") {
        addTask();
    } else {
        alert("Please enter some task!!!");
    }

});

function addTask() {
    if(taskList.children.length > 0){
        taskId = taskList.children.length;
    }
    let taskStructure = `
        <li class="task" id="task-${taskId}">
            <p class="task-name"></p>
            <!-- task cta -->
            <div>
                <button class="task-cta task-done">done</button>
                <button class="task-cta task-edit">edit</button>
                <button class="task-cta task-remove">delete</button>
                <button class="task-cta task-undo">undo</button>
            </div>
        </li>
`;
    taskList.insertAdjacentHTML("beforeend", taskStructure);

    // inserting markup first then selecting p tag
    // inserting task box value as a text there if we would insert it directly with taskStructure
    // it will work like an html ( malesious html could be inserted by the user)
    document.querySelector(`#task-${taskId} .task-name`).textContent = taskName.value;
    taskName.value = "";
}

taskList.addEventListener("click", (e) => {
    // indicating task done
    // disabling task done button
    if (e.target.classList.contains("task-done")) {
        e.target.parentElement.previousElementSibling.classList.add("completed")
        
        // disabling task done and edit button
        disableBtn([e.target,e.target.nextElementSibling])
        
        // showing undo buttton
        const undoBtn = document.querySelector(".task-undo");
        undoBtn.style.display = "block";


    } // removing task from the DOM 
    else if (e.target.classList.contains("task-remove")) {
        e.target.parentElement.parentElement.remove();

    } // undo task 
    else if (e.target.classList.contains("task-undo")) {
        // removing completed class from the task name
        e.target.parentElement.previousElementSibling.classList.remove("completed");

        // hiding undo button
        e.target.style.display = "none";

        // enabling done and edit buttons
        let taskDoneBtn = e.target.parentElement.children[0];
        enableBtn([taskDoneBtn,taskDoneBtn.nextElementSibling]);
    } 
    // edit task
    else if(e.target.classList.contains("task-edit")){
        taskName.value = e.target.parentElement.previousElementSibling.textContent;
        e.target.parentElement.parentElement.remove();
        alert("Edit your task and hit submit :)");
    } 
});

function disableBtn(args){
    args.forEach((btn)=>{
        btn.setAttribute("disabled", true);
        btn.classList.add("cta-disabled");
    });
}

function enableBtn(args){
    args.forEach((btn)=>{
        btn.classList.remove("cta-disabled");
        btn.removeAttribute("disabled");
    });
}