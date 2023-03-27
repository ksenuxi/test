// const user = {
//     get name(){
//         return this._name
//     },
//     set name (value){
//         if(value.length > 4){
//             this._name= value;
//         } else {
//             console.error(`${value} to short`)
//         }
//     }
// }

// Object.defineProperties(obj,{
//     value: 'ewrfas',
//     writable:false
// })

// user.name = 'a';
// console.log(user.name);



//наследование
// class Animal {
//     constructor(name, age) {
//         this.name = name,
//             this.age = age
//     }
//     walk = () => {
//         console.log('animal is walking');
//     }
//     eat = () => {
//         console.log('animal is eating');
//     }
// }
// class Cat extends Animal {
//     constructor(name, age) {
//         super(name, age)
//         this.type = 'cat'
//     }
// }
// const mysa = new Cat('mysa', 4);
// mysa.eat();



//инкапсуляция
// function User(login, password){
//     this.login = login, 
//     this._password = password

//     Object.defineProperty(this, 'password',{
//         get(){
//             return '*******';
//         },
//         set(newPassword){
//             if(newPassword.toUpperCase()=== newPassword ||
//             newPassword.toLowerCase()=== newPassword ||
//             newPassword.length > 8) {
//                 console.log('not allowed')
//             }
//             else {
//                 this._Password =  newPassword
//             }
//         }
//     })
// }
// const testUser = new User('Ivan', 'katamaran');
// console.log(testUser.password);
// console.log(testUser.password = 'qwq')


//полиформизм
// class User{
//     constructor(name){
//         this.name = name;
//     }

//     sayHello = function(){
//         return `my name is ${this.name}`
//     }
// }
// const myCrew = [new User('Ivan'),
// new User('Kostik'),
// new User('Alex'),
// new User('Dimon')]

// const crewNames = myCrew.map((user)=>{
//     return user.sayHello()
// }) 
// console.log(myCrew, crewNames)


//композиция объектов
class Animal{
    constructor(name){
        this.name= name
    }
}
class Dog extends Animal{
    constructor(name, age){
        super(name),
        this.age = age
    }

    bark = function () {
        console.log(`${this.name} is barking`)
    }
}

function hunt() {
    console.log(`${this.name} is hunting`)
}
function learnHunting(dog) {
    dog.hunt = hunt;
    return dog;
}
const pesik = new Dog('Sonya', 7);
const sobachka = learnHunting(new Dog('Sweetie', 4));

//факториал числа реркурсия 5!=4 x 3 x 2 x 1 = 120
//calcFactorial(5) => 120

function factorial(num){
    if(num === 0) return 1
    return num * factorial(num-1)
}
console.log(factorial(5));


function calcFactorial(n){
    return n ? n * calcFactorial(n - 1) : 1;
    }
console.log(calcFactorial(5));

const a = 2;
const b = 3;
const c = a+b;