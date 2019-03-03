import React from 'react';
import {connect} from 'react-redux';
import filters from '../reducers/filters';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    
    <div>
        <h1>ExpenseList </h1>
     
      {
                props.expenses.map((expense, index) => (
                    <ExpenseListItem key={index} {...expense}/>
                ))
                

                
            
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
