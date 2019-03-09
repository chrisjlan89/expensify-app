import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';


test('should render expense form correct' ,  () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
})

test('should renter expense form with data' , () => {
    const wrapper = shallow(<ExpenseForm  expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
})


test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', () =>{
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(0).simulate('change' , {
        target : { value }
    })
    expect(wrapper.state('description')).toBe(value);
});



test('should set note on textarea change', () => {
    const value = 'A whole new note'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('textarea').at(0).simulate('change' , {
        target : { value }
    })
    expect(wrapper.state('note')).toBe(value)
})