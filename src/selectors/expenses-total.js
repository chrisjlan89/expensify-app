import React from 'react';
import numeral from 'numeral';



export default (expenses) => {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0) 
      
}