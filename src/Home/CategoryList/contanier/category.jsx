import React, { Component } from 'react';
import { Category } from "../ui/stylecategory"
import Search from "@s/Home/cookbook/ui/Search"
import Menu from "../ui/Menu"
class MenuList extends Component {
    state = {
        ischeck: 0,
        type:"category"
    }
    handelClick = (index) => {
        return () => {
            this.setState({
                ischeck: index,
                type:index === 0?"category":"material"
            })
        }
    }
    render() {
        return (
            <div>
                <Category>
                    <nav>
                        <ul>
                            <li className={this.state.ischeck === 0 ? 'active' : ''}
                                onClick={this.handelClick(0)}
                            >分类</li>
                            <li className={this.state.ischeck === 1 ? 'active' : ''}
                                onClick={this.handelClick(1)}
                            >食材</li>
                            <li style={{ left: this.state.ischeck === 0 ? '0px' : "75px" }} className="slide"></li></ul>
                    </nav>
                    <Search ></Search>
                    <Menu 
                    type={this.state.type}
                    
                    ></Menu>
                </Category>
            </div>
        );
    }
}

export default MenuList;