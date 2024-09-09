const todoList = [];

            renderTodoList();

            function renderTodoList() 
            {
                let todoListHTML= '';

                //This is how we can loop through an array using 'forEach' function
                todoList.forEach(function(todoObject, index) {
                    const name = todoObject.name;

                    const dueDate = todoObject.dueDate;

                    const html = `
                        <div class="taskname">
                            ${name} 
                        </div>

                        <div class="due-date"> 
                            ${dueDate} 
                        </div>
                                          
                        <button class="delete-button"
                            onclick="
                                todoList.splice(${index}, 1);
                                renderTodoList();
                        "> Delete </button>                     
                    `; //This method is called generating html method. In this we write html in js and send it to the html
                    todoListHTML += html;
                });
                
                console.log(todoListHTML);

                document.querySelector('.js-todo-list').innerHTML = todoListHTML;
            }
            

            document.querySelector('.js-add-button').addEventListener('click', () => {
                addTodo();
            });


            function addTodo() {
                const inputElement = document.querySelector('.js-name-input');
                const name = inputElement.value;

                const dateInputElement = document.querySelector('.js-due-date-input');
                const dueDate = dateInputElement.value;
                
                todoList.push({
                    name: name,
                    dueDate: dueDate
                });
                console.log(todoList);

                inputElement.value= '';
                //This will clear whatever is written in the box after we click on add

                renderTodoList();
            }