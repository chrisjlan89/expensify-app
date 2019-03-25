import { setTimeout } from "timers";

const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({
             name : 'Chris',
             age : 29
         });
        reject('something went wronga')
        resolve('this is my other resolved data');
    }, 5000)
  
    console.log('before')
});

promise.then((data) => {
    console.log(data)
    return 'some data';
}).then((str) =>{
  console.log('does this run ?', str)
}).catch((error) => {
    console.log('error : ', error)
})

console.log('after')