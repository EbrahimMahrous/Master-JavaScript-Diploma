

/*
    Steps (Algorithm):
    1. Create array to store todos.
    2. when we ckick "Add",
    3. Get text from textbox.
    4. Add it to array.
    5. console.log() the array.
*/

// Loops ==> let us run some code over and over.

/*
    steps (Algorithm)
    1. Loop through the array.
    2. create some Html code for each todo.
    3. Put the Html on web page.
*/
    // Main Idea of JavaScript  1. Save the data.  2. Generate HTML. 3. Make it interactive.

    // How do we group the name and due date together? 
    // Using Object.

    const todoList = [{
        name: 'Make Dinner',
        dueDate: '2022-12-22'
    },{
        name: 'Wish Dinner',
        dueDate: '2022-12-22'
    }]                          


    renderTodoList ()

    function renderTodoList(){

        let todoListHTML = ''


        todoList.forEach((todoObject, index) => {
            // const todoObject = todoList[i]
            // const name = todoObject.name
            // const dueDate = todoObject.dueDate                                            
            const { name, dueDate } = todoObject        // Destruture ==> Takes the name property out of the object and puts it in a varriable.

            const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button js-delete-todo-button">Delete</button> 
            `                                       
            todoListHTML += html    
        })


        // for(let i =0; i < todoList.length; i++){
        //     const todoObject = todoList[i]
        //     // const name = todoObject.name
        //     // const dueDate = todoObject.dueDate                                            
        //     const { name, dueDate } = todoObject        // Destruture ==> Takes the name property out of the object and puts it in a varriable.

        //     const html = `
        //     <div>${name}</div>
        //     <div>${dueDate}</div>
        //     <button onclick="
        //         todoList.splice(${i}, 1)
        //         renderTodoList()
        //     " class="delete-todo-button">Delete</button> 
        //     `                                       
        //     todoListHTML += html                                                
        // }
        // console.log(todoListHTML)         

        document.querySelector('.js-todo-list').innerHTML = todoListHTML;
        // حلو اووي الكود دا
        document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
            // Closure ==>
            // if a function has access to a value, it will always access to that value.
            // value gets packaged together (enclosed) with the function.
            //console.log(index) // 0
                todoList.splice(index, 1)
                renderTodoList() 
            })
        })
        // console.log(index)  // error here
    }

    document.querySelector('.js-add-todo-button').addEventListener('click', () =>{
        addTodo();
    });

    function addTodo(){
        const inputElement = document.querySelector('.js-name-input')
        const name = inputElement.value
        const dataInputElement = document.querySelector('.js-due-data-input')

        const dueDate = dataInputElement.value
        console.log(name)

        todoList.push({
            // name: name,
            // dueDate: dueDate,
            name,
            dueDate
        })
        // console.log(todoList)

        inputElement.value = ''  // Very Nice 

        renderTodoList ()
    }

