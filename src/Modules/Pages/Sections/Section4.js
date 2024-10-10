import React from 'react';
import Partner1 from '../../../Image/Partner1.png'
import Partner2 from '../../../Image/Partner2.png'
import Partner3 from '../../../Image/Partner3.png'

const Section4 = () => {
    return (
            <div className='contentSection4'>
                <div className='Main'>
                <span className={'Left H3'}>Наши партнеры по монетизации</span>
                <div className='Partners'>
                    <img className='P1' src={Partner2}alt="" />
                    <img className='P2' src={Partner3}alt="" />
                    <img className='P3' src={Partner1}alt="" />
                </div>
                </div>
            </div>
    );
}

export default Section4;
