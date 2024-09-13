"use strict";

//to access an element:
// getElementsByTagName
// getElementById
//to get text from an element:
//textContent
//innerHTML
//to change styling
//.style
function showMessage() {
  var modal = document.querySelector('.modal');
  var button = document.querySelector('#show_button');
  console.log(button.setAttribute('id', 'new_id_val'));
  modal.classList.contains('visible') ? button.textContent = 'show modal' : button.textContent = 'close modal';
  modal.classList.toggle('visible');
}

var usersArr = [{
  id: 2,
  userName: 'Jane',
  age: 31,
  role: 'editor'
}, {
  id: 1,
  userName: 'anna',
  age: 11,
  role: 'admin'
}, {
  id: 44,
  userName: 'bob',
  age: 45,
  role: 'admin'
}, {
  id: 32,
  userName: 'frank',
  age: 15,
  role: 'editor'
}, {
  id: 11,
  userName: 'barak',
  age: 55,
  role: 'admin'
}];

function createGridElement(user) {
  var grid = document.querySelector('.grid');
  var div = document.createElement('div');
  div.classList.add('row');
  div.classList.add('card-body');
  var userName = document.createElement('div');
  userName.classList.add('user-name');
  userName.textContent = user.userName;
  var userRole = document.createElement('div');
  userRole.classList.add('user-role');
  userRole.textContent = user.role;
  div.appendChild(userName);
  div.appendChild(userRole);
  grid.appendChild(div);
}

function renderGrid() {
  usersArr.forEach(function (user) {
    createGridElement(user);
  });
}