import { combineReducers } from "redux";
//导入../Home/cookbook/index.js
import { reducer as cookbook } from "../Home/cookbook/redux";
// 导入../Home/index.js
import {reducer as home } from "../Home"
 const rootReducer = combineReducers({
    cookbook,
    home
})


export default rootReducer