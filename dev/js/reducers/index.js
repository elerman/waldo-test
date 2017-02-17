import {combineReducers} from 'redux';
import PizzaReducer from './reducer-pizza';

const allReducers = combineReducers({
    pizzaService: PizzaReducer
});

export default allReducers
