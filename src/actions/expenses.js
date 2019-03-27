import uuid from 'uuid';
import database from '../firebase/firebase';

//component calls action generator
//action generator return obj
//component dispatches obj
//redux store chnage


//component calls action generator
//action generator return function
//component dispatches function (?)
//function runs (has the ability to dispatch other actions and do w/e it wants )
 

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
       const {
        description = '', 
        note ='' , 
        amount = 0, 
        createdAt = 0
       } = expenseData;
       const expense = { description, note, amount, createdAt }
       
      return database.ref('expenses').push(expense).then((ref) =>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
       });
    };
}
//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type : 'REMOVE_EXPENSE',
    id
})

export const startRemoveExpense = ({id}  = {}) => {
    console.log('this 1', id)
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(()=>{
             console.log(id, 'id')
             console.log( 'expense removed')
             dispatch(removeExpense({id}))
         })
     }
console.log('this')
}
//EDIT_EXPENse
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        })
    }
}

//SET_EXPENSES
export const setExpenses = (expenses) =>({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = ()=>  {
    return (dispatch) => {
    return database.ref('expenses').once('value').then((data) => {
       const expenses = [];
       data.forEach((childData)=> {
          expenses.push({
              id :childData.key,
              ...childData.val()
          });
       });
       console.log(expenses)
       dispatch(setExpenses(expenses));
    })
    }
  
} ;


