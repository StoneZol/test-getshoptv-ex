import React from 'react';
import { Logo } from '../Icons/ICONS';
import MenuItem from '../Menu/Menu-item';

const Header = ({props={}}) => {
    return (
        <div className='Header'>
            <Logo/>
            <div className='Header-menu'>
                <MenuItem props={{name:'Преимущества'}}/>   
                <MenuItem props={{name:'Как работаем'}}/>
            </div>
        </div>
    );
}

export default Header;
