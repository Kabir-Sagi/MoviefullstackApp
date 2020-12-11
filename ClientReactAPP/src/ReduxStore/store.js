import {createStore,applyMiddleware,combineReducers} from 'redux'
import Logger from 'redux-logger'
// import thunk from 'redux-thunk'
import myReducer from '../Reducers/reducer1'
var rootReducer = combineReducers({myReducer})

var store = createStore(rootReducer,applyMiddleware(Logger))
export default store