import { CounterState } from 'src/states/counter.state';
import * as CounterActions from '../actions/counter.action';
import { createAction, createReducer, on } from '@ngrx/store';

const initialState: CounterState =   
{
    count: 0,
};

export const counterReducer =  createReducer(
  initialState,
  on(CounterActions.increment, (state) => ({  count: state.count + 1 
})),
    
  on(CounterActions.decrement, (state) => ({  count: state.count - 1 
})),

    
);