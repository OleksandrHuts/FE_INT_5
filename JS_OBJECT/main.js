//JS object
const animal = {
    weight: 10,
    height: 50,
    ownName: 'Rejy',
    parent: {
        father: {
            ownName: 'Zeus'
        },
        mother: {
            ownName: 'Gera'
        }
    },
    displayThis: function() {
        console.log(this);
    }
}

// if(animal && animal.father && animal.father.parent && animal.father.parent.ownName) {
//     console.log(animal.father.ownName);
// }

// function clone(obj) {
//     if (obj === null || typeof (obj) !== 'object' || 'isActiveClone' in obj)
//         return obj;

//     if (obj instanceof Date)
//         var temp = new obj.constructor(); //or new Date(obj);
//     else
//         var temp = obj.constructor();

//     for (var key in obj) {
//         if (Object.prototype.hasOwnProperty.call(obj, key)) {
//             obj['isActiveClone'] = null;
//             temp[key] = clone(obj[key]);
//             delete obj['isActiveClone'];
//         }
//     }
//     return temp;
// }

// const obj1 = {
//     b: 'old val',
//     c: {
//         x: 123
//     },
//     methodPlace: function() {
//         alert(123)
//     }
// }


// const obj2 = clone(obj1);

// const dog = {
//     breed: 'pug',
//     weight: 190,
//     'favorite meal': 'chicken',
//     showName: function() {
//         alert(this.ownName)
//     }
// }

// Object.seal(dog)

// Object.assign(animal, dog)

// let rez = '<ul>'

// for(let key in dog) {
//     rez += `<li><b>${key}:</b> ${dog[key]}</li>`
// }

// rez += '</ul>';

// document.body.innerHTML = rez;

// const userRole = prompt('Provide your role')

// const persmissions = {
//     admin: {
//         homeUrl: 'https://google.com'
//     },
//     editor: {
//         homeUrl: 'https://youtube.com'
//     },
//     user: {
//         homeUrl: 'https://linkedin.com'
//     }
// }


// window.location.href = persmissions[userRole].homeUrl
