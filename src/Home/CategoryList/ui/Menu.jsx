import React, { Component } from "react";
import MenuList from "@s/components/menu/MenuList";
import PropTypes from "prop-types";
class Menu extends Component {
  static propTypes={
    type:PropTypes.string
  } 
  state = {
    cate: null,
    type:  this.props.type,
    currentCate: this.props.type == "category" ? "热门" : "肉类",
  };
  
    async componentDidMount() {
    let ret=await this.$http("/api/category")
    this.setState({
      cate: ret.data,
    });
  }
  //nextProp是父组件传过来的值即当前组件WillMount前(render前)的props，preState当前state的值
   static getDerivedStateFromProps(nextProps, preState) {
 /*     console.log(nextProps)
     console.log(preState) */

    if (nextProps.type === preState.type) {
      //不对当前state进行任何操作
        return null;
    } else {
      return {
        currentCate: nextProps.type === "category" ? "热门" : "肉类",
        type:nextProps.type
    };
    }
  } 

  handelAsideClick = (val) => {
    return () => {
      console.log(val);
      this.setState({
        currentCate: val,
      });
    };
  };
  handelSectionClick = (val) => {
    return () => {
      console.log(val);
    };
  };  
  render() {
  //console.log(this.state.cate && this.state.cate[this.props.type])
    return (
      <MenuList
        cate={this.state.cate && this.state.cate[this.props.type]}
        curCate={this.state.currentCate}
        onAsideClick={this.handelAsideClick}
        onSectionClick={this.handelSectionClick}
      ></MenuList>
    );
  }
}

export default Menu;
