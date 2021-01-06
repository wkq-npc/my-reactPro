import React from "react"
import { connect } from "react-redux";
import { TabBar } from 'antd-mobile';
//美食大全
import Cookbook from "./cookbook/cantanier/cookbook"
//更多
import More from "./more/More"
//分类
import Category from "./CategoryList/contanier/category"
//地图
import Map from "./Map/contanier/Map"

//底部导航栏图标
import Cookbook1 from "@assets/images/cookbook.png"
import Cookbook2 from "@assets/images/cookbook-active.png"
import CatgoryImg1 from "@assets/images/menu.png"
import CatgoryImg2 from "@assets/images/menu-active.png"
import MapImg1 from "@assets/images/location.png";
import MapImg2 from "@assets/images/location-active.png";
import More1 from "@assets/images/more.png";
import More2 from "@assets/images/more-active.png";
@connect(
  (state)=>({
    checked:state.home.checked
  })
)
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'mainpage',
      hidden: false,
      fullScreen: true,
    };
  }
  render() {
    const TabBarItem=[ <TabBar.Item
      title="美食大全"
      key="Life"
      icon={<div style={{
        width: '22px',
        height: '22px',
        background: `url(${Cookbook1}) center center /  21px 21px no-repeat` }}
      />
      }
      selectedIcon={<div style={{
        width: '22px',
        height: '22px',
        background: `url(${Cookbook2}) center center /  21px 21px no-repeat` }}
      />
      }
      selected={this.state.selectedTab === 'mainpage'}
      // badge={1}
      onPress={() => {
        this.setState({
          selectedTab: 'mainpage',
        });
      }}
      data-seed="logId"
    >
      < Cookbook></Cookbook>
    </TabBar.Item>,
    <TabBar.Item
      icon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${CatgoryImg1}) center center /  21px 21px no-repeat` }}
        />
      }
      selectedIcon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${CatgoryImg2}) center center /  21px 21px no-repeat` }}
        />
      }
      title="分类"
      key="Koubei"
      // badge={'new'}
      selected={this.state.selectedTab === 'koubei'}
      onPress={() => {
        this.setState({
          selectedTab: 'koubei',
        });
      }}
      data-seed="logId1"
    >
     <Category> </Category>
    </TabBar.Item>,
  
<TabBar.Item
      icon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${MapImg1}) center center /  21px 21px no-repeat`}}
        />
      }
      selectedIcon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${MapImg2}) center center /  21px 21px no-repeat` }}
        />
      }
      title="美食地图"
      key="Friend"
      // dot
      selected={this.state.selectedTab === 'connection'}
      onPress={() => {
        this.setState({
          selectedTab: "connection",
        });
      }}
    >
   <Map></Map>
    </TabBar.Item>,
   
   <TabBar.Item
      icon={{ uri: `${More1}` }}
      selectedIcon={{ uri: `${More2}` }}
      title="更多"
      key="my"
      selected={this.state.selectedTab === 'mycenter'}
      onPress={() => {
        this.setState({
          selectedTab: 'mycenter',
        });
      }}
    >
      <More></More>
    </TabBar.Item>]
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          prerenderingSiblingsNumber={Infinity}
        >

         {
         this.props.checked?
         TabBarItem.map(el=>el):
         TabBarItem.filter((v,i)=>{
          return i!==2
         })}
         
        </TabBar>
      </div>
    );
  }
}
export default Home