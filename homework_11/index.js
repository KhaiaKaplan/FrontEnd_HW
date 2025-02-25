const formElement = document.getElementById("form");
const listElement = document.getElementById("task-list");
const clearAllBtnElement = document.getElementById("clear-all");
const clearOneBtnElement = document.getElementById("clear-one");


const tasks = [];

const clearAll = function(){
    while (listElement.hasChildNodes()){ 
        listElement.firstChild.remove(); 
    }
}

const clearOne = function(){
    if (listElement.hasChildNodes()){
        listElement.firstChild.remove();
    }
}

function clearInputs(event){
    event.target.task.value = "";

}

function changeStatus(event){
    if(event.target.style.textDecoration ==="line-through"){
        event.target.style.textDecoration = "none";
    } else{
        event.target.style.textDecoration = "line-through";
    }
}

clearAllBtnElement.addEventListener("click",clearAll);
clearOneBtnElement.addEventListener("click",clearOne);

formElement.addEventListener("submit",(event)=>{
    event.preventDefault(); 
    const task = {
        name: event.target.task.value,
    };
    tasks.push(task);
    
    const liElement = document.createElement("li");
    liElement.textContent = `${task.name}📝`;
    liElement.onclick = changeStatus;
    listElement.append(liElement); 
    clearInputs(event);
});
