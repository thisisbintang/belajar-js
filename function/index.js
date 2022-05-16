// Deklarasi Fungsi

// function suaraKucing() {
//     console.log('meongg~~')
// }

// Memanggil Fungsi
// suaraKucing()

// Ekspresi fungsi

// const suaraAnjing = function () {
//     console.log('guk guk~~')
// }

// suaraAnjing()

// Arrow Function

// const suaraHarimau = () => {
//     console.log('roarr~~')
// }

// Parameter Function

// const suaraHewan = (...params) => {
//     console.log(params)
// }

// Return value
// const sum = (a, b) => {
//     return a + b
// }

// Implicit return value
// const sumImplicitReturn = (a, b) => a + b

// Callback

// function mobil(callbackFn, callbackFn2) {
//     callbackFn('sigra')
//     callbackFn2('innova')
// }

// // function callbackFn(data) {
// //     console.log(data)
// // }

// mobil(
//     data => console.warn(data), // Parametr 1
//     data => console.info(data) // Paramter 2
// )


function ask(question, yes, no) { // paramaters
    if (confirm(question)) yes() // logic
    else no()
}

function showYes() {
    alert('You agreed.')
}

function showNo() {
    alert('You canceled the execution:')
}

ask('Do you agree?', showNo, showYes) // arguments