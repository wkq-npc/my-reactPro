import { Input } from 'zent';
import React from "react"
class EventTest extends React.Component {
  state = {
    value: '',
    search: '',
  };

  onSearchChange = e => {
    this.setState({
      search: e.target.value,
    });
  };
  //点击搜索按钮
  oinputfun=()=>{
      if(this.state.search){
         console.log(this.state.search) 
      }
        return ;
  }
  render() {
    return (
      <div  className="searchbox">
        <Input icon="search"  placeholder="随便来点 , 比如烧白" onIconClick={this.oinputfun} onChange={this.onSearchChange} value={this.state.search} showClear />
      </div>
    );
  }
}
export default EventTest