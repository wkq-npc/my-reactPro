import { Swiper } from 'zent';
import React from "react"
import { Carousel} from 'antd-mobile';

const Swiper1=(props)=>{
  return(
    <Carousel
    autoplay={true}
    infinite
    >
{
   props.list.length>0 && props.list.map(value=>{
    return (
      <img src={value.img} alt="" key={value.id}/>
    )
  })
}



    </Carousel>
  )
}












class Simple extends React.Component {

  state = {
    current: null,
    prev: null,
    swiperList:[]
  }

  handleChange = (current, prev) => {
    this.setState({ current, prev });
  }
componentWillMount(){
  this.$http("http://127.0.0.1:80/Mix/api/docs/cookbook/swiperImg.php").then((ret) => {
      //更改swiper的数组
        this.setState(
          {
            swiperList:ret.data
          }
        )
    })
}
handelClick=(val)=>{
  return ()=>{
    console.log(val)
  }
}
  render() {
    
    return (
      <div>
        <Swiper
          className="swiper-demo-simple SwiperBox"
          dotsColor="red"
          dotsSize="small"
          autoplay
          autoplayInterval="2000"
          onChange={this.handleChange}
        >
          {
         this.state.swiperList && this.state.swiperList.map((item, index) => {
              return <div onClick={this.handelClick(item.id)} className="swiper-demo-simple-h" key={index}>
                  <img src={item.img} alt=""/>
                  </div>;
            })
          }
        </Swiper>
      </div>
    );
  }
}
export default Simple