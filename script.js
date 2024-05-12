const inputBox = document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container"); 

function addTask() {
    if (inputBox.value === ''){
        alert("Add a new task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        var img = document.createElement("img");
        img.src = "assets/delete.png";
        li.appendChild(img);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "li"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "img"){
        e.target.parentElement.remove();
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