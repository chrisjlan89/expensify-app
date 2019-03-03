import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', ()=> {
    const state = filtersReducer(undefined, { type : '@@INIT'});
    expect(state).toEqual({
        text : '', 
        sortBy : 'date',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')

    })

})

    
    test('should set sortBy to Amount', ()=>{
        const state = filtersReducer(undefined, {type : 'SORT_BY_AMOUNT'});
        expect(state.sortBy).toBe('amount')
    })

    test('should set sortBy to Date', ()=>{
        const currentState = {
            text : '',
            startDate : undefined,
            endDate : undefined,
            sortBy : 'amount'

        };

        const action = {type : 'SORT_BY_DATE'};

       const state = filtersReducer(currentState, action);
        expect(state.sortBy).toBe('date')
    })

    test('should set text filter', () => {
        const currentState = {
            text : 'Rent',
            startDate : undefined,
            endDate : undefined,
            sortBy : 'date'

        };

        const action = {type : 'SET_TEXT_FILTER' , text : 'Gas'}
        const state = filtersReducer(undefined, action);
        expect(state.text).toBe('Gas')
    })



    test('should set startDate', () => {
        const startDate = moment();
       const action = {
           type : 'SET_START_DATE', 
            startDate 
    }
        const state = filtersReducer(undefined, action);
        expect(state.startDate).toEqual(startDate)
    })

    

    test('should set endDate', () => {
        const endDate = moment()
        const action = {
            type : 'SET_END_DATE', 
            endDate
        }
         const state = filtersReducer(undefined, action);
         expect(state.endDate).toEqual(endDate)
     })