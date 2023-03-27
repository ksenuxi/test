// const arr=[1,2,3,4];
// const arr2=arr;
// console.log(arr===arr2);
// const copy = [];
// for(let i=0; i<arr.length; i++){
// copy[i] = arr[i];
// }
// console.log(copy, arr === copy);

// const someFunction = (func, a) =>{
// func(a);
// }
// someFunction(console.log, 'text')

//отфилтровать массив в котором числа больше 6
// const array = [1,2,3,4,5,8,9,2,7,11];
// const copy = [];
// array.forEach((element, index,array)=> {
//     copy.push(element);
// })
// console.log(copy);

// const filterArray = array.filter((element, index, array) => {
// // console.log(element, index, array);
// return !(element%2);
// })
// console.log(filterArray);

// for(let i=0; i<10; i++){
//     if(i < 3) continue;
//     console.log(i);
// }

// const matrix = [1,2,3,
//     [1,4,6,8],
//     [2,6,8,11],
//     [3,5,78]
// ];
// let sum = 0;

// const callback = (value) =>{
// if(typeof value === 'number') sum+=value
// else {
//     value.forEach(callback)
// };
// }


// const callback = (value) =>{
//      sum+=value;
//     }
// matrix.flat(Infinity).forEach(callback); 
// console.log(sum);

// const callback = (accumulator, currentValue) =>{
//      return accumulator += currentValue
//     }
// const nevValue = matrix.flat(Infinity).reduce(callback, 0); 
// console.log(nevValue);


// const array = [1, 2, 3, 4];

// const obj = {
//     one: 1,
//     two: 2,
//     three: 3
// }; 

// const getFirst = () => 'one';
// // const first = 'one';

// new Object
// console.log(array[0]);
// console.log(obj[getFirst()]);


// const user = {
//     name: 'kk',
//     role:'admin',
//     isAccess: false
// }
// if (user.role === 'admin'){
//     user.isAccess = true;
// }
// console.log(user);

// for(key in user){
//     console.log(key);
// };
// Object.keys(user).forEach(console.log) //вывод ключей всех
// Object.values(user).forEach(console.log)

// user.sayHello = function(){
//     console.log(`hello, me name is ${this.name}`)
// }
// user.sayHello();

// const arr=[1, 2, 3, 4];
// const calculate = (initArray) => initArray.Array.map((value)=> Math.sqrt(value));
// console.log(calculate(arr))

// const obj = {
//     name: 'one',
//     city: 'two',
//     mood: 'three'
// };
// const obj2 = {};

// Object.keys(obj).forEach((element) =>{
//     obj2[element] = obj[element]
// });
// console.log(obj2);

let user = {
    name: "Jone",
    surname: "Smith",
}
 user.name = "Peter";
 delete user.name;
console.log(user);

//проверка на пустоту
function isEmpty(obj){
    for (let key in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false;
      }
      return true;
    }
    console.log(isEmpty(user))

//сумма свойств
let sum=0;
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
for(let key in salaries){
   sum+= salaries[key]
}
console.log(sum)

//умножение все числовые свойства на 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }
multiplyNumeric(menu);
console.log(menu);

// let browser = prompt('browser');
// if (browser === 'Edge'){
//     alert( "You've got the Edge!" );
// } else if (browser == 'Chrome'
// || browser == 'Firefox'
// || browser == 'Safari'
// || browser == 'Opera'){
//     alert( 'Okay we support these browsers too' );
// }
// else{
//     alert( 'We hope that this page looks ok!' );
// }

// const number = +prompt('Введите число между 0 и 3', '');
// switch (number){
// case 0: 
// alert('Вы ввели число 0');
// break;
// case 1:
//     alert('Вы ввели число 1');
//     break;
//     case 2:
//     case 3: 
//     alert('Вы ввели число 2, а может и 3');
//     break;
// }


