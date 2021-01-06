import { LOADDATA } from "./actionType";
const defaultState = {
    list: []
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOADDATA:
            return {
                list: action.list
            };
        default:
            return state
    }
}
export default reducer