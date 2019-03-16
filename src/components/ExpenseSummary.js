import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import filters from '../reducers/filters';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({expenseCount , expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'Expense' : 'Expenses'
    const expenseAmount = expensesTotal > 0 ?  numeral(expensesTotal / 100).format('$0,0.00') : ''
    return(
    <div>

       {
       
       expenseCount > 0 && <h3> Viewing {expenseCount} {expenseWord} totaling {expenseAmount} </h3>
    }

    {console.log(expenseCount)}
    {console.log(expensesTotal)}          
       
    </div>
)
}

const mapStateToProps = (state) => {
    console.log(state)
    const visibleExpenses = selectExpenses(state.expenses , state.filters)
    return  {
       expenseCount : visibleExpenses.length ,
       expensesTotal : expensesTotal(visibleExpenses)
    }
}

export default  connect(mapStateToProps)(ExpenseSummary);
