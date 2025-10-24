var input
var list
var value
function getToDo() {
    input = document.getElementById("input");

    value = input.value

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
    edit.disabled = true
    var updatedValue = edit.value

    
    event.target.innerHTML = "Edit"
    
    event.target.setAttribute("onclick", "editToDo(event)")
    
    return updatedValue
}








function enterToDo(event) {
    if (event.keyCode === 13) {
        getToDo()
    }


}






function removeToDo(event) {

    event.target.parentNode.remove()



}