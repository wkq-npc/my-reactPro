import {CHANGESWITCH} from "./actionType"
const defaultState={
    checked:JSON.parse(localStorage.getItem("checked")) 
}
const reducer=(state=defaultState,action)=>{
    switch (action.type){
        case CHANGESWITCH:
            return {
                checked:action.checked
            }
        default :
        return state
    }
}
export default reducer