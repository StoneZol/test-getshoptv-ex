import React from 'react';
import MenuItem from './Menu-item';
import {Close , Logo} from '../Icons/ICONS';

const Menu = ({props={}}) => {
    return (
        <div className='Menu'>
            <div className='MenuItemBox'>
                <MenuItem props={{name:'Преимущества'}}/>
                <MenuItem props={{name:'Как мы работаем'}}/>
            </div>
            <div className='CloseBox'>
                <Logo/>
                <Close/>
                
            </div>
        </div>
    );
}

export default Menu;
