// getting all required elements
const inputbox = document.querySelector(".inputfield input");
const addbtn = document.querySelector(".inputfield button");
const todolist = document.querySelector(".todolist");
const deleteall = document.querySelector(".footer button");
inputbox.onkeyup = () => {
    let userdata = inputbox.value; // 
    // getting user entered value;
    if (userdata.trim() != 0) {
        addbtn.classList.add("active");
    }
    else {
        addbtn.classList.remove("active");
    }
}
// let listarr;
addbtn.onclick = () => {
    // addbtn.classList.remove("active");

    let userdata = inputbox.value;
    let gellocalstorage = localStorage.getItem("New Todo");
    if (gellocalstorage == null) {
        listarr = [];
    }
    else {
        listarr = JSON.parse(gellocalstorage);
    }

    listarr.push(userdata);
    localStorage.setItem("New Todo", JSON.stringify(listarr));
    showTasks();
}

// function to add tasks in ul
function showTasks() {
    // let userdata = inputbox.value;
    let gellocalstorage = localStorage.getItem("New Todo");
    if (gellocalstorage == null) {
        listarr = [];
    }
    else {
        listarr = JSON.parse(gellocalstorage);
    }
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listarr.length;
    if (listarr.length > 0) {
        deleteall.classList.add("active2");
    }
    else {
        deleteall.classList.remove("active2");

    }
    let newlitag = '';
    listarr.forEach((element, index) => {
        newlitag += `<li> ${element} <span onclick = "deleteTask(${index})"; ><i class="fa fa-trash-o"></i></span> </li>`;
    });
    todolist.innerHTML = newlitag;
    addbtn.classList.remove("active");
    addbtn.classList.remove("active");
    inputbox.value = "";
    // localStorage.setItem("New Todo", JSON.stringify(listarr));
}
function deleteTask(index) {
    let gellocalstorage = localStorage.getItem("New Todo");
    listarr = JSON.parse(gellocalstorage);
    listarr.splice(index, 1);

    // after removing
    localStorage.setItem("New Todo", JSON.stringify(listarr));
    showTasks();
}

deleteall.onclick = () => {
    listarr = [];
    localStorage.setItem("New Todo", JSON.stringify(listarr));
    showTasks();
}