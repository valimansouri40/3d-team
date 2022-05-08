import React from 'react';
import  './navigationItems.css';
import {NavLink} from 'react-router-dom';


const navigationitem = (props)=>{
    const {label , img , link, setpath} =props;
        const path = window.location.pathname;
            return(
        <div className='item-block'>
           {label? <label className='item-label'>
                {label}
            </label>:null}
            <li className={link === path?"item-li-active":"item-li"} 
            onClick={()=>setpath(link)}>
                <img src={img} width="20px" height="20px" />
                <NavLink to={link} className="item-navlink">
                    {props.children}</NavLink>
            </li>
        </div>
    )
};


export default navigationitem;