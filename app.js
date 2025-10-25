var input
var list
var value
function getToDo() {
    
    input = document.getElementById("input");

    value = input.value.trim()


    if(value === ""){
        alert("empty")
        return
    }

    

    list = document.getElementById("list")
    list.innerHTML += `<li ><input onclick = "checkedToDo(event)" type = 
    "checkbox"> <input  value = ${value} disabled  > <button id = "delete" onclick = "removeToDo(event)">Delete</button><button onclick="editToDo(event)"> Edit </button></li>  `

    input.value = ""

}

function editToDo(event) {
    
    var edit = event.target.parentNode.childNodes[2]
    edit.disabled = false
    edit.setAttribute("class","editInput")
    edit.focus()
    event.target.innerHTML = "Update"

    event.target.setAttribute("onclick", "updateToDo(event)")


}

function updateToDo(event) {
    var edit = event.target.parentNode.childNodes[2];
    var updatedValue = edit.value
    edit.setAttribute("class","")

    edit.disabled = true
    
    event.target.innerHTML = "Edit"
    
    event.target.setAttribute("onclick", "editToDo(event)")

    edit.setAttribute("value",updatedValue)

    return updatedValue
}


function deleteAllToDo(){
    list.innerHTML = ""
}


function checkedToDo(event){
    var inputLine;
    if(event.target.checked === true){
        inputLine = event.target.parentNode.childNodes[2]
        inputLine.setAttribute("class","linethough")
        console.log(inputLine)

    }
    console.log("Checked")
}


function enterToDo(event) {
    if (event.keyCode === 13) {
        getToDo()
    }


}






function removeToDo(event) {

    event.target.parentNode.remove()


}