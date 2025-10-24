var input
var list
function getToDo() {
     input = document.getElementById("input");

    var value = input.value

    list = document.getElementById("list")
    list.innerHTML += `<li > ${value} <button id = "delete" onclick = "removeToDo(event)">Delete</button></li> ` 

    input.value = ""

}

function enterToDo(event){
    if(event.keyCode === 13){
        getToDo()
    }


}






function removeToDo(event){
    
    event.target.parentNode.remove()
    
    

}