const inputBox = document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container"); 

function addTask(event) {
    if (inputBox.value === ''){
        alert("Add a new task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        const todoDiv = document.createElement("div");
        li.appendChild(newTodo);
    }

    inputBox.value = "";
    saveData();
}

list-container.addEventListener("click", function(event){
    if(event.target.tagName === "li"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName === "+"){
        event.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
