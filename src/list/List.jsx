import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { NavBar, Icon } from "antd-mobile";
import { ListNav, ListStyle } from "./Liststyle"
//装饰器withRouter 的作用是获取到props，含有路由信息
@withRouter
@connect(
    (state)=>{
        console.log(state)
        return {list:state.cookbook.list}
    }
)

class List extends Component {

   /*  static getDerivedStateFromProps(nextProps, preState) {
        console.log(nextProps, preState)
    } */

    handelClickLeft = () => {
        let { history } = this.props
        history.goBack()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <ListNav>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={this.handelClickLeft}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        ]}
                    >
                        {this.props.location.state.val}
                    </NavBar></ListNav>
                <ListStyle>
                    <ul>
                        {
                            this.props.list.map((el,index)=>{
                                return (
                                   <li key={index}>
                            <div>
                                <img src={el.img} width="115" height="75" alt="" />
                            </div>
                            <div>
                                <h2>{el.name}</h2>
                                <p>{el.burdens}</p>
                                <p>{el.all_click}浏览 &nbsp;{el.favorites}收藏</p>
                            </div>
                        </li> 
                                )
                            })
                        }
                        
                    </ul>
                    </ListStyle>
            </div>
        );
    }
}

export default List;