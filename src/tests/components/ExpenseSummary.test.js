import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary'
import expenses from '../fixtures/expenses';


test('should render  Expense Summary correctly  with 1 expense ', ()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});


test('should render  Expense Summary correctly  with multiple expenses ', ()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={3} expensesTotal={2352302}/>);
    expect(wrapper).toMatchSnapshot();
})
