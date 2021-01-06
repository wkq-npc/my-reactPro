import React from 'react';
import { withRouter } from "react-router-dom";

import { Grid } from 'antd-mobile';


@withRouter
 class  HotCate extends React.Component {
  state = {
    pages: []
  }
  componentDidMount() {
    this.$http('/api/hotcaat').then((ret) => {
      ret.push({ id: 12, title: "更多>>", img: ret[0].img })
      this.setState(
        {
          pages: ret
        })
    })
  }
  hotcat_Detail = (val) => {
    return () => {
      let {history} =this.props
      history.push('/list',{val})
      console.log(val)
    }
  }
  render() {

    return (
      <div>
        <h3 style={{ background: 'white' }}>热门分类</h3>

        <Grid data={this.state.pages}
          columnNum={4}
          renderItem={(dataItem, index) => (
            <div key={index} onClick={this.hotcat_Detail(dataItem.title)} >
              <img src={dataItem.img} style={{ width: '75px', height: '75px' }} alt="" />
              <div style={{ color: '#888', fontSize: '14px' }}>
                <span>{dataItem.title}</span>
              </div>
            </div>
          )}
        />

      </div>
    );
  }
}
export default HotCate