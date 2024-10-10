import React from 'react';
import Image from 'next/image';
import Partner1 from '/public/Image/Partner1.png'
import Partner2 from '/public/Image/Partner2.png'
import Partner3 from '/public/Image/Partner3.png'

const Section4 = () => {
    return (
            <div className='contentSection4'>
                <div className='Main'>
                <span className={'Left H3'}>Наши партнеры по монетизации</span>
                <div className='Partners'>
                    <Image className='P2' src={Partner2}alt="" />
                    <Image className='P3' src={Partner3}alt="" />
                    <Image className='P1' src={Partner1}alt="" />
                </div>
                </div>
            </div>
    );
}

export default Section4;
