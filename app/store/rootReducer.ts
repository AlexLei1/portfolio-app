import { combineReducers } from "@reduxjs/toolkit"
import { reducer as burgerReducer } from "./burger/burger.slice"
import { reducer as schoolReducer} from "./school/school.slice"



export const reducers =  combineReducers({
	burger: burgerReducer,
	school: schoolReducer
})

