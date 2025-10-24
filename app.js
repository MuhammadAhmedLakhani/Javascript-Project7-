var input
var list
var value
function getToDo() {
    
    input = document.getElementById("input");

    value = input.value.trim()

    console.log(value,"value")

    if(value === ""){
        alert("empty")
        return
    }

    

    list = document.getElementById("list")
    list.innerHTML += `<li > <input  value = ${value} disabled  > <button id = "delete" onclick = "removeToDo(event)">Delete</button><button onclick="editToDo(event)"> Edit </button></li>  `

    input.value = ""

}

function editToDo(event) {
    var edit = event.target.parentNode.childNodes[1]
    edit.disabled = false
    edit.focus()
    event.target.innerHTML = "Update"

    event.target.setAttribute("onclick", "updateToDo(event)")

}

function updateToDo(event) {
    var edit = event.target.parentNode.childNodes[1];
    var updatedValue = edit.value
        
    edit.disabled = true
    
    event.target.innerHTML = "Edit"
    
    event.target.setAttribute("onclick", "editToDo(event)")

    edit.setAttribute("value",updatedValue)

    return updatedValue
}


function deleteAllToDo(){
    list.innerHTML = ""
}





function enterToDo(event) {
    if (event.keyCode === 13) {
        getToDo()
    }


}






function removeToDo(event) {

    event.target.parentNode.remove()


}