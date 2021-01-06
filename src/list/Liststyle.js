import styled from "styled-components";
const ListNav=styled.div`
    .am-navbar-light {
    background-color: orange;
    color: white;
    .am-navbar-title{
     color: white;
    }
}
`
const ListStyle=styled.div`
li{
    display:flex;
    padding:10px;
    background-color:white;
    img{
        margin-right:15px;
    }
    p{
        margin:8px 0;
        font-size:12px;
    }
}
`


export {ListNav,ListStyle}