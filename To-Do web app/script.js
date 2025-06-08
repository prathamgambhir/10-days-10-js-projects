document.addEventListener('DOMContentLoaded', () => {
    let submitButton = document.querySelector('#submit-task')
    let taskList = document.querySelector('.task-list')
    let reload = document.querySelector('#reload')

    let taskArr = JSON.parse(localStorage.getItem('task')) || [] //added or staatement as The HTML and JavaScript reload. taskArr becomes an empty array again (let taskArr = []).Nothing is rendered because the array is empty.You never read from localStorage to re-populate taskArr.

    taskArr.forEach((t)=> renderTask(t)) //this then reads the array that we made from localstorage and then put each task to render again

    submitButton.addEventListener('click' , function(e){
        let todoInput = document.querySelector('#task-input')
        let inputText = todoInput.value.trim()

        if(todoInput.value === "") return;

        const newTask = {
            id: Date.now(),
            text: inputText,
            isDone : false
        };

        taskArr.push(newTask)
        renderTask(newTask)
        storageInBrowser()
        todoInput.value = ""
    })
    
    function renderTask(task){
        let li = document.createElement('li')
        li.setAttribute('id' , task.id)
        // li.classList.add('userTasks')
        li.innerHTML = `<span><span id='cut'>${task.text}</span><span id='tick'></span></span><button>&#128465</button>`
        let span = li.querySelector('#cut')
        let tick = li.querySelector('#tick')
        if(task.isDone){
            span.classList.add('task')
        }
        
        
        taskList.appendChild(li)
        
        li.addEventListener('click' , (event) => {
            if(event.target.tagName === 'BUTTON'){
                // taskArr = taskArr.filter((t)=> t.id != li.id) //didnt used li.id as it is a string type so can use with != not !== otherwise li.id is same as task.id
                taskArr = taskArr.filter((t)=> t.id != task.id)                
                li.remove()
                storageInBrowser()
                return
            }
            task.isDone = !(task.isDone)
            if(task.isDone == true){
                tick.innerHTML = `\u2713`
            }else{
                tick.innerHTML = ''
            }
            span.classList.toggle('task')
            storageInBrowser()
        })

        reload.addEventListener('click' , function(retry){
            taskArr = []
            taskList.innerHTML = ''
            storageInBrowser()
        })
    }


    function storageInBrowser (){
        localStorage.setItem('task' , JSON.stringify(taskArr))
    }
})
