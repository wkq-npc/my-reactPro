import { LOADDATA } from "./actionType";
import {get} from "../../../utils/http"

const loadDataSync=(list)=>{
    return {
        type:LOADDATA,
        list
    }
}
const loadDataASync=()=>{
    return async (dispatch)=>{
      let ret =  await get({
            url:"/api/list"
        })
        // console.log(ret)
        dispatch(loadDataSync(ret.data))
    }
}
export {
    loadDataSync,
    loadDataASync,
}