let todoList = []
const todoSection  = document.getElementById('todo-list')

document.getElementById("send-data").addEventListener('click', function(){
        todoList.push(details = {
            title: document.getElementById("titleTodo").value,
            description: document.getElementById('descriptioTodo').value,
            checkbox: document.createElement ('div'),
            geral: document.createElement('div'),
            span: document.createElement('span')
        })
        
    let pTitle = document.createElement('p')
    pTitle.classList.add('todo-title')
    pTitle.innerText = details.title
    if(document.getElementById("titleTodo").value === ''){
        //if vazio pois no form  ja diz que é obrigatório o campo de titulo
    }else{        
        let div = document.createElement('div')
        div.classList.add('todoItem')

        let pDescription = document.createElement('p')
        pDescription.innerText = details.description
        pDescription.classList.add('todo-description')

        let span = details.span
        span.classList.add('spanInput')

        let divCheckBox = details.checkbox
        divCheckBox.classList.add('checkBox')
        divCheckBox.append(span)

        let divGeral = details.geral
        divGeral.classList.add('tesk')

        divGeral.append(pTitle, pDescription, divCheckBox)
        todoSection.append(divGeral)


        let teskDiv = document.querySelectorAll('div.tesk')
        
        teskDiv.forEach(function(element){
            element.addEventListener('click',clickTodo)
        })
        
        clearForm()

        let element = document.getElementById("modal")
        element.classList.remove("show-modal")
    }
})

function clickTodo(event) {
    const item = event.target.closest('.tesk');
    deletetodo(item);
  }

function deletetodo(element){
    todoSection.removeChild(element)
}

function clearForm(){
    document.getElementById("titleTodo").value = ''
    document.getElementById('descriptioTodo').value = ''
}
