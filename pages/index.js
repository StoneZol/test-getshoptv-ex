import React from 'react';
import Image from 'next/image';

import Section1 from '../src/Modules/Pages/Sections/Section1';
import Section2 from '../src/Modules/Pages/Sections/Section2';
import Section3 from '../src/Modules/Pages/Sections/Section3';
import Section4 from '../src/Modules/Pages/Sections/Section4';
import Section5 from '../src/Modules/Pages/Sections/Section5';
import Section6 from '../src/Modules/Pages/Sections/Section6';
import Back1 from '/public/Image/Back1.png'

const Index = () => {
    return (
        <div className='MainPageBox'>
            <div className='BG'>
            <Image 
                    src={Back1} // Указываем путь к изображению
                    alt="" />
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

export default Index;