import React from 'react';
import {MenuStyle} from "../../Home/CategoryList/ui/stylecategory"
import PropTypes from "prop-types"
const Menu=(props)=>{
       let {cate,curCate}=props
        return (
            <MenuStyle>
                <aside>
                    <ul>
                           {cate && Object.keys(cate).map((el)=>{
                           
                               return  <li 
                                className={curCate===el?"active":''}

                                 key={el}
                                 onClick={props.onAsideClick(el)} > 
                                 <span
                                className={curCate===el?"active":''}
                                 >{el}</span>
                                  </li>
                            }) 
                            }
                    </ul>
                </aside>
                <section>
                    <ul>
                    { cate && cate[curCate].map((el)=>{
                                return  <li 
                                 key={el}
                                 onClick={props.onSectionClick(el)}
                                >   
                                 <span>{el}</span>
                                  </li>
                            }) 
                            } 
                    </ul>
                </section>
            </MenuStyle>
        );
}
 Menu.propTypes={
    cate:PropTypes.object,
    curCate:PropTypes.string
} 
export default Menu;