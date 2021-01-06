export const CHANGESWITCH ='Home/changswitch'

const changeSwitchstate=(val)=>{
    return {
        type:CHANGESWITCH,
        checked:val
    }
}
export default {changeSwitchstate} 