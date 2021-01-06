import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { NavBar,Icon} from "antd-mobile";
@withRouter

class detail extends Component {


    handelClickLeft = () => {
        let { history } = this.props
        history.goBack()
    }

    render() {
        return (
            <div>
                <div>
                     <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={this.handelClickLeft} 
                    >
                       {this.props.location.state.name} 
                    </NavBar>
                </div>
               <div>
                   <img src={this.props.location.state.img} width="100" height="75" alt=""/>
                   <p>{this.props.location.state.name}</p>
                   <p>{this.props.location.state.id}</p>
               </div>
            </div>
        );
    }
}

export default detail;