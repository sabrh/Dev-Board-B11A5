const completedBtn=document.querySelectorAll(".completed-btn");
const assignedTask=document.getElementById("assign-task");
const doneTask=document.getElementById("done-task");

const activityLog=document.getElementById("complete-tasks");
const clearHistory=document.getElementById("clear-history");

const boardUpdate = (event) =>{
    alert("Board updated successfully!");

    let pending=parseInt(assignedTask.textContent);
    let done=parseInt(doneTask.textContent);

    assignedTask.textContent= pending > 0 ? pending - 1 : 0;
    doneTask.textContent=done+1;

    const taskCard=event.target.closest(".task-parent");

    const taskTitles = taskCard.querySelectorAll(".task");

    taskTitles.forEach(task => {
        const currentTime=new Date();
        const timeFormat=currentTime.toLocaleDateString('en-US' , {
            hour:'2-digit',
            minute:'2-digit',
            hour12: true,

});
        const logEntry = document.createElement("p");
        logEntry.textContent = "You have completed the task "+task.innerText+" at "+ timeFormat;

        activityLog.appendChild(logEntry);
    });

    if(assignedTask.textContent==0){
        alert("Congrats!! You have completed all the current tasks");
    }

    event.target.disabled=true;

};

completedBtn.forEach(button =>{
    button.addEventListener('click', boardUpdate);
});

clearHistory.addEventListener('click', () => activityLog.innerHTML="");