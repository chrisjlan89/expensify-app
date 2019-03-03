import {createStore} from 'redux';

// Action generators - functions that retrun action objs

// const add = ({a ,b}, c) => {
//     return a + b + c;
// }

// console.log(add({a: 1 , b : 12}))

const incrementCount = ({incrementBy = 1} = {}) => ({

    type : 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({setCount }) => ({
    type : 'SET',
    setCount
})

// my Work
// const resetCount = (resetCount = 0) => ({
//     type: 'RESET',
//     resetCount
// })

const resetCount = () => ({
    type: 'RESET',
    
})

// Reducers

// 1. Reducers are pure functions - output is only 
//determined by the input

// 2. Never change state or actions directly. Do not mutate 
// state directly

// not pure func because it uses a -- global var
let a = 10;
const add = (b) => {
    return a + b;
}

const countReducer = (state = { count : 0}, action) => {
    switch(action.type) {
        case 'INCREMENT' :
        
        return {
            count : state.count + action.incrementBy
        };

        case 'DECREMENT' :
        
        return {
            count : state.count - action.decrementBy 
        };

        case 'SET' :
        return {
            count : action.setCount
        }

        case 'RESET' : return {
            count : 0
        }

        default :
        return state
    }
}


const store = createStore(countReducer)


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})
//Actions - obj that gets sent to the sotre


// increment 




// I'd like to increment count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy : 5
// });

store.dispatch(incrementCount({incrementBy : 5}))



store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy : 10}))


store.dispatch(setCount({setCount : 100}))
