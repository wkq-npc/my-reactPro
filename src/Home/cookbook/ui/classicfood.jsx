import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
@withRouter
 class ClassicFood extends Component {
state={
    cookbookList:[]
}
componentWillMount(){
    this.$http("/api/list").then((ret) => {
    this.setState({
        cookbookList:ret.data
    })
    })
}
classic_Detail=(val)=>{
    return ()=>{
       let {history} =this.props 
         history.push({pathname:`/detail/${val.id}`,state:val})
    }
}
    render() {
        return (
            <div>
                <h3 style={{ background: 'white' }}>精品好菜</h3>
                <div className="classicbox">
                    {
                        this.state.cookbookList.map((v, k) => {
                            return (<div className="classicItem" onClick={this.classic_Detail(v)} key={k}>
                                <img src={v.img} alt=""/>
                                <div className="classic_content">
                                    <h3>{v.name}</h3>
                                    <p>{v.all_click}浏览&nbsp;{v.favorites}</p>
                                </div>
                            </div>)
                        })
                    }

                </div>
            </div>
        );
    }
}
export default ClassicFood