import React from 'react';
import Header from '../Components/Header/Header';
import ButtonOrange from '../Components/Button_orange/ButtonOrange';
import ToggleButton from '../Components/Toggle_button/ToggleButton';
import ToggleFrame from '../Vidgets/ToggleFrame';
import Menu from '../Components/Menu/Menu';

import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import Section4 from './Sections/Section4';
import Section5 from './Sections/Section5';
import Section6 from './Sections/Section6';

import Back1 from '../../Image/Back1.png'

const MainPage = () => {
    return (
        <div className='MainPageBox'>
            <div className='BG'>
                <img src={Back1} alt=""/>
            </div>
            <div className={'BG-rect one'}></div>
            <div className={'BG-rect two'}></div>
            <div className='MainPage'>

                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
                <Section5/>
                <Section6/>
            </div>
        </div>
    );
}

export default MainPage;
