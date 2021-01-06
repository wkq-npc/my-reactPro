import React, { Component } from 'react';
import {connect} from "react-redux"


import { Switch, NavBar } from "antd-mobile"
import {Morestyle,NavBarstyle} from "./MoreStyle"

import { actionCreater } from "@s/Home/";

@connect((state)=>{
    return {checked:state.home.checked}
},

(dispatch)=>({
    handelChange(val){
        dispatch(actionCreater.changeSwitchstate(val))
    //存储checked的状态
    localStorage.setItem("checked",val)
    }
})
)
class More extends Component {
    render() {
        return (
            <div>
                < NavBarstyle>
                <NavBar
                    mode="light"
                >更多</NavBar>
                </NavBarstyle>
                
                <span>显示地图:</span>
                <Morestyle>
                    <Switch
                    checked={this.props.checked}

                    onChange={
                        this.props.handelChange
                    }
                ></Switch>
                </Morestyle>
                
            </div>
        );
    }
}

export default More;