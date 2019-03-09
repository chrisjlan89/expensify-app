import React from 'react';
import {connect} from 'react-redux';
import filters from '../reducers/filters';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    
    <div>
       {
           props.expenses.length === 0 ? (
            <p> No expenses</p>
           ) : (
            props.expenses.map((expense, index) => (
                <ExpenseListItem key={expense.id} {...expense}/>
            ))
            

           )
       }
     
      {
                
                
            
            }
       
    </div>
)

const mapStateToProps = (state) => {
    console.log(state)
    return  {
       expenses : selectExpenses(state.expenses , state.filters)
    }
}

export default  connect(mapStateToProps)(ExpenseList);
