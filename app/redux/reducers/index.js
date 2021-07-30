import {combineReducers} from 'redux';

import  CalculatorReducer from './CalculatorReducer';

const rootReducer = combineReducers({
    calculator: CalculatorReducer,
});

export default rootReducer;