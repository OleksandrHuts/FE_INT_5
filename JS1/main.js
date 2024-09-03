// let userAge = prompt('Whats your age?');
// const currentYear = 2024;
// let usersBirthdayYear = currentYear - parseInt(userAge);

// let userName = prompt('Whats your name?');
// let userConfirm = confirm('Are u agree?');

// console.log('Hello ' + userName + '. Welcome back!');
// console.log(`Hello ${userName}. Welcome back!`);

// console.log(userConfirm);

// let userNumber = prompt('Provide money amount');
// let userCurrency = prompt('Provide currency to convert');

// let userNumber = prompt('Provide a 3 digits number');
// let userNumberTransformed = parseInt(userNumber);

// if(userNumber && userNumber.length === 3) {
//     const firstDigit = parseInt(userNumberTransformed/100);
//     const secondDigit = parseInt((userNumberTransformed%100)/10);
//     const lastDigit = userNumberTransformed%10;

//     console.log(firstDigit === secondDigit);
// }

//Ask a user for the radius of a circle and print the area of it

// const radius = +prompt('Set the radius');

// Happy case - 100
// to do calc

// Error case 1 - 'sssadafhafk'
// Error case 2 - null
// show error message

// if(radius) {
//     let area = Math.PI * radius**2;
// } else {
//     console.log('Please, add a correct number');
// }

// 2 + 2

// const a = +prompt('Add a number');

// switch (a) {
//     case 100:
//         console.log("its a 100");
//         break;
//     case 200:
//         console.log("its a 200");
//         break;
//     default:
//         console.log("its not a 100 or 200");
//         break;
// }

// const num1 = +prompt('Number 1');
// const operator = prompt('operator');
// const num2 = +prompt('Number 2');

// switch (operator) {
//     case '+':
//         console.log('we need to add number');
//         break;
//     case '-':
//         console.log('we need to minus number');
//         break;
//     case '*':
//         console.log('we need to multiply number');
//         break;
//     case '/':
//         console.log('we need to divide number');
//         break;
//     default:
//         console.log('please add a proper operator');
//         break;
// }

//Logical operators:
// || - OR
// && - AND
// ! - NOT

// const age = +prompt('How old are u?');
// const gender = prompt('what is your gender?');

// if(age > 21) {
//     if(gender === 'male') {
//         console.log('vodka');
//     } else {
//         console.log();
//     }
// } 

// || -> looks for a first 'true'
// && -> all sould be a true

// null, undefinded, '', false, 0

// const arr = ['apple', 'cucumber', true, undefined, 100, [1,3,'hello']];

// if(typeof arr[2] === 'string') {
//     console.log(arr[2]);
// } else {
//     console.log('Not a string');
// }

// let i = 0;

// while (i <= arr.length) {
//     if(typeof arr[i] === 'string') {
//         console.log(arr[i]);
//     }
//     console.log(i);
    
//     i++;
// }

//while
// do while
// for
// for in
// for of
// foreach



// function createCard(text) {
//     const card = document.createElement('div');
//     card.innerHTML = text;
//     card.classList.add('card-item')
//     grid.appendChild(card);
// }

// const vegetables = ['potato', 'cucumber', 'corn', 'bean', 'carrot', 'carbage'];

// for (let i = 0; i < vegetables.length; i++) {
//     createCard(vegetables[i]);
// }

//Iteration 1:
// i = 0;
// vegetables.length = 6
// we check if 0 smaller than 6
// we execute function createCard for: vegetables[0] -> 'potato'
// we increase i: i = i + 1;

//Iteration 2:
// i = 1;
// vegetables.length = 6
// we check if 1 smaller than 6
// we execute function createCard for: vegetables[1] -> 'cucumber'
// we increase i: i = i + 1;

// typeof arr[2] === 'string' -> condition
//  console.log(arr[2]); -> body



// const vegetables = 'apple'
// const arr = vegetables.split('');

// arr[0] = 'K';
// const str = arr.join('')

//LOOP
// let userName = 'Alex';

// while (!userName) {
//     userName = prompt('Add your name');
// }

// do {
//     userName = prompt('Add your name');
// } while (!userName);
// 0 -> 10


// const arr = [66,4,5,7,8,44,35];

// // 66 + 4 = 70
// // 70 + 5 = 75
// // 75 + 7 = 82
// // 82 + 8 = 90
// // 90 + 44 = 134
// // 134 + 35 = 169

// let sum = 0;
// let i = 0;

// while (i < arr.length) {
//     // console.log(arr[i]);
//     sum = sum + arr[i]//66 + 4
//     i++;
// }

// prompt('Gess a number from 0 to 100', '');

// let start = 0;
// let end = 100; 
// let N; 
// let isMore;
// let isSmaller;
// let res = '';

// while (start <= end) {
//     N = Math.floor((start + end) / 2);

//     isMore = confirm(`Is greater ${N}? Yes - ОК, No - Cancel`);

//     if (isMore) {
//         start = N;
//     } else {
//         isSmaller = confirm(`is smaller${N}?  Yes - ОК, No - Cancel`);

//         if (isSmaller) {
//             end = N;
//         } else {
//             // число = N
//             res = N;
//             break;
//         }
//     }
// }

// alert(`you guessed: ${res}`);
// function showHello(name = 'John', l_name = 'Dough') {
//     if(!name) {
//         alert('Add your name');

//         return false;
//     }

//     if(!l_name) {
//         alert('Add your l_name');
//         return false;
//     }

//     alert(`Hello ${name} ${l_name}`);
// }

// showHello('Alex');

// const grid = document.querySelector('.grid');

// function createCard(text) {
//     const card = document.createElement('div');
//     card.innerHTML = text;
//     card.classList.add('card-item')
//     grid.appendChild(card);
// }

// createCard('Hello')

// function calculate(num1, num2, operator) {
//     switch (operator) {
//         case '+':
//             return (num1 + num2);
//         case '-':
//             return (num1 - num2);
//         case '/':
//             return (num1 / num2);
//         default:
//             break;
//     }
// }

// const result = calculate(5, 10, '+');

// console.log('The result is: ' + result);

// Write a function called removeDuplicates
// that takes an array as input and returns a new array
// with all duplicate elements removed.
// You can use any method you like (e.g., Set, loops).


// ['cat', 'dog', 'fish', 'turtle']

// function removeDuplicates(arrayToCheck) {
//     console.log(arrayToCheck);
//     // const newArr = [];
//     //newArr.push('some unique animal')

//     return newArr;
// }

// removeDuplicates(arr);

// const arr = ['cat', 'dog', 'cat', 'fish', 'turtle', 'fish'];
// const arr1 = ['banana', 'banana', 'banana', 'plum', 'chicken', 'fish'];
// const newArr = [];

// function removeDuplicates(arrayToCheck) {
//     for(let i = 0; i < arrayToCheck.length; i++) {
//         if (!newArr.includes(arrayToCheck[i])) {
//             newArr.push(arrayToCheck[i]);
//         }
//     }
// }

// removeDuplicates(arr1);

// if (!newArr.includes(arr[0])) {
//     newArr.push(arr[0]);
// }
// if (!newArr.includes(arr[1])) {
//     newArr.push(arr[1]);
// }
// if (!newArr.includes(arr[2])) {
//     newArr.push(arr[2]);
// }


// newArr.push(arr[3]);
// newArr.push(arr[4]);
// newArr.push(arr[5]);
// ['cat', 'dog', 'fish', 'turtle']
// arr.includes -> to check if elements is in array
// arr.push -> to put element inside an array

// function dzhdzhdzh(ingredientForDzhzh) {
//     // - make 'dzhzhzh' for (ingredientForDzhzh)
//     let result = 'liquid';
//     return result
// }


// function makePancakes(peopleAmount) {
//     //if 100 people -> 30l of milk, 100eggs

//     // if we dont have any eggs -> do not start

//     let eggsAmount;
//     let powderAmount;
//     let sugarAmount;
//     let milkAmount;

//     if(eggsAmount === 0) {
//         return false;
//     }

//     if(peopleAmount === 100) {
//         milkAmount = 30;
//         sugarAmount = 2;
//         powderAmount = 1;
//         eggsAmount = 100;
//     }


//     // - take eggs (eggsAmount/100)
//     // - crack them
//     // - make them 'dzhzhzh'
//     dzhdzhdzh('eggs')
//     // - add powder (powderAmount/1)
//     // - add sugar (sugarAmount/2)
//     // - make them 'dzhzhzh' again
//     dzhdzhdzh('eggs', 'powder', 'sugar')
//     // - add milk (milkAmount/30)
//     // - make them 'dzhzhzh' again
//     dzhdzhdzh('eggs', 'powder', 'sugar', 'milk')
//     // - add flour (how many ?)
//     // dzhdzhdzh('eggs', 'powder', 'sugar', 'milk','flour')
//     // - make them 'dzhzhzh' again
//     // - take pan
//     // - bake it
//     // - flip them

//     // return pancakes;
// }


// makePancakes(100);

// makePancakes(5);

// const pattern = new RegExp("^\\+[0-9]{3}-[0-9]{3}-[0-9]{3,5}$");

// '+12367812639381274'
// '+223-312-54545'

// {
//     key: 'value'
// }

// const myCar = {
//     year: 2011,
//     color: 'grey',
//     fuel: 'diesel',
//     isDamaged: true,
//     owners: ['Alex', 'Juliia'],
//     engine: {
//         capacity: '3l',
//         power: '245hp'
//     },
//     addOwner: (ownerName) => {
//         this.owners.push(ownerName)
//     }
// }

// myCar.addOwner('Kate');

//function declaration
// someName2();

// function someName1(arg1,arg2) {
//     //body
// }

// //function expression
// const someName2 = function(arg1,arg2) {
//     //body
// }

// const someName3 = (arg1,arg2) => {
//     //body
// }

// function showMessage() {
//     console.log('Its fail!!!')
// }

// //high order func
// function makePancakes(amount) {
//     console.log(`Making ${amount} pancackes...`);
    
//     showMessage()
// }

// makePancakes(100, () => console.log('Its fail!!!'))

// let seconds = 0

// setInterval(() => {
//     console.log(seconds);
//     seconds++;
// }, 1000)

// function sum(...args) {
//     let result = 0;

//     for (let i = 0; i < args.length; i++) {
//         result = result + args[i]   
//     }

//     return result
// }

// sum(2,5) // 7
// sum(2, 8, 15) // 35
// sum(2, 8, 15, 55, 12, 54, 789, 12, 54) // 35

//Closures
//  const pet1 = {
//     name: 'Rosey',
//     age: '18',
//     breed: 'Hymalianian',
//     food: 'chicken',
//     species: 'cat'
//  };

//  const pet2 = {
//     name: 'Murchick',
//     age: '15',
//     breed: 'N/A',
//     food: 'fish',
//     species: 'cat'
//  }

//  function createCat(name, age, breed, food) {
//     let localName = name;
//     return {
//         pet: {
//             name: localName, //Rosey
//             age,
//             breed,
//             food,
//             species: 'cat'
//         },
//         setName: function(newName) {
//             this.pet.name = newName;
//         },
//         showName: function() {
//             console.log(this.pet.name);
//         }
//     }
//  }

//  let pet1 = createCat('Rosey','18', 'Hymalianian','chicken', 'cat');

// OR - ||
// function checkAge(age) {
//     return (age > 18) || (age > 20)
// }

const arr = [
    "Our business is infested with idiots who try to impress by using pretentious jargon",
    "I hate people thinking I'm some pretentious fraud.",
    "I think it's pretentious to create art just for the sake of stroking the artists ego."
]


function showQuote() {
    const rand = Math.floor(Math.random() * (arr.length - 0) + 0);
    console.log(arr[rand]); 
}