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

const num1 = +prompt('Number 1');
const operator = prompt('operator');
const num2 = +prompt('Number 2');

switch (operator) {
    case '+':
        console.log('we need to add number');
        break;
    case '-':
        console.log('we need to minus number');
        break;
    case '*':
        console.log('we need to multiply number');
        break;
    case '/':
        console.log('we need to divide number');
        break;
    default:
        console.log('please add a proper operator');
        break;
}