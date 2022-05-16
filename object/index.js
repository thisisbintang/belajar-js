// Object literal

// const animal = {
//     name: 'hamster',
//     age: 1
// }

// const person = {
//     name: 'Alex',
//     address: 'Jalan .....',
//     hobby: 'Berenang',
//     pet: animal
// }

// Konstruktor Object

// const user = new Object({
//     name: 'John',
//     interest: 'Music'
// })

// Akses properti
// let user = {
//     name: 'john',
//     age: 30
// }

// console.log(user.name)
// console.log(user['name'])


// Hapus properti
// let user = {
//     name: 'john',
//     age: 30,
//     car: 'hyundai'
// }

// delete user.car

// 

// Looping properti object
// let user = {
//     name: 'john',
//     age: 30,
//     car: 'hyundai'
// }

// for (var key of Object.keys(user)) {
//     console.log(user[key])
// }

// Properti terkomputasi

// var keyProperty = true

// let user = {
//     name: 'Doe',
//     [keyProperty]: 90
// }

// Singkatan properti

// function makeBoy(name, age, hobby) {
//     return {
//         name,
//         age,
//         hobby
//     }
// }

// const boy = makeBoy('joni', 3, 'swimming')
// const girl = makeBoy('katy', 4, 'drawing')

let user = {
    age: 30
}

if ("name" in user) {
    console.log(user.age)
} else {
    console.error('Tidak punya properti yang anda minta')
}


