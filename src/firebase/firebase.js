import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  
  
  firebase.initializeApp(config);


const database = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase , googleAuthProvider, database as default}

//child_removed
//   database.ref('expenses').on('child_removed', (data)=>{
//       console.log(data.key, data.val())
//   })

//   //child_chnage

//   database.ref('expenses').on('child_changed', (data)=>{
//       console.log(data.key ,data.val())
//   })

//   //child_added
//   database.ref('expenses').on('child_added', (data) => {
//       console.log(data.key, data.val())
//   })


//  database.ref('expenses').once('value').then((data)=>{
//     const expenses = [];
//     data.forEach((childData) =>{
        
//         expenses.push({
//             id : childData.key,
//             ...childData.val()
//         });
//     });
//     console.log(expenses)
//  })


 

//  const onDataChange = database.ref('expenses').on('value', (data) =>{
//     const expenses = [];
//     data.forEach((childData) =>{
        
//         expenses.push({
//             id : childData.key,
//             ...childData.val()
//         });
//     });
//     console.log(expenses)
//  })


//Setup Expenses with desc,note, amiunt, creatAt,

// database.ref('expenses').push({
//     description : 'Gym Membership',
//     note: 'Monthly',
//     amount : 60,
//     createdAt : 12
// })





//database.ref('notes/-LaV__c3zbzIhdQQFLtz').remove()

//  database.ref('notes').push({
//      title: 'Course Topics',
//      body : 'Firebase, React, React Native'
//  });


  //   const notes = [{
//       id: 12,
//       title : 'First Note!',
//       body : 'this is my note'
//   },
//   {
//   id: 100,
//       title : 'Another Note!',
//       body : 'this is my note'
//   }
//     ]


//     database.ref('notes').set(notes);
//   database.ref().set({
//       name : 'Chris Lantier',
//       age : 29,
//       stressLevel: 4,
//       job : {
//           title : 'Aspiring Web Developer',
//           company : 'Hazlet DPW'
//       },
//       location : {
//           city : 'Hazlet',
//           country : 'United States'
//       },
//       isEmployed : true
//   }).then(()=> {
//       console.log('data is saved')
//   }).catch((error)=>{
//      console.log('this failed', error)
//   });


//   database.ref().update({
//      stressLevel: 7,
//      'job/company' : 'Mo Sol',
//      'location/city' : 'Piscataway'
//   }).then(()=>{
//       console.log('data updates')
//   }).catch((e)=>{
//       console.log('error : ', e)
//   })


//database.ref('isSingle').set(null)

// database.ref().remove().then(()=>{
//     console.log('sucessfully removed')
// }).catch((err)=>{
//     console.log('failed : ', err)
// })


// database.ref().once('value').then((data)=>{
//   const stuff = data.val();
//   console.log(stuff);
// }).catch((err)=>{
//     console.log('error'  , err )
// })


// SETUP new sub  Chris is a nsoftware dev at amazon

 
// const onValChange = database.ref().on('value', (data) =>{
//     let name  = data.val().name
//     let jobTitle = data.val().job.title
//     let company = data.val().job.company
//     console.log(`${name} is a ${jobTitle} at ${company}`)
    
// })


// setTimeout(()=>{
//     database.ref('name').set('Christoper')
// }, 3500)

// setTimeout(()=>{
//     database.ref('name').set('Christopher J Lantier')
// },7000)


// const onValueChange = database.ref().on('value', (data) =>{
//     console.log(data.val())
// }, (e)=>{
//     console.log('error data fetch', e);
// })

// setTimeout(()=>{
//  database.ref('age').set(30);
// }, 3500)

// setTimeout(()=>{
//     database.ref().off();
//    }, 7000)

//    setTimeout(()=>{
//     database.ref('age').set(31);
//    }, 10500)