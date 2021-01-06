import style from "styled-components" 
const Container=style.div`
.headertitle{
  background: orange;
  text-align: center;
  color: white;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
}
.SwiperBox{
  height: 14rem;
  img{
    width:100%;
    height:100%;
  }
}
.searchbox{
  margin:5px 10px;
}
.gridbox{
  display: grid;
  grid-template-columns: 25% 25% 25% 25%; 
  margin-bottom: 5px;
  background-color: white;
  justify-items:center;
  align-items: center;
} 
.catitem{
padding:20px;
font-size:0.7rem;
  }
.classicbox{
  display: grid;
  grid-template-columns: 50% 50%; 
  justify-items:center;
  align-items: center;
}
.classicItem{
  text-align: center;
  margin:5px;
  box-sizing:border-box;
  border:1px solid;
}
.classicItem>img{
  width:100%;
  height:100%;
}
.classic_content{
  text-align: center;
}
.classic_content>h3{
  margin: 10px 0;
}
.classic_content>p{
  margin: 10px 0;
}
.am-grid .am-flexbox .am-flexbox-item .am-grid-item-content{
  padding:0px;
  
}

`
export {Container}