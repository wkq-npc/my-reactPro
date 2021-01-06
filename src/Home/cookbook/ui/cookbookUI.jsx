import React from 'react'
import { Container } from "./Stylecookbook"

import prototype from "prop-types"
import memoize from "memoize-one"

//轮播
import Swiper from "./Swiper"
//搜索框
import Search from "./Search"
//热门分类
import Hotcatgory from "./hotcatgory"
//精品菜系
import Classicfood from "./classicfood"
 const cookbookUI=(props)=> {
     //过滤
     const swiper=memoize((list)=>{
        //  console.log(list)
         return list.slice(0,5)
     })
     //存储过滤好的swiper
      const filterSwiper=swiper(props.list)

    return (
            <Container>
                <p className="headertitle">没事大全</p>
                {/* 轮播图 */}
                <Swiper  list={filterSwiper} ></Swiper>
                {/* 搜索框 */}
                <Search ></Search>
                {/* 热门分类 */}
                <Hotcatgory></Hotcatgory>
                {/* 精品菜系 */}
                <Classicfood ></Classicfood>
            </Container>
    )
}
cookbookUI.prototype={
    list:prototype.array
}


export default cookbookUI