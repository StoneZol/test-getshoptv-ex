import React from 'react';
import MenuItem from './Menu-item';
import {Close, Logo} from '../Icons/ICONS';

const Menu = ({
    activeSection = {},
    scrollTo = {},
    closeUp = {},
    visible ={},
}) => {
    return (
        <div className={`MenuBox  ${visible? 'active': ''}`}>
            <div className='ShadowClose' onClick={closeUp}></div>
            <div className='Menu'>
                <div className='MenuItemBox'>
                    <MenuItem
                        props={{
                            name: 'Преимущества',
                            active: activeSection === 'advantages',
                            func: () => scrollTo('advantages')
                        }}/>
                    <MenuItem
                        props={{
                            name: 'Как работаем',
                            active: activeSection === 'howItWorks',
                            func: () => scrollTo('howItWorks')
                        }}/>
                </div>
                <div className='CloseBox'>
                    <Logo/>
                    <Close
                        props={{
                            click: closeUp
                        }}/>

                </div>
            </div>
        </div>
    );
}

export default Menu;
