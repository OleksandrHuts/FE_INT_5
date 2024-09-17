//to access an element:
// getElementsByTagName
// getElementById
// querySelector
// querySelectorAll

//to get text from an element:
//textContent
//innerHTML

//to change styling
//.style

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

function deleteUser(event) {
    const id = event.target.dataset.id; // 11
    const targetIndex = usersArr.findIndex(el => el.id === +id); // 5

    usersArr.splice(targetIndex, 1);
    renderGrid();
}


function createGridElement(user) {
    const grid = document.querySelector('.grid');
    const div = document.createElement('div');
    div.classList.add('row');
    div.classList.add('card-body');

    const userName = document.createElement('div');
    userName.classList.add('user-name');
    userName.textContent = user.userName;

    const userRole = document.createElement('div');
    userRole.classList.add('user-role');
    userRole.textContent = user.role;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-danger');
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('data-id', user.id);
    deleteButton.addEventListener('click', deleteUser)
    // deleteButton.addEventListener('click', (event) => {
    //     event.stopPropagation();
    //     console.log('Button has been clicked')
    // })

    div.appendChild(userName);
    div.appendChild(userRole);
    div.appendChild(deleteButton);
    
    grid.appendChild(div);
}

function renderGrid() {
    document.querySelector('.grid').innerHTML = '';
    
    usersArr.forEach(user => {
        createGridElement(user)
    })
}

// document.addEventListener('click', event => {
//     console.log('document has been clicked');
// })

// document.addEventListener('contextmenu', (event) => {
//     event.preventDefault();
//     console.log(event);
    
//     const modal = document.querySelector('.modal');
//     modal.classList.add('visible');
//     modal.style.top = event.clientY + 'px';
//     modal.style.left = event.clientX + 'px';
// })

// let counter = 0;
// const buttonLabel = 'clicked: '
// const button = document.querySelector('#click_button');

// button.addEventListener('mousedown', (event) => {

//     console.log(event.target);
//     button.textContent = buttonLabel + ' ' + counter
//     counter++
// });

// document.getElementById('anchor').addEventListener('click', event => {
//     event.preventDefault();

//     setTimeout(() => {
//         window.location.href = event.target.dataset.href;
//     }, 3000);
// })

document.addEventListener('keydown', event => {
    // event.preventDefault()
    

    if(event.code === 'KeyE' && event.ctrlKey) {
        console.log('ctrl + E');
    }
    
})