import style from "styled-components"
const Category = style.div `
display:flex;
height:100%;
flex-direction:column;
    nav{
        height:50px;
        background-color:orange;
        display:flex;
        justify-content: center;
        align-items: center;
        ul{
            height:40px;
            width:150px;
            display:flex;
            border-radius:20px;
            border:1px solid white;
            color:white;position:relative;
            li{
                
                flex:1;
                line-height: 40px;
                text-align: center;
                &.active{
                    color:orange;
                    z-index:3;
                }
                &.slide{
                    position:absolute;
                    top:0;
                    left:0;
                    background-color:white;
                    height:40px;
                    width:75px;
                    z-index:2;
                border-radius: 20px;
                }
            }
        }
    }
`
const MenuStyle=style.div`
flex:1;
display:flex;   
overflow: hidden;

aside{
    width:80px;
    overflow-y: scroll;
    ul{
        li{
            height:50px;
            text-align:center;
            line-height:50px;
            &.active{
                background-color:#fff;
            }
            span{
                display:inline-block;
                height:100%;
                &.active{
                    background-color:#fff;
                    color:orange;
                    border-bottom:2px solid orange;
                }
            }
        }
    }
}

section{
    overflow-y: scroll;
    flex:1;
    background-color:white;
    ul{
        display:flex;
        flex-wrap:wrap;
        justify-content: space-between;
        li{
            text-align: center; 
            padding:15px;
        }
    }


}







`

export {
    Category,
    MenuStyle
}