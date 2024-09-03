const numbersArr = [1,4,6,89,44,54,11,2]; //[1,2,4,6,11,44,54,89]
const stringsArr = ['Anna', 'Jane', 'Bob', 'Frank', 'Barak'];

// stringsArr.splice(3, 1, 'Rob');

// const a = [...numbersArr, ...stringsArr];

//to find smthing in the ARR:
// const result = usersArr.filter((user) => user.role === 'admin');
// const result = usersArr.find((el) => el.age < 20)
// result = usersArr.findIndex((el) => el.age < 20)
// const result = numbersArr.includes(89)

// to change smthing into ARR:
// usersArr.push(newUser) && unshift -> to add
// usersArr.pop(); ** shift -> to remove

// to change the initial arr
// numbersArr.sort((a, b,) => a - b)
// stringsArr.splice(3, 1, 'Rob');

//loops:

// for (let i = 0; i < usersArr.length; i++) {
//     const user = usersArr[i]
//     console.log(`${i + 1}) Name: ${user.userName}, age: ${user.age}, role: ${user.role}`);
    
// }

// for (const user of usersArr) {
//     console.log(`Name: ${user.userName}, age: ${user.age}, role: ${user.role}`);
// }

// usersArr.forEach((user, index) => {
//     console.log(`${index + 1})Name: ${user.userName}, age: ${user.age}, role: ${user.role}`);
// })

// const usersUpdated = usersArr.map(user => {
//     user.prop = user.age > 18 ? 'adult' : 'child';

//     return user;
// })

const usersArr = [
    {
        id: 2,
        userName: 'Jane',
        age: 31,
        role: 'editor'
    },
    {
        id: 1,
        userName: 'anna',
        age: 11,
        role: 'admin'
    },
    {
        id: 44,
        userName: 'bob',
        age: 45,
        role: 'admin'
    },
    {
        id: 32,
        userName: 'frank',
        age: 15,
        role: 'editor'
    },
    {
        id: 11,
        userName: 'barak',
        age: 55,
        role: 'admin'
    }
];

function sortUsers(dir) {
    if(dir != 'asc') {
        usersArr.sort((a, b) => a.age - b.age)
    } else {
        usersArr.sort((a, b) => b.age - a.age)
    }
}

function printUsers() {
    let rez = '<ul>';

    usersArr.forEach(user => {
        rez += `<li>
            <b>Name: </b> ${user.userName.toUpperCase()}
            <b>Age: </b> ${user.age}
        </li>`
    })
    
    rez += '</ul>';
    
    document.body.innerHTML = rez;
}

function addUser(userName, age) {
    usersArr.push({
        userName,
        age,
        id: Math.random(),
        role: 'editor'
    });
}

function changeRole(role, id) {
    const targetElementIndex = usersArr.findIndex(el => el.id === id);

    if(targetElementIndex === -1) {
        console.log('No users found!!');
        return false
        
    }
    
    const targetElement = usersArr[targetElementIndex];

    targetElement.role = role;
}