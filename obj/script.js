// let person = {
//     name: "John",
//     age: 30,
//     occupation: "Web Developer",
//     greeting() {
//       console.log("Hello, my name is " + this.name + " and I am a " + this.occupation);
//     }
// };

// function Person(name, age, occupation) {
//     this.name = name;
//     this.age = age;
//     this.occupation = occupation;
//     this.address = {
//         street: "",
//         city: "",
//         house: ""
//     }
//     this.greeting = function() {
//       console.log("Hello, my name is " + this.name + " and I am a " + this.occupation);
//     }
//   }
  
// let person2 = new Person("Kile", 10, "kid");
// let m = 'mom' in person2;
// let address = person2.address.city

// function makeUser(name, age) {
//     return {
//       name: name,
//       age: age
//     };
// }

// function User(name, age){
//     this.name = name;
//     this.age = age;
//     this.greeting = function() {

//     }
// }

// let user1 = makeUser("John", 30);
// let user2 = new User("George", 50);
  

// person.greeting()

// let menu = {
//     dish: 'Turkey',
//     price: 2000,
//     client: "Kile",
//     ingredients: 5,
//     dish2: "Carrot",
//     price2: 500
// }

// let keyOfMenu = Object.keys(menu);
// let valuesOfMenu = Object.values(menu);

// let entries = Object.entries(menu);
// console.log(entries);

// for (const key of keyOfMenu) {
//     if(isNaN(menu[key]) == false){
//         menu[key] *= 2;
//         console.log(key+': ' + menu[key]);
//     }else{
//         console.log(key+': ' + menu[key]);
//     }
// }

// console.log(menu);

// let salaries = {
//     Kile: 200,
//     Leon: 400,
//     Rodger: 1000
// }

// let salaries2 = Object.assign({}, salaries);

// console.log(salaries);
// console.log(salaries2);

// console.log(salaries === salaries2);

// let sum = 0;
// for(const key in salaries){
//     sum += salaries[key];
// }
// console.log(sum);

function Task(name){
    this.name = name;
    this.done = false;
}

const ToDoList = {
    taskList: [],

    addTask(name){
        const task = new Task(name);
        this.taskList.push(task);
        this.drawTaskList();
    },

    doTask(taskId){
        this.taskList[taskId].done = true;
    },

    removeTask(taskId){
        this.taskList.splice(taskId, 1);
        this.drawTaskList();
    },

    undoTask(taskId){
        this.taskList[taskId].done = false;
    },

    toggleTask(taskId){
        const task = this.taskList[taskId];
        if(task.done){
            this.undoTask(taskId);
        }else{
            this.doTask(taskId);
        }
        this.drawTaskList();
    },

    drawTaskList(){
        const taskListHtml = document.getElementById('task-list');
        taskListHtml.innerHTML = '';
        for(let i = 0; i < this.taskList.length; i++){
            const task = this.taskList[i];
            const listItems = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.done;
            checkbox.addEventListener('click', () => {
                this.toggleTask(i);
            });


            const taskName = document.createElement('span');
            taskName.innerHTML = task.name;
            if(task.done){
                taskName.classList.add('cross');
            }
            
            const deleteButton = document.createElement('span');
            deleteButton.style.color = 'red';
            deleteButton.innerHTML = '&times;';
            deleteButton.addEventListener('click', () => {
                this.removeTask(i);
            });

            listItems.appendChild(checkbox);
            listItems.appendChild(taskName);
            listItems.appendChild(deleteButton);
            taskListHtml.appendChild(listItems);
        }
    }
}

const button = document.getElementById('add-task');
button.addEventListener('click', event => {
    const taskInput = document.getElementById('new-task');
    const value = taskInput.value;
    ToDoList.addTask(value);
    taskInput.value = '';
})

ToDoList.drawTaskList();
