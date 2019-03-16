import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate , sortByAmount, setStartDate , setEndDate} from '../actions/filters'
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused : null,

    }

    onDatesChange = ({startDate , endDate}) => {
        this.props(setStartDate(startDate));
        this.props(setEndDate(endDate));
    }


    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    onTextChange = (e) =>{
        props(setTextFilter(e.target.value));
    }

    onSortChange = (e) =>{
        let sValue = e.target.value; 
           sValue == 'date' ? this.props(sortByDate(sValue)) :
            this.props(sortByAmount(sValue))
        }

    render() {
        return(
            <div>
        <input type='text' 
        value={this.props.filters.text} 
        onChange={this.onTextChange} />
        <select 
        value={this.props.filters.sortBy}
        onChange={this.onSortChange} >
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

    

const mapStateToProps = (state) => ({
    filters : state.filters
    });


const mapDispatchToProps = (dispatch) => ({
    setTextFilter : (text) => dispatch(setTextFilter(text)),
    sortByDate : () => dispatch(sortByDate()),
    sortByAmount : () => dispatch(sortByAmount()),
    setStartDate : (startDate) => dispatch(setStartDate(startDate)),
    setEndDate : (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps)(ExpenseListFilters);