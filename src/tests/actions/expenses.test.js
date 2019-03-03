import {addExpense , editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action obj', () =>{
    const action = removeExpense({id : '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id : '123abc'
    })
})


test('should setup edit expense action object', ()=>{
    const action = editExpense('899' , {note : 'New note add'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '899',
        updates : {
        note : 'New note add'
        }
    })
})


test('should setup add expense object with provided values', ()=>{
    const expenseData = {
        description : 'Rent',
        amount : 109500,
        createdAt : 1000,
        note : 'This was last months rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            ...expenseData,
            id :expect.any(String)
        }
    })
})

test('should setup add expense action object with default values', () => {
   const action = addExpense();
    expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense :{
        id: expect.any(String),
        description : '',
        note : '',
        amount : 0,
        createdAt : 0,
        
        
    }    

   })
})