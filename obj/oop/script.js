// const object = {
//     width: 200,
//     height: 300
// }

// class Object {
//     constructor() {
//         this.width = 200;
//         this.height = 300;
//     }
// }

// class Object2{
//     constructor(width, height){
//         this.width = width
//         this.height = height
//     }
// }

// class Human{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// class Worker extends Human{
//     constructor(workplace, salary, name, age){
//         super(name, age)
//         this.workplace = workplace;
//         this.salary = salary;
//     }
// }

// let hero = new Worker('business center', 2500, 'Karl', 34)

// class Manager extends Worker{
//     constructor(workplace, salary, name, age, people){
//         super(workplace, salary, name, age)
//         this.people = people
//     }
// }

// let o1 = new Object()

// let o2 = new Object2()

// o2.width = 500


// class Shape{
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }

//     draw(){
//         console.log("Draws");
//     }

//     square(){

//     }
// }

// class Rectangle extends Shape{
//     constructor(x, y, width, height){
//         super(x, y);
//         this.width = width;
//         this.height = height;
//     }

//     draw(){
//         console.log('Rectngle ' + this.width);
//     }

//     square(){
//         this.square = this.width * this.height;
//     }
// }

// class Circle extends Shape{
//     constructor(x, y, radius){
//         super(x, y);
//         this.radius = radius;
//     }

//     square(){
//         this.square = Math.PI * this.radius * this.radius;
//     }
// }

const roles = ['Admin', 'Manager', 'Customer'];
const rolesWithAccess = ['Admin', 'Manager'];

const urls = {
    'main_page': roles,
    'admin_page': ['Admin'],
    'cassa': rolesWithAccess
}

class DefaultUser{
    constructor(name, password){
        this.name = name;
        this.password = password;
        this.role = null;
        this.access = false;
    }
    // url = main_page
    getIn(url, password){
        if(!this.checkPassword(password))
        {
            console.log(`Your password is incorrect`);
        }
        else{
            const gettedRoles = urls[url];
            this.checkRole(gettedRoles)

            if(this.access){
                console.log('Welcome');
                return true;
            }else{
                console.log(`You shall not pass: your role is ${this.role} and you have no right to pass!`);
                return false
            }
        }
    }

    checkPassword(password){
        return true ? password === this.password : false;
    }

    checkRole(neededRoles){
        if(neededRoles.indexOf(this.role) === -1){
            this.access = false;
        }
        else {
            this.access = true;
        }
    }

    buy(price){
        this.totalPrice = price;
        console.log(this.totalPrice);
    }
}

class Manager extends DefaultUser{
    constructor(name, password){
        super(name, password)
        this.role = 'Manager';
    }

    buy(price){
        this.totalPrice = 0.1 * price
        console.log(this.totalPrice);
    }
}

class Admin extends DefaultUser{
    constructor(name, password){
        super(name, password)
        this.role = 'Admin';
    }

    buy(price){
        this.totalPrice = 0.3 * price;
        console.log(this.totalPrice);
    }
}

class User extends DefaultUser{
    constructor(name, password){
        super(name, password)
        this.role = 'User';
    }
}

const adm1 = new Admin('Admin', 'sdjgs2i');
const man1 = new Manager('Prodavets', 'dhfgsk');
const user1 = new User('Vasia', '123')

adm1.getIn('main_page', 'sdgger');
man1.getIn('admin_page', 'dhfgsk');

adm1.buy(100)
user1.getIn('cassa', '123');



