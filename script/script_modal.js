document.getElementById('todo-add').addEventListener('click',function (){
    let element = document.getElementById("modal")
    element.classList.add("show-modal")
})

document.getElementById('closeModal').addEventListener('click', function(){
    var element = document.getElementById("modal")
    element.classList.remove("show-modal")
})