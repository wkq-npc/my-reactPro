import React from 'react'
import {NavBar} from "antd-mobile"
import {NavBarstyle} from "./Mapstyle"
export default function Map() {
    return (
        <div>
<NavBarstyle>
     <NavBar>美食地图</NavBar>
</NavBarstyle>
           
              <iframe 
              frameBorder="0"
                style={{width:'100%',height:'100%'}}
                src="/map.html"
                 title="iframe"
                 ></iframe>
        </div>
    )
}
