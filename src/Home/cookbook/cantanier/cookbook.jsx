import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadDataASync } from '../redux/actionCreate';
import  Cookbook from "../ui/cookbookUI";

@connect(
    (state)=>{
        // console.log(state)
     return {
        list: state.cookbook.list
     }
    },
    (dispatch)=>({
        loadData() {
            console.log(dispatch)
            dispatch(loadDataASync())
        }
    })
)

class CookbookMain extends Component {
   static propsTypes={}

    componentDidMount() {
            // this.$http("/api/detail")
            this.props.loadData()
    }
    componentDidUpdate(){
        // console.log(this.props.list)
    }


    render() {
        return (
            <Cookbook
            list={this.props.list}
            ></Cookbook>
        );
    }
}

export default CookbookMain;