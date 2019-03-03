






// Obj destructung
// 

// const person  = {
//     name: 'Chris',
//     age : 30 , 
//     location: {
//         city : 'Hazlet',
//         temp : 29
//     }
// };

// // name  = 
// //that sets the default

// const {name = 'Anonymous' , age} = person;

// console.log(`${name} is ${age}. `)
// // you can reassign the destructuring
// const {city , temp: temperature} = person.location;

// if(temperature && city){
// console.log(`It's ${temperature} in ${city}. `)
// }




// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name : 'Penguin'
//     }
// };

// const { name : publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName);






///
// Array destructuring
//

const address = ['26 fleetwood drive' ,  'Hazlet', 'NJ' , '07730']

const [ , city , state ] =  address;

console.log(`You are in ${city} ${state}`)

const item = ['Coffee (iced)' , '$3.00' , '$3.50' , '$3.75']

const [hotCoffee , , mPrice] = item;

console.log(`A medium ${hotCoffee} costs ${mPrice}`)