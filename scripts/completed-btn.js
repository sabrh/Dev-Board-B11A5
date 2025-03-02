const completedBtn=document.querySelectorAll(".completed-btn");
const assignedTask=document.getElementById("assign-task");
const doneTask=document.getElementById("done-task");

const boardUpdate = (event) =>{
    alert("Board updated successfully!");

    let pending=parseInt(assignedTask.textContent);
    let done=parseInt(doneTask.textContent);

    assignedTask.textContent= pending > 0 ? pending - 1 : 0;
    if(assignedTask.textContent==0){
        alert("Congrats!! You have completed all the current tasks");
    }

    doneTask.textContent=done+1;

    event.target.disabled=true;
};

completedBtn.forEach(button =>{
    button.addEventListener('click', boardUpdate);
});