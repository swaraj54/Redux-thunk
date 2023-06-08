import { combineReducers } from "redux";
import productReducer from './productReducer.js';


const rootReducer = combineReducers({
    products: productReducer
})


export default rootReducer