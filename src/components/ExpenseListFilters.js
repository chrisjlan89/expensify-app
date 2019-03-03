import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate , sortByAmount, setStartDate , setEndDate} from '../actions/filters'
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused : null,

    }

    onDatesChange = ({startDate , endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }


    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    render() {
        return(
            <div>
        <input type='text' value={this.props.filters.text} onChange={(e) =>{
            props.dispatch(setTextFilter(e.target.value));
        }} />
        <select 
        value={this.props.filters.sortBy}
        onChange={(e) =>{
        let sValue = e.target.value; 
           sValue == 'date' ? this.props.dispatch(sortByDate(sValue)) :
            this.props.dispatch(sortByAmount(sValue))
        }} >
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
        startDate ={this.props.filters.startDate}
        endDate = {this.props.filters.endDate}
        onDatesChange = {this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
        />
    </div>
        )
    }
}

// check this file if sort isn't sorting properly

    

const mapStateToProps = (state) => {
    return {
        filters : state.filters
    }
}


export default connect(mapStateToProps)(ExpenseListFilters);