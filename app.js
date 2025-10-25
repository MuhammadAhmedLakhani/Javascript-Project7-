var input
var list
var value
var total = 0;
function getToDo() {

    input = document.getElementById("input");

    value = input.value.trim()


    if (value === "") {
        alert("empty")
        return
    }



    list = document.getElementById("list")
    list.innerHTML += `<li ><input onclick = "checkedToDo(event)" type = 
    "checkbox"> <input  value = ${value} disabled  > <button id = "delete" onclick = "removeToDo(event)">Delete</button><button onclick="editToDo(event)"> Edit </button></li>  `
    total++
    console.log(total, "total from get")
    pendingCounter()

    input.value = ""

}

function editToDo(event) {

    var edit = event.target.parentNode.childNodes[2]
    edit.disabled = false
    edit.setAttribute("class", "editInput")
    edit.focus()
    event.target.innerHTML = "Update"

    event.target.setAttribute("onclick", "updateToDo(event)")


}

function updateToDo(event) {
    var edit = event.target.parentNode.childNodes[2];
    var updatedValue = edit.value
    edit.setAttribute("class", "")

    edit.disabled = true

    event.target.innerHTML = "Edit"

    event.target.setAttribute("onclick", "editToDo(event)")

    edit.setAttribute("value", updatedValue)

    return updatedValue
}


function deleteAllToDo() {
    list.innerHTML = ""
}


function checkedToDo(event) {
    var inputLine;
    if (event.target.checked === true) {
        event.target.disabled = true
        inputLine = event.target.parentNode.childNodes[2]

        inputLine.setAttribute("class", "linethough")
        console.log("completed")
        completeCounter()
        var pendingE = document.getElementById("pendingC");
        pendingE.childNodes[3].innerHTML = `<h3>${--pending}</h3>`


    }
}


function enterToDo(event) {
    if (event.keyCode === 13) {
        getToDo()
    }


}





var status = "normal"
function removeToDo(event) {

    event.target.parentNode.remove()
    --total
    console.log(total, "total from remove")
    if (pending > 0) {
        pendingCounter()
    }
    --count
    status = "remove"
    completeCounter()

}


var count = 0
function completeCounter() {
    if (status === "remove") {
        console.log("if running")
        var complete = document.getElementById("complete");
        complete.childNodes[3].innerHTML = `<h3>${count}</h3>`
    } else {
        console.log("else")
        var complete = document.getElementById("complete");
        count++
        complete.childNodes[3].innerHTML = `<h3>${count}</h3>`
    }
}

var pending;
function pendingCounter() {
    var pendingE = document.getElementById("pendingC");
    pending = total - count;

    pendingE.childNodes[3].innerHTML = `<h3>${pending}</h3>`


    console.log(total, "total from pending")
    console.log(pending, "pending")
    pendingE.childNodes[3].innerHTML = `<h3>${pending}</h3>`
}
